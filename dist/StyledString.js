'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _compileTemplate = require('./compileTemplate');

var _compileTemplate2 = _interopRequireDefault(_compileTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledString = function () {
	function StyledString(templateArgs) {
		(0, _classCallCheck3.default)(this, StyledString);

		this.styles = [];
		this.templateArgs = templateArgs;
	}

	(0, _createClass3.default)(StyledString, [{
		key: 'toString',
		value: function toString() {
			return _compileTemplate2.default.apply(undefined, [this.styles].concat((0, _toConsumableArray3.default)(this.templateArgs)));
		}
	}]);
	return StyledString;
}();

['reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough', 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey', 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'blackBG', 'redBG', 'greenBG', 'yellowBG', 'blueBG', 'magentaBG', 'cyanBG', 'whiteBG'].forEach(function (property) {
	(0, _defineProperty2.default)(StyledString.prototype, property, {
		get: function get() {
			if (this.styles.indexOf(property) === -1) {
				this.styles.push(property);
			}
			return this;
		}
	});
});

exports.default = StyledString;
module.exports = exports['default'];