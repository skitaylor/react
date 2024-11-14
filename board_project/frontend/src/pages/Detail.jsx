import { useParams } from "react-router-dom";
export default function Detail() {
  const { id } = useParams();
  return (
    <>
      <h2>Detail.jsx</h2>
      <h3>글번호: {id}</h3>
    </>
  );
}
