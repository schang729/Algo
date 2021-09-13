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

    addFront(val) {
        var newNode = new SLLNode(val); 
        newNode.next = this.head; 
        this.head = newNode; 
        return this;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    removeFront(head) {
        
        if (head == null)
            return null; 
        var nodeToRemove = new SLLNode(head)
        this.head = nodeToRemove.next;
        return this.head

    }
 }


 class SLL {
     constructor(){
        this.head = null;


     }
     front(head) {
        if (head == null)
            return null;
        var nodeValue = new SLLNode(head)
        return nodeValue.value
        
        
        
    	
    }
 }