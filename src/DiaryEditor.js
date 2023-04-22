import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={
            handleChangeState
            //     (event) => {
            //     setState({
            //       ...state,
            //       author: event.target.value,
            //       //   content: state.content,
            //     });
            //   }
          }
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={
            handleChangeState
            // (event) => {
            // setState({
            //   //   author: state.author,
            //   ...state,
            //   content: event.target.value,
            //     });
            //   }
          }
        />
      </div>
      <div>
        오늘의 감정점수 : &nbsp;
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button name="button" onClick={handleSubmit}>
          일기 저장하기
        </button>
      </div>
    </div>
  );
};

export default DiaryEditor;
