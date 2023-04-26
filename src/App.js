import { useEffect, useRef, useState } from "react";
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

//https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]); //일기 데이터 배열이기 때문에 배열을 초기값으로

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current + 1,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제 되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    // 수정하기 위한 event, (수정 대상, 수정 내용)
    setData(
      data.map(
        (
          it //원본 data 배열에 map이라는 내장함수 이용 it 모든요소 순회
        ) => (it.id === targetId ? { ...it, content: newContent } : it) //새로운 배열 만들어서 setData에 전달
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
//////////////////////////////////////////
