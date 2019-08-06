const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

// describe('Outer', () => {
//   describe('inner', () => {
//   })
// })

const expect = (exp) => matchers(exp)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp == assertion) {
      console.log('PASS - nice one geezer')

      return true
    } else {
      console.log('FAIL - try again buddy')
      console.log(`got "${exp}" but expected "${assertion}"`)

      return false
    }
  }
})
