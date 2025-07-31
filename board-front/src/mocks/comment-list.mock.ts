import { CommentListItem } from '../types/interface';

const commentListMock: CommentListItem[] = [
  {
    nickname: '안녕하세요',
    profileImage: null,
    writeDatetime: '3분전',
    content:
      '오늘은 리액트에서 useEffect와 useState를 동시에 다루는 방법을 깊게 공부해봤는데, 컴포넌트의 생명주기와 상태 관리가 정말 흥미로워요!',
  },
  {
    nickname: '안녕하세요',
    profileImage: null,
    writeDatetime: '3분전',
    content:
      '리액트로 게시판 페이지를 만들고 있는데, 조건부 렌더링이랑 map 함수로 리스트 보여주는 게 재미있네요. UI랑 데이터 연동하는 부분이 점점 익숙해지고 있어요.',
  },
  {
    nickname: '안녕하세요',
    profileImage: null,
    writeDatetime: '3분전',
    content:
      '프로젝트에 react-router-dom을 적용해보고 있어요. 페이지 간 이동이나 파라미터 처리하는 방식이 생각보다 직관적이라서 금방 적응할 수 있겠더라고요!',
  },
];

export default commentListMock;
