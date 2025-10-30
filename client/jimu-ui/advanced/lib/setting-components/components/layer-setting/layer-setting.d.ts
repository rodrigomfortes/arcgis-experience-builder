import { React } from 'jimu-core';
import { type MultipleJimuMapConfigProps } from '../multiple-jimu-map-config';
import { type CustomizeLayerPanelProps } from './components/customize-layer-panel';
export interface LayerSettingProps extends Omit<MultipleJimuMapConfigProps, 'sidePopperContent'>, CustomizeLayerPanelProps {
}
export declare function LayerSetting(props: LayerSettingProps): React.JSX.Element;
export declare function getAllItemsInMapView(mapViewId: string, includeTables: boolean): string[];
