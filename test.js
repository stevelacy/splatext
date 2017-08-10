const splatext = require('.')

const lib = {
  a: [ 's' ],
  b: [ ],
  c: [ 'dog', 'fox', 'the' ],
  d: [ 'brown', 'jump', 'lazy', 'over', 'quick' ]
}

const mapped = [ 'c:2', 'd:4', 'd:0', 'c:1', 'd:1.a:0', 'd:3', 'c:2', 'd:2', 'c:0' ]

console.log(splatext(mapped, lib).join(' '))
