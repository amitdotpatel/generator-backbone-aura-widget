'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var WidgetGenerator = module.exports = function WidgetGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(WidgetGenerator, yeoman.generators.Base);

WidgetGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
        name: 'widgetName',
        message: 'What do you want to call your widget?'
    },
    {
        name: 'widgetLocation',
        message: 'Where do you want to locate your widget (app/widgets/)?',
        default: 'app/widgets/'
    }
  ];

  this.prompt(prompts, function (props) {
    this.widgetName = props.widgetName;
    this.widgetLocation = props.widgetLocation;
    this.widgetFullyQualifiedPath = props.widgetLocation + this.widgetName + 'Widget';
    cb();
  }.bind(this));
};

WidgetGenerator.prototype.app = function app() {

    this.mkdir(this.widgetFullyQualifiedPath + '/collections');
    this.mkdir(this.widgetFullyQualifiedPath + '/models');
    this.mkdir(this.widgetFullyQualifiedPath + '/sass');
    this.mkdir(this.widgetFullyQualifiedPath + '/templates');
    this.mkdir(this.widgetFullyQualifiedPath + '/views');

    this.copy('_config.js', this.widgetFullyQualifiedPath + '/config.js');
    this.copy('_main.js', this.widgetFullyQualifiedPath + '/main.js');
    this.copy('_collection.js',this.widgetFullyQualifiedPath + '/collections/'+toCapitalize(this.widgetName)+'Collection.js');
    this.copy('_model.js',this.widgetFullyQualifiedPath + '/models/'+toCapitalize(this.widgetName) + ".js");
    this.copy('_style.scss',this.widgetFullyQualifiedPath + '/sass/style.scss');
    this.copy('_view.js',this.widgetFullyQualifiedPath + '/views/'+toCapitalize(this.widgetName)+'View.js');
};

WidgetGenerator.prototype.projectfiles = function projectfiles() {

};

function toCapitalize( str ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
};
