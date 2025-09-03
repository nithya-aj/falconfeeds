# FalconFeeds.io 

Implement a Login & Signup flow. After login, redirect users to a Dashboard with authentication handled via JWT. The application is deployed and publicly accessible.

## 🚀 Live Demo & Source
- **Live Demo:** [Deployed Link](https://falconfeeds.netlify.app/)  
- **GitHub Repository:** [Repo Link](https://github.com/nithya-aj/falconfeeds)

## 🛠️ Tech Stack

- **React (Vite)** – Frontend framework
- **Tailwind CSS** – Styling & responsiveness
- **React Hook Form** – Form validation
- **React Router** – Routing & protected routes
- **Netlify** – Deployment

## 📂 Features Implemented
### 1. UI Implementation
- Fully responsive **Login, Signup, and Dashboard** pages.  
- Matches the given design closely.  

### 2. Login & Signup Flow
- **Signup Page**  
  - Inputs: Name, Email, Password, Confirm Password  
  - Validations: required fields, valid email, strong password, matching passwords  
  - On success → redirects to login  

- **Login Page**  
  - Inputs: Email, Password  
  - Validations: required fields, valid email format  
  - On success → API call to backend  
  - Saves JWT token in **localStorage**  
  - Redirects to Dashboard  

### 3. Authentication Handling
- Protected Dashboard route (redirects to login if no token)  
- Logout clears JWT & redirects to Login  

### 4. Dashboard
- Simple UI with welcome message  
- Demonstrates authentication flow  

### 5. API Integration
- **Signup Endpoint:** `POST https://integrite.dev/falcon/public/test/auth/signup`  
- **Login Endpoint:** `POST https://integrite.dev/falcon/public/test/auth/login`  
- Handles success & error states 

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nithya-aj/)
