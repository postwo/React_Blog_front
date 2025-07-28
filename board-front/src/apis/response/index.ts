import ResponsDto from './Response.dto';

//index.ts가 없으면 import는 가능하지만, "경로가 길어지고, 관리도 복잡해지며, 협업 시 혼선이 생기기 쉬워진다
//그러므로 index 를 통해서 하나로 모아서 내보내는거다
//인터페이스는 일반적으로 types 형태이기때문에 그냥 못 내보낸다 그러므로 type를 붙여줘야 한다
export type { ResponsDto };
