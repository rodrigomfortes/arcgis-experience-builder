/** @jsx jsx */
import { type I18nMessages, jsx, ReactRedux } from 'jimu-core';
interface GuideRendererProps {
    isBusy: boolean;
    guideId: string;
    shouldCheckGuideDisplay: boolean;
    locale: string;
    appI18nMessages: I18nMessages;
}
type Props = GuideRendererProps;
declare function GuideRendererComponent(props: Props): "" | jsx.JSX.Element;
export declare const GuideRenderer: ReactRedux.ConnectedComponent<typeof GuideRendererComponent, {
    context?: import("react").Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export {};
