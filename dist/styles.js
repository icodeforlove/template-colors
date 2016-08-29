'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
String.prototype.rgb = function (r, g, b) {
	return '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' + this + '\x1b[0m';
};
String.prototype.rgbBG = function (r, g, b) {
	return '\x1b[48;2;' + r + ';' + g + ';' + b + 'm' + this + '\x1b[0m';
};

exports.default = ['reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough', 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey', 'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'blackBG', 'redBG', 'greenBG', 'yellowBG', 'blueBG', 'magentaBG', 'cyanBG', 'whiteBG'];
module.exports = exports['default'];