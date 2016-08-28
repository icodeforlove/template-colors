import C from '../dist/index';

describe('General', () => {
  it('can use inline styles', () => {
    expect(C`${'foobar'}.red`).toBe('[31mfoobar[39m');
    expect(C`foo${'bar'}.red`).toBe('foo[31mbar[39m');
    expect(C`${'foo'.blue}${'bar'}.red`).toBe('[34mfoo[39m[31mbar[39m');
    expect(C`${'foo'}.blue${'bar'}.red`).toBe('[34mfoo[39m[31mbar[39m');
    expect(C`foobar ${1}.red foobar`).toBe('foobar [31m1[39m foobar');
  });

  it('can use default styles', () => {
    expect(C('blue.underline')`foobar ${'foobar'}.red foobar`).toBe('[4m[34mfoobar [39m[24m[4m[34m[31mfoobar[39m[39m[24m[4m[34m foobar[39m[24m');
    expect(C('red')`foobar`).toBe('[31mfoobar[39m');
    expect(C('red.bold.underline')`foobar ${'foobar'}.blue ${'foobar'.cyan}`).toBe('[4m[1m[31mfoobar [39m[22m[24m[4m[1m[31m[34mfoobar[39m[39m[22m[24m[4m[1m[31m [39m[22m[24m[36mfoobar[39m[4m[1m[31m[39m[22m[24m');
    expect(C('red')`foobar ${123}.bold foobar`).toBe('[31mfoobar [39m[31m[1m123[22m[39m[31m foobar[39m');
  });
});