# _BetterDoctor Lookup_

## _This application uses the BetterDoctor API to make it easier for you to find a doctor to match your medical needs in Portland, Oregon._

#### By _**Heather Zurek**_

## Description

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| User enters medical condition to receive a list of doctors in area | "Asthma" | "Dr. Jill Smith, 123 N Doctors Ln, 503-999-9999, www.drjillsmithfake.com, Accepting new patients, Dr. Anne Doe, 456 N Medical Ln, 999-999-5555, www.fakedrdoe, Not accepting new patients” |
| User enters a name to receive a list of doctors in the area" | "Dr. Smith" | "Dr. A Smith, Dr. B Smith, Dr. C Smith" |
| If the users search doesn't match any doctors it should return a response | "Fake Medical Disease" | "Sorry, no doctors meet the search criteria" |

## Installation and Setup
* `$ git clone https://github.com/heatherzurek/Doctor-lookup.git` This will clone the repository to your local machine.
* `$ npm install` This will allow you to have access to the CLI (command line interface) for webpack.
* `$ npm run start`
This will watch the file changes in `./src` and automatically build the bundle with dev build (not minified). This is a continuous monitoring which can be stopped with the key combination `Ctrl + C` within the terminal.

## Known Bugs

_No Known Bugs🐛🐞_

## Support and contact details

_If you have any questions or concerns please contact me at Heather.Zurek@Gmail.com_

## Technologies Used

_JavaScript, NodeJS, Webpack, Karma, Jasmine and BetterDoctor API_

### License

*GPL*

Copyright (c) 2019 **Heather Zurek**
