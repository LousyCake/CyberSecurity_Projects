# Password Strength Checker

A professional, minimalistic tool designed to evaluate password strength in real time. Built as part of a cybersecurity learning series, this web app provides detailed feedback and educational insight into secure password creation. The goal is not just to generate strong passwords but to understand what makes them strong.

## Project Purpose

Weak passwords are still among the most common vulnerabilities exploited during cyberattacks. This tool helps users:

* Understand the components of a strong password

* Visually analyze password strength using real-time feedback

* Generate secure passwords meeting industry-grade criteria

Whether you're a developer, security analyst, or someone who reuses "password123" a little too often, this app is for you.

## Features

* Real-time password strength analysis

* Visual feedback bar (green/yellow/red)

* Detailed checklist validation (length, character mix)

* Secure password generator

* Copy-to-clipboard functionality

* Dark mode and accessibility-friendly design

## Educational Value

Passwords are the first line of defense against unauthorized access. This project teaches:

* Why long, complex passwords are harder to crack

* What types of characters increase password entropy

* How to provide users with intuitive feedback instead of vague warnings

This is a great beginner project to explore DOM manipulation, form validation, basic UX, and JavaScript logic while practicing secure coding concepts.

## Use Cases

* Developers implementing a password form UI

* Educators teaching basic cybersecurity principles

* Job portfolios for frontend developers or cybersecurity learners

## How to Use

1. Clone the repository:
  ```
  git clone https://github.com/LousyCake/CyberSecurity_Projects.git
  ```
2. Navigate into the project folder:
  ```
  cd CyberSecurityProjects/Password Checker
  ```
3. Open _index.html_ in your browser.

4. Type a password to test, or generate a secure one.

## How It Works

**Password Rules Checked**

* Minimum length of 8 characters

* At least one uppercase letter

* At least one lowercase letter

* At least one digit

* At least one special character (e.g. !@#$%^&*)

A strength score is calculated based on the number of satisfied criteria. The progress bar and checklist reflect this in real time.

## Generator Logic

The built-in generator ensures each password contains a balanced mix of character types to meet the above criteria.


## Visual Documentation

### 🔁 Password Strength Evaluation Flowchart  
*How the input moves through validation logic*  
![Password Strength Evaluation Flowchart](./Assets/1.png)

---

### 🔐 Password Entropy Comparison Chart  
*Visualizing the strength difference between short vs complex passwords*  
![Password Entropy Comparison Chart](./Assets/2.png)

---

### 🧠 Password Generator Logic Tree  
*How we build a compliant password from scratch*  
![Password Generator Logic Tree](./Assets/3.png)

---

### 🖼️ User Interaction Wireframe  
*Simple annotated UI layout screenshot*  
![UI Wireframe](./Assets/4.png)

---

## 🖥 Screenshots

### ✅ Strong Password Example  
*Shows a password that satisfies all criteria*  
![Strong Password Screenshot](./Assets/7.png)

---

### ❌ Weak Password Example  
*Password fails multiple checks, red indicators visible*  
![Weak Password Screenshot](./Assets/6.png)

---

### 🌗 Light Mode Toggle View  
*Application running in Light mode with accessible contrast*  
![Light Mode Screenshot](./Assets/5.png)
## Technologies Used

* HTML5

* CSS3 with transitions and layout design

* Vanilla JavaScript for logic and DOM updates

## Maintainer

Created and maintained by @LousyCake as part of a cybersecurity portfolio. Contributions welcome.

For suggestions or questions, open an issue or reach out via GitHub Discussions.

