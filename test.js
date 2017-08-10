const splatext = require('.')
const should = require('should')

const lib = {
  a: [ 's' ],
  b: [ ],
  c: [ 'dog', 'fox', 'the' ],
  d: [ 'brown', 'jump', 'lazy', 'over', 'quick' ]
}

describe('splatext', () => {
  it('should parse a hash map', (done) => {
    const mapped = [ 'c:2', 'd:4', 'd:0', 'c:1', 'd:1.a:0', 'd:3', 'c:2', 'd:2', 'c:0' ]
    should(splatext(mapped, lib).join(' ')).equal('the quick brown fox jumps over the lazy dog')
    done()
  })
})
