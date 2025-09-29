const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-Memory Data Stores (our dummy databases)
let issues = [
  { id: 1, title: "Projector not working", description: "Projector in Room 101 has no power.", reporter: "student_123", status: "reported" },
  { id: 2, title: "Slow internet in library", description: "Wi-Fi is very slow on the 2nd floor.", reporter: "faculty_456", status: "reported" }
];

let tickets = [
  { id: 1, issueId: 1, assignedOfficer: "officer_john", priority: "high", status: "assigned" },
  { id: 2, issueId: 2, assignedOfficer: "officer_mary", priority: "medium", status: "in-progress" }
];

// --- MODULE 1: ISSUES ENDPOINTS ---

// GET /issues -> Retrieve all reported issues
app.get('/issues', (req, res) => {
  res.json(issues);
});

// POST /issues -> Report a new issue
app.post('/issues', (req, res) => {
  const newIssue = {
    id: issues.length + 1,
    name: req.body.name,
    position: req.body.position,
    concern: req.body.concern,
    status: req.body.status // default status when first reported
  };
  issues.push(newIssue);
  res.status(201).json(newIssue); // 201 status for "Created"
});

// --- MODULE 2: TICKETS ENDPOINTS ---

// GET /tickets -> Retrieve all tickets
app.get('/tickets', (req, res) => {
  res.json(tickets);
});

// POST /tickets -> Create a new ticket (assign an issue to an MIS officer)
app.post('/tickets', (req, res) => {
  const newTicket = {
    id: tickets.length + 1,
    issueId: req.body.issueId,
    assignedOfficer: req.body.assignedOfficer,
    priority: req.body.priority,
    status: req.body.status // default status when a ticket is created
  };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Campus Issue Tracker API is running on http://localhost:${PORT}`);
});