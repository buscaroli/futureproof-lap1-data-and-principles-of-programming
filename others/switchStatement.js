// WRONG
// SWITCH CASE IN JS

// A normal switch case would work like this
const firstName = 'Mark'
switch (firstName) {
  case 'Mark':
    console.log('Hi Mark!')
    break

  case 'Matt':
    console.log('You are late Matt!')
    break

  default:
    console.log('Who are you again?')
    break
}

// However if checking for a range, you need to pass the value
// of 'true' to the switch!!
// It's not easy to guess and doesn't look intuitive so be careful!

function checkAge(age) {
  switch (true) {
    case age >= 18:
      return 'adult'
      break
    case age >= 12:
      return 'child'
      break

    case age >= 2:
      return 'toddler'
      break

    case age >= 1:
      return 'baby'
      break

    default:
      return 'not born yet!'
      break
  }
}

const listOfAges = [1, 3, 14, 19, 45, -7]
listOfAges.forEach((age) =>
  console.log(`If you are ${age} you are classified as: ${checkAge(age)}`)
)
