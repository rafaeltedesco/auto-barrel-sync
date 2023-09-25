##  Auto Barrel Sync
![License](https://img.shields.io/badge/license-MIT-blue.svg)

![npm version](https://badge.fury.io/js/my-package.svg)

### Description

*auto-barrel-sync* is a Node.js module that simplifies the process of auto-generating a barrel file for your project. A barrel file is used to consolidate and export multiple modules from different folders, making it easier to import them in other parts of your application.

### Installation
You can install My Package using npm:

```bash
npm install auto-barrel-sync
```

### Usage
To use My Package in your Node.js project, follow these steps:

1 - Create your desired folder structure inside *src*. 

### Example:

- src
  - controllers
  - services
  - utils

2 - Inside each folder, create your modules.  

### Example:

- src
  - utils
    - calculatorUtil.js

3 - Inside calculatorUtil.js create your functions and export as an object with a name. 

### Example:

```javascript
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  name: 'CalculatorUtil',
  sum,
  subtract
}

```

4 - Import the package:

```javascript

const Barrels = require('auto-barrel-sync');
```

The barrel object will contain the exported modules from your specified folders such as CalculatorUtil.

So, you can also use as:

```javascript
const { CalculatorUtil } = require('auto-barrel-sync');

calculatorUtil.sum(10, 20);
calculatorUtil.subtract(20, 30);

```

Notice that the the *auto-barrel-sync* use the name you added when you create an object to export your functions.

### Se more examples of usage bellow:

```javascript

const { Services, Controllers } = Barrels;
const { UserService, AuthService } = Services;
const { UserController, AuthController } = Controllers;
```

### Configuration

By default, *auto-barrel-sync* looks for folders in the src directory. At the moment you cannot customize.


### License
This project is licensed under the ISC License.

### Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or create a pull request on the GitHub repository.

### Acknowledgments
Node.js: The JavaScript runtime used to build this package.

### Author
Rafael Tedesco

Feel free to customize this README to include additional information that is relevant to your package and its usage. Providing clear instructions and documentation will help users understand and use your package effectively.