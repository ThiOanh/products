# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
const allList = [
  {
    id: 1,
    name: 'Day-Dut-Noi-Dau-Mr-Siro',
    cover: require('../../assets/image/1.jpg'),
    src: require('../../assets/music/Day-Dut-Noi-Dau-Mr-Siro.mp3'),
    artist: '-Mr-Siro',
    isLiked: false,
    duration: 0,
  },
  {
    id: 2,
    name: 'Cho-Mot-Tinh-Yeu',
    cover: require('../../assets/image/2.jpg'),
    src: require('../../assets/music/Cho-Mot-Tinh-Yeu-My-Tam.mp3'),
    artist: '-My-Tam',
    isLiked: false,
  },
  {
    id: 3,
    name: 'Khi-Nguoi-Minh-Yeu-Khoc',
    cover: require('../../assets/image/3.jpg'),
    src: require('../../assets/music/Khi-Nguoi-Minh-Yeu-Khoc-Phan-Manh-Quynh.mp3'),
    artist: '-Phan-Manh-Quynh',
    isLiked: false,
  },
  {
    id: 4,
    name: 'Loi-Do-Em',
    cover: require('../../assets/image/4.jpg'),
    src: require('../../assets/music/Loi-Do-Em-Miko-Lan-Trinh.mp3'),
    artist: '-Miko-Lan-Trinh',
    isLiked: false,
  },
  {
    id: 5,
    name: 'Ruc-Ro-Thang-Nam-Thang-Nam-Ruc-Ro-OST',
    cover: require('../../assets/image/5.jpg'),
    src: require('../../assets/music/Ruc-Ro-Thang-Nam-Thang-Nam-Ruc-Ro-OST-My-Tam.mp3'),
    artist: '-My-Tam',
    isLiked: false,
  },
  {
    id: 6,
    name: 'Uoc-Gi',
    cover: require('../../assets/image/6.jpg'),
    src: require('../../assets/music/Uoc-Gi-My-Tam.mp3'),
    artist: '-My-Tam',
    isLiked: false,
  },
  // Add other songs with the `duration` property...
];