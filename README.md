# template-colors [![Build Status](https://travis-ci.org/icodeforlove/template-colors.png?branch=master)](https://travis-ci.org/icodeforlove/template-colors)

beautiful color usage within template literals

## install

```
npm install --save template-colors
```

## usage

you can compose colored template literals in many ways

```javascript
import C from 'template-colors';

console.log(C`found ${17}.bold new users`);

console.log(C('bold.underline.grey')`found ${17}.bold new users`);

let error = C('underline.red');
console.log(error`could not delete ${users.length}.bold users`);

console.log(C`user ${user.name.red} logged in at ${new Date()}.bold`);
```

![screenshot](https://img42.com/g2veI+)
