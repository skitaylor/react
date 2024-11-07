import { user } from "react";

function Save() {
  const [profile, setProfile] = user({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const inputUpdate = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  return (
    <>
      이메일: <input type="text" name="email" onChange={inputUpdate} />
      <br></br>
      비밀번호: <input type="text" name="password" onChange={inputUpdate} />
      <br></br>
      이름: <input type="text" name="name" onChange={inputUpdate} />
      <br></br>
      전화번호: <input type="text" name="mobile" onChange={inputUpdate} />
    </>
  );
}
export default Save;
