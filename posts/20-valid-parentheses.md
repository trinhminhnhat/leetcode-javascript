---
title: "20. Valid Parentheses"
difficult: "easy"
---

# 20. Valid Parentheses

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```text
Input: s = "()"
Output: true
```

**Example 2:**

```text
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```text
Input: s = "(]"
Output: false
```

**Constraints:**

- 1 <= s.length <= 104
- s consists of parentheses only `'()[]{}'`.
