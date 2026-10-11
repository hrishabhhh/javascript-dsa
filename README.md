# JavaScript DSA Practice 🚀

A dedicated space for practicing **JavaScript, Data Structures &
Algorithms (DSA), and coding-interview problem solving** during gaps
between project work.

This repository is my ongoing practice log---not just a collection of
solutions. The goal is to understand _why_ an approach works, learn to
compare brute-force and optimized solutions, and become more confident
explaining code in technical interviews.

## 🎯 Goals

- Strengthen JavaScript fundamentals through practical problem
  solving.
- Build pattern recognition for common DSA interview questions.
- Start with a clear brute-force approach, then optimize when
  appropriate.
- Practice dry runs with real inputs and trace variables step by step.
- Understand time and space complexity instead of memorizing answers.
- Keep a consistent Git history by committing each completed problem.

## 🧠 Practice Workflow

For each problem, follow this process:

1.  **Understand the problem** --- identify the inputs, expected output,
    and edge cases.
2.  **Explain the idea** --- describe the approach in plain language
    before coding.
3.  **Start with brute force** --- get a correct solution first.
4.  **Dry run the code** --- trace indexes, variables, conditions, and
    return values.
5.  **Analyze complexity** --- identify time and auxiliary-space
    complexity.
6.  **Optimize** --- look for useful patterns such as a hash map, set,
    two pointers, or sliding window.
7.  **Test edge cases** --- include empty inputs, duplicates, boundary
    values, and other relevant cases.
8.  **Commit the solution** --- save progress with a descriptive Git
    commit.

> The priority is understanding the solution well enough to explain it
> independently---not simply getting accepted output.

## 📚 Topics & Problems Practiced

### 1. Arrays

- [x] Find the maximum and minimum element
- [x] Find the second-largest element
- [x] Check whether an array is sorted
- [x] Reverse an array using two pointers
- [x] Move zeroes to the end while preserving the order of other
      elements
- [x] Remove duplicates from a sorted array
- [x] Rotate an array left by one position
- [x] Rotate an array left by `k` positions using reversal
- [x] Find the missing number
- [x] Find the element that appears once using XOR
- [x] Find the maximum number of consecutive ones
- [x] Maximum subarray sum --- Kadane's algorithm
- [x] Best Time to Buy and Sell Stock

### 2. Hashing: `Map` and `Set`

- [x] Two Sum --- use a `Map` to find a complement
- [x] Contains Duplicate --- use a `Set` to track seen values

### 3. Sliding Window

- [x] Longest subarray with sum `K` --- brute-force approach
- [x] Longest subarray with sum `K` --- sliding window for **positive
      integers**
- [ ] Longest Substring Without Repeating Characters

**Important:** The sliding-window approach for a target sum that
repeatedly shrinks the window when `sum > target` relies on all array
values being positive (or otherwise satisfying the needed monotonic
behavior). It is not a general solution for arrays containing negative
numbers.

### 4. Upcoming Areas

- [ ] Strings and character frequency
- [ ] Two pointers
- [ ] Prefix sums
- [ ] Binary search
- [ ] Sorting and searching
- [ ] Recursion and backtracking
- [ ] Linked lists
- [ ] Stacks and queues
- [ ] Trees and binary search trees
- [ ] Heaps and priority queues
- [ ] Graphs
- [ ] Dynamic programming

These are a roadmap, not a claim that every topic has already been
covered. Add problems as they are practiced.

## 🧰 Tech Stack

- **Language:** JavaScript
- **Runtime:** Node.js
- **Editor:** Visual Studio Code
- **Version control:** Git and GitHub

## ▶️ Run a Solution

Run a JavaScript file with Node.js:

```bash
node path/to/solution.js
```

For example, if a solution is saved at the repository root:

```bash
node two-sum.js
```

Use the actual filename and folder structure in this repository.

## 📈 Complexity Cheat Sheet

Complexity Typical meaning

---

`O(1)` Constant work
`O(log n)` Logarithmic growth, often binary search
`O(n)` Linear work through the input
`O(n log n)` Common efficient sorting complexity
`O(n²)` Often nested loops over the input

Complexity depends on the specific implementation. For space complexity,
distinguish **auxiliary space** (extra memory used by the algorithm)
from memory occupied by the input itself.

## 💾 Git Commit Routine

After solving and testing a problem:

```bash
git status
git add .
git commit -m "Solve <problem-name> in JavaScript"
git push
```

Example commit messages:

```bash
git commit -m "Solve Two Sum using Map"
git commit -m "Solve longest subarray using sliding window"
```

Review `git status` before committing to ensure only the intended files
are included.

## 🗂️ Suggested Organization

Keep the current structure if the repository already has one. If it
becomes difficult to navigate, a structure like this can help:

```text
javascript-dsa/
├── README.md
├── arrays/
├── hashing/
├── sliding-window/
├── strings/
├── binary-search/
├── linked-lists/
├── stacks-queues/
├── trees/
├── graphs/
└── dynamic-programming/
```

Each solution can include a short problem statement, approach,
implementation, complexity, and sample test cases. Avoid duplicating
lengthy explanations if they are already documented elsewhere.

## ✅ Definition of Done

A problem is considered complete when I can:

- Explain the approach in my own words.
- Write the solution without blindly copying it.
- Dry-run it on a sample input.
- Explain why it works and identify important edge cases.
- State the time and space complexity.
- Compare the brute-force approach with the optimized one, when
  applicable.
- Commit the tested solution to Git.

---

**Consistency over cramming.** This repository is a record of steady
practice and growing problem-solving ability between project tasks.
