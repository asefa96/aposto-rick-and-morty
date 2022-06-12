import { DEFAULT_CHUNK_SIZE } from "../config";

export const generateChunkOrdered = (chunkNumber: number) =>
  Array.from(
    { length: DEFAULT_CHUNK_SIZE },
    (x, i) => i + 1 + DEFAULT_CHUNK_SIZE * (chunkNumber - 1)
  );

export const generateChunkedArr = (
  residentUrls: Array<string>,
  chunkedSize = DEFAULT_CHUNK_SIZE,
  pageNum?: string
) => {
  return Array.from(
    new Array(Math.ceil(residentUrls.length / chunkedSize)),
    (_, i) => residentUrls.slice(i * chunkedSize, i * chunkedSize + chunkedSize)
  )[Number(pageNum)-1];
};
