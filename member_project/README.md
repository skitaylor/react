## 프로젝트 생성

1. member_project 폴더 생성
2. member_project 하위에 vite로 만든 frontend와 backend를 위한 폴더 생성
   - member_project 아래 frontend, backend 폴더가 각각 있어야 함
   - 실행할 때는 frontend, backend 각각 터미널을 띄워서 실행해야 함
3. frontend 프로젝트 정리하고 실행했을 때 회원가입(/save), 회원목록(/list) 링크가 있으며,
   각각 링크를 클릭하면 화면에 회원가입페이지(Save.jsx), 회원목록페이지(List.jsx)가 보임.
4. 회원가입을 위한 리액트 컴포넌트 생성(Save.jsx)
   - 회원가입 페이지에서 이메일, 비밀번호, 이름, 전화번호를 입력받는 input 태그가 있고
     입력을 하면 member 라는 state에 모든 값이 저장됨.
5. backend 세팅 후 필요한 라이브러리 모두 설치하고 db 접속 정상적으로 되는것 까지 구현
6. Database 세팅 - 계정, database는 기존 것 사용 - 회원을 위한 테이블 생성

   ```sql
   drop table if exists member_table;
   create table member_table(
   	id bigint auto_increment primary key,
    member_email varchar(50),
    member_password varchar(20),
    member_name varchar(20),
    member_mobile varchar(20)
    );

   ```
