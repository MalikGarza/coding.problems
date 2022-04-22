class LinkedListNode extends Node {
    value: string[];
    next: LinkedListNode;
    public LinkedListNode(value: string[]) {
        this.value = value;
        this.next = null;
    }
}

class RootNode extends LinkedListNode {
    children: LinkedListNode[];
    public RootNode(children: LinkedListNode[]) {
        this.children = children
    }

    addBranch(newBranch: LinkedListNode) {
        this.children.push(newBranch);
    }

}

class BacktrackingTree {
    root: RootNode;
    public LinkedList(root: RootNode) {
        this.root = root;
    }
}


let guy_preferences = {
    'andrew': ['caroline', 'abigail', 'betty'],
    'bill': ['caroline', 'betty', 'abigail'],
    'chester': ['betty', 'caroline', 'abigail'],
}

let gal_preferences = {
    'abigail': ['andrew', 'bill', 'chester'],
    'betty': ['bill', 'andrew', 'chester'],
    'caroline': ['bill', 'chester', 'andrew']
}

let getMatches(guy_preferences, gal_preferences){
    let root = new RootNode();
    
}