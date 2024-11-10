import React from 'react';

const StoreList = ({ stores }) => {
  return (
    <div>
      {stores.length > 0 ? (
        stores.map((store) => (
          <div key={store.id} style={styles.item}>
            <h3 style={styles.title}>{store.name}</h3>
            <p style={styles.location}>{store.location}</p>
            <a href={store.url} target="_blank" rel="noopener noreferrer">
              <button style={styles.detailButton}>상세 보기</button>
            </a>
          </div>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

const styles = {
  item: {
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: '#FFF',
    borderRadius: '20px',
    border: '2px solid #BDAB99',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width : '230px',
    height : '130px',
  },
  title: {
    // fontSize: '20px',
    // fontWeight: 'bold',
    // color: '#5B4636',
    color: '#593E17',
    fontfamily: 'Inter',
    fontsize: '20px',
    fontstyle: 'normal',
    fontweight: '700',
    lineheight: 'normal',
  },
  location: {
    fontSize: '14px',
    // marginBottom: '10px',
    color: '#5B4636',
  },
  detailButton: {
    padding: '8px 12px',
    backgroundColor: '#F7F2EB',
    color: '#593E17',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    border: '1px solid #BDAB99',
    fontfamily: 'Inter',
    fontsize: '10px',
    fontstyle: 'normal',
    fontweight: '400',
    lineheight: 'normal',
  },
};

export default StoreList;
