/**
 * Your Comments will go here.
 *
 * @class <%= _.capitalize(widgetName)+'Collection' %>
 * @constructor initialize
 */
define(['sandbox', '../config'], function (sandbox, config) {

    var <%= _.capitalize(widgetName)+'Collection' %> = sandbox.mvc.Collection({
        model: <%= _.capitalize(widgetName),
        initialize: function (options) {
            
        },
        url: function () {
            
        },
        parse: function (results) {
            return results;
        }
    });

    return <%= _.capitalize(widgetName)+'Collection' %>;
});
