class ClassOne {
  UpdateGreeting: (newGreeting: string) => void;

  constructor(){
    this.UpdateGreeting = (newGreeting: string) => {
      ObservableService.Instance.UpdateGreeting(newGreeting);
    }
  }
}