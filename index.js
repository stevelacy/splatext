module.exports = function splatext (mapped, lib) {
  const words = []
  mapped.forEach((v, k) => {
    const multi = v.split('.')
    let word = ''
    multi.forEach((v, k) => {
      const split = v.split(':')
      word += (lib[split[0]][split[1]])
    })
    words.push(word)
  })
  return words
}
