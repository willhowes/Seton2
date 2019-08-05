const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

// describe('Outer', () => {
//   describe('inner', () => {
//   })
// })

const expect = (value) => { return /* object with toBe property */ }

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})


module.exports = {
  describe,
  expect,
  it,
  matchers
}
