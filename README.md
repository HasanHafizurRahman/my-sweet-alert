# my-sweet-alert

A simple sweet alert package for React.

## Installation

Install the package via npm:

```sh
npm install my-sweet-alert

Ensure you have react and react-dom installed in your project:
npm install react react-dom


Usage
To use the SweetAlert component in your React project, follow these steps:

Import the SweetAlert component.
Use the SweetAlert component in your React component.
Here’s an example:
import React, { useState } from 'react';
import SweetAlert from 'my-sweet-alert';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowAlert(true)}>Show Alert</button>
        {showAlert && (
          <SweetAlert
            message="Hello, world!"
            onClose={() => setShowAlert(false)}
          />
        )}
      </header>
    </div>
  );
}

export default App;


Props
The SweetAlert component accepts the following props:

message (string, required): The message to display in the alert.
onClose (function, required): The function to call when the alert is closed.
Example
Below is a more detailed example of how to use the SweetAlert component within a React application:

import React, { useState } from 'react';
import SweetAlert from 'my-sweet-alert';

function Example() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleShowAlert}>Show Alert</button>
      {showAlert && (
        <SweetAlert
          message="This is a sweet alert!"
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
}

export default Example;

Contributing
Feel free to open issues or submit pull requests for improvements or new features.
