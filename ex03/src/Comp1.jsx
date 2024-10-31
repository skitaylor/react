function Comp1() {
  //변수선언시작
  const name = "정기용";
  const student = {
    name: "학생1",
    age: 30,
    mobile: "010-0000-0000",
  };
  return (
    <>
      <h1>하이여 나 기다림?</h1>
      <h3>안녕 나는 {name}이야</h3>
      <h3>이름: {student.name}</h3>
      <h3>나이: {student.age}</h3>
      <h3>전번: {student.mobile}</h3>
    </>
  );
}

//properties: 컴포넌트간에 데이터를 전달하기위한 객체
export default Comp1;
