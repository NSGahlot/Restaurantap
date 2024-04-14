var mergeTwoLists = function (list1, list2) {
  const dummyNode = new ListNode();
  let currentNode = dummyNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  if (list1) {
    currentNode.next = list1;
  } else {
    currentNode.next = list2;
  }

  return dummyNode.next;
};
