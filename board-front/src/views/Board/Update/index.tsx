import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './style.css';
import { useBoardStore, useLoginUserStore } from 'stores';
import { useNavigate, useParams } from 'react-router-dom';
import { MAIN_PATH } from 'constant';
import { useCookies } from 'react-cookie';
import { getBoardRequest } from 'apis';
import { GetBoardResponseDto } from 'apis/response/board';
import { ResponsDto } from 'apis/response';
import { convertUrlsToFile } from 'utiils';

//           component: 게시물 수정 화면 컴포넌트           //
export default function BoardUpdate() {
  //         state: 제목 영역 요소 참조 상태             //
  const titleRef = useRef<HTMLTextAreaElement | null>(null);

  //         state: 본문 영역 요소 참조 상태             //
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  //         state: 이미지 입력 요소 참조 상태             //
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  //         state: 게시물 번호 path variable 상태          //
  const { boardNumber } = useParams();

  //         state: 게시물 상태           //
  const { title, setTitle } = useBoardStore();
  const { content, setContent } = useBoardStore();
  const { boardImageFileList, setBoardImageFileList } = useBoardStore();

  //         state: 로그인 유저 상태       //
  const { loginUser } = useLoginUserStore();

  //         state: 쿠키 상태     //
  const [cookies, setCookies] = useCookies();

  //         state: 게시물 이미지 미리보기 URL 상태     //
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  //         function: 네비케이트 함수               //
  const navigator = useNavigate();

  //         function: get board response 처리 함수               //
  const getBoardResponse = (
    responseBody: GetBoardResponseDto | ResponsDto | null
  ) => {
    if (!responseBody) return;
    const { code } = responseBody;
    if (code === 'NB') alert('존재하지 않는 게시물 입니다');
    if (code === 'DBE') alert('데이터 베이스 오류 입니다');
    if (code !== 'SU') {
      navigator(MAIN_PATH());
      return;
    }

    const { title, content, boardImageList, writerEmail } =
      responseBody as GetBoardResponseDto;
    setTitle(title);
    setContent(content);
    setImageUrls(boardImageList);
    //then은 convertUrlsToFile에서 리턴해주는 값을 받을수 있다
    convertUrlsToFile(boardImageList).then((boardImageFileList) =>
      setBoardImageFileList(boardImageFileList)
    );

    if (!loginUser || loginUser.email !== writerEmail) {
      navigator(MAIN_PATH());
      return;
    }

    if (!contentRef.current) return;
    // 밑 두가지는 내용에 스크롤바를 없애기 위해 작성
    contentRef.current.style.height = 'auto';
    contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
  };

  //         event handler: 제목 변경 이벤트 처리      //
  const onTiltleChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTitle(value);

    if (!titleRef.current) return;
    // 밑 두가지는 내용에 스크롤바를 없애기 위해 작성
    titleRef.current.style.height = 'auto';
    titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
  };

  //         event handler: 내용 변경 이벤트 처리      //
  const onContentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setContent(value);

    if (!contentRef.current) return;
    // 밑 두가지는 내용에 스크롤바를 없애기 위해 작성
    contentRef.current.style.height = 'auto';
    contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
  };

  //         event handler: 이미지 변경 이벤트 처리      //
  const onImageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) return;
    const file = event.target.files[0];

    //미리보기용 url
    const imageUrl = URL.createObjectURL(file);
    const newImageUrls = imageUrls.map((item) => item);
    newImageUrls.push(imageUrl);
    setImageUrls(newImageUrls);

    //파일 업로드 url
    const newBoardImageFileList = boardImageFileList.map((item) => item);
    newBoardImageFileList.push(file);
    setBoardImageFileList(newBoardImageFileList);

    //이거는 똑같은 이미지를 넣을수 있게 해준다
    if (!imageInputRef.current) return;
    imageInputRef.current.value = '';
  };

  //         event handler: 이미지 업로드 버튼 클릭 이벤트 처리      //
  const onImageUploadButtonClickHandler = () => {
    if (!imageInputRef.current) return;
    imageInputRef.current.click();
  };

  //         event handler: 이미지 닫기 버튼 클릭 이벤트 처리      //
  const onImageCloseButtonClickHandler = (deleteIndex: number) => {
    if (!imageInputRef.current) return;
    imageInputRef.current.value = '';

    const newImageUrls = imageUrls.filter(
      (url, index) => index !== deleteIndex
    );
    setImageUrls(newImageUrls);

    const newBoardImageFileList = boardImageFileList.filter(
      (file, index) => index !== deleteIndex
    );
    setBoardImageFileList(newBoardImageFileList);
  };

  //         effect: 마운트 시 실행할 함수          //
  useEffect(() => {
    const accessToken = cookies.accessToken;
    if (!accessToken) {
      navigator(MAIN_PATH());
      return;
    }
    if (!boardNumber) return;
    getBoardRequest(boardNumber).then(getBoardResponse);
  }, [boardNumber]);

  //         render: 게시물 수정 화면 컴포넌트 렌더링   //
  return (
    <div id="board-update-wrapper">
      <div className="board-update-container">
        <div className="board-update-box">
          <div className="board-update-title-box">
            <textarea
              ref={titleRef}
              className="board-update-title-textarea"
              placeholder="제목을 작성해주세요"
              value={title}
              onChange={onTiltleChangeHandler}
            />
          </div>
          <div className="divider"></div>
          {/*divider는 app.css에서 만듬*/}
          <div className="board-update-content-box">
            <textarea
              ref={contentRef}
              className="board-update-content-textarea"
              rows={1}
              placeholder="본문을 작성해주세요"
              value={content}
              onChange={onContentChangeHandler}
            />
            <div
              className="icon-button"
              onClick={onImageUploadButtonClickHandler}
            >
              <div className="icon image-box-light-icon"></div>
            </div>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={onImageChangeHandler}
            />
            {/* accept는 내가 지정한것만 올릴수 있게 한다 지금 image를 설정한거처럼 */}
          </div>
          <div className="board-update-images-box">
            {imageUrls.map((imageUrl, index) => (
              <div className="board-update-image-box">
                <img className="board-update-image" src={imageUrl} />
                <div
                  className="icon-button image-close"
                  onClick={() => onImageCloseButtonClickHandler(index)}
                >
                  <div className="icon close-icon"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
