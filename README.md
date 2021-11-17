# 리액트를 이용한 

배포 사이트 : https://todolist-clients.herokuapp.com/

**로컬환경보다 훨씬 느리게 동작합니다**

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

#### **컴포넌트 목록**

|  컴포넌트   | 구현여부 |
| :---------: | :------: |
|  TodoItem   |    O     |
|  TodoInput  |    O     |
| TodoResult  |    O     |
| TodoMessage |    O     |
| TodoButton  |    X     |
| TodoFotter  |    X     |

#### **컴포넌트 설명**

<br>

**1. TodoItem**

- 서버에서 내용을 받아와 todolist의 내용을 보여줍니다.
- toggle , delete , edit을 할 수 있지만, 단순히 redux-saga에 action을 발행하는 함수이지, 로직이 컴포넌트 내부에서 실행되지는 않습니다.

- 연필 버튼을 누르면 수정 / 엔터키로 수정을 마무리합니다.

**2. TodoInput**

- 새로운 todolist를 작성할 수 있는 컴포넌트입니다.

**3. TodoResult**

- 서버로부터 받아온 결과를 보여주는 컴포넌트입니다.

- 게시글이 존재하지 않을 경우 비어있다는 것을 나타내는 이미지가 등장합니다.

**4. TodoMessage**

- 게시글 추가, 편집, 삭제에 성공/실패 할 경우 오른쪽 상단에 메시지가 발생합니다.

### 4. 구현 기능

|      기능       | 구현여부 |
| :-------------: | :------: |
|    기본 CURD    |    O     |
|   메시지 토글   |    O     |
|  메시지 날리기  |    O     |
|   무한 스크롤   |    X     |
| 게시글 저장하기 |    X     |

### 5. 발생하는 오류

- 여러가지의 동작이 수 초 내에 여러번 반복될 때 제대로 메시지가 나타나지 않는다는 문제가 있습니다.

### 6. 기능 추가 현황

|                    발견한 문제                    | 수정 여부 |
| :-----------------------------------------------: | :-------: |
| 모바일 전용 웹에서 가상키보드로 인한 css 밀림현상 |     X     |
|               토글 메시지 처리하기                |     X     |

이게 메시지를 ""로 바꾸는 부분 때문에 문제가 되네.
