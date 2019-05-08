제가 참고하려고 만들었습니다.

React 공부

index.js 파일을 수정함으로써, index.html파일을 다루게 된다.

React는 UI라이브러리이고,
ReactDOM 은 이 UI라이브러리를 웹에 render해주는 기능을 담당하고,
ReactNative는 이 UI라이브러리를 모바일에 render 해주는 기능을 담당한다.

ReactDOM은 컴포넌트를 출력하는데, index.html안에 있는 id가 root인 div 안에 만들게 된다.

React는 Component 단위로 작업할 수 있게 되어있다. Component들은 render, return을 해야만 한다. Component내부에서 return하는 html은 jsx라고 하는 React의 html 적는 방식이다.

Component를 작업할 때, 그 js 파일에 Css파일을
import 해줘야 한다.

하나의 Component를 다른 곳에서 불러올 수 있으며,
마치 html태그를 적는 것처럼 불러오면 된다.

핵심 Concept
-Props
부모 Component에서 property를 정하면서 자식 Component에게 props를 통해서 정보를 준다. (ex title={movies[0]} )
자식 Component에서 {this.props.propertyName} 으로 그 정보에 접근할 수 있다.

main component에 정보가 다 있고, 그 정보를 자식에게 주는 형식으로
powerful한 ui를 구축하게 된다.

-State

아래는 create react app에 관한 설명이다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
