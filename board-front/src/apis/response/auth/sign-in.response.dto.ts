import ResponsDto from '../rsponse.dto';

export default interface SignInResponseDto extends ResponsDto {
  token: string;
  expirationTime: number;
}
