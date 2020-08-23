class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.queue.length === 0) {
      return undefined;
    }

    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.queue);
console.log(myQueue.dequeue());
console.log(myQueue.queue);
console.log(myQueue.isEmpty());
