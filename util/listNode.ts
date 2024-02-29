export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export class CreateListNode {
    head: ListNode | null = null;

    constructor(arr: number[]) {
        arr.forEach(item => {
            this.add2Tail(item);
        })
    }
    
    add2Tail(val: number) {
        const node = new ListNode(val);
        let pred = this.head;
        // 头节点
        if(!pred) {
            this.head = node;
        }else {
            while(pred.next) {
                pred = pred?.next
            }
            pred.next = node;
        }
    }
}