import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("서버 시작!");
});

const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "user_ex",
  password: "1234",
  port: "8000",
  database: "db_ex",
});

db.connect((err) => {
  console.log("db 연결 성공!");
  console.log("err", err);
});

app.get("/", () => {
  console.log("기본주소 요청");
});

app.post("/board/save", (req, res) => {
  const { boardTitle, boardWriter, boardPass, boardContents } = req.body.board;
  console.log(boardTitle, boardWriter, boardPass, boardContents);
  const sql =
    "insert into board_table(boardTitle, boardWriter, boardPass, boardContents) values(?,?,?,?)";
  db.query(
    sql,
    [boardTitle, boardWriter, boardPass, boardContents],
    (err, results, fields) => {
      console.log("err", err);
    }
  );
  res.status(200).send("글작성 성공!");
});

app.get("/board/list", (req, res) => {
  const sql = "select * from board_table";
  db.query(sql, (err, results, fields) => {
    console.log("results", results);
    res.status(200).json(results);
  });
});