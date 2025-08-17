import { BoardListItem } from 'types/interface';
import ResponsDto from '../rsponse.dto';

export default interface GetLatestBoardListResponseDto extends ResponsDto {
  latestList: BoardListItem[];
}
