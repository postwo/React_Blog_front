import React from 'react';
import './App.css';
import BoardItem from 'components/boardItem';
import latestBoardListMock from 'mocks/latest-board-list.mock';
import Top3Item from 'components/Top3Item';
import { commentListMock, top3boardListMock } from 'mocks';
import CommentItem from 'components/commentItem';
import favoriteListMock from 'mocks/favorite-list.mock';
import FavoriteItem from 'components/FavoriteItem';

// 여기서 뷰를 렌더링 해준다
function App() {
  return (
    // 뷰 연결은 여기서 작성한후 연결
    <>
      <div
        style={{
          display: 'flex',
          columnGap: '30px',
          rowGap: '20px',
        }}
      >
        {favoriteListMock.map((favoriteListItem) => (
          <FavoriteItem favoriteListItem={favoriteListItem} />
        ))}
      </div>
    </>
  );
}

export default App;
