import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './style.css';
import DefaultProfileImage from 'assets/image/default-profile-image.png';
import { useNavigate, useParams } from 'react-router-dom';
import { BoardListItem } from 'types/interface';
import { latestBoardListMock } from 'mocks';
import BoardItem from 'components/BoardItem';
import { BOARD_PATH, BOARD_WRITE_PATH, USER_PATH } from 'constant';
import { useLoginUserStore } from 'stores';

//       component: 유저 화면 컴포넌트       //
export default function User() {
  //     state: userEmail path variable 상태   //
  const { userEmail } = useParams();

  //     state: 마이페이지 여부 상태      //
  const [isMypage, setMyPage] = useState<boolean>(true);

  //     state: 로그인 유저 상태      //
  const { loginUser } = useLoginUserStore();

  //     function: 네비게이트 함수       //
  const navigate = useNavigate();

  //       component: 유저 화면 상단 컴포넌트       //
  const UserTop = () => {
    //     state: 이미지 파일 인풋 참조 상태      //
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    //     state: 닉네임 변경 여부 상태      //
    const [isNicknameChange, setNicknameChange] = useState<boolean>(false);

    //     state: 닉네임 상태      //
    const [nickname, setnickname] = useState<string>('');

    //     state: 변경 닉네임 상태      //
    const [changeNickname, setChangeNickname] = useState<string>('');

    //     state: 프로필 이미지 상태      //
    const [profileImage, setProfileImage] = useState<string | null>(null);

    //     event handler: 프로필 박스 클릭 이벤트 처리      //
    const onProfileBoxClickHandler = () => {
      if (!isMypage) return;
      if (!imageInputRef.current) return;
      imageInputRef.current.click();
    };

    //     event handler: 닉네임 수정 버튼 클릭 이벤트 처리      //
    const onNicknameEditButtonClickHandler = () => {
      setChangeNickname(nickname);
      setNicknameChange(!isNicknameChange);
    };

    //     event handler: 프로필 이미지 변경  이벤트 처리      //
    const onProfileImageChangeHandler = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      if (!event.target.files || !event.target.files.length) return;

      const file = event.target.files[0];
      const data = new FormData();
      data.append('file', file);
    };

    //     event handler: 닉네임 변경  이벤트 처리      //
    const onNicknameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setChangeNickname(value);
    };

    //     effect: user email path variable 변경시 실행 할 함수    //
    useEffect(() => {
      if (!userEmail) return;
      setnickname('나는 주코야키');
      setProfileImage(
        'https://searchad-phinf.pstatic.net/MjAyNTA4MTNfMTYy/MDAxNzU1MDUzMzQxODky.RvclRJQDxAhWyiqi-4PsULtCMue4lqqftbhWJMRSUUUg.tr9PB5cd8Nz2Y_we6dFO4Mozc30zSXV0JcOrIdF-qxUg.JPEG/135834-7b5ce5ab-cf02-4485-8351-2c23c075ba2e.jpg&w=90&h=90&rs=2&qlt=100'
      );
    }, [userEmail]);

    //     render: 유저 화면 상단 컴포넌트 렌더링     //
    return (
      <div id="user-top-wrapper">
        <div className="user-top-container">
          {isMypage ? (
            <div
              className="user-top-my-profile-image-box"
              onClick={onProfileBoxClickHandler}
            >
              {profileImage !== null ? (
                <div
                  className="user-top-profile-image"
                  style={{
                    backgroundImage: `url(${profileImage})`,
                  }}
                ></div>
              ) : (
                <div className="icon-box-large">
                  <div className="icon image-box-white-icon"></div>
                </div>
              )}
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={onProfileImageChangeHandler}
              />
            </div>
          ) : (
            <div
              className="user-top-profile-image-box"
              style={{
                backgroundImage: `url(${
                  profileImage ? profileImage : DefaultProfileImage
                })`,
              }}
            ></div>
          )}

          <div className="user-top-info-box">
            <div className="user-top-info-nickname-box">
              {isMypage ? (
                <>
                  {isNicknameChange ? (
                    <input
                      className="user-top-info-nickname-input"
                      type="text"
                      size={changeNickname.length + 2}
                      value={changeNickname}
                      onChange={onNicknameChangeHandler}
                    />
                  ) : (
                    <div className="user-top-info-nickname">{nickname}</div>
                  )}
                  <div
                    className="icon-button"
                    onClick={onNicknameEditButtonClickHandler}
                  >
                    <div className="icon edit-icon"></div>
                  </div>
                </>
              ) : (
                <div className="user-top-info-nickname">{nickname}</div>
              )}
            </div>
            <div className="user-top-info-email">{'cods@sosf.com'}</div>
          </div>
        </div>
      </div>
    );
  };

  //       component: 유저 화면 하단 컴포넌트       //
  const UserBottom = () => {
    //     state: 게시물 개수 상태         //
    const [count, setCount] = useState<number>(2);

    //     state: 게시물 리스트 상태         //
    const [userBoardList, setUserBoardList] = useState<BoardListItem[]>([]);

    //     event handler: 사이드 카드 클릭 이벤트 처리      //
    const onSideCardClickHandler = () => {
      if (isMypage) navigate(BOARD_PATH() + '/' + BOARD_WRITE_PATH());
      else if (loginUser) navigate(USER_PATH(loginUser.email));
    };

    //     effect: userEmail path variable이 변경될 떄마다 실행할 함수    //
    useEffect(() => {
      setUserBoardList(latestBoardListMock);
    }, [userEmail]);

    //     render: 유저 화면 하단 컴포넌트 렌더링     //
    return (
      <div id="user-bottom-wrapper">
        <div className="user-bottom-container">
          <div className="user-bottom-title">
            {isMypage ? '내 게시물' : '게시물'}
            <span className="emphasis">{count}</span>
          </div>
          <div className="user-bottom-contents-box">
            {count === 0 ? (
              <div className="user-bottom-contents-nothing">
                {'게시물이 없습니다'}
              </div>
            ) : (
              <div className="user-bottom-contents">
                {userBoardList.map((boardListItem) => (
                  <BoardItem boardListItem={boardListItem} />
                ))}
              </div>
            )}
            <div className="user-bottom-side-box">
              <div
                className="user-bottom-side-card"
                onClick={onSideCardClickHandler}
              >
                <div className="user-bottom-side-container">
                  {isMypage ? (
                    <>
                      <div className="icon-box">
                        <div className="icon edit-icon"></div>
                      </div>
                      <div className="user-bottom-side-text">{'글쓰기'}</div>
                    </>
                  ) : (
                    <>
                      <div className="user-bottom-side-text">
                        {'내 게시물로 가기'}
                      </div>
                      <div className="icon-box">
                        <div className="icon arrow-right-icon"></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="user-bottom-pagination-box"></div>
        </div>
      </div>
    );
  };

  //     render: 유저 화면 컴포넌트 렌더링     //
  return (
    <>
      <UserTop />
      <UserBottom />
    </>
  );
}
