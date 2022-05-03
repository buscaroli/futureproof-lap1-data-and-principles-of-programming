const data = [
  1, // number
  '90', // string
  1 - 234 - 233 - 422, // number: it calculates three subtractions
  'Hello', // string
  // Hello,                invalid as JS thinks it is a variable
  [3, 4, 6, 9], // array (of numbers)
  // [1, [a, b, c], 45],   invalid as JS thinks a,b and c are variables
  { name: 'Alan', occupation: 'programmer' }, // object
]

data.forEach((datum) => {
  console.log(`${datum} is: ${typeof datum}`)
})
