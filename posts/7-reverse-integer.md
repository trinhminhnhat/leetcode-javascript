---
id: 7
title: "7. Reverse Integer"
difficulty: "medium"
topics: ["Math"]
---

Given a signed 32-bit integer <mark>x</mark>, return <mark>x</mark> with its digits reversed. If reversing <mark>x</mark> causes the value to go outside the signed 32-bit integer range <mark>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</mark>, then return <mark>0</mark>.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

**Example 1:**

```text
Input: x = 123
Output: 321
```

**Example 2:**

```text
Input: x = -123
Output: -321
```

**Example 3:**

```text
Input: x = 120
Output: 21
```

**Constraints:**

- <mark>-2<sup>31</sup> <= x <= 2<sup>31 </sup>- 1</mark>

## Solution

### Method 1 (recommend)

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;

    while (x !== 0) {
        const lastDigit = x % 10;
        reverse = (reverse * 10) + lastDigit;

        // remove lastDigit
        x = parseInt(x / 10);
    }

    return reverse > (Math.pow(2, 31) - 1) || reverse < Math.pow(-2, 31)
        ? 0 : reverse;
};
```

- Explain

    None

- Complexity

    - Time complexity : O(log(n)).
    - Space complexity : O(1).

### Method 2

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed = x.toString().split('').reverse().join('');
    const result = parseInt(reversed) * Math.sign(x);

    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }

    return result;
};
```

- Explain

    The <mark>Math.sign()</mark> static method returns <mark>1</mark> or <mark>-1</mark>, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.

- Complexity

    - Time complexity : O(log(n)).
    - Space complexity : O(n).
