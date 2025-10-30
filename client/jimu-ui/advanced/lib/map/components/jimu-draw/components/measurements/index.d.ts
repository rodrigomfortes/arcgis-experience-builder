/** @jsx jsx */
import { React, jsx, type ImmutableObject } from 'jimu-core';
import { JimuSymbolType } from 'jimu-ui/advanced/map';
import type { JimuSymbol } from '../symbols';
import type { MeasurementsRuntimeInfo, MeasurementsUnitsInfo, MeasurementsPropsInfo, MDecimalPlaces } from './constraints';
import { useMeasurementsUnitsInfos } from './utils/measurements-units-infos-hooks';
export { type MeasurementsPropsInfo, type MeasurementsUnitsInfo, type MDecimalPlaces, useMeasurementsUnitsInfos };
export interface Props {
    symbol: JimuSymbol;
    jimuSymbolType: JimuSymbolType;
    measurementsRuntimeInfo: ImmutableObject<MeasurementsRuntimeInfo>;
    measurementsUnitsInfos: MeasurementsUnitsInfo[];
    onMeasurementsInfoChanged: (measurementsRuntimeInfo: ImmutableObject<MeasurementsRuntimeInfo>) => void;
}
export declare const Measurements: React.MemoExoticComponent<(props: Props) => jsx.JSX.Element>;
