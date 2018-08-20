import StyledString from './StyledString';

export default function patchConsoleLog () {
	let log = console.log;
	console.log = (...args) => {
		args = args.map(arg => typeof arg === 'object' && arg.name == 'StyledString' ? arg.toString() : arg);
		return log(...args);
	};
}