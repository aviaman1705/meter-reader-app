import React from "react";
import { useNavigate } from "react-router-dom";

import "./SearchItem.css";

const SearchItem = ({ item, link, trackDone, searchItem }) => {
  const navigate = useNavigate();

  return (
    <>
      {!searchItem && (
        <div
          className="col-md-2 col-2"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/search-results/search-item/${item}`);
          }}
        >
          <div className="card search-item">
            <div className="card-header mx-4 p-3 text-center">
              <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                <i className="material-icons opacity-10">notebook</i>
              </div>
            </div>
            <div className="card-body pt-0 p-3 text-center">
              <h6 className="text-center mb-0">פנקס {item}</h6>
              {/* <span className="text-xs">{item}</span> */}
              <hr className="horizontal dark my-3" />
              <h5 className="mb-0"> בוצע {trackDone} פעמים </h5>
            </div>
          </div>
        </div>
      )}
      {searchItem && <p>ssss </p>}
    </>
  );
};

export default SearchItem;
