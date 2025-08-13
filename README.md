# Full-Stack MFA with React, Node.js, Express, Passport.js & Speakeasy

A comprehensive tutorial project that implements **multi-factor authentication (MFA)** using React, Node.js, and other tools—based on this video: [Watch the tutorial](https://www.youtube.com/watch?v=opXWwDrvyFY).

---

##  Features

- React front-end for user registration, login, and MFA prompt
- Node.js + Express back-end managing users and sessions
- Passport.js for authentication flows (local strategy, etc.)
- Speakeasy for generating/verifying TOTP codes
- QR code generation for easy MFA token setup
- Clear login flow: register → enable MFA → login → verify TOTP

---

##  Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies for both front-end and back-end
cd client && npm install
cd ../server && npm install
