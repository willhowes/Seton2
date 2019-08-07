var testarray = []

const describe = (desc, fn) => {

  console.log(desc)
  // document.write(desc)
  testarray.push(desc)
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
      testarray.push('PASS - nice one geezer')
      // document.write('PASS - nice one geezer')
      // document.write("--------------")
      // document.getElementById("testPassFail").innerHTML = 'PASS - nice one geezer'
      return true
    } else {
      console.log('FAIL - try again buddy')
      // document.write('FAIL - try again buddy')
      console.log(`got "${exp}" but expected "${assertion}"`)
      // document.write(`got "${exp}" but expected "${assertion}"`)
      // document.write("--------------")
      testarray.push(`FAIL - try again buddy. Got "${exp}" but expected "${assertion}"`)
      return false
    }
  }
})

document.getElementById("testPassFail").innerHTML = testarray.join('')

console.log(testarray.join(''))
