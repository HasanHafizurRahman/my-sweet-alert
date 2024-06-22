README.md
markdown
Copy code

# my-sweet-alert

A simple and customizable toast notification library for JavaScript. This library can be easily integrated into vanilla JavaScript projects and can also be used with React and Vue.

## Features

- Lightweight and simple to use
- Customizable toast messages
- Automatic dismissal after a specified duration
- Works with vanilla JavaScript, React, and Vue

## Installation

You can install the library using npm:

```bash
npm install my-sweet-alert
Usage
Vanilla JavaScript
Include the CSS file in your HTML:
html
Copy code
<link rel="stylesheet" href="path/to/toast.min.css">
Include the JS file in your HTML:
html
Copy code
<script src="path/to/toast.min.js"></script>
Use the library in your JavaScript code:
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toast Message Example</title>
    <link rel="stylesheet" href="../src/toast.css">
</head>
<body>
    <button id="show-toast">Show Toast</button>
    <script src="../dist/toast.min.js"></script>
    <script>
        const toast = toastMessage.default;

        document.getElementById('show-toast').addEventListener('click', () => {
            toast.show('This is a toast message!');
        });
    </script>
</body>
</html>
React
Import the library in your React component:
javascript
Copy code
import toast from 'my-sweet-alert';

function App() {
    const showToast = () => {
        toast.show('This is a toast message!');
    };

    return (
        <div>
            <button onClick={showToast}>Show Toast</button>
        </div>
    );
}

export default App;
Vue
Import the library in your Vue component:
javascript
Copy code
import toast from 'my-sweet-alert';

export default {
    methods: {
        showToast() {
            toast.show('This is a toast message!');
        }
    }
};
Use the method in your template:
html
Copy code
<template>
    <div>
        <button @click="showToast">Show Toast</button>
    </div>
</template>
License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Hasan Hafizur Rahman
```
