import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   // 이 배열을 DiaryList에게 props으로 전달
//   // diaryList = {dummyList} -> DiaryList에 전달
//   {
//     id: 1,
//     author: "kzh",
//     content: "HI 1",
//     emotion: 5,
//     created_date: new Date().getTime(), // 생성날짜(현재 시간 기준)in milliseconds
//   },
//   {
//     id: 2,
//     author: "홍길동",
//     content: "HI 2",
//     emotion: 4,
//     created_date: new Date().getTime(), // 생성날짜(현재 시간 기준)in milliseconds
//   },
//   {
//     id: 3,
//     author: "일지매",
//     content: "HI 3",
//     emotion: 2,
//     created_date: new Date().getTime(), // 생성날짜(현재 시간 기준)in milliseconds
//   },
//   {
//     id: 4,
//     author: "박씨",
//     content: "HI 4",
//     emotion: 1,
//     created_date: new Date().getTime(), // 생성날짜(현재 시간 기준)in milliseconds
//   },
// ];

function App() {
  const [data, setData] = useState([]); //일기 데이터 배열이기 때문에 배열을 초기값으로

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    //일기 데이터 추가 하는
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제 되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
//////////////////////////////////////////
