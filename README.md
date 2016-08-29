# template-colors [![Build Status](https://travis-ci.org/icodeforlove/template-colors.png?branch=master)](https://travis-ci.org/icodeforlove/template-colors)

beautiful color usage within template literals

## install

```
npm install --save template-colors
```

## usage

you can compose colored template literals in many ways

```javascript
import c from 'template-colors';

console.log(c`found ${17}.bold new users`);

console.log(c('bold.underline.grey')`found ${17}.bold new users`);

console.log(c`could not delete ${users.length}.bold.green users`.underline.red);

console.log(c`user ${user.name.red} logged in at ${new Date()}.bold`.grey);
```

![screenshot](https://img42.com/g2veI+)