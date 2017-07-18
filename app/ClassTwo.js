"use strict";
var ClassTwo = (function () {
    function ClassTwo(observableService) {
        observableService.Deferred.progress(function (newGreeting) {
            $("#header-two").text(newGreeting);
            $("#my-text").val("");
            $("#my-text").focus();
        });
    }
    return ClassTwo;
}());
