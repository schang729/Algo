class SLLNode{
    constructor(data){
        this.value = data;
        this.next = null;


    }


}
class SLL {
    constructor() {
        this.head = null; 
    }
    printString(head){
        var list = [];
        var currNode = new SLLNode(head);
        
        while (currNode != null){
            list.push(currNode.value);
            currNode = currNode.next


        }
        var newStringList = list.toString();
        return newStringList
    




    }
}