// 서버에서 받아온 데이터를 프론트에서 보여주기위해 선언
// 서버에서 보내는 필드명하고 꼭 맞춰주기
export default interface CommentListItem {
  nickname: string;
  profileImage: string | null;
  writeDateTime: string;
  content: string;
}
