# HairDay 💇🏻‍♀️

HairDay is a web application designed to help salons manage their hair cutting schedules. The application allows salon administrators to create and edit appointments, as well as view their schedules, making it easier to manage their daily operations.

<br>

## Layout 🎨

The layout for this project was created by Rocketseat using Figma. You can view the layout file and its components by visiting the following link: [Figma Layout](https://www.figma.com/design/gsdlfC87LzvAvBb6mewOQi/Plataforma-de-agendamento-(Community)?node-id=0-1&p=f&m=dev).

The layout showcases the structure, color scheme, and visual design of the web application, providing a clear reference for the development of the project.

<br>

## Features ✨

* Create and edit appointments
* View schedules, including:
	+ Scheduled appointments
	+ Available time slots
	+ Filter by selected day
* User-friendly interface for salon administrators

<br>

## Project Structure 🗂️

1. `hairday/`
   - `index.html`: The main HTML file that serves as the entry point for the application.
   - `package.json`: Contains metadata about the project, including dependencies and scripts.
   - `package-lock.json`: Locks the versions of dependencies for consistent installs.
   - `server.json`: Configuration file for server settings.
   - `webpack.config.js`: Configuration file for Webpack, a module bundler used to compile and bundle the project's assets.

2. `hairday/src/`
   - Contains the main source code for the application.
     - **`assets/`**: Contains static assets such as images and icons used in the application.
       - Example files: `logo.svg`, `calendar.svg`, `scissors.svg`, etc.
     - **`libs/`**: Contains third-party libraries or custom utility libraries.
       - Example file: `dayjs.js` (likely a date manipulation library).
     - **`modules/`**: Contains different modules or components of the application.
       - **`form/`**: Contains files related to form handling.
         - Example files: `date-change.js`, `submit.js`, etc.
       - **`schedules/`**: Contains files related to schedule management.
         - Example files: `load.js`, `show.js`, etc.
     - **`services/`**: Contains service files that handle API calls or business logic.
       - Example files: `api-config.js`, `new-schedule.js`, etc.
     - **`styles/`**: Contains CSS files for styling the application.
       - Example files: `form.css`, `global.css`, etc.
     - **`utils/`**: Contains utility functions that can be reused across the application.
       - Example file: `opening-hours.js`.
     - **`main.js`**: The main JavaScript file that initializes the application and may include the logic to render components or handle routing.

<br>

## Getting Started 🚀

1. Clone the repository

```bash
git clone https://github.com/eduardapontel/hairday.git
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm run server
```

4. Start the application
```bash
npm run dev
```

<br>

## Contributing 🤝

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are always welcome!
