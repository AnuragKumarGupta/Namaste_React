# Namaste_React

# Parcel

- Dev Build
- Local server
- HMR- hot module replacement //auto update the specific module after any changes made
- file watching algorithm which make HMR-- written in c++.
- Caching- Build faster
- Image optimization
- Minification
- Bundling
- compressing
- consistent hashinh
- code splitting
- Differential bundling- to support older browser
- Diagnostic
- Error Handling
- HTTPS
- Tree shaking // remove unused code
- Different dev and prod build

# Namaste food app

/_
Header
-logo
-nav item
Body
-search
-restaurant container
-restaurant card
Footer
-copyright
-links
-Address
-contacts info
_/

two types of export/import

-default export/import

export default component;
import component from path;

-named export/import

export const component;
import {component} from path

# Routing

1- client side routing (normal which we use in react where it doesnt reload the page only component)
2-server side routing

# Redux

- Install redux (npm install @reduxjs/toolkit)
- Build our store
- connect our store to the app
- create slice(cart slice)
- create dispatch(action)
- create reducer for updating data to slice
- create selector for updating UI from updated slice

# Types of testing

- unit testing
- integration testing
- end to end testing - e2e testing

# setting up testing

- install react testing library
- install jest
- install babel dependencies
- configure babel indepedencies(babel.config.js)
- configure parcel config file to disable default babel transpilation
