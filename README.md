# This repo includes the exercise for day 6 of the Futureprrof Bootcamp (Auguste cohort)

## data_in_js

It includes some simple exercises on data types

The other exercise is in a separate repo that can be found at https://github.com/buscaroli/futureproof-fp_study_notes_data_in_JavaScript and it was forked from the Futureproof gitHub repo.

It consisted mainly in making some tests pass by ficing the code and you were also allow to contribute to the code by adding new tests.

During the exercises, a fellow futureproof student ([Gio](https://github.com/Gioele-M))came across an interisting behavior:

If testing for an error to be thrown, the function wouldn't pass even if it looked correct.
Gio and I found out that when using Jest all function that use the .toThrow() method need to be enclosed within a callback.

The callback is required because expect(x).toThrow() requires x to be a reference to a function that throws.
If using expect(x()).toThrow(), x() would be resolved/called immediately and the test would fail.

The code needs to be written this way:

```js
describe('tests the rename function', () => {
  it('should throw when called with a parameter as the cat name is a constant (immutable)', () => {
    expect(() => adoptionHelpers.rename('Fluffy')).toThrow(TypeError)
  })
})
```

and NOT this way;

```js
describe('tests the rename function', () => {
  it('should throw when called with a parameter as the cat name is a constant (immutable)', () => {
    expect(adoptionHelpers.rename('Fluffy')).toThrow(TypeError)
  })
})
```

## principles_of_programming

It includes two exercises in which we had to implement two algorithms in pseudocode and;

- try to find an alternative version
- discuss the pros/cons of the alternative version
- divide the pseudocode into data logic and actions

## other folders

Contains two files

1. pseudo-code-coffee.md

- It contains the first test we have done in regards to pseudocode and some useful feedback from the tutor.

2. switchStatement.js

- It contains an example on how to use a switch case in javascript when havng to check against a range instead of a value

This last example was unexpected and kind of counterintuitive, so I thought I would upload it to keep it in mind.
