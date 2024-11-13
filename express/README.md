## library

- express: 백엔드 프레임워크
- cors: 다른 도메인에서 제공하는 리소스에 엑세스 할 수 있도록 하는 기능
- json: json 파싱
- body-parser: 클라이언트로 부터 전달된 body 받기
- nodemon: 저장시 서버 새로고침
- mysql2: mysql 접속을 위한 라이브러리

```
npm install express cors json body-parser nodemon mysql2
```

## database

- 계정생성

```sql
create database db_ex;
create user user_ex@localhost identified by '1234';
grant all privileges on db_ex.* to user_ex@localhost;
```

- 테이블

```sql
drop table if exists nations_table;
create table nations_table(
	id bigint auto_increment primary key,
    name varchar(20),
    capital varchar(20),
    population int
    );

insert into nations_table(name, capital, population) values("대한민국", "서울", 51200000);
insert into nations_table(name, capital, population) values("프랑스", "파리", 67750000);
insert into nations_table(name, capital, population) values("호주", "캔버라", 25690000);
```
