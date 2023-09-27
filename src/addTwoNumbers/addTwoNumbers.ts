// Definition for singly-linked list.
 export class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function addTwoNumbersWithCarry(l1: ListNode | null, l2: ListNode | null, carryOver: number): ListNode | null {
    if(!l1 && !l2 && carryOver === 0) return null;

    let newCarry = 0
    const result = new ListNode();

    let l1Val = l1?.val || 0;
    let l2Val = l2?.val || 0;
    if(l1Val + l2Val + carryOver >= 10) {
        result.val = l1Val + l2Val + carryOver - 10
        newCarry = 1;
    } else{
        result.val = l1Val + l2Val + carryOver
    }

    result.next = addTwoNumbersWithCarry(l1?.next || null, l2?.next || null, newCarry);
    return result;
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoNumbersWithCarry(l1, l2, 0);
};
