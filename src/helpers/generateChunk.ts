import { DEFAULT_CHUNK_SIZE } from "../config";

// to get number (n to N) array to fetch locations or residents by id
// For instance, https://rickandmortyapi.com/api/location/1,2,3,4
// Default chunk size is 4. This usage for Grid System (2x2)
export const generateChunkOrdered = (chunkNumber: number) =>
  Array.from(
    { length: DEFAULT_CHUNK_SIZE },
    (x, i) => i + 1 + DEFAULT_CHUNK_SIZE * (chunkNumber - 1)
  );
// to get chunked urls for pagination with page number.
// For instance, [url1,ur2,url3,url4,url5,url6]
// return arr=[[url1,url2,url3,url4],[url5,url6]] ( for chunked size =4)
// if you are in page in 1 get this arr[0] so you are in 2 arr[1]
//This usage to get better performance in COMPLEX DB BIG DATAS
export const generateChunkedArr = (
  residentUrls: Array<string>,
  chunkedSize = DEFAULT_CHUNK_SIZE,
  pageNum?: string
) => {
  return Array.from(
    new Array(Math.ceil(residentUrls.length / chunkedSize)),
    (_, i) => residentUrls.slice(i * chunkedSize, i * chunkedSize + chunkedSize)
  )[Number(pageNum) - 1];
};
