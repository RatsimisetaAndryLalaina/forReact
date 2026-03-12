export interface Article {
  id: number;
  title: string;
  preview: string;
  date: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    preview: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    date: "November 15, 2023",
    content: `React Hooks revolutionized the way we write React components. They allow you to use state and other React features without writing a class component.

The most commonly used hooks are useState and useEffect. useState lets you add state to your functional components, while useEffect lets you perform side effects.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy.

Some of the benefits of using Hooks include:
- Easier code organization
- Better code reuse
- Simpler component logic
- Easier testing

To get started with Hooks, you only need to update your React and ReactDOM packages to version 16.8 or higher. All your favorite libraries will support Hooks gradually.`
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    preview: "Master TypeScript generics to write more flexible and reusable code.",
    date: "October 22, 2023",
    content: `TypeScript Generics are a powerful feature that allows you to create components that work with a variety of types rather than a single one.

Generics provide variables to types. This allows you to create reusable components that can work over a variety of types rather than just one. This increases code clarity by removing type misuse and increases code reusability.

Generic functions allow you to create functions that work with a variety of types. Here's a simple example:

function identity<T>(arg: T): T {
  return arg;
}

This function accepts a type parameter T, which represents any type. The function returns the same type that was passed in.

You can also use constraints to limit the types that can be passed to a generic. For example:

interface HasLength {
  length: number;
}

function loggingIdentity<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

Generics are extensively used in libraries and frameworks to provide type safety and flexibility.`
  },
  {
    id: 3,
    title: "Advanced CSS Grid Layout",
    preview: "Discover the power of CSS Grid for creating complex responsive layouts.",
    date: "September 8, 2023",
    content: `CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts with rows and columns.

Unlike Flexbox, which is best suited for one-dimensional layouts, CSS Grid excels at creating two-dimensional layouts. You can easily create layouts with multiple columns and rows.

Getting started with CSS Grid is simple. Define a grid container and specify the grid template columns and rows:

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

Some key concepts to understand:
- Grid Container: The parent element
- Grid Item: The child elements
- Grid Lines: The dividing lines
- Grid Tracks: The rows and columns
- Grid Cells: The space between grid lines
- Grid Area: A group of cells

CSS Grid also provides powerful features like:
- Named grid lines
- CSS Grid implicit tracks
- CSS Grid auto-placement algorithm
- Subgrid for nested grids

With CSS Grid, you can create responsive layouts that adapt to different screen sizes without complex media queries.`
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js and Express",
    preview: "A comprehensive guide to building scalable RESTful APIs using Node.js and Express.",
    date: "August 30, 2023",
    content: `REST (Representational State Transfer) is an architectural style for defining distributed systems. RESTful APIs are a common way to build web APIs.

Express is a minimal and flexible Node.js web application framework that provides a set of features for web and mobile applications.

Getting started with Express is straightforward:

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

Key concepts for building RESTful APIs:
- HTTP Methods: GET, POST, PUT, DELETE
- Status Codes: 200, 201, 400, 404, 500
- Request/Response: Headers and body content
- Middleware: Functions that process requests

Express provides middleware support for handling authentication, validation, error handling, and more.

When building RESTful APIs, it's important to:
- Use proper HTTP methods and status codes
- Follow naming conventions for endpoints
- Implement proper error handling
- Secure your API with authentication and validation
- Document your API endpoints thoroughly

RESTful APIs are the foundation of modern web applications and learning to build them is essential for any backend developer.`
  },
  {
    id: 5,
    title: "The Future of Web Development with Web Components",
    preview: "Explore Web Components and how they are changing the landscape of web development.",
    date: "July 18, 2023",
    content: `Web Components are a set of web platform APIs that allow you to create new, custom, reusable, encapsulated HTML tags for use in web pages and web apps.

Web Components are based on existing web standards and work across modern browsers. They allow you to use HTML, CSS, and JavaScript to create custom elements.

The core technologies of Web Components are:
- Custom Elements: Define new HTML elements
- Shadow DOM: Encapsulate styles and markup
- HTML Templates: Define markup that is not rendered

Creating a custom element is simple:

class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h1>Hello from Web Component!</h1>';
  }
}

customElements.define('my-element', MyElement);

Benefits of Web Components:
- Reusability across projects
- Encapsulation of styles and functionality
- Framework agnostic
- Easy to maintain and test
- Better code organization

Web Components are increasingly supported by all major browsers and are becoming a standard way to build components for modern web applications.

As web development continues to evolve, Web Components will play an increasingly important role in how we build scalable and maintainable web applications.`
  },
  {
    id: 6,
    title: "Mastering Async/Await in JavaScript",
    preview: "Learn how to write clean and readable asynchronous code using async/await.",
    date: "June 25, 2023",
    content: `Async/Await is a JavaScript feature that allows you to write asynchronous code in a more synchronous way. It makes asynchronous code easier to read and understand.

Async/Await is built on top of Promises. An async function is a function that automatically returns a Promise.

Here's a basic example:

async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

Key points about async/await:
- async keyword makes a function return a Promise
- await keyword pauses execution until a Promise is resolved
- Error handling with try/catch is straightforward
- Much more readable than .then() chains

Async/Await is particularly useful for:
- Fetching data from APIs
- Reading files from disk
- Database queries
- Any operation that involves asynchronous operations

Best practices when using async/await:
- Always use try/catch for error handling
- Don't use await in loops unless necessary
- Use Promise.all() for concurrent operations
- Be mindful of performance implications

Mastering async/await is essential for modern JavaScript development as most real-world applications involve asynchronous operations.`
  },
  {
    id: 7,
    title: "Introduction to Docker Containers",
    preview: "Get started with Docker and containerization for consistent development and deployment.",
    date: "May 12, 2023",
    content: `Docker is a containerization platform that allows you to package your application and its dependencies into a container that can be run on any platform.

Containers are lightweight, faster, and more efficient than virtual machines. They provide a consistent environment for development, testing, and production.

Getting started with Docker involves creating a Dockerfile:

FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

Key Docker concepts:
- Images: A blueprint for containers
- Containers: Running instances of images
- Dockerfile: Instructions for building an image
- Docker Compose: Tool for multi-container applications
- Registries: Repositories for storing images

Benefits of using Docker:
- Consistency across development and production
- Easy scaling of applications
- Simplified deployment process
- Better resource utilization
- Isolation of applications and dependencies

Docker has become an industry standard for containerization and is widely used in modern development workflows.

Learning Docker will improve your ability to build, deploy, and scale applications effectively.`
  }
];
