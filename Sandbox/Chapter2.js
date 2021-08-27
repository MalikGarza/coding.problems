class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SinglyLinkedList {
    constructor(head){
        this.head = head;
    }

    print(node){
        if(node === null) return 'END';
        return node.data + ' --> ' + this.print(node.next);
    }

    add(data){
        let newNode = new Node(data);
        let lastNode = this.head;
        while(lastNode.next !== null){
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    deleteAt(index) {
        let currentNode = this.head;
        let previousNode = null;
        while(currentNode !== null && index > 0){
            previousNode = currentNode;
            currentNode = currentNode.next;
            index--
        }
        if(currentNode === null) return null;
        previousNode.next = currentNode.next;
        return currentNode;
    }
}

let head = new Node(0);
let linkedList = new SinglyLinkedList(head);
for(let i = 1; i <= 10; i++) linkedList.add(i);
console.log(linkedList.print(linkedList.head));
linkedList.deleteAt(4);
console.log(linkedList.print(linkedList.head));

/**
 * Question 1: remover duplicates in an unordered list
 * Are other data structures allowed?
 * Do we have to preserve the current order?
 * If we have to preserve order I would use a dictionary to keep track of data values we have seen. If that value has already been
 * seen then remove it from the linked list and continue.
 */

/**
 * Question 2: print kth to last element
 * Modify the deleteAt method to just go to the kth element and then call print at that element.
 */

/**
 * Question 3: Remove a node that is not the start or end of a linked list, given only access to the head and that node.
 * Check if the given node has a next, if it is does not then do not remove it as it is invalid.
 * Start at the head and check each next to see if the values match. Once a next does match then change the given next 
 * with the next of the given node
 */

/**
 * Question 4: Given a Number X, partition the list so that numbers < x are at the beginning and numbers >= x are at the end
 * use 3 trackers. the current node, the first non-moved higher node, and the last ordered lesser node.
 * step through the list, track the first higher node, then keep moving the current node until we hit a lessert node.
 * Set the lesser node .next equal to the first non-moved higher node. After that every time we see a lesser node
 * move it to the .next of the last lesser node, and every time we see a greater than node, just move it also to the ened 
 * of the lesser nodes
 */

/**
 * Question 5: Given two linked lists of single digit numbers, add them where the head is the ones places.
 * 
 * Add the heads, add sum % 10 to list, store sum // 2. Go to the next index and do the same and continue until
 * you run out of elements to parse in both lists.
 * then return the new list.
 */

/**
 * Question 6: Check for a palindrome.
 * use a doubly linked list with a tail.
 * Check that the value of the head and tail are equal then move them closer together and 
 * check until head index is greater than tail index.
 */

/**
 * Question 7: Find the intersection:
 * Use a dictionary and scan through one of the linked lists. Then scan through the other linked list
 * and check if we have already seen that value, and if we have, then return it.
 */

/**
 * Question 8: loop detection.
 * Do the same thing as Question 7, but instead of scanning two lists scan one and if happen upon
 * a duplicate, then return the duplicate.
 */