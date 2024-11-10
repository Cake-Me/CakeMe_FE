import React from 'react';

const StoreItem = ({ store }) => {
  return (
    <div style={styles.item}>
      <h3>{store.name}</h3>
      <p>{store.location}</p>
      <button onClick={() => alert(`상세보기: ${store.name}`)}>상세 보기</button>
    </div>
  );
};

const styles = {
  item: {
    borderBottom: '1px solid #eee',
    padding: '10px 0',
  },
};

export default StoreItem;
