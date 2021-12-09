class Node {
  constructor(character, index) {
    this.value = character;
    this.index = index;
    this.prev = [];
    this.next = [];
  }

  isEqual(otherNode) {
    return this.value === otherNode.value && this.index === otherNode.index;
  }
}

//Create a trie, compare differences