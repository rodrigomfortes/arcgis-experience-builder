/** @jsx jsx */
import {
  React, Immutable, LinkType, type RepeatedDataSource, ExpressionResolverComponent, ExpressionResolverErrorCode, type Size, lodash, getAppStore, type FeatureLayerDataSource, type LinkTarget,
  css, jsx, type AllWidgetProps, type DataRecord, ReactResizeDetector, type IMExpression, ExpressionPartType, type LinkResult, type AttachmentInfo, type IMUrlParameters, type IMState,
  type BrowserSizeMode
} from 'jimu-core'
import { Link, ImageWithParam, type ImageParam, ImageFillMode, CropType } from 'jimu-ui'
import { utils as layoutUtils } from 'jimu-layouts/layout-runtime'
import { type IMConfig, ImgSourceType, DynamicUrlType } from '../config'
import { AttachmentComponent } from './components/attachment-component'
import { SymbolComponent } from './components/symbol-component'
import { RecordComponent } from './components/record-component'
import { ImageGallery } from './components/image-gallery'
import { ImageWidgetViewer } from './components/image-widget-viewer'

interface State {
  record?: DataRecord
  imageWidth?: number
  imageHeight?: number
  widgetWidth?: number
  widgetHeight?: number
  cropWidgetWidth?: number
  cropWidgetHeight?: number

  toolTip: string
  altText: string
  src: string
  linkUrl: string
  attachmentInfos: AttachmentInfo[]
  symbolElement: HTMLElement

  srcExpression: IMExpression
  altTextExpression: IMExpression
  toolTipExpression: IMExpression
  linkUrlExpression: IMExpression
}

interface ExtraProps {
  useAspectRatio: boolean
  aspectRatio: number | string
  queryObject: IMUrlParameters
  browserSizeMode: BrowserSizeMode
}

const imageWidgetSizeMap: { [key: string]: Size } = {}

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig> & ExtraProps, State> {
  dataSource?: FeatureLayerDataSource
  __unmount = false
  // isAutoHeight?: boolean = false
  debounceOnResize: ({ width, height }) => void
  widgetConRef = React.createRef<HTMLDivElement>()

  static mapExtraStateProps = (state: IMState, props: AllWidgetProps<IMConfig>): ExtraProps => {
    const appConfig = state.appConfig
    const { layouts } = appConfig
    const { layoutId, layoutItemId } = props
    const layout = layouts[layoutId]
    const layoutItemSetting = layout?.content?.[layoutItemId]?.setting || {}
    const useAspectRatio = layoutItemSetting.heightMode === 'ratio' && layoutItemSetting.aspectRatio != null
    return {
      useAspectRatio,
      aspectRatio: layoutItemSetting.aspectRatio,
      queryObject: state.queryObject,
      browserSizeMode: state.browserSizeMode
    }
  }

  constructor (props) {
    super(props)

    // const ua = navigator.userAgent.toLowerCase()
    // if (!ua.includes('chrom') && !ua.includes('firefox') && ua.includes('safari')) {
    //   this.isAutoHeight = true
    // }

    this.debounceOnResize = lodash.debounce(({ width, height }) => { this.onResize(width, height) }, 200)

    this.state = {
      record: null,
      toolTip: this.props?.config?.functionConfig?.toolTip || '',
      altText: this.props?.config?.functionConfig?.altText || '',
      src: this.props?.config?.functionConfig?.imageParam?.url || '',
      linkUrl: this.props?.config?.functionConfig?.linkParam?.value || '',
      srcExpression: this.props.useDataSourcesEnabled && this.getSrcExpression(),
      altTextExpression: this.props.useDataSourcesEnabled && this.getAltTextExpression(),
      toolTipExpression: this.props.useDataSourcesEnabled && this.getToolTipExpression(),
      linkUrlExpression: this.props.useDataSourcesEnabled && this.getLinkUrlExpression(),
      attachmentInfos: [],
      symbolElement: null,
      widgetWidth: imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId] && imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId].width,
      widgetHeight: imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId] && imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId].height,
      cropWidgetWidth: null,
      cropWidgetHeight: null
    }
  }

  getStyle () {
    const { aspectRatio, useAspectRatio } = this.props
    const symbolScale = this.props.config.functionConfig.symbolScale
      ? this.props.config.functionConfig.symbolScale
      : 1
    const cropParam = this.props.config.functionConfig.imageParam?.cropParam
    const cropPixel = cropParam?.cropPixel
    const cropType = cropParam?.cropType
    const noCrop = !cropPixel || !cropType || cropType === CropType.Real

    return css`
      ${noCrop && useAspectRatio && `img {
        aspect-ratio: ${layoutUtils.parseAspectRatio(aspectRatio)};
      }`}
      .widget-image-link {
        display: block;
        padding: 0;
        border: none;
        width: 100%;
        height: 100%;
        outline-offset: -2px !important;
        border-radius: unset;
      }
      .image-symbol {
        display: grid;
        place-items: center;
        svg, img {
          transform: scale(${symbolScale});
        }
      }
    `
  }

  componentDidMount () {
    this.__unmount = false
  }

  componentDidUpdate (prevProps: AllWidgetProps<IMConfig>, prevState: State) {
    if (!this.props.useDataSourcesEnabled &&
      (
        this.props.config !== prevProps.config || prevProps.useDataSourcesEnabled
      )
    ) {
      this.setState({
        src: this.props?.config?.functionConfig?.imageParam?.url || '',
        toolTip: this.props?.config?.functionConfig?.toolTip,
        altText: this.props?.config?.functionConfig?.altText,
        linkUrl: this.props?.config?.functionConfig?.linkParam?.value
      })
    }

    if (this.props.useDataSourcesEnabled &&
      (
        this.props.config !== prevProps.config || !prevProps.useDataSourcesEnabled
      )
    ) {
      if (this.checkIsStaticSrc(this.props.config.functionConfig.imgSourceType)) {
        this.setState({
          src: this.props?.config?.functionConfig?.imageParam?.url || '',
          toolTipExpression: this.getToolTipExpression(),
          altTextExpression: this.getAltTextExpression(),
          linkUrlExpression: this.getLinkUrlExpression()
        })
      } else if ((this.props.config.functionConfig.imgSourceType === ImgSourceType.ByDynamicUrl &&
        (!this.props.config.functionConfig.dynamicUrlType || this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Expression))) {
        this.setState({
          record: null,
          srcExpression: this.getSrcExpression(),
          toolTipExpression: this.getToolTipExpression(),
          altTextExpression: this.getAltTextExpression(),
          linkUrlExpression: this.getLinkUrlExpression()
        })
      } else {
        this.setState({
          src: '',
          toolTipExpression: this.getToolTipExpression(),
          altTextExpression: this.getAltTextExpression(),
          linkUrlExpression: this.getLinkUrlExpression()
        })
      }
    }
  }

  componentWillUnmount () {
    this.__unmount = true

    const widgetJson = getAppStore().getState().appConfig.widgets[this.props.id]
    if (!widgetJson) {
      delete imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId]
    }
  }

  checkIsStaticSrc = (imgSourceType: ImgSourceType): boolean => {
    return imgSourceType === ImgSourceType.ByUpload || imgSourceType === ImgSourceType.ByStaticUrl || !imgSourceType
  }

  getSrcExpression = (): IMExpression => {
    return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.srcExpression) ||
      Immutable({
        name: '',
        parts: [{
          type: ExpressionPartType.String,
          exp: `"${this.props.config &&
          this.props.config.functionConfig && this.props.config.functionConfig.imageParam && this.props.config.functionConfig.imageParam.url}"`
        }]
      })
  }

  getAltTextExpression = (): IMExpression => {
    return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.altTextExpression) ||
      Immutable({
        name: '',
        parts: [{
          type: ExpressionPartType.String,
          exp: `"${this.props.config &&
          this.props.config.functionConfig && this.props.config.functionConfig.altText}"`
        }]
      })
  }

  getToolTipExpression = (): IMExpression => {
    return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTipExpression) ||
    Immutable({
      name: '',
      parts: [{
        type: ExpressionPartType.String,
        exp: `"${this.props.config &&
        this.props.config.functionConfig && this.props.config.functionConfig.toolTip}"`
      }]
    })
  }

  getLinkUrlExpression = (): IMExpression => {
    const expression = this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.linkParam &&
      this.props.config.functionConfig.linkParam && this.props.config.functionConfig.linkParam.expression

    return expression || null
  }

  onSrcExpResolveChange = result => {
    if (result.isSuccessful) {
      this.setState({ src: (result.value === 'null' ? '' : result.value) })
    } else {
      let res: string = ''
      const errorCode = result.value
      if (errorCode === ExpressionResolverErrorCode.Failed) {
        res = this.state.srcExpression && this.state.srcExpression.name
      }

      this.setState({ src: res })
    }
  }

  onToolTipExpResolveChange = result => {
    if (result.isSuccessful) {
      this.setState({ toolTip: (result.value === 'null' ? '' : result.value) })
    } else {
      let res: string = ''
      const errorCode = result.value
      if (errorCode === ExpressionResolverErrorCode.Failed) {
        res = this.state.srcExpression && this.state.srcExpression.name
      }

      this.setState({ toolTip: res })
    }
  }

  onAltTextExpResolveChange = result => {
    if (result.isSuccessful) {
      this.setState({ altText: (result.value === 'null' ? '' : result.value) })
    } else {
      let res: string = ''
      const errorCode = result.value
      if (errorCode === ExpressionResolverErrorCode.Failed) {
        res = this.state.srcExpression && this.state.srcExpression.name
      }

      this.setState({ altText: res })
    }
  }

  onLinkUrlExpResolveChange = result => {
    if (result.isSuccessful) {
      this.setState({ linkUrl: result.value })
    } else {
      let res: string = ''
      const errorCode = result.value
      if (errorCode === ExpressionResolverErrorCode.Failed) {
        res = this.state.srcExpression && this.state.srcExpression.name
      }

      this.setState({ linkUrl: res })
    }
  }

  onAttachmentInfosChange = (attachmentInfos: AttachmentInfo[]) => {
    this.setState({
      attachmentInfos: attachmentInfos
    })
  }

  unmountAttachmentInfosChange = () => {
    this.setState({
      attachmentInfos: []
    })
  }

  onSymbolElementChange = (symbolElement: HTMLElement) => {
    const svgOrImg = ['IMG', 'SVG'].includes(symbolElement?.tagName) ? symbolElement : symbolElement?.querySelector?.('svg,img')
    if (svgOrImg) {
      const { altText } = this.state
      svgOrImg.setAttribute('alt', altText)
    }
    this.setState({
      symbolElement: symbolElement
    })
  }

  unmountSymbolElementChange = () => {
    this.setState({
      symbolElement: null
    })
  }

  getRecordsFromRepeatedDataSource = (): { [dataSourceId: string]: DataRecord } => {
    const dataSourceId = this.props.useDataSources && this.props.useDataSources[0] && this.props.useDataSources[0].dataSourceId

    if (dataSourceId && this.props.repeatedDataSource) {
      if (dataSourceId === (this.props.repeatedDataSource as RepeatedDataSource).dataSourceId) {
        const record = (this.props.repeatedDataSource as RepeatedDataSource).record

        return {
          [dataSourceId]: record
        }
      }
    }

    return null
  }

  onClick = (event: MouseEvent | TouchEvent) => {
    const linkParam = this.props.config.functionConfig.linkParam
    if (linkParam && linkParam.value && linkParam.linkType !== LinkType.None) {
      (event as any).exbEventType = 'linkClick'
    }
  }

  getWidgetWidth = () => {
    return this.state.widgetWidth
  }

  getWidgetHeight = () => {
    return this.state.widgetHeight
  }

  onResize = (width, height) => {
    if (this.__unmount) {
      return
    }

    if (!width && !height) {
      return
    }

    // eslint-disable-next-line no-empty
    if (width === this.state.widgetWidth && height === this.state.widgetHeight) {

    } else {
      imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId] = {
        width: width,
        height: height
      }

      this.setState({
        widgetWidth: width,
        widgetHeight: height
      })
    }
  }

  onCropWidgetResize = ({ width, height }) => {
    if (this.__unmount) {
      return
    }

    if (!width && !height) {
      return
    }

    this.setState({
      cropWidgetWidth: width,
      cropWidgetHeight: height
    })
  }

  clearCropWidgetSize = () => {
    this.setState({
      cropWidgetWidth: null,
      cropWidgetHeight: null
    })
  }

  handleRecordChange = (record: DataRecord) => {
    this.setState({
      record: record,
      attachmentInfos: null
    })
  }

  render () {
    const isDataSourceUsed = this.props.useDataSourcesEnabled
    const { queryObject, browserSizeMode } = this.props
    const { toolTip, altText, src } = this.state

    let renderResult = null
    let imageContent = null

    let imageParam = this.props.config.functionConfig.imageParam ? this.props.config.functionConfig.imageParam : Immutable({})
    if (imageParam.set) {
      imageParam = imageParam.set('url', src)
    } else {
      (imageParam as any).url = src
    }

    const cropParam = imageParam && (imageParam as ImageParam).cropParam
    const isCropped = cropParam && (cropParam.cropType === CropType.Fake || cropParam.cropShape)

    let srcList = []
    const dynamicUrlType = this.props.config.functionConfig.dynamicUrlType
    if (dynamicUrlType === DynamicUrlType.Attachment) {
      if (this.state.attachmentInfos && this.state.attachmentInfos.length > 0) {
        srcList = this.state.attachmentInfos.map(a => a.url)
      } else {
        srcList = ['']
      }
    } else if (dynamicUrlType !== DynamicUrlType.Symbol) {
      srcList = [src]
    }

    imageContent = (
      <React.Fragment>
        {this.props.config.functionConfig.dynamicUrlType !== DynamicUrlType.Attachment &&
      this.props.config.functionConfig.dynamicUrlType !== DynamicUrlType.Symbol &&
        <ImageWithParam
          imageParam={imageParam as ImageParam} toolTip={toolTip} altText={altText}
          useFadein size={isCropped ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null}
          imageFillMode={this.props.config.functionConfig.imageFillMode} isAutoHeight={this.props.autoHeight} isAutoWidth={this.props.autoWidth}
          imageDisplayQualityMode={this.props.config.functionConfig.imageDisplayQualityMode}
        />}
        {this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Attachment &&
          <div className='w-100 h-100'>
            {isDataSourceUsed && <ImageGallery
              sources={this.state.attachmentInfos} imageParam={imageParam as ImageParam}
              imageFillMode={this.props.config.functionConfig.imageFillMode}
              size={isCropped ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null}
              isAutoHeight={this.props.autoHeight}
              isAutoWidth={this.props.autoWidth}
              toolTip={toolTip} altText={altText}
              altTextWithAttachmentName={this.props.config.functionConfig.altTextWithAttachmentName}
              toolTipWithAttachmentName={this.props.config.functionConfig.toolTipWithAttachmentName}
              useFadein
              intl={this.props.intl}
              browserSizeMode={browserSizeMode}
            >
            </ImageGallery>}
            {!isDataSourceUsed && <ImageWithParam
              imageParam={imageParam as ImageParam} toolTip={toolTip} altText={altText}
              useFadein size={isCropped ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null}
              imageFillMode={this.props.config.functionConfig.imageFillMode} isAutoHeight={this.props.autoHeight} isAutoWidth={this.props.autoWidth}
              imageDisplayQualityMode={this.props.config.functionConfig.imageDisplayQualityMode}
            >
            </ImageWithParam>}
          </div>}
        {
          this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Symbol &&
            <div className='w-100 h-100'>
              {(!this.state.symbolElement || !isDataSourceUsed) && <ImageWithParam
                imageParam={imageParam as ImageParam} toolTip={toolTip} altText={altText}
                useFadein size={isCropped ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null}
                imageFillMode={this.props.config.functionConfig.imageFillMode} isAutoHeight={this.props.autoHeight} isAutoWidth={this.props.autoWidth}
                imageDisplayQualityMode={this.props.config.functionConfig.imageDisplayQualityMode}
              >
              </ImageWithParam>}
              {this.state.symbolElement && isDataSourceUsed && <div className='w-100 h-100 image-symbol' title={toolTip} dangerouslySetInnerHTML={{ __html: this.state.symbolElement.outerHTML }} />}
            </div>
        }
        {(isCropped) && <ReactResizeDetector targetRef={this.widgetConRef} handleWidth handleHeight onResize={this.debounceOnResize} />}
      </React.Fragment>
    )

    let target: LinkTarget
    let linkTo: LinkResult
    const linkParam = this.props.config.functionConfig.linkParam
    if (linkParam && linkParam.linkType) {
      target = linkParam.openType
      linkTo = {
        linkType: linkParam.linkType
      }

      if (linkParam.linkType === LinkType.WebAddress) {
        linkTo.value = this.state.linkUrl
      } else {
        linkTo.value = linkParam.value
      }
    }
    if (linkTo && linkTo?.linkType !== LinkType.None) {
      renderResult = (
        <Link to={linkTo} target={target} queryObject={queryObject} className='widget-image-link' unstyled>
          {imageContent}
        </Link>
      )
    } else {
      renderResult = imageContent
    }

    if (this.props.config.functionConfig.imageFillMode !== ImageFillMode.Fit && this.props.isInlineEditing && src &&
      (!this.props.repeatedDataSource || (this.props.repeatedDataSource && (this.props.repeatedDataSource as RepeatedDataSource).recordIndex === 0))) {
      // open crop tool
      const WidgetInBuilder = this.props.builderSupportModules.widgetModules.WidgetInBuilder
      renderResult = (
        <div className='widget-image w-100 h-100' ref={this.widgetConRef} css={this.getStyle()}>
          <ReactResizeDetector targetRef={this.widgetConRef} handleWidth handleHeight onResize={this.onCropWidgetResize} />
          {renderResult}
          {this.state.cropWidgetHeight && this.state.cropWidgetWidth && <WidgetInBuilder
            widgetId={this.props.id} config={this.props.config} onUnmount={() => { this.clearCropWidgetSize() }}
            widgetWidth={this.state.cropWidgetWidth} widgetHeight={this.state.cropWidgetHeight}
          >
          </WidgetInBuilder>}
        </div>
      )
    } else {
      renderResult = (
        <div
          className='widget-image w-100 h-100' ref={this.widgetConRef} css={this.getStyle()}
          onClick={(event) => { this.onClick(event as any) }} onTouchEnd={(event) => { this.onClick(event as any) }}
        >{renderResult}
          <div style={{ display: 'none' }}>
            {
              isDataSourceUsed && this.props.config.functionConfig.imgSourceType === ImgSourceType.ByDynamicUrl &&
            (!this.props.config.functionConfig.dynamicUrlType || this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Expression) &&
              <div>
                <ExpressionResolverComponent
                  useDataSources={this.props.useDataSources} expression={this.getSrcExpression()}
                  onChange={this.onSrcExpResolveChange} widgetId={this.props.id}
                />
              </div>
            }
            {
              isDataSourceUsed && <div>
                <ExpressionResolverComponent
                  useDataSources={this.props.useDataSources} expression={this.getAltTextExpression()}
                  onChange={this.onAltTextExpResolveChange} widgetId={this.props.id}
                />
                <ExpressionResolverComponent
                  useDataSources={this.props.useDataSources} expression={this.getToolTipExpression()}
                  onChange={this.onToolTipExpResolveChange} widgetId={this.props.id}
                />
                <ExpressionResolverComponent
                  useDataSources={this.props.useDataSources} expression={this.state.linkUrlExpression}
                  onChange={this.onLinkUrlExpResolveChange} widgetId={this.props.id}
                />
              </div>
            }
            {
            // The original logic determines whether the AttachmentComponent and SymbolComponent were rendered by dynamicUrlType, this causes attachmentInfos
            // to remain unchanged when the data source changes and the type is reset to default, and the onChange event is not executed. When attachment type
            // is selected again, if the new data is null, then attachmentInfos does not change internally (null -> null), so attachmentInfos does not change.
            // Now add the method to reset the corresponding state when unmount
              isDataSourceUsed && this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Attachment &&
                <div>
                  <AttachmentComponent
                    record={this.state.record}
                    unmountAttachmentInfosChange={this.unmountAttachmentInfosChange}
                    onChange={this.onAttachmentInfosChange}
                  />
                </div>
            }
            {
              isDataSourceUsed && this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Symbol &&
                <div>
                  <SymbolComponent
                    record={this.state.record} unmountSymbolElementChange={this.unmountSymbolElementChange}
                    onChange={this.onSymbolElementChange}
                  />
                </div>
            }
            {
              isDataSourceUsed && (this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Attachment ||
              this.props.config.functionConfig.dynamicUrlType === DynamicUrlType.Symbol) &&
                <div>
                  <RecordComponent
                    widgetId={this.props.id}
                    useDataSource={this.props.config.functionConfig.useDataSourceForMainDataAndViewSelector}
                    isSelectedFromRepeatedDataSourceContext={this.props.config.functionConfig.isSelectedFromRepeatedDataSourceContext}
                    onRecordChange={this.handleRecordChange}
                  />
                </div>
            }
          </div>
          {this.props.config.functionConfig.imageViewer && srcList.length > 0 && <ImageWidgetViewer srcList={srcList} />}
        </div>
      )
    }

    return renderResult
  }
}
