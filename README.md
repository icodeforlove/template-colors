# template-colors [![Build Status](https://travis-ci.org/icodeforlove/template-colors.png?branch=master)](https://travis-ci.org/icodeforlove/template-colors)

### next generation terminal colors!

beautiful color usage within template literals (uses [colors](https://github.com/marak/colors.js) behind the scenes)

## install

```
npm install --save template-colors
```

## usage

you can compose colored template literals in many ways

```javascript
import c from 'template-colors';

console.log(c`found ${17}.bold new users`);

console.log(c`found ${17}.bold new users`.bold.underline.grey);

console.log(c`could not delete ${6}.bold.green users`.underline.red);

console.log(c`user ${'John Doe'}.white.bold ${'logged'}.yellow in at ${new Date()}.white.bold`.grey);

console.log(c`
          This is ${'a'}.blue.italic
          ${'multiline'}.black.magentaBG
          ${'example'}.bold.underline.
`.grey);
```

![screenshot](https://img42.com/nwedl+)

## features

rgb / rgbBG (may be unsupported by your terminal)

```javascript
c`foo bar`.rgb(255,0,0)
c`foo bar`.rgb(255,0,0).rgbBG(0,0,0)
```

inline style commands

```javascript
c`${'foo bar'}.bold.red`
```

pre existing styles

```javascript
c`${'foo bar'.bold}.red`
```

defalt styles to apply to whole string

```javascript
c`${'foo'}.red bar`.grey.underline
```

custom defined styles
```javascript
c.define('error', 'rgb(255,0,0)');
c.define('log', ['rgb(0,0,0)', 'rgbBG(255,255,255)', 'bold', 'underline', 'italic']);

c`foo bar`.error
c`foo bar`.log
```