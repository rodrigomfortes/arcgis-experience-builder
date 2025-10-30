import type { AppInfo } from '../types/app-info';
import type { IMState } from '../types/state';
export declare function initPortalSelf(portalUrl: string): Promise<any>;
export declare function clearPortalSelf(): void;
export declare function getAppInfo(appId?: string): Promise<AppInfo>;
export declare function removeAppInfo(appId: string): void;
export declare function validateClientId(portalUrl: string, clientId: string): Promise<boolean>;
export declare function shouldShowClassificationBanner(state: IMState): any;
export declare function shouldShowClassificationConfig(state: IMState): any;
