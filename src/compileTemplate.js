import 'colors';

const COLORS_REGEXP = /^\.((?:\.?(?:reset|bold|dim|italic|underline|inverse|hidden|strikethrough|black|red|green|yellow|blue|magenta|cyan|white|gray|grey|bgBlack|bgRed|bgGreen|bgYellow|bgBlue|bgMagenta|bgCyan|bgWhite|blackBG|redBG|greenBG|yellowBG|blueBG|magentaBG|cyanBG|whiteBG)\b)+)/;

export default function compileTemplate (defaultStyles, strings, ...replacements) {
	let string = '';

	//defaultStyles = defaultStyles ? defaultStyles.split('.') : [];

	strings.forEach((item, index, strings) => {
		let after = String(replacements.shift() || ''),
			next = strings[index + 1];

		// strip style commands
		item = String(item).replace(COLORS_REGEXP, '');

		if (!typeof next != undefined) {
			let colorsMatch = String(next).match(COLORS_REGEXP);

			if (colorsMatch && after) {
				// apply styles
				colorsMatch[1].split('.').forEach(style => (after = after[style]));

				// apply default styles
				defaultStyles.forEach(style => (after = after[style]));
			}

			// apply default styles to item
			defaultStyles.forEach(style => (item = item[style]));

			// apply default styles to after
			defaultStyles.forEach(style => (after = after[style]));

			// concatenate new segment
			string += item + after;
		}
	});

	return string;
}