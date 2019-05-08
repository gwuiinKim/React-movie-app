제가 참고하려고 만들었습니다.

## React 공부

index.js 파일을 수정함으로써, index.html파일을 다루게 된다.

React는 UI라이브러리이고,
ReactDOM 은 이 UI라이브러리를 웹에 render해주는 기능을 담당하고,
ReactNative는 이 UI라이브러리를 모바일에 render 해주는 기능을 담당한다.

ReactDOM은 컴포넌트를 출력하는데, index.html안에 있는 id가 root인 div 안에 만들게 된다.

React는 Component 단위로 작업할 수 있게 되어있다. Component들은 render, return을 해야만 한다. Component내부에서 return하는 html은 jsx라고 하는 React의 html 혹은 javascript를 적는 방식이다.

Component를 작업할 때, 그 js 파일에 Css파일을
import 해줘야 한다.

하나의 Component를 다른 곳에서 불러올 수 있으며,
마치 html태그를 적는 것처럼 불러오면 된다.

## 핵심 Concept

### -Props

부모 Component에서 property를 정하면서 자식 Component에게 props를 통해서 정보를 준다. (ex propertyName={array[0]} )
자식 Component에서 {this.props.propertyName} 으로 그 정보에 접근할 수 있다.

main component에 정보가 다 있고, 그 정보를 자식에게 주는 형식으로
powerful한 ui를 구축하게 된다.

type을 정하기 위해서는 render 하기 전에
예를 들자면

static propTypes= {
propertyName: propTypes.string.isRequired
}
이런 식으로 설정해주기.
(prop-type 을 먼저 install)
이를 통해서 type을 설정해줄 뿐만 아니라,
부모 element로부터 어떠한 정보를 얻는지도 확인할 수 있게 된다.

### -State

Component의 state가 바뀌게 되면, 새로운 state와 함께 render function이 다시 실행되게 된다.

주의사항: state를 바꿀 때에는 직접 state에 접근하는 것이 아니라 setState() 로 해야 한다.

예를 들어 list가 state내부에 정의된 경우,
componentDidMount() 내부에서 list 를 변경해 주면
다시 render가 실행된다.

예시 : 스크롤 내리다가 맨 끝에까지 내려오면, 추가로 정보를 얻어올 때. infinite scrolling이라고도 함.
array안에서 ... 을 앞에 넣어주면 된다.

```javascript
state = {
    movies: [
      {
        title: "inception",
        poster:
          "https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/86/ac/14/86ac14f2-8c9b-2a5a-80be-49b8ee402228/pr_source.lsr/268x0w.png"
      },
      {
        title: "avatar",
        poster:
          "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg"
      },
      {
        title: "avengers",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "iron man",
            poster:
              "https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/89/74/cf/8974cfa0-5e27-1c5e-390a-e97e5d12a51d/contsched.rdzrzprk.lsr/268x0w.jpg"
          }
        ]
      });
    }, 3000);
  }

```

### -lifecycle events

Render : componentWillMount() -> render() -> componentDidMount()

componentWillMount에서 component는 곧 exist하게 될 것임을 알려주고,
Render에서 component는 exist하게 됨.
componentDidMount에선 component가 exist한다는 것을 알려준다.

update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render()-> componentDidUpdate()

새로운 props를 받았을 때 - props가 다를 경우 true - component가 update될 것임을 알려주고 - render -> component가 update 되었음을 알려줌.

예를 들면 componentWillUpdate에 업데이트 중임을 나타내는 것을 넣거나. componentDidUpdate에 업데이트가 끝났음을 보여주는.!

## react 16

array의 element를 Return 하는 기능(unique key를 지정해줘야 함.)

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

```

```
