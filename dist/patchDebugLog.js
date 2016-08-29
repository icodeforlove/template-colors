'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = patchDebugLog;

var _StyledString = require('./StyledString');

var _StyledString2 = _interopRequireDefault(_StyledString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patchDebugLog() {
	try {
		(function () {
			var Debug = require('debug'),
			    coerce = Debug.coerce;

			Debug.coerce = function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				args = args.map(function (arg) {
					return arg instanceof _StyledString2.default ? arg.toString() : arg;
				});
				return coerce.apply(undefined, (0, _toConsumableArray3.default)(args));
			};
		})();
	} catch (error) {
		console.log(error);
	}
}
module.exports = exports['default'];