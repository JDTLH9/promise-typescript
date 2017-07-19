class ObservableService {
  private static _instance: ObservableService;
  UpdateGreeting: (newGreeting: string) => void;
  Deferred: JQueryDeferred<string>;

  private constructor(){
    this.Deferred = $.Deferred<string>();

    this.UpdateGreeting =  (newGreeting: string) => {
        this.Deferred.notify(newGreeting);
    };
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}