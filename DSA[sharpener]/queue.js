class Queue {
    constructor(n) {
        this.data = [];
        this.front = 0;
        this.rear = -1;
        this.size = n; 
    }

    enqueue(element) {
        if(this.rear === this.size - 1) {
            return "overflow condition";
        }
        this.rear++;
       this.data[this.rear] = element;
       
       return element;
    };

    dequeue() {
        if (this.isEmpty()) {
          return "underflow";
        }
      const ele = this.data[this.front]
      delete this.data[this.front];
      this.front++;
      return ele;
    };

    isEmpty() {
        return this.front > this.rear;
    };

    getFirstElement() {
            return this.data[this.front];
        
    }
};

const queue = new Queue(3);
console.log(queue.enqueue(10)); 
console.log(queue.enqueue(20)); 
console.log(queue.enqueue(30)); 
console.log(queue.dequeue());   
console.log(queue.isEmpty());   
console.log(queue.getFirstElement()); 
