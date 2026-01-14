const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Load the Knowledge Bases
const studentData = require('./data.json');
const universityKnowledge = require('./knowledge.json');

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Gemini
const API_KEY = process.env.GEMINI_API_KEY;
// Check if API key is present
if (!API_KEY) {
  console.warn("Warning: GEMINI_API_KEY is not set in .env file.");
}
const genAI = new GoogleGenerativeAI(API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" }); // Updated to model mentioned by user

app.post('/api/chat', async (req, res) => {
  const { message, studentId } = req.body;

  if (!studentId) {
    return res.status(400).json({ answer: "Error: Student ID is required." });
  }

  // Step 1: Retrieval (RAG)
  const student = studentData[studentId];

  if (!student) {
    return res.status(404).json({ answer: "I could not find a student record with that ID." });
  }

  // Step 2: Prompt Engineering
  const prompt = `
You are the "OBS Assistant" for Izmir University of Economics (IUE). 
You are helpful, polite, and concise.

=== CURRENT STUDENT CONTEXT ===
Name: ${student.name}
Department: ${student.department}
GPA: ${student.gpa}
Courses: ${JSON.stringify(student.courses)}
Upcoming Exams: ${JSON.stringify(student.upcoming_exams)}
Announcements: ${JSON.stringify(student.announcements)}

=== UNIVERSITY KNOWLEDGE BASE (PROCEDURES) ===
${JSON.stringify(universityKnowledge)}

=== USER QUESTION ===
"${message}"

=== INSTRUCTIONS ===
- Respond in English by default, even if the context contains Turkish terms.
- Answer based ONLY on the provided student context and knowledge base.
- If asked "How to" do something (like register), use the "steps" from the Knowledge Base.
- If the user asks about something not in the context, politely say you don't have that information.
- If asked for "Grades", mention the GPA.
- If asked for "Schedule" or "Classes", list the courses with times and classrooms.
- Keep responses brief and natural (chat-like).
`;

  try {
    // Step 3: Generation
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ answer: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error.status === 403 && error.message.includes("leaked")) {
      res.status(403).json({ answer: "The API key in use has been flagged as leaked and disabled. Please update the .env file with a new key." });
    } else if (error.status === 429) {
      res.status(429).json({ answer: "The AI is currently busy (quota reached). Please try again in a minute." });
    } else {
      res.status(500).json({ answer: "I'm having trouble connecting to the AI service right now." });
    }
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
