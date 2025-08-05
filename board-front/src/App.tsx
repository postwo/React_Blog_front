import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import BoardDetail from 'views/Board/Detail';
import Search from 'views/Search';
import Userp from 'views/User';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import Container from 'layouts/Container';
import {
  AUTH_PATH,
  BOARD_DETAIL_PATH,
  BOARD_PATH,
  BOARD_UPDATE_PATH,
  BOARD_WRITE_PATH,
  MAIN_PATH,
  SEARCH_PATH,
  USER_PATH,
} from 'constant';
import { useEffect } from 'react';
import { Cookies, useCookies } from 'react-cookie';
import { useLoginUserStore } from 'stores';
import { GetSignInUserResponseDto } from 'apis/response/user';
import { ResponsDto } from 'apis/response';
import { User } from 'types/interface';
import { GetSignInUserReuest } from 'apis';

// 여기서 뷰를 렌더링 해준다
//       component: Application 컴포넌트       //
function App() {
  //          state: 로그인 유저 전역 상태           //
  const { setLoginUser, resetLoginUser } = useLoginUserStore();

  //          state: cookie 상태                    //
  const [cookies, setCookie] = useCookies();

  //         function: get sign in user response 처리 함수           //
  const GetSignInUserResponse = (
    responseBody: GetSignInUserResponseDto | ResponsDto | null
  ) => {
    if (!responseBody) return;
    const { code } = responseBody;
    if (code === 'AF' || code === 'NU' || code === 'DBE') {
      resetLoginUser();
      return;
    }
    const loginUser: User = { ...(responseBody as GetSignInUserResponseDto) };
    setLoginUser(loginUser);
  };

  //          effect:  accessToken cookie 값이 변경될때 마다 실행될 함수           //
  useEffect(() => {
    if (!cookies.accessToken) {
      resetLoginUser();
      return;
    }
    GetSignInUserReuest(cookies.accessToken).then(GetSignInUserResponse);
  }, [cookies.accessToken]);

  //      render: Application 컴포넌트 렌더링       //
  // description: 메인 화면 : '/' - Main        //
  // description: 로그인 + 회원가입 : '/auth' - Authentication  //
  // description: 검색 화면 : '/search/:searchWord' - Serach //
  // description: 게시물 상세보기 : '/board/detail/:boardNumber' - BoardDetail //
  // description: 게시물 작성하기 : '/board/write' - BoardWrite  //
  // description: 게시물 수정하기 : '/board/update/:boardNumber' - BoardUpdate //
  // description: 유저 페이지 :'/user/:usereamil' -User   //

  // pathvariable은 detail/:boardNumber 경로뒤 boardNumber이렇게 붙여주면 된다
  // http://localhost:3000/board/update/1 게시물 수정 화면
  return (
    // 뷰 연결은 여기서 작성한후 연결
    //<Routes>는 여러 페이지 경로를 모아두는 집합
    //<Route>는 각각의 경로를 정의하는 설정
    //<Route element={<Container />}> 이거를 사용하면 내강 container index.tsx에서 설정한 틀이 적용된다
    <Routes>
      <Route element={<Container />}>
        <Route path={MAIN_PATH()} element={<Main />} />
        <Route path={AUTH_PATH()} element={<Authentication />} />
        <Route path={SEARCH_PATH(':searchWord')} element={<Search />} />
        <Route path={USER_PATH(':userEmail')} element={<Userp />} />

        <Route path={BOARD_PATH()}>
          <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
          <Route
            path={BOARD_DETAIL_PATH(':boardNumber')}
            element={<BoardDetail />}
          />
          <Route
            path={BOARD_UPDATE_PATH(':boardNumber')}
            element={<BoardUpdate />}
          />
        </Route>
        {/* 정의되지 않은(잘못된) 경로 처리: 404 페이지 */}
        <Route path="*" element={<h1>404 not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
