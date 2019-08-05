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
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

// TESTS START HERE...

describe('adder', () => {
  it('adds two numbers', () => {
    const result = adder(1, 2)
    expect(result).toBe(3)
  })
})
