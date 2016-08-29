import StyledString from './StyledString';
import patchDebugLog from './patchDebugLog';
import patchConsoleLog from './patchConsoleLog';
import compileTemplate from './compileTemplate';

// patch consoles
patchConsoleLog();
patchDebugLog();

function style (...args) {
	return new StyledString(args);
}
style.define = compileTemplate.define;

// export template
export default style;