
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1 && !list2) return null;
    const newNode = new ListNode();
    if(!list1 && list2){
        newNode.val = list2.val;
        newNode.next = mergeTwoLists(null, list2.next);
    } else if (list1 && !list2){
        newNode.val = list1.val
        newNode.next = mergeTwoLists(list1.next, null);
    } else {
        if(list1.val <= list2.val){
            newNode.val = list1.val;
            newNode.next = mergeTwoLists(list1.next, list2);
        } else {
            newNode.val = list2.val;
            newNode.next = mergeTwoLists(list1, list2.next);
        }
    }
    return newNode;
};