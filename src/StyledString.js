import compileTemplate from './compileTemplate';

class StyledString {
	constructor (templateArgs) {
		this.styles = [];
		this.templateArgs = templateArgs;
	}

	toString () {
		return compileTemplate(this.styles, ...this.templateArgs);
	}
}
[
	'reset',
	'bold',
	'dim',
	'italic',
	'underline',
	'inverse',
	'hidden',
	'strikethrough',
	'black',
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
	'white',
	'gray',
	'grey',
	'bgBlack',
	'bgRed',
	'bgGreen',
	'bgYellow',
	'bgBlue',
	'bgMagenta',
	'bgCyan',
	'bgWhite',
	'blackBG',
	'redBG',
	'greenBG',
	'yellowBG',
	'blueBG',
	'magentaBG',
	'cyanBG',
	'whiteBG'
].forEach(property => {
	Object.defineProperty(StyledString.prototype, property, {
		get: function () {
			if (this.styles.indexOf(property) === -1) {
				this.styles.push(property);
			}
			return this;
		}
	});
});

export default StyledString;