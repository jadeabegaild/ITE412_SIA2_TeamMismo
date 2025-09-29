const queue = require('./queueSystem');

// MIS Officer processing logic
function processTicket(ticket) {
  // Auto-assign based on priority
  let assignedOfficer = 'General Support';
  if (ticket.priority === 'high' || ticket.priority === 'critical') {
    assignedOfficer = 'Senior Tech Officer';
  }
  
  // Simulate processing time
  const processingTime = Math.random() * 2000 + 1000; // 1-3 seconds
  
  setTimeout(() => {
    console.log('====================================');
    console.log(`[Consumer] PROCESSED TICKET: ${ticket.ticketId}`);
    console.log(`          User: ${ticket.userType} (ID: ${ticket.userId})`);
    console.log(`          Issue: "${ticket.issue}"`);
    console.log(`          Priority: ${ticket.priority}`);
    console.log(`          Assigned to: ${assignedOfficer}`);
    console.log(`          Processed in: ${processingTime.toFixed(0)}ms`);
    console.log('====================================\n');
  }, processingTime);
}

// Subscribe to the queue
console.log('[Consumer] MIS Officer started - waiting for tickets...\n');
queue.subscribe(processTicket);

// Keep the consumer running
setInterval(() => {
  // Just keep the process alive
}, 1000);