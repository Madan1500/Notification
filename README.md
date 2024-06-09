# React Toastify Installation and Usage

## Installation

First, you need to install `react-toastify` into your project. You can do this using npm or yarn or bun:


```
npm install --save react-toastify
```
```
bun add react-toastify
```

# Import React-toastify CSS in index.jsx or main.jsx
```
import 'react-toastify/dist/ReactToastify.css';
```


# Add this line in index.js or main.jsx 

- Write this below code below the App Component


```
<ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
/>
```

- Then we can use in required place by 
```
import { toast } from 'react-toastify';
```
- The examples we can use are:
```
toast.error('This is an error toast');
toast.warn('This is a warning toast');
toast.info('This is an info toast');
```