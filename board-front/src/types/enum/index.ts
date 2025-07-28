import ResponseCode from 'types/enum/response-code.enum'; //enum을 받아온다

//index.ts가 없으면 import는 가능하지만, "경로가 길어지고, 관리도 복잡해지며, 협업 시 혼선이 생기기 쉬워진다
//그러므로 index 를 통해서 하나로 모아서 내보내는거다
export { ResponseCode };
