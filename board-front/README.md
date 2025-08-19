ts , tsx 차이점
그냥 로직, 타입 정의, API 요청 같은 코드엔 .ts 쓰는 게 일반적이고 React 컴포넌트처럼 JSX 쓰는 화면(UI)구성 관련 코드엔 .tsx

useNavigate를 사용할려면 라이브러리를 추가해줘야 한다
npm install react-router-dom

폰트 추가 방법
https://noonnu.cc/font_page/pick
https://www.youtube.com/watch?v=ETCd-X8Bx9k&list=PLbq5jHjpmq7q-Td2jOXtpf7SD5c53RqXh&index=19 19분 보면 폰트 넣는 방법 나옴

뷰단이 이상하면
https://www.youtube.com/watch?v=wjpYt4kBIiM&list=PLbq5jHjpmq7q-Td2jOXtpf7SD5c53RqXh&index=14
이강의 보고 다시 하나씩 만들어보기

//better-comments 를 plugin에서 다운받고 설정 들어가서 밑 내용을 붙여넣고 vscode를 끄고 다시 키면 적용된다
https://www.youtube.com/watch?v=sDGVQyIWIgg&list=PLbq5jHjpmq7q-Td2jOXtpf7SD5c53RqXh&index=17
19분 3초 부터 보면 설정 하는방법이 나온다

"better-comments.tags": [

        {
            "tag": "!",
            "color": "#FF2D00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "?",
            "color": "#3498DB",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "//",
            "color": "#474747",
            "strikethrough": true,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "todo",
            "color": "#FF8C00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "*",
            "color": "#98C379",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "#",
            "color": "#ffffff",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "#000000",
            "bold": false,
            "italic": false
        },
        {
            "tag": "description",
            "color": "rgba(0, 0, 0, 0.7)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(152, 152, 152, 0.5)",
            "bold": false,
            "italic": false
        },
        {
            "tag": "component",
            "color": "rgba(0, 0, 0, 0.7)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(0, 255, 152, 0.5)",
            "bold": true,
            "italic": false
        },
        {
            "tag": "interface",
            "color": "rgba(0, 0, 0, 0.7)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(0, 152, 255, 0.5)",
            "bold": true,
            "italic": false
        },
        {
            "tag": "function",
            "color": "rgba(255, 255, 255, 1)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(152, 0, 255, 0.5)",
            "bold": true,
            "italic": false
        },
        {
            "tag": "state",
            "color": "rgba(0, 0, 0, 0.7)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(152, 255, 255, 0.5)",
            "bold": true,
            "italic": false
        },
        {
            "tag": "event handler",
            "color": "rgba(0, 0, 0, 0.7)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(152, 152, 255, 0.5)",
            "bold": true,
            "italic": false
        },
        {
            "tag": "effect",
            "color": "rgba(255, 255, 255, 1)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(0, 0, 255, 0.5)",
            "bold": true,
            "italic": false
        },
        {
            "tag": "render",
            "color": "rgba(0, 0, 0, 0.7)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(255, 0, 0, 0.5)",
            "bold": true,
            "italic": false
        },
        {
            "tag": "variable",
            "color": "rgba(0, 0, 0, 0.7)",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "rgba(0, 255, 0, 0.5)",
            "bold": true,
            "italic": false
        },
    ],

inputbox 컴포넌트 뭔가 이상하다 싶으면 이거를 다시보면 된다
https://www.youtube.com/watch?v=sDGVQyIWIgg&list=PLbq5jHjpmq7q-Td2jOXtpf7SD5c53RqXh&index=17

에러
: Module '"constants"' has no exported member
이거는 constants라는 모듈이 이미 존재해서 충돌하는 에러이다 그러므로 폴더명만 변경해주면 해결된다

# 라이브러리

cookie 라이브러리 추가
npm i react-cookie

redux 초보자가 사용하기에는 복자하고 어렵기 때문에 zustand를 사용
zustand(redux 처럼 상태관리를 해준다) 라이브러리 추가
npm i zustand

api 연결
npm i axios 다운

다음 주소 api 활용 프론트에서
npm i react-daum-postcode

댓글 작성 시간 비교 할때 같이 이용
초경량 날짜/시간 처리 라이브러리
npm i dayjs

# 블로그 erd 쿼리

-- AUTO_INCREMENT 에서 default 지워야 하고 자동으로 추가된 DEFAULT AUTO_INCREMENT COMMENT를 지워준다

-- seafe 모드 끄고 삭제 다시 켜기
SET SQL_SAFE_UPDATES = 0;
DELETE FROM user;
SET SQL_SAFE_UPDATES = 1;

CREATE TABLE board
(
board_Number INT NOT NULL AUTO_INCREMENT COMMENT '게시물 번호',
title TEXT NOT NULL COMMENT '게시물 제목',
content TEXT NOT NULL COMMENT '게시물 내용',
write_datetime DATETIME NOT NULL COMMENT '게시물 작성 날짜 시간',
favorite_count INT NOT NULL DEFAULT 0 COMMENT '게시물 좋아요 수',
comment_count INT NOT NULL DEFAULT 0 COMMENT '게시물 댓글 수',
view_count INT NOT NULL DEFAULT 0 COMMENT '게시물 조회 수',
writer_email VARCHAR(50) NOT NULL COMMENT '게시물 작성자 이메일',
PRIMARY KEY (board_Number)
) COMMENT '게시물 테이블';

ALTER TABLE board
MODIFY COLUMN write_datetime VARCHAR(255) NOT NULL COMMENT '게시물 작성 날짜 시간';

CREATE TABLE comment
(
comment_number INT NOT NULL COMMENT '댓글 번호',
content TEXT NOT NULL COMMENT '댓글 내용',
write_datetime DATETIME NOT NULL COMMENT '댓글 작성 날짜 및 시간',
user_email VARCHAR(50) NOT NULL COMMENT '사용자 이메일',
board_Number INT NOT NULL COMMENT '게시물 번호',
PRIMARY KEY (comment_number)
) COMMENT '댓글 테이블';

ALTER TABLE comment
MODIFY COLUMN write_datetime VARCHAR(255) NOT NULL COMMENT '댓글 작성 날짜 및 시간';

CREATE TABLE favorite
(
user_email VARCHAR(50) NOT NULL COMMENT '사용자 이메일',
board_Number INT NOT NULL COMMENT '게시물 번호',
PRIMARY KEY (user_email, board_Number)
) COMMENT '좋아요 테이블';

CREATE TABLE image
(
board_Number INT NOT NULL COMMENT '게시물 번호',
image TEXT NOT NULL COMMENT '게시물 이미지 URL'
) COMMENT '게시물 이미지 테이블';

alter table `image` add column `sequence` int primary key auto_increment comment '이미지 번호';

CREATE TABLE search_log
(
sequence INT NOT NULL AUTO_INCREMENT COMMENT '시퀀스',
search_word TEXT NOT NULL COMMENT '검색어',
relation_word TEXT NULL COMMENT '관련 검색어',
relation BOOLEAN NOT NULL COMMENT '관련 검색어 여부',
PRIMARY KEY (sequence)
) COMMENT '검색 기록 테이블';

CREATE TABLE user
(
email VARCHAR(50) NOT NULL COMMENT '사용자 이메일',
password VARCHAR(100) NOT NULL COMMENT '사용자 비밀번호',
nickname VARCHAR(20) NOT NULL UNIQUE COMMENT '사용자 닉네임',
tel_number VARCHAR(15) NOT NULL UNIQUE COMMENT '사용자 휴대번호',
address TEXT NOT NULL COMMENT '사용자 주소',
address_detail TEXT NULL COMMENT '사용자 상세 주소',
profile_image TEXT NULL COMMENT '사용자 프로필 사진 URL',
PRIMARY KEY (email)
) COMMENT '사용자 테이블';

drop view board_list_view;

-- board 리스트 뷰
create view board_list_view as select
b.board_number as board_number,
b.title as title,
b.content as content,
i.image as title_image,
b.view_count as view_count,
b.favorite_count as favorite_count,
b.comment_count as comment_count,
b.write_datetime as write_datetime,
u.email as writer_email,
u.nickname as writer_nickname,
u.profile_image as writer_profile_image
from board as b
inner join user as u
on b.writer_email = u.email
left join (select board_number, Any_value(image) as image from image group by board_number) as i
on b.board_number = i.board_number;

alter table `user` add column `agreed_personal` boolean not null comment '개인정보 동의 여부';

ALTER TABLE image
ADD CONSTRAINT FK_board_TO_image
FOREIGN KEY (board_Number)
REFERENCES board (board_Number);

ALTER TABLE board
ADD CONSTRAINT FK_user_TO_board
FOREIGN KEY (writer_email)
REFERENCES user (email);

ALTER TABLE favorite
ADD CONSTRAINT FK_user_TO_favorite
FOREIGN KEY (user_email)
REFERENCES user (email);

ALTER TABLE favorite
ADD CONSTRAINT FK_board_TO_favorite
FOREIGN KEY (board_Number)
REFERENCES board (board_Number);

ALTER TABLE comment
ADD CONSTRAINT FK_user_TO_comment
FOREIGN KEY (user_email)
REFERENCES user (email);

ALTER TABLE comment
ADD CONSTRAINT FK_board_TO_comment
FOREIGN KEY (board_Number)
REFERENCES board (board_Number);
