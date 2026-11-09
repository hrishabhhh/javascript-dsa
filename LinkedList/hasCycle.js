// 1 -> 2 -> 3 -> 4
//      ^         |
//      |_________|

function hasCycle(head) {
  let visited = new Set();
  let current = head;

  while (current != null) {
    if (visited.has(current)) return true;

    visited.add(current);
    current = current.next;
  }
  return false;
}

// const node3 = { val: 3, next: null };
// const node2 = { val: 2, next: node3 };
// const node1 = { val: 1, next: node2 };

// console.log(hasCycle(node1)); // false

// const n4 = { val: 4, next: null };
// const n3 = { val: 3, next: n4 };
// const n2 = { val: 2, next: n3 };
// const n1 = { val: 1, next: n2 };

// n4.next = n2;

// console.log(hasCycle(n1)); // true

// console.log(hasCycle(null)); // false

function hasCycleOptimized(head) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }
  return false;
}

const node3 = { val: 3, next: null };
const node2 = { val: 2, next: node3 };
const node1 = { val: 1, next: node2 };

console.log(hasCycleOptimized(node1)); // false

const n4 = { val: 4, next: null };
const n3 = { val: 3, next: n4 };
const n2 = { val: 2, next: n3 };
const n1 = { val: 1, next: n2 };

n4.next = n2;

console.log(hasCycleOptimized(n1)); // true

console.log(hasCycleOptimized(null)); // false
