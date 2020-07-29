import ListNode from './ListNode'
export default class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    
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

