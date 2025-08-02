import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { AUTH_PATH } from 'constant';

//          component: 레이아웃           //
export default function Container() {
  //             state:  현재 페이지 path name 상태    == authentication 화면은 Footer가 필요없기 때문에 여기서 처리  //
  // /board/detail/1 이렇게 뜬다
  const { pathname } = useLocation();

  // 여기서 전체적인 화면 틀을 생성
  // outlet을 사용하여 각 페이지마다 다르게 적용
  //{pathname !== '/auth' && <Footer />}이렇게 하면 auth 로 이동하면 footer가 안나온다
  //          render: 레이아웃 렌더링       //
  return (
    <>
      <Header />
      <Outlet />
      {pathname !== AUTH_PATH() && <Footer />}
    </>
  );
}
