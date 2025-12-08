# Medi-Sync: The Family Care Coordination Dashboard

**Live Application:** [https://medisync-app.vercel.app/](https://medisync-app.vercel.app/)
<img width="2846" height="1517" alt="image" src="https://github.com/user-attachments/assets/9b98b18d-7e31-446f-bf3a-43886dbf1338" />


## 1. Project Overview and Origin Story

The **Medi-Sync Family Dashboard** is a custom web application designed to manage the immense cognitive and emotional load associated with complex, multi-person care coordination. This project was born out of necessity—to create a single **Source of Truth** for medical events, routines, and domestic task delegation within a high-pressure family environment.

The core purpose is to eliminate the **"Recall Audit"** (the mental strain of remembering every detail) and remove emotional friction by allowing family members and carers to share information via data, not stressful dialogue.

It functions as a **trauma-informed tool**, designed with a **"Calm Technology"** UI to reduce user cortisol levels when logging critical information.

## 2. Key Features

The application provides a comprehensive, centralised platform for care management:

### 2.1. Critical Event Logging (Medical Focus)

- **Seizure/Episode Tracker:** Fast, simple logging of event duration, severity, and post-event actions.
- **Medication Administration Log:** Time-stamped records of administered medications (e.g., dosage, time, carer who administered it).
- **Routine Management:** Tracking of complex daily and weekly schedules (physio, appointments, school runs).

### 2.2. Domestic & Emotional Bridge

- **Task Delegation:** Functionality to delegate non-medical tasks (e.g., shopping, laundry) to other carers, clearly assigning ownership.
- **Source of Truth:** A central timeline and record for historical data, essential for future-proofing care plans and communicating with external healthcare providers.

## 3. Technology Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Framework** | Next.js / React | Provides the structure for a scalable, secure, and component-based user interface. |
| **Styling** | Tailwind CSS + Glassmorphism | Custom CSS built on Tailwind, utilizing a low-contrast, glassy aesthetic ("Sage & Slate") to promote calmness and focus. |
| **State Management** | React Hooks (useState, Context API) | Manages complex, real-time data efficiently. |
| **Database** | Firebase (Firestore) | Real-time synchronization of medical logs and domestic tasks across all family devices (ensuring immediate data consistency). |
| **Authentication** | Firebase Authentication | Secure, controlled access for all authorized carers and family members. |
| **Data Integrity** | Custom Logic | Ensuring data logged is immutable and traceable to the user who entered it. |

## 4. Setup and Development

Follow these steps to set up and run the Medi-Sync project locally.

### 4.1. Prerequisites

- Node.js (v18+)
- npm or yarn
- A Firebase project configured for Firestore and Authentication

### 4.2. Installation

1. **Clone the repository:**

```bash
git clone [your-repo-link]
cd medisync-app
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Configure Environment Variables:**

Create a `.env.local` file in the root directory and add your Firebase configuration:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... include other required Firebase settings
4.3. Running the ApplicationStart the Next.js development server:npm run dev
# or
yarn dev
The application will be accessible at http://localhost:3000.5. Deployment and Future ScopeThe application is built for deployment on platforms like Vercel or Netlify.Future Scope: Integrate external APIs for calendar synchronization (i.e., Google Calendar) and notification services (Twilio) for proactive alerts on missed medications or upcoming appointments.
