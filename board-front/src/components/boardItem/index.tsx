import React from 'react';
import './style.css'; // css 적용
import { BoardListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';
import DefaultProfileImage from 'assets/image/default-profile-image.png';

interface Props {
  // 서버에서 받아오는 데이터를 가지고 있는 인터페이스
  boardListItem: BoardListItem;
}

//            component: Board List Item 컴포넌트            //
//Import 'BoardListItem' conflicts with local value, so must be declared with a type-only import when 'isolatedModules' is enabled.
//이게 뜨는 이유는 이름이 겹쳐서 충돌이 일어나는거다 그러므로 함수 이름을 수정하면 해결된다
export default function BoardItem({ boardListItem }: Props) {
  //            properties                                 //
  const { boardNumber, title, content, boardTitleImage } = boardListItem;
  const { favoriteCount, commentCount, viewCount } = boardListItem;
  const { writeDatetime, writerNickname, writerProfileImage } = boardListItem;

  //           function: 네비게이트 함수    //
  // const navigator = useNavigate();

  //           event handler: 게시물 아이템 클릭 이벤트 처리 함수     //
  const onClickHandler = () => {
    // navigator(boardNumber);
  };

  //            component: Board List Item 컴포넌트 랜더링      //
  return (
    <div className="board-list-item" onClick={onClickHandler}>
      <div className="board-list-item-main-box">
        <div className="board-list-item-top">
          <div className="board-list-item-profile-box">
            <div
              className="board-list-item-profile-image"
              style={{
                backgroundImage: `url(${
                  writerProfileImage ? writerProfileImage : DefaultProfileImage
                })`,
              }}
            ></div>
          </div>
          <div className="board-list-item-write-box">
            <div className="board-list-item-nickname">{writerNickname}</div>
            <div className="board-list-item-write-date">{writeDatetime}</div>
          </div>
        </div>
        <div className="board-list-item-middle">
          <div className="board-list-item-title">{title}</div>
          <div className="board-list-item-content">{content}</div>
        </div>
        <div className="board-list-item-bottom">
          <div className="board-list-item-counts">
            {`댓글 ${commentCount} • 좋아요 ${favoriteCount} • 조회수 ${viewCount}`}
          </div>
        </div>
      </div>
      {boardTitleImage !== null && (
        <div className="board-list-item-image-box">
          <div
            className="board-list-item-image"
            style={{ backgroundImage: `url(${boardTitleImage})` }}
          ></div>
        </div>
      )}
    </div>
  );
}
