"use strict";
//제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐: 선형자료구조, FIFO(first-in-first-out)선입선출...
class GenericQueue {
    constructor() {
        this.items = [];
    }
    //큐를 데이터에 추가할 메서드
    enqueue(item) {
        this.items.push(item);
    }
    //큐의 맨처음 데이터를 꺼냄
    dequeue() {
        return this.items.shift();
    }
    //큐의 맨처음 데이터를 확인
    peek() {
        return this.items[0];
    }
    //큐의 사이즈 반환
    size() {
        return this.items.length;
    }
}
const stringQ = new GenericQueue();
stringQ.enqueue("안녕");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enqueue("타입스크립트");
console.log(stringQ.size());
console.log(stringQ.peek());
