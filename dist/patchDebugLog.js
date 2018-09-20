'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = patchDebugLog;

var _StyledString = require('./StyledString');

var _StyledString2 = _interopRequireDefault(_StyledString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patchDebugLog() {
	try {
		var Debug = require('req-once')('debug'),
		    coerce = Debug.coerce;

		Debug.coerce = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			args = args.map(function (arg) {
				return (typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg)) === 'object' && arg.name == 'StyledString' ? arg.toString() : arg;
			});
			return coerce.apply(undefined, (0, _toConsumableArray3.default)(args));
		};
	} catch (error) {
		console.log(error);
	}
}
module.exports = exports['default'];