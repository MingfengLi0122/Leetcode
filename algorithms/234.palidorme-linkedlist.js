/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function reverseList(head) {
    let prev = null;
    let next = null;

    while (head !== null) {
        next = head.next;
        head.next = prev;

        prev = head;
        head = head.next;
    }
    return prev;
}

var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = reverseList(slow.next);
    slow = slow.next;

    while (slow !== null) {
        if (slow.val !== head.val) return false;

        slow = slow.next;
        head = head.next;
    }
    return true;
};