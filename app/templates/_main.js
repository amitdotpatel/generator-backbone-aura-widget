/**
 * The main class for the widget as per the AURA specification.
 *
 * @class <%= _.capitalize(widgetName)+'Widget' %>
 */
define(['sandbox'],function (sandbox) {
	"use strict";		
	var <%= _.capitalize(widgetName)+'Widget' %> = function (element) {

		sandbox.dom.loadCss(sandbox.util.getWidgetPath("<%= _.capitalize(widgetName)+'Widget' %>") + '/css/style.css');

		new <%= _.capitalize(widgetName)+'Widget' %>+({
			el: sandbox.dom.find(element)
		});
	};
	return <%= _.capitalize(widgetName)+'Widget' %>;
	}
);
