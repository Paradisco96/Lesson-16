# Web Developer Portfolio Project

This is a static portfolio website project to showcase web development skills. The project is built using HTML, SCSS, and JavaScript, with Gulp used for automating development and build processes.

## Technologies

- **HTML**: The page structure is created using the **Pug** preprocessor, which allows for the use of templates and reusable components.
- **CSS**: Styles are written in the **SCSS** preprocessor using the **7-1 architecture**, which ensures good organization, scalability, and code maintainability.
- **JavaScript**: Used to add interactivity to the site.
- **Gulp.js**: Acts as the project's build tool, automating tasks such as compiling SCSS and Pug, optimizing images, and running a local development server.

## Project Structure

The project has a well-defined structure to separate source code from compiled files.

- `src/`: The folder with the source files that are under development.

  - `scss/`: Contains all SCSS files, organized according to the 7-1 architecture pattern:
    - `abstracts/`: Variables, mixins, functions, and other helper elements.
    - `base/`: Base styles for HTML elements, typography.
    - `components/`: Styles for individual interface components (buttons, cards, menus, etc.).
    - `layout/`: Styles for the main parts of the layout, such as the header, footer, and sidebar.
    - `style.scss`: The main file that imports all other SCSS parts.
  - `templates/`: (Inferred from `gulpfile.js`) Contains Pug files (`*.pug`) that are compiled into HTML.

- `assets/`: The folder for compiled files ready for use in the browser.

  - `css/`: Compiled CSS files (`style.css` and the minified version `style.min.css`).
  - `js/`: JavaScript files.
  - `images/`: All graphic resources for the project.
  - `vendors/`: Third-party libraries like `fontawesome` or `jquery`.

- `index.html`: The main HTML file of the site, which serves as the entry point.

- `gulpfile.js`: The Gulp configuration file, which describes all the tasks for building the project.

- `package.json`: The file containing the list of dependencies required for development and building the project.
