## 프로젝트 생성

### 게시판 주요 기능

- 모든 화면은 pages 폴더에 위치
- 게시글 작성 (Save.jsx)
  - 게시글 작성시 비밀번호를 입력 받고 수정, 삭제시 비밀번호 확인
- 게시글 목록 출력 (List.jsx)
- 게시글 조회 (Detail.jsx)
  - 게시글 조회시 조회수 처리
- 게시글 수정 (Update.jsx)
  - 수정시 비밀번호 일치해야 수정처리 가능
- 게시글 삭제 (Detail.jsx)

  - 삭제시 비밀번호 일치해야 삭제처리 가능

  ```sql
  drop table if exists board_table;
  create table board_table(
   id bigint 		  auto_increment primary key,
   boardTitle 		varchar(50),
   boardWriter  	varchar(50),
   boardPass 		  varchar(50),
   boardContents  varchar(500),
   boardHits 		  int default 0,
   createdAt 		  datetime default now()
   );

  ```
