import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  //{diaryList} = props을 받아온거

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

// 만약 prop이 undefined로 내려올수 있으니 defaultProps를 이용하여
// 기본값 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
