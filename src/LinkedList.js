import ListNode from './ListNode'

/**@class */
class LinkedList {
    
    /**
    * Create a LinkedList.
    * @constructor
    */
    constructor(head = null) {
        this.head = head
    }
    
    /**
    * Push a node at the end of the list.
    * @param {ListNode} The node you want to push
    */
    push(node){
        let curr = this.head
        let next = curr.next
        let end = false
        while (!end){
            if(next == null){
                curr.append(node)
                end = true
            }else{
                curr = next
                next = curr.next
            }
        }   
    }

    /**
    * Represents a LinkedList in the form of a String.
    * @return {String} Every node of the list seperated by a comma
    */
    toString(){
        let res = ''
        let curr = this.head
        let end = false
        while(!end) {
            res += curr.data
            if(curr.next != null){
                res += ', '
            }else{
                end = true
            }
            curr = curr.next
        }
        return res
    }

    /**
    * Reverse a list the iterative way.
    * @return {pointer} The head of the reversed list
    */
    iterativeReverse(){
        let prev = null
        let curr = this.head
        let next = null
        let head = null
        let end = false
        while(curr!=null){
            next = curr.getNext()
            curr.append(prev)
            prev = curr
            curr = next   
        }
        return prev
    }

    /**
    * Reverse a list the recursive way.
    * @return {pointer} The head of the reversed list
    */
    recursiveReverse(prev = null){
        let curr = this.head
        let next = curr.getNext()
        let head = curr
        if(next != null){
            head = next.recursiveReverse(curr)
        }
        curr.next = prev
        return head
    }
}

export default LinkedList
