var webApplication = webApplication || {};

webApplication.subscriber = function () {
    var self = this;
    this.message = ko.observable("awaiting...");
    this.timestamp = ko.observable("");

    $(document).on("messageUpdatedEvent",
        function (event) {
            self.message(event.message.publishedMessage);
            self.timestamp(event.time);
        });
};