import ResponsDto from '../rsponse.dto';

export default interface GetPopularListResponseDto extends ResponsDto {
  popularWordList: string[];
}
