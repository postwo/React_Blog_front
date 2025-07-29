// 서버에서 받아온 데이터를 프론트에서 보여주기위해 선언
export default interface FavoriteListItem {
  email: string;
  nickname: string;
  profileImage: string | null;
}
