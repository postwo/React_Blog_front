import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import DefaultProfileImage from 'assets/image/default-profile-image.png';
import { useParams } from 'react-router-dom';

//       component: 유저 화면 컴포넌트       //
export default function User() {
  //     state: 파라미터 값을 가져오는 상태   //
  const { userEmail } = useParams();

  //       component: 유저 화면 상단 컴포넌트       //
  const UserTop = () => {
    //     state: 이미지 파일 인풋 참조 상태      //
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    //     state: 마이페이지 여부 상태      //
    const [isMypage, setMyOage] = useState<boolean>(true);

    //     state: 닉네임 변경 여부 상태      //
    const [isNicknameChange, setNicknameChange] = useState<boolean>(false);

    //     state: 닉네임 상태      //
    const [nickname, setnickname] = useState<string>('');

    //     state: 변경 닉네임 상태      //
    const [changeNickname, setChangeNickname] = useState<string>('');

    //     state: 프로필 이미지 상태      //
    const [profileImage, setProfileImage] = useState<string | null>(null);

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
            <div className="user-top-my-profile-image-box">
              {profileImage !== null ? (
                <div
                  className="user-top-profile-image"
                  style={{
                    backgroundImage: `url(${profileImage})`,
                  }}
                ></div>
              ) : (
                <div className="user-top-my-profile-image-nothing-box">
                  <div className="icon-box-large">
                    <div className="icon image-box-white-icon"></div>
                  </div>
                </div>
              )}
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
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
                      size={changeNickname.length + 1}
                      value={changeNickname}
                    />
                  ) : (
                    <div className="user-top-info-nickname">{nickname}</div>
                  )}
                  <div className="icon-button">
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
    //     render: 유저 화면 하단 컴포넌트 렌더링     //
    return <div></div>;
  };

  //     render: 유저 화면 컴포넌트 렌더링     //
  return (
    <>
      <UserTop />
      <UserBottom />
    </>
  );
}
