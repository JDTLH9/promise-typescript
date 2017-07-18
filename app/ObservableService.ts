class ObservableService {
  UpdateGreeting: (newGreeting: string) => void;
  Deferred: JQueryDeferred<string>;

  constructor(){
    this.Deferred = $.Deferred<string>();

    this.UpdateGreeting =  (newGreeting: string) => {
        this.Deferred.notify(newGreeting);
    };
  }
}