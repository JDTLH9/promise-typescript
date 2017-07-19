class ClassTwo {
  constructor(){
      ObservableService.Instance.Deferred.progress(
        (newGreeting: string) => {
          $("#header-two").text(newGreeting);
          $("#my-text").val("");
          $("#my-text").focus();
        }
      );
    }
}