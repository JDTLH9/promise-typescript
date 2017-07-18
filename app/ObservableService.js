"use strict";
var ObservableService = (function () {
    function ObservableService() {
        var _this = this;
        this.Deferred = $.Deferred();
        this.UpdateGreeting = function (newGreeting) {
            _this.Deferred.notify(newGreeting);
        };
    }
    return ObservableService;
}());
