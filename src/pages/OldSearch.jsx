import React, { Link } from "react";

const OldSearch = () => {
  const searchResultsLocal = JSON.parse(localStorage.getItem("searchData"));
  return (
    <>
      <section className="searchBack">
        <h2>Keçmiş axtarışlar</h2>
        <div className="oldSearch">
          {searchResultsLocal.map((x) => (
            <div className="searches" key={x.id}>
              <p>
                {x.name} <span>{x.price}</span>
              </p>
              <Link>Məhsul səhifəsinə keç</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OldSearch;
