const queue = require('./queueSystem');

function submitTicket() {
  // Sample ticket data
  const tickets = [
    {
      ticketId: `TKT-${Date.now()}-1`,
      userId: 101,
      userType: 'student',
      issue: 'Projector in Room 101 not working',
      priority: 'high',
      timestamp: new Date().toISOString()
    },
    {
      ticketId: `TKT-${Date.now()}-2`,
      userId: 202,
      userType: 'faculty',
      issue: 'Slow internet in Faculty Lounge',
      priority: 'medium',
      timestamp: new Date().toISOString()
    },
    {
      ticketId: `TKT-${Date.now()}-3`,
      userId: 303,
      userType: 'staff',
      issue: 'Printer jam in Admin Office',
      priority: 'low',
      timestamp: new Date().toISOString()
    }
  ];

  // Submit each ticket to the queue
  tickets.forEach((ticket, index) => {
    setTimeout(() => {
      queue.publish(ticket);
      console.log(`[Producer] Submitted: ${ticket.ticketId} - "${ticket.issue}"`);
    }, index * 1000); // Stagger submissions by 1 second
  });
}

// Run the producer
submitTicket();