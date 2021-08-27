/**
 * Question 1: How would you implement 3 stacks in a single array
 * Do we know the maximum number of elements that will be in the array at any given time?
 * Will we need to risize the stacks?
 * Create a new class called 3Stack that takes in the lengths of the 3 stacks.
 * Note a simple implementatoin will be done without resizing.
 * Hold the length of the 3 stacks in memory as well as the top index of each stack.
 * Create push, pop, peek, and isEmpty with stack numbers or enumerations to be passed in to vary where we return.
 * keep track of the top index of each stack and if top index + 1 is available, add it to that index per stack
 * remove the top for pop,
 * give them the top data for peek
 * and isEmpty will check that the stacks first index is empty.
 * We could also use a normalize function so that our code isn't too complicated as far as calculating length and indexes go
 */

/**
 * Question 2: How would you design a stack with push pop and min. 
 * inside this new stack class also keep a stack that will have the same number of elements as in this current stack.
 * inside the users stack class we will store a min value, and when a new item is pushed, we will find the current min and also
 * push that onto the storage min stack. When we pop we will pop the min stack and assign that as the new min.
 */

/**
 * Question 3: Stack of Plates, given a specific size, when a stack reaches that size, create a new stack and 
 * pop and push from that stack as if it was the top of the previous size
 * I would utilize a wrapper class that would hold an array of stacks, and as a stack emptied i would utilize 
 * pop in the matrix of that entry so that the length would decrease from the overarcher array to keep push and pop at constant
 * time
 */
let stacks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(stacks.length);
stacks.pop();
console.log(stacks);

/**
 * Question 4: Create a Queue using two stacks
 * Brute force solution, push all elements into stack 1. When using pop, while stack 1
 * has elements, pop them into stack two. then pop off the top element. when pushing
 * continue to push elements into stack 1. when popping pop off of stack 2 until it is
 * empty, once empty, refill it with stack 1 pops.
 */

/**
 * 
 */