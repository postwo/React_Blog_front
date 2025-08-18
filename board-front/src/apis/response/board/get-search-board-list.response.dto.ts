import { BoardListItem } from 'types/interface';
import ResponsDto from '../rsponse.dto';

export default interface GetSearchBoardListResponseDto extends ResponsDto {
  searchList: BoardListItem[];
}
