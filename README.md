Diet Tracker Application
Diet Tracker Syatem - MERN Stack Project
A comprehensive CRUD application for managing diets, built with the MERN stack (MongoDB, Express, React, Node.js) and Material UI.

Here are some the important links
The app - https://diet-tracker-8a64.onrender.com
The API of the app - https://diet-tracker-8a64.onrender.com
The documentation for the app -https://docs.google.com/document/d/1Z_vKIuTwIqCgjltZAhaIQJnu5eeOu2RxRXLnts4z7Mw/edit?tab=t.0
URL to MongoDB cluster -https://cloud.mongodb.com/v2/675802daa42ce434f9112fbe#/clusters

Features
Core Features
Basic CRUD Operations
Create new books
View book details
Update book information
Delete books
List all books in grid view
Additional Features
Export Options (Multiple formats available)

PDF Export
Excel Export
CSV Export
Text Export
QR Code Generation

Generate QR codes for each book
QR codes link to book details page
Download individual QR codes
Advanced Search & Filter

Search by title, author, ISBN, publisher
Sort by multiple fields
Filter by publisher
Reset filter options
Real-time search results
Dashboard Statistics

Total books count
Unique authors count
Latest book added
Quick access to all features
Notes System

View and manage notes
Markdown support
Organized documentation
Tech Stack
Frontend:

React.js
Material UI
React Router
Axios
Backend:

Node.js
Express.js
MongoDB
Mongoose
Setup Instructions
Prerequisites
Node.js installed
MongoDB Atlas account
Git installed
Code editor (VS Code recommended)
Step 1: Database Setup
Create MongoDB Atlas account
Create new cluster
Create database user
Get connection string
Whitelist IP address
Step 2: Backend Setup
# Clone repository
git clone https://github.com/bscCohort/bkmgmt-deploy.git
cd bkmgmt-deploy

# Install server dependencies
npm install

# Create config.env file in the root directory and add:
ATLAS_URL=your_mongodb_connection_string
PORT=5000

# Start server
npm run server
Step 3: Frontend Setup
# Navigate to client directory
cd client

# Install client dependencies
npm install

# Start React development server
npm run dev
Step 4: Running the Application
Backend will run on: http://localhost:5000
Frontend will run on: http://localhost:3000
Access the application through frontend URL
Project Structure
bkmgmt-deploy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── theme/         # Theme configuration
│   │   └── App.js         # Main React app
├── config/                 # Backend configuration
├── models/                # MongoDB models
├── routes/                # API routes
└── server.js              # Express server
API Endpoints
Books API
GET /api/books - Get all books
GET /api/books/:id - Get single book
POST /api/books - Add new book
PUT /api/books/:id - Update book
DELETE /api/books/:id - Delete book
Deployment
The application is deployed on Render:

Frontend & Backend: https://bkmgmt-deploy.onrender.com
API Endpoint: https://bkmgmt-deploy.onrender.com/api/books
Common Issues & Troubleshooting
MongoDB Connection Issues

Check MongoDB URL in config.env
Verify IP whitelist in MongoDB Atlas
Ensure proper credentials
Port Already in Use

Change PORT in config.env
Kill process using the port
Dependencies Issues

Delete node_modules folder
Run npm install again
Clear npm cache if needed
Educational Notes
This project helps learn:

Full-stack development with MERN
REST API development
Database operations
Frontend state management
Routing in React
Material UI implementation
Data export handling
QR code generation
Search and filter implementation
Responsive design principles
Future Enhancements Possible
User authentication
Book categories system
Image upload for books
Advanced analytics
Multi-language support
Contributing
Feel free to fork the repository and submit pull requests.

License
This project is open source and available under the MIT License.

About
The official repo of the MERN stack project that is taught in BSc Cohorts of SDVM Neelakantha Nagar

bkmgmt-deploy.onrender.com/
Resources
 Readme
 Activity
Stars
 1 star
Watchers
 1 watching
Forks
 5 forks
Report repository
Deployments
24
 cyclic:prod last year
 Production
+ 22 deployments
Languages
JavaScript
90.4%
 
HTML
9.0%
 
CSS
0.6%
Footer
© 2025 GitHub, In
