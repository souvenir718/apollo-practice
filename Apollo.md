# Apollo



### Apollo 클라이언트

- `apollo-boost` : Apollo 클라이언트를 다루는 데 필요한 패키지들을 한번에 설치해 주는 패키지.
  - `apollo-client` : 모든 마술이 이루어지는 곳
  - `apollo-cache-inmemory` : 추천하는 캐시 라이브러리
  - `apollo-link-http` : 원격 데이터를 불러오기에 필요한 Apollo Link
  - `apollo-link-error` : 오류 처리를 위한 Apollo Link
  - `apollo-link-state` : 로컬 상태 관리를 위한 Apollo Link
  - `graphql-tag` : 쿼리와 뮤테이션에 사용될 `gql` 함수를 내보내 준다.
- `react-apollo` : Apollo 클라이언트를 React에서 사용하기 위한 바인딩을 제공한다.
- `graphql`은 Facebook이 작성한 GraphQL의 참조 구현이다.



  쿼리와 뮤테이션을 작성하고 `ApolloClient` 인스턴스를 사용하여 전송한다.

   `Apollo`를 사용할 때 가장 먼저 할 일은 `ApolloClient` 인스턴스를 구성하는 것이다. 우선, 네트워크 연결을 형성할 수 있도록 `GraphQL` API 엔드포인트를 알아야 한다.

```jsx
# index.js
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
```

- `httpLink`는 GraphQL API를 사용하여 `ApolloClient` 인스턴스에 연결한다. GraphQL 서버는 `http://localhost:4000`에서 동작하고 있어야 한다.
- `httpLink`를 인자로 전달하여 `ApolloClient` 인스턴스를 생성하고, `InMemoryCache` 인스턴스를 새로 생성한다.
- React 어플리케이션의 최상위 컴포넌트를 렌더링한다. `App`은 고차 컴포넌트 `ApolloProvider`로 감싸지고 `client`를 props로 전달받는다.