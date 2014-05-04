var webApplication = webApplication || {};

webApplication.publisher = function () {
    var self = this;
    this.message = ko.observable("");

    this.notifySubscribers = function() {
        $.event.trigger({
            type : "messageUpdatedEvent",
            message: { publishedMessage: self.message() },
            time: new Date()
        });
    };

};