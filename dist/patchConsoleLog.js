'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = patchConsoleLog;

var _StyledString = require('./StyledString');

var _StyledString2 = _interopRequireDefault(_StyledString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patchConsoleLog() {
	var log = console.log;
	console.log = function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		args = args.map(function (arg) {
			return arg instanceof _StyledString2.default ? arg.toString() : arg;
		});
		return log.apply(undefined, (0, _toConsumableArray3.default)(args));
	};
}
module.exports = exports['default'];