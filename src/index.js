import StyledString from './StyledString';
import patchDebugLog from './patchDebugLog';
import patchConsoleLog from './patchConsoleLog';

// patch consoles
patchConsoleLog();
patchDebugLog();

// export template
export default function (...args) {
	return new StyledString(args);
}