import c from '../dist/index';

c.define('error', 'rgb(255,0,0)');
c.define('log', ['rgb(0,0,0)', 'rgbBG(255,255,255)', 'bold', 'underline', 'italic']);

describe('General', () => {
	it('can log false values', () => {
		let passed = false;
		try {
			console.log(null);
			console.log(0);
			console.log(undefined);
			passed = true;
		} catch (error) {console.log(error)}
		expect(passed).toBe(true);
	});
	it('can use inline styles', () => {
		expect(c`${'foobar'}.red`.toString()).toBe('[31mfoobar[39m');
		expect(c`foo${'bar'}.red`.toString()).toBe('foo[31mbar[39m');
		expect(c`${'foo'.blue}${'bar'}.red`.toString()).toBe('[34mfoo[39m[31mbar[39m');
		expect(c`${'foo'}.blue${'bar'}.red`.toString()).toBe('[34mfoo[39m[31mbar[39m');
		expect(c`foobar ${1}.red foobar`.toString()).toBe('foobar [31m1[39m foobar');
	});

	it('can use default styles', () => {
	  	expect(c`foobar ${'foobar'}.red foobar`.blue.underline.toString()).toBe('[4m[34mfoobar [39m[24m[4m[34m[31mfoobar[39m[39m[24m[4m[34m foobar[39m[24m[4m[34m[39m[24m');
	  	expect(c`foobar`.red.toString()).toBe('[31mfoobar[39m[31m[39m');
	  	expect(c`foobar ${'foobar'}.blue ${'foobar'.cyan}`.red.bold.underline.toString()).toBe('[4m[1m[31mfoobar [39m[22m[24m[4m[1m[31m[34mfoobar[39m[39m[22m[24m[4m[1m[31m [39m[22m[24m[4m[1m[31m[36mfoobar[39m[39m[22m[24m[4m[1m[31m[39m[22m[24m[4m[1m[31m[39m[22m[24m');
		expect(c`foobar ${123}.bold foobar`.red.toString()).toBe('[31mfoobar [39m[31m[1m123[22m[39m[31m foobar[39m[31m[39m');
	});

	it('can use .rgb and .rgbBG', () => {
		expect(c`${'one'.rgb(77,77,77)} ${'two'}.rgb(144,144,144).bold.rgbBG(44,44,44) three`.rgb(0,0,0).rgbBG(255,255,255).underline.bold.toString()).toBe('[1m[4m[48;2;255;255;255m[38;2;0;0;0m[0m[0m[24m[22m[1m[4m[48;2;255;255;255m[38;2;0;0;0m[38;2;77;77;77mone[0m[0m[0m[24m[22m[1m[4m[48;2;255;255;255m[38;2;0;0;0m [0m[0m[24m[22m[1m[4m[48;2;255;255;255m[38;2;0;0;0m[48;2;44;44;44m[1m[38;2;144;144;144mtwo[0m[22m[0m[0m[0m[24m[22m[1m[4m[48;2;255;255;255m[38;2;0;0;0m three[0m[0m[24m[22m[1m[4m[48;2;255;255;255m[38;2;0;0;0m[0m[0m[24m[22m');
	});

	it('can use custom defined styles', () => {
		expect(c`foo bar ${'hello'}.error`.log.toString()).toBe('[3m[4m[1m[48;2;255;255;255m[38;2;0;0;0mfoo bar [0m[0m[22m[24m[23m[3m[4m[1m[48;2;255;255;255m[38;2;0;0;0m[38;2;255;0;0mhello[0m[0m[0m[22m[24m[23m[3m[4m[1m[48;2;255;255;255m[38;2;0;0;0m[0m[0m[22m[24m[23m[3m[4m[1m[48;2;255;255;255m[38;2;0;0;0m[0m[0m[22m[24m[23m');
		expect(c`${'hello'.error}.bold ${'test'}.log ${'test'.log} hello`.error.toString()).toBe('[38;2;255;0;0m[0m[38;2;255;0;0m[1m[38;2;255;0;0mhello[0m[38;2;255;0;0m[0m[22m[0m[38;2;255;0;0m [0m[38;2;255;0;0m[3m[4m[1m[48;2;255;255;255m[38;2;0;0;0mtest[0m[0m[22m[24m[23m[0m[38;2;255;0;0m [0m[38;2;255;0;0m[3m[4m[1m[48;2;255;255;255m[38;2;0;0;0mtest[0m[0m[22m[24m[23m[3m[4m[1m[48;2;255;255;255m[38;2;0;0;0m[0m[0m[22m[24m[23m[0m[38;2;255;0;0m hello[0m[38;2;255;0;0m[0m');
	});
});