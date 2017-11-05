'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  transformAttributes(flag) {
    /*
      possible flag formats:
      - first_name:string,last_name:string,bio:text
      - 'first_name:string last_name:string bio:text'
      - 'first_name:string, last_name:string, bio:text'
    */

    var set = flag.replace(/,/g, ' ').split(/\s+/);
    var result = {};

    set.forEach(function (pair) {
      var split = pair.split(':');

      result[split[0]] = split[1];
    });

    return result;
  },

  generateFileContent(args) {
    return _index2.default.template.render('models/model.js', {
      name: args.name,
      attributes: this.transformAttributes(args.attributes),
      underscored: args.underscored
    });
  },

  generateFile(args) {
    var modelPath = _index2.default.path.getModelPath(args.name);

    _index2.default.asset.write(modelPath, this.generateFileContent(args));
  },

  modelFileExists(filePath) {
    return _index2.default.path.existsSync(filePath);
  }
};