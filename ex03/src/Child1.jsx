function Child1(props) {
  console.log(props);
  return (
    <>
      <h1>Child1.jsx</h1>
      <h2>{props.p2}</h2>
    </>
  );
}
export default Child1;
