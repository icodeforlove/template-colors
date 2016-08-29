import c from '../dist/index';

describe('General', () => {
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
});