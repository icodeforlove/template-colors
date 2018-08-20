import compileTemplate from './compileTemplate';
import styles from './styles';

class StyledString {
	constructor (templateArgs) {
		this.styles = [];
		this.templateArgs = templateArgs;
	}

	name = 'StyledString';

	toString () {
		return compileTemplate(this.styles, ...this.templateArgs);
	}

	rgb (r, g, b) {
		this.styles.push(`rgb(${r},${g},${b})`);
		return this;
	}

	rgbBG (r, g, b) {
		this.styles.push(`rgbBG(${r},${g},${b})`);
		return this;
	}
}
styles.forEach(property => {
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