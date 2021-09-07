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
var isPalindrome = function (head) {
    if (head === null || head.next === null) return true;

    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = reverseList(slow.next);
    slow = slow.next;

    while (slow !== null) {
        if (head.val !== slow.val) return false;

        head = head.next;
        slow = slow.next;
    }
    return true;
};

function reverseList(head) {
    let prev = null;
    let next = null;

    while (head !== null) {
        next = head.next;
        head.next = prev;

        prev = head;
        head = next;
    }
    return prev;
}