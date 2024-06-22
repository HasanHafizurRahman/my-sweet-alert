my-sweet-alert
A simple and customizable toast notification library for JavaScript. This library can be easily integrated into vanilla JavaScript projects and can also be used with React and Vue.

Features
Lightweight and simple to use
Customizable toast messages
Automatic dismissal after a specified duration
Works with vanilla JavaScript, React, and Vue
Installation
You can install the library using npm:

Bash
npm install my-sweet-alert
Use code with caution.
content_copy
Usage
Vanilla JavaScript
Include the CSS file in your HTML:

HTML

<link rel="stylesheet" href="path/to/toast.min.css">

content_copy
Include the JS file in your HTML:

HTML

<script src="path/to/toast.min.js"></script>

content_copy
Use the library in your JavaScript code:

HTML

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
content_copy
React
Import the library in your React component:

JavaScript
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
content_copy
Vue
Import the library in your Vue component:

JavaScript
import toast from 'my-sweet-alert';

export default {
methods: {
showToast() {
toast.show('This is a toast message!');
}
}
};
content_copy
Use the method in your template:

HTML
<template>

  <div>
    <button @click="showToast">Show Toast</button>
  </div>
</template>
content_copy

License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Hasan Hafizur Rahman
