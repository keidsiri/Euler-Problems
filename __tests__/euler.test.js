import threeOrFive from './../src/euler.js';


describe('threeOrFive', () => {

  test('should return 0 when the input is divisible by 3', () => {
    expect(threeOrFive(9)).toEqual(0);
  });
});


// 3 % 3 === 0
// 4 % 3 === 1
// 5 % 3 === 2
// 6 % 3 === 0

// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
// });


