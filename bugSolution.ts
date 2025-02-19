function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, Number("2")); // Correct type casting

// or using Type Assertion
let result2 = add(1, <number>"2");