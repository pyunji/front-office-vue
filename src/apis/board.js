import axios from "axios";

function getBoardList(pageNo=1/* 디폴트값 */) {
  //axios.get(url[, config])
  return axios.get("/board/list", {params:{pageNo}});
}

function createBoard(multipartFormData) {
  return axios.post("/board/create", multipartFormData);
}

function readBoard(bno, hit) {
  // return axios.get("/board", {params:{bno}, query:{hit}}); // 이게 아님
  return axios.get(`/board/${bno}`, {params:{hit}});
}


function updateBoard(multipartFormData) {
  // multipart로 보내는 것은 put이나 patch로 보낼 수 없다.
  return axios.post("/board/update", multipartFormData);
}

function deleteBoard(bno) {
  return axios.delete(`/board/${bno}`);
}

// export default 객체
export default {
  // getBoardList: getBoardList
  getBoardList,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard
}