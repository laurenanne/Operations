const express = require("express");
const { mean, median, mode } = require("./operations");
const ExpressError = require("./expressErr");

const app = express();

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("You must enter numbers separated by commas", 400);
  }

  const nums = req.query.nums.split(",");

  for (let i = 0; i < nums.length; i++) {
    if (!Number(nums[i])) {
      throw new ExpressError(`${nums[i]} is not a number`, 400);
    }

    const avg = mean(nums);
    return res.json({ operation: "mean", value: avg });
  }
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("You must enter numbers separated by commas", 400);
  }
  const nums = req.query.nums.split(",");
  for (let i = 0; i < nums.length; i++) {
    if (!Number(nums[i])) {
      throw new ExpressError(`${nums[i]} is not a number`, 400);
    }
  }
  const med = median(nums);
  return res.json({ operation: "median", value: med });
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("You must enter numbers separated by commas", 400);
  }

  const nums = req.query.nums.split(",");
  for (let i = 0; i < nums.length; i++) {
    if (!Number(nums[i])) {
      throw new ExpressError(`${nums[i]} is not a number`, 400);
    }
  }
  const freq = mode(nums);
  return res.json({ operation: "mode", value: freq });
});

app.use(function (err, req, res, next) {
  let status = err.status || 400;
  let message = err.msg;
  console.log(err);

  return res.json({
    message: message,
    status: status,
  });
});

app.listen(3000, function () {
  console.log("Server is started on port 3000");
});
