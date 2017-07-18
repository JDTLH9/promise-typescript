"use strict";
$(function () {
    var observableService = new ObservableService();
    var classTwo = new ClassTwo(observableService);
    var classOne = new ClassOne(observableService);
    $("#my-button").click(function () {
        classOne.UpdateGreeting($("#my-text").val());
    });
});
