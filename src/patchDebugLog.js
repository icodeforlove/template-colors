import StyledString from './StyledString';

export default function patchDebugLog () {
	try {
		let Debug = require('debug'),
			coerce = Debug.coerce;

		Debug.coerce = function (...args) {
			args = args.map(arg => typeof arg === 'object' && arg.name == 'StyledString' ? arg.toString() : arg);
			return coerce(...args);
		};
	} catch (error) {
		console.log(error);
	}
}