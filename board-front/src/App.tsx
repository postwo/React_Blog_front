import React from 'react';
import './App.css';
import BoardItem from 'components/boardItem';
import latestBoardListMock from 'mocks/latest-board-list.mock';
import Top3Item from 'components/Top3Item';
import { top3boardListMock } from 'mocks';

// 여기서 뷰를 렌더링 해준다
function App() {
  return (
    // 뷰 연결은 여기서 작성한후 연결
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        {top3boardListMock.map((top3ListItem) => (
          <Top3Item top3ListItem={top3ListItem} />
        ))}
      </div>
    </>
  );
}

export default App;
