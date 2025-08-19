import { BoardListItem } from 'types/interface';
import ResponsDto from '../rsponse.dto';

export default interface GetUserBoardListResponseDto extends ResponsDto {
  userBoardList: BoardListItem[];
}
