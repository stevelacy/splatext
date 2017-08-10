module.exports = function splatext (mapped, lib) {
  return mapped.map((v) =>
    v.split('.').map((v) => {
      const split = v.split(':')
      return lib[split[0]][split[1]]
    }).join('')
  )
}
