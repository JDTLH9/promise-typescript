$(function(){
    let classTwo = new ClassTwo();
    let classOne = new ClassOne();

    $("#my-button").click(() => {
        classOne.UpdateGreeting($("#my-text").val());
    });
});