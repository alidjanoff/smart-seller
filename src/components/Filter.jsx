import React, { useState } from 'react';
import dataFilter from '../db/dataFilter';
import {  AiOutlineStar } from 'react-icons/ai'

const Filter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 


  const allData = dataFilter;

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = allData.slice(0, indexOfLastItem); 

  const handlePageChange = () => {
    if (currentPage < Math.ceil(allData.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <section className="filter-back">
        <div className="filter">
        <h2>Siz istəyin biz sizin üçün sıralayaq</h2>
        <select name="" id="">
          <option value="">Reytinqə görə</option>
          <option value="">Qiymətə görə</option>
        </select>
        <div className="dataFilter">
          <div className='dataCont'>
            {currentItems.map((item, index) => (
              <div key={index} className='dataMap'>
                <div className="img">
                <img src={item.img} alt="" />
                </div>
                <div className="name-rty">
                <p>{item.name}</p>
                <div className="star-rty">
                <AiOutlineStar className='star' /><span>{item.rating}</span>
                </div>
              </div>
              <p>{item.price}</p> 
              </div>
            ))}
          </div>
            <div>
              <button onClick={handlePageChange}>Daha Çox</button>
            </div>
        </div>
        </div>
     
      </section>
    </>
  );
};

export default Filter;
