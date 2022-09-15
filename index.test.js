// Ex:
// Input: [1,2,3]  function(num){return num * 2*}
// Output: [2,4,6]

// Input: [1,2,3]  function(num){return num + 1}
// Output: [2,3,4]

// Input: [1,2,3] function(num) {return num /2}
// Output: [.5, 1. 1.5]

// Input: [1,2,3] function(num) {return num - 2}
// Output: [-1, 0, 1]

const callbackFunction = require("./index");
describe("test case describing the callback functions", () => {
  it("should return [2,4,6]", () => {
    const result = callbackFunction([1, 2, 3], function (num) {
      return num * 2;
    });
    expect(result).toEqual([2, 4, 6]);
  });

  it("should return [2,3,4]", () => {
    const result = callbackFunction([1, 2, 3], function (num) {
      return num + 1;
    });
    expect(result).toEqual([2, 3, 4]);
  });

<<<<<<< HEAD
  it("should return [.5, 1. 1.5]", () => {
    const result = callbackFunction([1, 2, 3], function (num) {
      return num / 2;
    });
    expect(result).toEqual([0.5, 1, 1.5]);
  });
=======
    it("should return [.5, 1. 1.5]", ()=>{
        const result = callbackFunction([1,2,3], function(num) {return num /2});
        expect(result).toEqual([.5, 1, 1.5])
    })
>>>>>>> 787f5805dd8e672558e9e2f44a24e3b4d897cf0f

  it("should return [-1, 0, 1]", () => {
    const result = callbackFunction([1, 2, 3], function (num) {
      return num - 2;
    });
    expect(result).toEqual([-1, 0, 1]);
  });
});
