'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = compileTemplate;

require('colors');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _StyledString = require('./StyledString');

var _StyledString2 = _interopRequireDefault(_StyledString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLORS_REGEXP = compileColorsRegExp(); //new RegExp(`^\\.((?:\\.?(?:${styles.join('|')}|rgb(?:BG)?\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)))+)`);
var RGB_REGEXP = /(rgb(?:BG)?)\((\s*\d+\s*)\,(\s*\d+\s*)\,(\s*\d+\s*)\)/;
var definedStyles = {};

function compileColorsRegExp() {
	return new RegExp('^\\.((?:\\.?(?:' + _styles2.default.join('|') + '|rgb(?:BG)?\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)))+)');
}

function runStyleOnString(string, style) {
	var rgbMatch = style.match(RGB_REGEXP);

	if (rgbMatch) {
		var type = rgbMatch[1],
		    r = rgbMatch[2],
		    g = rgbMatch[3],
		    b = rgbMatch[4];

		if (type === 'rgb') {
			return string.rgb(r, g, b);
		} else if (type === 'rgbBG') {
			return string.rgbBG(r, g, b);
		}
	} else if (definedStyles[style]) {
		definedStyles[style].forEach(function (style) {
			string = runStyleOnString(string, style);
		});
		return string;
	} else {
		return string[style];
	}
}

function compileTemplate(defaultStyles, strings) {
	for (var _len = arguments.length, replacements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		replacements[_key - 2] = arguments[_key];
	}

	var string = '';

	strings.forEach(function (item, index, strings) {
		var after = replacements.shift(),
		    next = strings[index + 1];

		after = typeof after === 'undefined' ? '' : String(after);

		// strip style commands
		item = String(item).replace(COLORS_REGEXP, '');

		if (!(typeof next === 'undefined' ? 'undefined' : (0, _typeof3.default)(next)) != undefined) {
			var colorsMatch = String(next).match(COLORS_REGEXP);

			if (colorsMatch && after) {
				// apply styles
				colorsMatch[1].split('.').forEach(function (style) {
					return after = runStyleOnString(after, style);
				});
			}

			// apply default styles to item
			defaultStyles.forEach(function (style) {
				return item = runStyleOnString(item, style);
			});

			// apply default styles to after
			defaultStyles.forEach(function (style) {
				return after = runStyleOnString(after, style);
			});

			// concatenate new segment
			string += item + after;
		}
	});

	return string;
}
compileTemplate.define = function (name, stylesToDefine) {
	if (typeof stylesToDefine === 'string') {
		stylesToDefine = [stylesToDefine];
	}
	_styles2.default.push(name);
	definedStyles[name] = stylesToDefine;
	COLORS_REGEXP = compileColorsRegExp();
	(0, _defineProperty2.default)(_StyledString2.default.prototype, name, {
		get: function get() {
			this.styles = this.styles.concat(stylesToDefine);
			return this;
		}
	});
	(0, _defineProperty2.default)(String.prototype, name, {
		get: function get() {
			//console.log(new StyledString([[this]])[name])
			return new _StyledString2.default([[this]])[name];
		}
	});
};
module.exports = exports['default'];