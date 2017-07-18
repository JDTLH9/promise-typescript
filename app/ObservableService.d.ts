/// <reference types="jquery" />
declare class ObservableService {
    UpdateGreeting: (newGreeting: string) => void;
    Deferred: JQueryDeferred<string>;
    Subscribe: () => JQueryDeferred<string>;
    constructor();
}
