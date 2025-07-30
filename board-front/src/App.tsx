import React from 'react';
import './App.css';
import BoardItem from 'components/boardItem';
import latestBoardListMock from 'mocks/latest-board-list.mock';

// 여기서 뷰를 렌더링 해준다
function App() {
  return (
    // 뷰 연결은 여기서 작성한후 연결
    <>
      {latestBoardListMock.map((boardListItem) => (
        <BoardItem boardListItem={boardListItem} />
      ))}
    </>
  );
}

export default App;
