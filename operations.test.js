const { mean, median, mode } = require("./operations");

describe("operations test", function () {
  test("calculates correct mean", function () {
    let nums = ["1", "3", "5"];

    expect(mean(nums)).toEqual(3);
  });

  test("calculates correct mode", function () {
    let nums = ["1", "1", "4", "6", "4", "4", "7"];
    expect(mode(nums)).toEqual(4);
  });

  test("calculates first mode", function () {
    let nums = ["1", "1", "1", "4", "4", "4", "7"];
    expect(mode(nums)).toEqual(1);
  });

  test("calculates median with odd num", function () {
    let nums = ["1", "6", "3", "5", "9", "4", "7"];
    expect(median(nums)).toEqual(5);
  });

  test("calculates median with even num", function () {
    let nums = ["1", "6", "5", "9", "4", "7"];
    expect(median(nums)).toEqual(5.5);
  });
});
