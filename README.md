결과물
https://gwuiinkim.github.io/React-movie-app/

제가 참고하려고 만들었습니다. 복습용 readme.

## React 공부

기본 작동원리.

app.js에서 작업 -> index.js 를 거쳐 -> index.html에 적용

- React는 UI라이브러리.
- ReactDOM : 이 UI라이브러리를 웹에 render해주는 기능을 담당
- ReactNative : 이 UI라이브러리를 모바일에 render 해주는 기능을 담당

- ReactDOM: index.html안에 있는 id가 root인 div 안에 Component를 출력함. ( react 16에서 portal을 사용하면 id 가 root인 div 외의 html에도 react를 적용할 수 있게 됨.)

- React의 가장 기본원리: Component 단위의 작업.
  container component들은 render, return을 해야만 하며,
  presenter component는 return만 해주면 된다.
  ( 자세한 사항은 아래의 state에서 참고. )
  Component에서는 jsx를 return 한다. (리액트에서 html과 javascript를 적는 방식)

- Component는 마치 html태그를 적는 것처럼 불러오면 된다.

## 핵심 Concept

### Props

- 부모 Component -> 자식 Component에게 property를 설정하며 props을 통해 정보를 준다. (ex propertyName={props})
  --> 자식 Component에서 {this.props.propertyName} 혹은 {propertyName}

- 이렇게 함으로써, single source of information 형식이 되어 powerful한 ui를 구축하게 된다.

- propType을 설정해주면 좋다. (prop-type 을 먼저 install)
  이를 통해서 props의 type을 설정해줄 수 있을 뿐만 아니라, 부모 element로부터 어떠한 정보를 얻는지도 확인할 수 있게 된다.

### State

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

- smart component(container) vs dumb component(presenter)

- state가 없는 (stateless) component를 Dumb component( presenter )
- state가 있는 Component를 smart component( container )

- Component의 state가 바뀌게 되면, 새로운 state와 함께 render function이 다시 실행되게 된다.

\*\*주의사항: state를 바꿀 때에는 직접 state에 접근하는 것이 아니라 this.setState() 를 통해 변경해줘야 한다.

예시 : 스크롤 내리다가 맨 끝에까지 내려오면, 추가로 정보를 얻어오는 것과 같은 상황. infinite scrolling.

- array안에서 ... 을 앞에 넣어주면 된다.

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

- 이런 식으로 원래의 list에 새로운 목록을 추가할 수 있다.

### lifecycle events

- Render : componentWillMount() -> render() -> componentDidMount()

- componentWillMount : component가 곧 존재하게 될 것임을 나타냄
- Render에서 component: component가 존재하게 됨.
- componentDidMount : component가 존재한다는 것을 알려준다.

update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render()-> componentDidUpdate()

새로운 props를 받았을 때 - props가 다를 경우 true - component가 update될 것임을 알려주고 - render -> component가 update 되었음을 알려줌.

- 예를 들면 componentWillUpdate에 업데이트 중임을 나타내는 것을 넣을 수 있음.
- componentDidUpdate에 업데이트가 끝났음을 보여주는 방식.

## Ajax, Promise

https://facebook.github.io/react-native/docs/network.html

http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/

https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9

## React 16

4가지 feature

### Fragment

불필요하게 span등의 태그로 감쌀 필요가 없어졌다. 그리고 <> 이런식으로 감쌀 수도 있게 됨. ( 별로 사용되지 않을 수도 있지만 string을 return할 수도 있다.)

### Portal. #root 이외의 element도 react를 통해서 변경할 수 있다.

### Error Boundaries

자식 Component의 error를 handle 할 수 있게 되었다.
error가 발생해도 전체 react app이 다 죽어버리는 것이 아니라,
에러가 난 부분만 isolate해서 처리할 수 있다.
하지만 각 Component 마다 다 customize 하기 보다는
아래와 같은 형태로 한 곳으로 묶어서 각 Component별로 실행을 해주면 된다.

```js
const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

const ErrorFallback = () => "Sorry something went wrong";
```

### this.setState(null)

state에 null을 return함으로써,
Component가 더 이상 update 되는 것을 막는다!
Component를 변경하는 것이 아니라,
Component가 update되는 것을 막는것.

array의 element를 Return 하는 기능(unique key를 지정해줘야 함.)

## Building for Production

https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089

### `yarn build`

한 이후에 terminal에서 나오는 설명을 그대로 따라주면 된다.
