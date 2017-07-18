$(function(){
    let observableService = new ObservableService();
    let classTwo = new ClassTwo(observableService);
    let classOne = new ClassOne(observableService);

    $("#my-button").click(() => {
        classOne.UpdateGreeting($("#my-text").val());
    });
});