'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function (defaultStyles) {
	if (typeof defaultStyles === 'string') {
		return function () {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return compileTemplate.apply(undefined, [defaultStyles].concat(args));
		};
	}

	return compileTemplate.apply(undefined, [null].concat(Array.prototype.slice.call(arguments)));
};

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLORS_REGEXP = /^\.((?:\.?(?:reset|bold|dim|italic|underline|inverse|hidden|strikethrough|black|red|green|yellow|blue|magenta|cyan|white|gray|grey|bgBlack|bgRed|bgGreen|bgYellow|bgBlue|bgMagenta|bgCyan|bgWhite|blackBG|redBG|greenBG|yellowBG|blueBG|magentaBG|cyanBG|whiteBG)\b)+)/;

function compileTemplate(defaultStyles, strings) {
	for (var _len = arguments.length, replacements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		replacements[_key - 2] = arguments[_key];
	}

	var string = '';

	defaultStyles = defaultStyles ? defaultStyles.split('.') : [];

	strings.forEach(function (item, index, strings) {
		var after = String(replacements.shift() || ''),
		    next = strings[index + 1];

		// strip style commands
		item = String(item).replace(COLORS_REGEXP, '');

		// apply default styles
		defaultStyles.forEach(function (style) {
			return item = item[style];
		});

		if (!(typeof next === 'undefined' ? 'undefined' : (0, _typeof3.default)(next)) != undefined) {
			var colorsMatch = String(next).match(COLORS_REGEXP);

			if (colorsMatch && after) {
				// apply styles
				colorsMatch[1].split('.').forEach(function (style) {
					return after = after[style];
				});

				// apply default styles
				defaultStyles.forEach(function (style) {
					return after = after[style];
				});
			}

			// concatenate new segment
			string += item + after;
		}
	});

	return string;
}

;
module.exports = exports['default'];