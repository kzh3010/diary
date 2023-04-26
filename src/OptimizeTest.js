import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`COunterA Update count ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`counter B upDate ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  //  return true // 이전 프롭스 현재 프롭스 같다.-> 리렌더링 안생긴다
  //  return false// 이전과 현재가 다르다 -> 리렌더링 발생한다.
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>CounterA</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>CounterB</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
