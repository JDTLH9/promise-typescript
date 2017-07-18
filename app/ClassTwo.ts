class ClassTwo {
  constructor(observableService: ObservableService){
      observableService.Deferred.progress(
        (newGreeting: string) => {
          $("#header-two").text(newGreeting);
          $("#my-text").val("");
          $("#my-text").focus();
        }
      );
    }
}