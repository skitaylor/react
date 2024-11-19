import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
export default function Detail() {
  const { id } = useParams();
  const [board, setBoard] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    const board_db = axios
      .get(`http://localhost:8000/board/${id}`)
      .then((res) => {
        console.log(res.data);
        setBoard(res.data[0]);
      });
  }, []);
  const updateReq = () => {
    setShowPass(true);
  };
  const passInput = (e) => {
    const { name, value } = e.target;
    setPassword(value);
  };

  const navigate = useNavigate();
  const passCheck = () => {
    if (password == board.boardPass) {
      navigate(`/update/${board.id}`);
    } else {
      alert("비밀번호 불일치");
    }
  };
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
      <button onClick={updateReq}>수정</button>
      {showPass && (
        <div>
          <input type="text" value={password} onChange={passInput} />
          <button onClick={passCheck}>확인</button>
        </div>
      )}
    </>
  );
}
