import 'colors';
import styles from './styles';
import StyledString from './StyledString';

let COLORS_REGEXP = compileColorsRegExp();//new RegExp(`^\\.((?:\\.?(?:${styles.join('|')}|rgb(?:BG)?\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)))+)`);
const RGB_REGEXP = /(rgb(?:BG)?)\((\s*\d+\s*)\,(\s*\d+\s*)\,(\s*\d+\s*)\)/;
let definedStyles = {};

function compileColorsRegExp () {
	return new RegExp(`^\\.((?:\\.?(?:${styles.join('|')}|rgb(?:BG)?\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)))+)`);
}

function runStyleOnString (string, style) {
	let rgbMatch = style.match(RGB_REGEXP);

	if (rgbMatch) {
		let type = rgbMatch[1],
			r = rgbMatch[2],
			g = rgbMatch[3],
			b = rgbMatch[4];

		if (type === 'rgb') {
			return string.rgb(r,g,b);
		} else if (type === 'rgbBG') {
			return string.rgbBG(r,g,b);
		}
	} else if (definedStyles[style]) {
		definedStyles[style].forEach(style => {
			string = runStyleOnString(string, style);
		});
		return string;
	} else {
		return string[style];
	}
}

export default function compileTemplate (defaultStyles, strings, ...replacements) {
	let string = '';

	strings.forEach((item, index, strings) => {
		let after = String(replacements.shift() || ''),
			next = strings[index + 1];

		// strip style commands
		item = String(item).replace(COLORS_REGEXP, '');

		if (!typeof next != undefined) {
			let colorsMatch = String(next).match(COLORS_REGEXP);

			if (colorsMatch && after) {
				// apply styles
				colorsMatch[1].split('.').forEach(style => (after = runStyleOnString(after, style)));
			}

			// apply default styles to item
			defaultStyles.forEach(style => (item = runStyleOnString(item, style)));

			// apply default styles to after
			defaultStyles.forEach(style => (after = runStyleOnString(after, style)));

			// concatenate new segment
			string += item + after;
		}
	});

	return string;
}
compileTemplate.define = (name, stylesToDefine) => {
	if (typeof stylesToDefine === 'string') {
		stylesToDefine = [stylesToDefine];
	}
	styles.push(name);
	definedStyles[name] = stylesToDefine;
	COLORS_REGEXP = compileColorsRegExp();
	Object.defineProperty(StyledString.prototype, name, {
		get: function () {
			this.styles = this.styles.concat(stylesToDefine);
			return this;
		}
	});
	Object.defineProperty(String.prototype, name, {
		get: function () {
			//console.log(new StyledString([[this]])[name])
			return new StyledString([[this]])[name];
		}
	});
};