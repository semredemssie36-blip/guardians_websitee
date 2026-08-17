const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Guardians Diagnostic Center API is running!' });
});

// Appointment routes
app.post('/api/appointments', (req, res) => {
  // Handle appointment booking
  const { fullName, phone, email, service, preferredDate, preferredTime, message } = req.body;
  
  // TODO: Save to database
  console.log('New appointment request:', req.body);
  
  res.json({ 
    success: true, 
    message: 'Appointment request received successfully!',
    appointmentId: Date.now() // Temporary ID
  });
});

// Contact form routes
app.post('/api/contact', (req, res) => {
  // Handle contact form submissions
  const { name, email, phone, subject, message } = req.body;
  
  // TODO: Send email notification
  console.log('New contact form submission:', req.body);
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!' 
  });
});

// Corporate inquiry routes
app.post('/api/corporate-inquiry', (req, res) => {
  // Handle corporate service inquiries
  const { companyName, contactPerson, email, phone, services, employeeCount, message } = req.body;
  
  // TODO: Save to database and send notification
  console.log('New corporate inquiry:', req.body);
  
  res.json({ 
    success: true, 
    message: 'Corporate inquiry received. Our team will contact you within 24 hours.' 
  });
});

// Home sample collection routes
app.post('/api/home-collection', (req, res) => {
  // Handle home sample collection requests
  const { fullName, phone, address, tests, preferredDate, preferredTime } = req.body;
  
  // TODO: Save to database
  console.log('New home collection request:', req.body);
  
  res.json({ 
    success: true, 
    message: 'Home collection request received. We will contact you to confirm the appointment.' 
  });
});

// Get services
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Laboratory Services',
      description: 'Comprehensive laboratory testing including hematology, clinical chemistry, and more.',
      available: true,
      category: 'current'
    },
    {
      id: 2,
      name: 'Digital X-Ray',
      description: 'Advanced digital X-ray imaging services with quick results.',
      available: true,
      category: 'current'
    },
    {
      id: 3,
      name: 'Ultrasound',
      description: 'Professional ultrasound imaging for various diagnostic needs.',
      available: true,
      category: 'current'
    },
    {
      id: 4,
      name: 'ECG',
      description: 'Electrocardiogram testing for heart health monitoring.',
      available: true,
      category: 'current'
    },
    {
      id: 5,
      name: 'General Consultation',
      description: 'Professional medical consultation and health guidance.',
      available: true,
      category: 'current'
    },
    {
      id: 6,
      name: 'CT Scanning',
      description: 'Advanced CT scanning services for detailed imaging.',
      available: false,
      category: 'future'
    },
    {
      id: 7,
      name: 'Mammography',
      description: 'Specialized breast imaging services.',
      available: false,
      category: 'future'
    }
  ];
  
  res.json(services);
});

// Get health packages
app.get('/api/health-packages', (req, res) => {
  const packages = [
    {
      id: 1,
      name: 'Basic Health Screening',
      description: 'Essential health tests for general wellness monitoring.',
      tests: ['CBC', 'Blood Sugar', 'Cholesterol', 'Blood Pressure'],
      targetAudience: 'Individuals',
      price: null, // To be determined
      available: true
    },
    {
      id: 2,
      name: 'Comprehensive Health Screening',
      description: 'Complete health assessment with detailed laboratory work.',
      tests: ['CBC', 'Liver Function', 'Kidney Function', 'Lipid Profile', 'ECG', 'Chest X-Ray'],
      targetAudience: 'Adults over 40',
      price: null,
      available: true
    },
    {
      id: 3,
      name: 'Pre-Employment Screening',
      description: 'Medical clearance for employment requirements.',
      tests: ['General Physical', 'Chest X-Ray', 'Basic Lab Tests'],
      targetAudience: 'Job Applicants',
      price: null,
      available: true
    }
  ];
  
  res.json(packages);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});