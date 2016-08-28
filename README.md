# template-colors

beautiful color usage within template literals

## install

```
npm install template-colors
```

## usage

you can compose colored template literals in many ways

```
import C from 'template-colors';

console.log(C`found ${17}.bold new users`);

console.log(C('bold.underline.grey')`found ${17}.bold new users`);

let error = C('underline.red');
console.log(error`could not delete ${users.length}.bold users`);

console.log(C`user ${user.name.red} logged in at ${new Date()}.bold`);
```