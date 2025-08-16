// 특정 url을 받아와서 파일로 변환
export const convertUrlToFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob(); //blob은 파일 형태로 받는다는 뜻이다
  const extend = url.split('.').pop();
  const fileName = url.split('/').pop();
  const meta = { type: `image/${extend}` };

  return new File([data], fileName as string, meta);
};

export const convertUrlsToFile = async (urls: string[]) => {
  const files: File[] = [];
  for (const url of urls) {
    const file = await convertUrlToFile(url);
    files.push(file);
  }
  return files;
};
