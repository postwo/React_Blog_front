import { CommentListItem } from 'types/interface';
import ResponsDto from '../rsponse.dto';

//백엔드에서 받아올 데이터 백에드 매개변수명하고 같아야 한다(중요)
export default interface GetCommentListResponseDto extends ResponsDto {
  commentListItem: CommentListItem[];
}
