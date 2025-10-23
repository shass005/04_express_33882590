# Express Router Example

This project showcases a simple Express.js router module that handles various routes with several Express features such as route parameters, chaining using next(), and serving static html files using res.sendFile().

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **path** - Built-in Node.js module for handling file paths

## Features

- Handles multiple routes such as:
  - `/` - Main page returning plain text
  - `/about` - About page with simple HTML content
  - `/contact` - Contact page with styled HTML and contact info
  - `/date` - Returns the current system date and time dynamically
  - `/welcome/:user` - Parameterized route that greets the user by name
  - `/chain` - Demonstrates chaining with custom request logging
  - `/file` - Serves a static HTML file using `res.sendFile()`

- Middleware examples:
  - Logging request time
  - Adding custom data to the request object
  - Joining file paths before sending files

## Getting Started

### Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/shass005/04_express_33882590.git
cd 04_express_33882590

2. Install Node.js (if not already installed)
- Node.js installed (Download from [nodejs.org](https://nodejs.org))

3. Insall express
```bash
npm install express

4. Run the Server
```bash
node index.js

5. Open your browser
Visit: http://localhost:8000
The webpage should be rendered