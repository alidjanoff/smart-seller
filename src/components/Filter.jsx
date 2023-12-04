import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import dataFilter from "../db/fakeData";
import { AiOutlineStar } from "react-icons/ai";
import { useMainContext } from "../utils/MainContext";
export const MyContext = createContext();

const Filter = () => {
  const values = useMainContext();
  const itemsPerPage = 6;
  const allData = dataFilter;
  const indexOfLastItem = values.currentPage * itemsPerPage;
  const currentItems = allData.slice(0, indexOfLastItem);
  const [sortType, setSortType] = useState("");
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortData = (data, sortType) => {
    if (sortType === "rating") {
      return data.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "price") {
      return data.sort((a, b) => a.price - b.price);
    } else if (sortType === "price1") {
      return data.sort((a, b) => b.price - a.price);
    } else {
      return data;
    }
  };

  const handlePageChange = () => {
    if (values.currentPage < Math.ceil(allData.length / itemsPerPage)) {
      values.setCurrentPage((prevPage) => prevPage + 1);
      if (allData.length > 7) {
        values.setButton2(true);
      } else {
        values.setButton2(false);
      }
    }
  };
  const handlePageChange2 = () => {
    if (values.currentPage < Math.ceil(allData.length / itemsPerPage)) {
      values.setCurrentPage((prevPage) => prevPage - 1);
      if (allData.length >= 5) {
        values.setButton2(false);
      } else {
        values.setButton2(true);
      }
    }
  };

  return (
    <>
      {!values.filterPage ? (
        <section className="filter-back">
          <div className="filter">
            <h2>Siz istəyin biz sizin üçün sıralayaq</h2>
            <select name="" id="" onChange={handleSortChange}>
              <option value="rating">Reytinq (çoxdan-aza)</option>
              <option value="price">Qiymət (azdan-çoxa)</option>
              <option value="price1">Qiymət (çoxdan-aza)</option>
            </select>
            <div className="dataFilter">
              <div className="dataCont">
                {sortData(currentItems, sortType).map((x) => (
                  <div key={x.id} className="dataMap">
                    <div className="img">
                      <Link>
                        <img
                          src={x.img}
                          alt=""
                          onClick={() => (
                            values.setIdFilter(x.id),
                            values.setFilterPage(true),
                            values.setId(null),
                            values.setIdSale(null)
                          )}
                        />
                      </Link>
                    </div>
                    <div className="name-rty">
                      <p>{x.name}</p>
                      <div className="star-rty">
                        <AiOutlineStar className="star" />
                        <span>{x.rating}</span>
                      </div>
                    </div>
                    <p>
                      {x.price}
                      <span>$</span>
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <button onClick={handlePageChange}>Daha Çox</button>
                {values.button2 && (
                  <button onClick={handlePageChange2}>Daha Az</button>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Filter;
