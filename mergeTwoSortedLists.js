var mergeTwoLists = function (list1, list2) {
    
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    // If list1 is lower
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    // If list2 is lower
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};