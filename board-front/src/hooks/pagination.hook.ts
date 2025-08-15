import { useEffect, useState } from 'react';

//countPerPage = 한 페이지에 보여줄 항목 수
const usePagination = <T>(countPerPage: number) => {
  //       state: 전체 객체 리스트 상태      //
  //usePagination을 호출할때 타입을 받아와서 useState<>([]); 여기에 타입을 넣어준다
  // T는 매개타입이라고 한다
  const [totalList, setTotalList] = useState<T[]>([]);

  //       state: 보여줄 객체 리스트 상태    //
  const [viewList, setViewList] = useState<T[]>([]);

  //       state: 현재 페이지 번호 상태     //
  const [currentPage, setCurrentPage] = useState<number>(1);

  //       state: 전체 페이지 번호 리스트 상태     //
  const [totalPageList, setTotalPageList] = useState<number[]>([1]);

  //       state: 보여줄 페이지 번호 리스트 상태     //
  const [viewPageList, setViewPageList] = useState<number[]>([1]);

  //       state: 현재 섹션 상태     //
  const [currentSection, setCurrentSection] = useState<number>(1);

  //       state: 전체 섹션 상태     //
  const [totalSection, setTotalSection] = useState<number>(1);

  //       function: 보여줄 객체 리스트 추출 함수      //
  const setView = () => {
    // 시작인덱스
    const FIRST_INDEX = countPerPage * (currentPage - 1);
    // 종료인덱스
    const LAST_INDEX =
      totalList.length > countPerPage * currentPage
        ? countPerPage * currentPage
        : totalList.length;
    const viewList = totalList.slice(FIRST_INDEX, LAST_INDEX);
    setViewList(viewList);
  };

  //       function: 보여줄 페이지 리스트 추출 함수      //
  const setViewPage = () => {
    const FIRST_INDEX = 10 * (currentSection - 1);
    const LAST_INDEX =
      totalPageList.length > 10 * currentSection
        ? 10 * currentSection
        : totalPageList.length;
    const viewPageList = totalPageList.slice(FIRST_INDEX, LAST_INDEX);
    setViewPageList(viewPageList);
  };

  //       effect: total list가 변경될 때마다 실행할 작업        //
  useEffect(() => {
    //countPerPage = 한 페이지에 보여줄 항목 수 ,totlaList.length = 전체 데이터의 개수
    const totalPage = Math.ceil(totalList.length / countPerPage);
    const totalPageList: number[] = [];
    for (let page = 1; page <= totalPage; page++) totalPageList.push(page);
    setTotalPageList(totalPageList);

    //countPerPage * 10 = [1][2][3][4][5][6][7][8][9][10]
    const totalSection = totalList.length / (countPerPage * 10);
    setTotalSection(totalSection);

    // 현재페이지는 무조건 1부터 시작
    setCurrentPage(1);
    // 현재 섹션도 무조건 1부터 시작
    setCurrentSection(1);

    setView();
    setViewPage();
  }, [totalList]);

  //       effect: current page가 변경될 때마다 실행할 작업        //
  useEffect(setView, [currentPage]);

  //       effect: current section이 변경될 때마다 실행할 작업        //
  useEffect(setViewPage, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
    currentSection,
    setCurrentSection,
    viewList,
    viewPageList,
    totalSection,
    setTotalList,
  };
};

export default usePagination;
