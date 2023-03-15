function mean(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += Number(nums[i]);
  }
  return total / nums.length;
}

function median(nums) {
  let len = nums.length;
  let numArr = [];
  for (let i = 0; i < len; i++) {
    numArr.push(Number(nums[i]));
  }
  numArr = numArr.sort(function (a, b) {
    return a - b;
  });

  let med;
  if (len % 2 === 0) {
    let index = len / 2;
    let firstMed = numArr[index];
    let secMed = numArr[index - 1];
    med = (firstMed + secMed) / 2;
  } else {
    let index = Math.floor(len / 2);
    med = numArr[index];
  }

  return med;
}

function mode(nums) {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in count) {
      count[nums[i]]++;
    } else {
      count[nums[i]] = 1;
    }
  }

  let val = Object.values(count);
  let key = Object.keys(count);

  let max = 0;
  let index = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] > max) {
      max = val[i];
      index = i;
    }
  }
  return Number(key[index]);
}

module.exports = { mean, median, mode };
