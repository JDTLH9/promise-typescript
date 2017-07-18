"use strict";
var ClassOne = (function () {
    function ClassOne(observableService) {
        var _this = this;
        this.ObservableService = observableService;
        this.UpdateGreeting = function (newGreeting) {
            _this.ObservableService.UpdateGreeting(newGreeting);
        };
    }
    return ClassOne;
}());
