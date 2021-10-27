# 페이워크 2차과제 (Todolist)

배포 사이트 : https://todolist-clients.herokuapp.com/

**로컬보다 훨씬 느리게 동작합니다**

### 1. 기술 스택 및 구조

<br>

![구조](/doc/structure.png)

**Frontend**

- React JS
- Redux
- React-redux
- Redux-saga
- Emotion JS

**Backend (Local)**

- nodeJs
- express

**Depoly**

- Heroku

### 2. 로컬 실행 방법

**현재 BASE_URL이 `http://localhost:8080` 로 설정되어 있습니다. 로컬 웹서버를 사용하셔서 테스트 하는 방법은 아래와 같습니다.**

- 클라이언트 : `npm start`
- 서버 : `cd server -> npm start`

**만약 `http://dummy-server.io/` 로 테스트 하실 경우**

- **package.json 의 proxy 부분을 삭제**
- **src/constant.js 부분에서 BASE_URL을 `http://dummy-server.io/`로 교체해주시면 감사하겠습니다.**

### 3. 구현 컴포넌트

<br/>

![컴포넌트 이미지](doc/Component.png)

<br/>

|  컴포넌트   | 구현여부 |
| :---------: | :------: |
|  TodoItem   |    O     |
|  TodoInput  |    O     |
| TodoResult  |    O     |
| TodoMessage |    O     |
| TodoButton  |    X     |
| TodoFotter  |    X     |

### 4. 구현 기능

|      기능       | 구현여부 |
| :-------------: | :------: |
|    기본 CURD    |    O     |
|   메시지 토글   |    O     |
|  메시지 날리기  |    O     |
|   무한 스크롤   |    X     |
| 게시글 저장하기 |    X     |
