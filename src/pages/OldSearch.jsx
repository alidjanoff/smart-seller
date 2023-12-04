import React, { createContext } from "react";
import { Link } from "react-router-dom";
import ProductAbout from "../components/ProductAbout";
import { useMainContext } from "../utils/MainContext";
export const MyContext = createContext();

const OldSearch = () => {
  const values = useMainContext();
  window.onload = function () {
    window.location.href = "/";
  };
  const searchResultsLocal = JSON.parse(localStorage.getItem("searchData"));
  return (
    <>
      {!values.idOld ? (
        <section className="searchBack">
          <h2>Keçmiş axtarışlar</h2>
          <div className="oldSearch">
            {searchResultsLocal.map((x) => (
              <div className="searches" key={x.id}>
                <p>
                  {x.name} <span>{x.price}</span>
                  <span>$</span>
                </p>
                <Link
                  onClick={() => (
                    values.setIdOld(x.id),
                    values.setId(null),
                    values.setIdSale(null),
                    values.setIdFilter(null)
                  )}
                >
                  Məhsul səhifəsinə keç
                </Link>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {values.idOld ? <ProductAbout /> : null}
    </>
  );
};

export default OldSearch;
