// Reverse a singly linked list

// Input:  1 -> 2 -> 3 -> 4 -> 5 -> null

// Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

function singlyReverse(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

const list = {
  data: 10,
  next: {
    data: 20,
    next: {
      data: 30,
      next: {
        data: 40,
        next: null,
      },
    },
  },
};

const reversedList = singlyReverse(list);
let current = reversedList;
while (current) {
  console.log(current.data);
  current = current.next;
}
