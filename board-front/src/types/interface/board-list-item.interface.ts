// 서버에서 받아온 데이터를 프론트에서 보여주기위해 선언
export default interface BoardListItem {
  boardNumber: number; //number는 int, float, double 같은 세분화 없이 모든 숫자 타입을 통합한 하나의 타입
  title: string;
  content: string;
  boardTitleImage: string | null; //텍스트가 들어올 수도 있고,아무 값도 없다는 의미인 null이 될 수도 있다
  favoriteCount: number;
  commentCount: number;
  viewCount: number;
  writeDatetime: string;
  writerNickname: string;
  writerProfileImage: string | null;
}
