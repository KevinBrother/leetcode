/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */


class MyListNode {
    val = 0;
    next: MyListNode | null = null;
    constructor(val = 0, next: MyListNode | null= null) {
        this.val = val;
        this.next = next;
    }
}

// @lc code=start
class MyLinkedList {
    head = new MyListNode(0, null);
    size = 0;

    constructor() {
    }

    get(index: number): number {
        if(index >= this.size) {
            return -1;
        }

        let pred = this.head;

        while (index >= 0) {
            pred = pred.next!;
            index--;
        }

        return pred?.val;
    }

    addAtHead(val: number): void {
       this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        let pred = this.head;
        this.size++;
        while(pred.next !== null) {
            pred = pred.next
        }
        const node = new MyListNode(val);

        pred.next = node
    }

    addAtIndex(index: number, val: number): void {
        if(index > this.size) {
            return;
        }

        index = Math.max(0, index);
        let pred = this.head;
        this.size++;

        for (let i = 0; i < index; i++) {
            pred = pred.next!;
        }

        let toAdd = new MyListNode(val);
        toAdd.next = pred.next;
        pred.next = toAdd;
    
    }

    deleteAtIndex(index: number): void {
        if(index >= this.size ) {
            return;
        }
        this.size--;
        
        let pred = this.head;

        for(let i = 0; i < index; i++) {
            pred = pred.next!;
        }
        // @ts-ignore
        pred.next = pred.next?.next;
    }
}

var obj = new MyLinkedList()
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(0,2)
obj.deleteAtIndex(1)
var param_1 = obj.get(1)

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

