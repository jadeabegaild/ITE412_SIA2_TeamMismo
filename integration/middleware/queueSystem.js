// Simple in-memory message queue
class MessageQueue {
  constructor() {
    this.queue = [];
    this.subscribers = [];
  }

  // Add message to queue
  publish(message) {
    this.queue.push(message);
    console.log(`[Queue] Ticket submitted: ${message.ticketId}`);
    
    // Notify all subscribers
    this.notifySubscribers();
  }

  // Subscribe to queue updates
  subscribe(callback) {
    this.subscribers.push(callback);
  }

  // Notify all subscribers when new message arrives
  notifySubscribers() {
    if (this.queue.length > 0) {
      this.subscribers.forEach(callback => {
        callback(this.queue.shift()); // Process and remove from queue
      });
    }
  }

  // Get queue length (for monitoring)
  getLength() {
    return this.queue.length;
  }
}

// Create a single instance to share between producer and consumer
module.exports = new MessageQueue();