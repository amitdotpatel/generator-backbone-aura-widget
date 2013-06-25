/**
 * Your Comments will go here.
 *
 * @class <%= _.capitalize(widgetName)+'View' %>
 * @constructor initialize
 */

define(["sandbox"],function (sandbox) {

    var <%= _.capitalize(widgetName)+'View' %> = sandbox.mvc.View({

        //Template code goes here.
        //template: _.templmate(),
        events: {
            
        },
        initialize: function () {
            var self = this;
            self.render();
        },
        render: function () {
            var self = this;
        }
    });
    return <%= _.capitalize(widgetName)+'View' %>;
});
