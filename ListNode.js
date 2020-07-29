export default class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }

    getNext(){
        return this.next
    }

    getData(){
        return this.data
    }

    append(node){
        this.next = node
    }

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

