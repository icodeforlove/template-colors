'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new _StyledString2.default(args);
};

var _StyledString = require('./StyledString');

var _StyledString2 = _interopRequireDefault(_StyledString);

var _patchDebugLog = require('./patchDebugLog');

var _patchDebugLog2 = _interopRequireDefault(_patchDebugLog);

var _patchConsoleLog = require('./patchConsoleLog');

var _patchConsoleLog2 = _interopRequireDefault(_patchConsoleLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// patch consoles
(0, _patchConsoleLog2.default)();
(0, _patchDebugLog2.default)();

// export template
module.exports = exports['default'];