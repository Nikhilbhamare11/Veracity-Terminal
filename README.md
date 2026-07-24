# Vercity Terminal Project 24-25
## Overview
Veracity Terminal is a full-stack news and content platform developed using Next.js. The application integrates real-time news fetching, user authentication, database management, and Machine Learning features to provide a secure and intelligent user experience.

## Features
* Real-time news integration using News API
* Secure authentication and user management with Clerk
* MongoDB database integration
* Machine Learning-powered functionality
* Modern and responsive user interface
* Protected routes and authenticated access
* Fast and scalable architecture using Next.js

## Technologies Used

### Frontend

* Next.js
* React
* TypeScript
* CSS

### Backend & Database

* MongoDB
* Mongoose

### Authentication

* Clerk Authentication

### APIs & Services

* News API

### Machine Learning

* Machine Learning integration for intelligent processing and analysis

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
NEWS_API_KEY = YOUR_NEWS_API_KEY

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY = YOUR_CLERK_SECRET_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

MONGO_URI=mongodb://localhost:27017/veracityterminal
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd veracity-terminal
```

3. Install dependencies:

```bash
npm install
```

4. Configure the environment variables in the `.env` file.

5. Start MongoDB locally.

6. Run the development server:

```bash
npm run dev
```

## Running the Application

After starting the server, open:

```text
http://localhost:3000
```

The application will automatically reload when changes are made during development.

## Project Highlights

* Secure user authentication using Clerk
* News aggregation using external APIs
* MongoDB-based data storage
* Scalable Next.js architecture
* Machine Learning integration
* Responsive and user-friendly design

## Future Enhancements

* Personalized news recommendations
* Advanced Machine Learning models
* User bookmarking and favorites
* News sentiment analysis
* Admin dashboard
* Cloud deployment

## Learning Outcomes

Through this project, I gained practical experience in:

* Full-Stack Development
* Next.js Framework
* MongoDB Database Management
* Authentication and Authorization
* API Integration
* Machine Learning Integration
* Environment Configuration
* Modern Web Application Architecture

## Author

**Nikhil Bhamare**

Java Full Stack Developer

Aspiring Java Full Stack Developer passionate about building scalable applications and Machine Learning solutions.

Thank you for visiting this repository. If you have any feedback, suggestions, or questions, feel free to reach out or create an issue.
