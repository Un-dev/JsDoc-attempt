/**@class */
class ListNode {
    
    /**
    * Create a node.
    * @constructor
    */
    constructor(data) {
        this.data = data
        this.next = null                
    }

    /**
    * Get the next node.
    * @return {pointer} The next Node in the list
    */
    getNext(){
        return this.next
    }

    /**
    * Get the next data of the current node.
    * @return {any} The data of the current node
    */
    getData(){
        return this.data
    }

    /**
    * Append a node to current one.
    * @param {ListNode} The node you want to append.
    */
    append(node){
        this.next = node
    }

    /**
    * Reverse a node pointer to the previous one in the list.
    * @param {ListNode} The node you want to append.
    * @returns {pointer} The new head
    */
    recursiveReverse(prev = null){
        let curr = this
        let next = curr.getNext()
        let head = curr
        if(next != null){
            head = next.recursiveReverse(curr)
        }
        curr.next = prev
        return head
    }
}

export default ListNode
