export default class Node {
    constructor(name, children){
        this.name = name;
        this.children = children ?? [];
    }
}