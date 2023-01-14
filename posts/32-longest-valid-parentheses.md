---
id: 32
title: "Longest Valid Parentheses"
difficulty: "hard"
topics: ["String", "Dynamic Programming", "Stack"]
---

Given a string containing just the characters <mark>'('</mark> and <mark>')'</mark>, return the length of the longest valid (well-formed) parentheses substring.

**Example 1:**

```text
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

**Example 2:**

```text
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

**Example 3:**

```text
Input: s = ""
Output: 0
```

**Constraints:**

- 0 <= s.length <= 3 * 104
- <mark>s[i]</mark> is <mark>'('</mark>, or <mark>')'</mark>.
