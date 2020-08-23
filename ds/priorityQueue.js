class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    if (this.isQueueEmpty()) {
      this.queue.push(value);
      console.log(this.queue);
    } else {
      let added = false;
      for (let i = 0; i < this.queueSize(); i++) {
        if (value[1] < this.queue[i][1]) {
          this.queue.splice(i, 0, value);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(value);
      }
    }
  }
  dequeue() {
    return this.queue.shift();
  }
  queueSize() {
    return this.queue.length;
  }
  isQueueEmpty() {
    return this.queue.length === 0;
  }
  printQueue() {
    console.log(this.queue);
  }
}

let myPriorityQueue = new PriorityQueue();
myPriorityQueue.enqueue(["Hi I'm Dill", 2]);
myPriorityQueue.enqueue(['Hi Smiile I am', 3]);
myPriorityQueue.printQueue();
myPriorityQueue.enqueue(['Hi I am a Boss', 1]);
myPriorityQueue.printQueue();
myPriorityQueue.dequeue();
myPriorityQueue.printQueue();
