// list1 = [1, 2, 4]
// list2 = [1, 3, 4]

// output: [1, 1, 2, 3, 4, 4]

function mergeTwoList(list1, list2) {
  let dummy = { val: -1, next: null };
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
}

function createList(arr) {
  let dummy = { val: -1, next: null };
  let current = dummy;

  for (let value of arr) {
    current.next = { val: value, next: null };
    current = current.next;
  }

  return dummy.next;
}

function printList(head) {
  let result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

let list1 = createList([1, 2, 4]);
let list2 = createList([1, 3, 4]);

let merged = mergeTwoList(list1, list2);

console.log(printList(merged));
