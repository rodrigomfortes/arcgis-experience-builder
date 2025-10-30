import type { AppConfig } from '../types/app-config';
export interface AppConfigReplacer<T> {
    matcher: (val: string, indicator: T) => boolean;
    handler: (val: string, indicator: T) => string;
    /**
     * This function will run for every object:
     * If the return value is not undefined or null, the value will be passed to the matcher/handler as an indicator.
     * This indicator will also be passed down for all its child objects.
     * This indicator is of the generic type T, which can be controlled by the method caller.
     * For example, below function can identify Text widgets and Image widgets
     * and apply different match/replace strategy for objects inside these widgets.
     * (obj) => {
     *   if (obj.uri === 'widgets/common/text/') {
     *     return 'text'
     *   }
     *   if (obj.uri === 'widgets/common/image/') {
     *     return 'image'
     *   }
     * }
     * @param obj
     * @returns
     */
    passIndicator?: (obj: object | any[]) => T;
}
export declare function replaceStringInAppConfig<T>(appConfig: AppConfig, replacer: AppConfigReplacer<T>): AppConfig;
export declare const isFullReplace: (obj: object) => true;
export declare const fullMatchBlobUrl: (value?: string) => boolean;
export declare const fullMatchResourceUrl: (value: string) => boolean;
export declare const getResourceUrlsInString: (value: string) => [] | RegExpMatchArray;
export declare function getRealAppResourceUrl(): string;
export declare function processResourceUrl(value: string): string;
export declare function restoreResourceUrl(value: string): string;
