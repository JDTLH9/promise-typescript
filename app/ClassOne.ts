class ClassOne {
  UpdateGreeting: (newGreeting: string) => void;
  ObservableService: ObservableService;

  constructor(observableService: ObservableService){
    this.ObservableService = observableService;
    this.UpdateGreeting = (newGreeting: string) => {
      this.ObservableService.UpdateGreeting(newGreeting);
    }
  }
}