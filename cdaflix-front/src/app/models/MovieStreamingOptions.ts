import { Provider } from "./Provider";

export interface MediaStreamingOptions {
    link: string;
    rent: Provider[];
    buy: Provider[];
    flatrate: Provider[];
}