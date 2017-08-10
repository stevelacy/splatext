# splatext

> experimental 'splatted' text format

The goal of this experiment is to convert a text set into an array of mapped syllables.

For a two node network system both the client and the server have a 'library' of word syllables. Those syllables are then joined via mapping.
This reduces the actual library size and network bandwidth when multiple words contain the same syllables.


### Usage

```js
const lib = {
  a: [ 's' ],
  b: [ ],
  c: [ 'dog', 'fox', 'the' ],
  d: [ 'brown', 'jump', 'lazy', 'over', 'quick' ]
}

const mapped = [ 'c:2', 'd:4', 'd:0', 'c:1', 'd:1.a:0', 'd:3', 'c:2', 'd:2', 'c:0' ]

const splat = splatext(mapped, lib)

console.log(splat.join(' '))
// => the quick brown fox jumps over the lazy dog
```

This experiment's efficiency is only noticed when the number of duplicated words, and average word length, is greater than the combined 'splat' size.


## LICENSE [MIT](LICENSE)
