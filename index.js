// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);

// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swagger 설정
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 를 바탕으로 DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "b.html",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
    },
    visual_6: {
      file: "images/v6.png",
      url: "f.html",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  //json 내용 복붙
  const result = {
    total: 12,
    good_1: {
      image: "images/r1.jpg",
      discount: 33,
      price: 7900,
      desc: "[11/1 오쎈특가] 한만두 매콤갈비만두 1kg 외 왕교자/군만두/짬뽕만두 19종 골라담기",
      url: "a.html",
    },
    good_2: {
      image: "images/r2.jpg",
      discount: 0,
      price: 12900,
      desc: "[더쎈위크] 롯데빼빼로 3종x 10갑 (오리지널/아몬드/초코필드)",
      url: "a.html",
    },
    good_3: {
      image: "images/r3.jpg",
      discount: 27,
      price: 49900,
      desc: "[스포츠파크] 노스페이스 겨울 구스다운 패딩 슬립온 NS93M50",
      url: "a.html",
    },
    good_4: {
      image: "images/r4.jpg",
      discount: 20,
      price: 33920,
      desc: "나이키 드라이핏 빅로고 남자 여성 후드티셔츠 외 4종 택일",
      url: "a.html",
    },
    good_5: {
      image: "images/r5.jpg",
      discount: 27,
      price: 14500,
      desc: "서울우유 멸균 초코/딸기/흰우유 24팩/ 48팩 외",
      url: "a.html",
    },
    good_6: {
      image: "images/r6.jpg",
      discount: 13,
      price: 28610,
      desc: "[QPRIME] 한일의료기 루동프 전기요(미니싱글/싱글/더블) /국내 무료배송",
      url: "a.html",
    },
    good_7: {
      image: "images/r7.jpg",
      discount: 13,
      price: 6960,
      desc: "[텐바이텐][1+1 한정판매] 2024 스누피 데스크 캘린드 1+1",
      url: "a.html",
    },
    good_8: {
      image: "images/r8.jpg",
      discount: 9,
      price: 283330,
      desc: "이와타니 캠핑용 부탄 가스 팬히터 CB-GFH-5",
      url: "a.html",
    },
    good_9: {
      image: "images/r9.jpg",
      discount: 14,
      price: 18260,
      desc: "샤오미 미지아 가습기2/미지아 스마트 살균 가습기2/MJJSQ06DY/관부가세포함",
      url: "a.html",
    },
    good_10: {
      image: "images/r10.jpg",
      discount: 18,
      price: 2930,
      desc: "[쇼핑앱특가2400원] 아이팝 무라벨 먹는샘물 생수 2L*펫 / 하이트진로",
      url: "a.html",
    },
    good_11: {
      image: "images/r11.jpg",
      discount: 25,
      price: 10410,
      desc: "제주 삼다수 2L 12병 (유/무라벨 랜덤발송)",
      url: "a.html",
    },
    good_12: {
      url: "go.html",
    },
  };
  res.send(result);
});

// tour 영역에 출력할 자료 요청
app.get("/tour", (req, res) => {
  const result = {};
  res.send(result);
});

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
