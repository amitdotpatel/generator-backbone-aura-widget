/**
 * Your Comments will go here.
 *
 * @class <%= _.capitalize(widgetName) %>
 * @constructor initialize
 */

define(['sandbox'], function (sandbox) {

    var <%= _.capitalize(widgetName) %> = sandbox.mvc.Model({

        url: function () {

        },

        defaults: {
        },

        initialize: function (options) {
            ;
        },

        parse: function (result) {
            return result;
        }

    });

    return <%= _.capitalize(widgetName) %>;
});
