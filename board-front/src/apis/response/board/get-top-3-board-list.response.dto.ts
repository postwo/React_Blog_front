import { BoardListItem } from 'types/interface';
import ResponsDto from '../rsponse.dto';

export default interface GetTop3BoardListResponseDto extends ResponsDto {
  top3List: BoardListItem[];
}
