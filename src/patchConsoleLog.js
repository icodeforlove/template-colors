import StyledString from './StyledString';

export default function patchConsoleLog () {
	let log = console.log;
	console.log = (...args) => {
		args = args.map(arg => arg instanceof StyledString ? arg.toString() : arg);
		return log(...args);
	};
}