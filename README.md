<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>SPLURGE TECHFEST</h1>
<p align="left">
	<em><code>❯The TechFest Website is not the official online platform for showcasing the annual technology festival. This website serves as a hub for event details, schedules, speaker profiles, registration, and more. Designed with an intuitive and engaging user interface, the platform provides seamless access to all relevant information for attendees, participants, and sponsors.</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/RoHIT4Kr7/SplurgeTechfest?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff&cacheSeconds=0" alt="license">
	<img src="https://img.shields.io/github/last-commit/RoHIT4Kr7/SplurgeTechfest?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/RoHIT4Kr7/SplurgeTechfest?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/RoHIT4Kr7/SplurgeTechfest?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Dependencies](#-dependencies)
  - [⚙️ Installation](#-installation)
  - [🤖 Run](#-run)
  - [🧪 Testing](#-testing)
- [📌 Project Tasks and Challenges](#-project-tasks-and-challenges)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

- SPLURGE'25 TechFest is an eagerly anticipated event that brings together students from diverse colleges to showcase their technical prowess and artistic flair. This project is a web application designed to provide information about the event, manage registrations, and display event details.

---

## 👾 Features
- <b>Loading Page:</b> The website starts with a Encryption design loading screen where user have to unlock the prop to enter the website.
- <b>Home Page:</b> Overview of the event with a hero section, about us, and various sections highlighting the event's features.
-  <b>Event Listings:</b> Detailed information about various events, including dates, times, managers, and registration fees.
-  <b>Accomodation:</b>  Information about accommodation options for participants, including booking details and policies.
- <b>Contacts:</b> Contact information for event managers and organizers
- <b>Authentication:</b> User authentication using NextAuth and Prisma.
- <b>Responsive design:</b> Mobile-friendly design with responsive layouts.



---

## 📁 Project Structure

```sh
└── SplurgeTechfest/
    ├── README.md
    └── mynextapp
        ├── .eslintrc.json
        ├── .gitignore
        ├── app
        ├── build-script.js
        ├── components
        ├── constants
        ├── next.config.mjs
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.mjs
        ├── prisma
        ├── public
        ├── tailwind.config.ts
        └── tsconfig.json
```

---
## 🚀 Getting Started

## ☑️ Dependencies

Before getting started with SplurgeTechfest, ensure your runtime environment meets the following requirements:
- **Package Manager:** Npm
### **Main Dependencies:** 
- **Next.Js** - The React framework for production
- **React**- A JavaScript library for building user interfaces.
- **Tailwind CSS**-A utility-first CSS framework for rapid UI development.
- **Prisma**-Next-generation ORM for Node.js and TypeScript.
- **NextAuth.js**- Authentication for Next.js.
- **Framer Motion**- A library for animations in React.
- **Swiper**-Modern mobile touch slider.
- **Three.js**-JavaScript 3D library.
### **Other Dependencies:**
- **@heroicons/react**
- **@auth/prisma-adapter**
- **@next-auth/prisma-adapter**
- **@prisma/client**
- **@react-three/drei**
- **@react-three/fiber**
- **aos**
- **bcryptjs**
- **clsx**
- **jquery**
- **react-icons**
- **react-intersection-observer**
- **react-simple-typewriter**
- **tailwind-merge**



### ⚙️ Installation

Install SplurgeTechfest using one of the following methods:

**Build from source:**

1. Clone the SplurgeTechfest repository:
```sh
❯ git clone https://github.com/RoHIT4Kr7/SplurgeTechfest
```

2. Navigate to the project directory:
```sh
❯ cd mynextapp
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Run
Run SplurgeTechfest using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```
### 🛠Build
Build the project using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run build
```
### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
## 📌 Project Tasks and Challenges

- [x] **`Task 1`** - Designing the UI and Implementing File-Based Routing:  
  - **Task**: Designed the user interface and explored Next.js's file-based routing system for the first time.  
  - **Challenges**:  
    - Learning the fundamentals of file-based routing in Next.js.  
    - Creating a loading screen for the first time, which required research and experimentation.  
    - Implementing a `ClientLayout` to ensure a seamless user experience.  

- [x] **`Task 2`** - Building the Event Section with Three-Level Dynamic Routing:  
  - **Task**: Developed a complex event section with dynamic routing paths like `/events/esports/2`.  
  - **Challenges**:  
    - Understanding and implementing three-level dynamic routing.  
    - Leveraging `FinalEventsList.json` to manage and create dynamic routes.  

- [x] **`Task 3`** - Static Rendering for Deployment on Apache Server:  
  - **Task**: Adapted the project to work on an Apache server, which supports only static files (HTML, CSS, JS).  
  - **Challenges**:  
    - Learning and using `generateStaticParams` to render all dynamic pages statically.  
    - Setting `module.exports` for server compatibility.  
    - Creating and integrating a custom `buildScript.js` to automate modifications during the `npm run build` process.  

- [x] **`Task 4`** - Authentication with Next-Auth and Prisma:  
  - **Task**: Implemented user authentication using Google and GitHub, with data storage managed by Prisma.  
  - **Challenges**:  
    - Setting up and configuring Next-Auth for multiple providers.  
    - Learning and integrating Prisma to handle user data effectively.  

- [x] **`Task 5`** - Making the Website Responsive:  
  - **Task**: Ensured the website was responsive across all devices and screen sizes.  
  - **Challenges**:  
    - Testing and optimizing the layout for various resolutions and aspect ratios.  
    - Adapting the design to maintain usability and aesthetics across devices.  

- [x] **`Task 6`** - Implementing SEO Best Practices:  
  - **Task**: Enhanced the website's search engine optimization by creating essential files like `sitemap.ts` and `robots.ts`.  
  - **Challenges**:  
    - Gaining knowledge of SEO principles and their practical application.  
    - Writing and integrating SEO-related files efficiently.  



---

## 🎗 License

This project is protected under the [MIT] License. For more details, refer to the [MIT LICENSE](https://opensource.org/license/mit) file.

---

## 🙌 Acknowledgments

- I would like to acknowledge my Team-mates [MRIDUL MISHRA](https://github.com/mridulmishra27) and [TANISHQ KR SINGH](https://x.com/taniiishq15) who helped me in building this project.


---
