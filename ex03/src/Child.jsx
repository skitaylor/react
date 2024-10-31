function Child({ p1 }) {
  console.log(p1);
  return (
    <>
      <h1>Child.jsx</h1>
      <h2>전달한 값: {p1}</h2>
    </>
  );
}
export default Child;
