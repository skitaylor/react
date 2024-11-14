import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
export default function Detail() {
  const { id } = useParams();
  const [board, setBoard] = useState("");
  useEffect(() => {
    const board_db = axios
      .get(`http://localhost:8000/board/${id}`)
      .then((res) => {
        console.log(res.data);
        setBoard(res.data[0]);
      });
  }, []);
  return (
    <>
      <h2>Detail.jsx</h2>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>{board.id}</td>
          </tr>
          <tr>
            <td>boardTitle</td>
            <td>{board.boardTitle}</td>
          </tr>
          <tr>
            <td>boardWriter</td>
            <td>{board.boardWriter}</td>
          </tr>
          <tr>
            <td>boardContents</td>
            <td>{board.boardContents}</td>
          </tr>
          <tr>
            <td>boardHits</td>
            <td>{board.boardHits}</td>
          </tr>
        </thead>
      </table>
    </>
  );
}
