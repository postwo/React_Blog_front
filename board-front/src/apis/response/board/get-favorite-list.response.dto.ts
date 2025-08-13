import ResponsDto from '../rsponse.dto';
import { FavoriteListItem } from 'types/interface';

export default interface GetFavoriteListResponseDto extends ResponsDto {
  favoriteList: FavoriteListItem[];
}
