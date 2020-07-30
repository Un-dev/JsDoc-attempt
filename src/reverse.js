import LinkedList from './LinkedList'
import ListNode from './ListNode'

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
node1.append(node2)
node2.append(node3)

let list = new LinkedList(node1)

console.log(list.toString())

let node4 = new ListNode(4)
let node5 = new ListNode(5)

list.push(node4)
list.push(node5)
console.log(list.toString())

list = new LinkedList(list.iterativeReverse())

console.log(list.toString())

list = new LinkedList(list.recursiveReverse())

console.log(list.toString())
