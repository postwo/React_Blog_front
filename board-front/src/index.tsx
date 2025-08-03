import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// cookiesprovider를 추가해야 Missing <CookiesProvider> 에러를 해결할수 있다

//<BrowserRouter>는 React 앱에서 페이지 이동(라우팅) 기능을 가능하게 해주는 핵심 요소예요.
//  사용자가 브라우저 주소창에 /about, /login, /product/3 같은 경로를 입력하거나,
//  <Link>를 클릭하면 그에 맞는 컴포넌트로 화면을 바꿔주는 거죠.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
