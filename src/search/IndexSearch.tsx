import axios, { AxiosResponse } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlSearch } from "../endpoints";
import Button from "../utils/Button";
import Loading from "../utils/loading/Loading";
import Pagination from "../utils/Pagination/Pagination";
import "./IndexSearch.css";
import SearchContext from "./SearchContext";
import SearchList from "./searchList/SearchList";

export default function IndexSearch() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<searchDTO[]>([]);
  const [page, setPage] = useState<number>(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);

  const { update } = useContext(SearchContext);
  const { term }: any = useParams();
  const [totalAmountOfRcords, setTotalAmountOfRcords] = useState(0);

  useEffect(() => {
    if (term) {
      loadData();
      update(true);
    }
  }, [page, term]);

  const loadData = () => {
    setIsLoading(true);
    setData([]);

    setTimeout(() => {
      axios
        .get(
          `${urlSearch}/?page=${page}&itemPerPage=${recordsPerPage}&term=${term}`
        )
        .then((response: AxiosResponse<gridDTO>) => {
          setData(response.data.aaData);
          setPage(response.data.page);

          setTotalAmountOfRcords(response.data.iTotalRecords);
          setTotalAmountOfPages(
            Math.ceil(response.data.iTotalRecords / recordsPerPage)
          );
          setIsLoading(false);
        });
    }, 2000);
  };

  const pageChangeHandler = (page) => {
    setPage(page);
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <h1>תוצאות חיפוש</h1>
      </div>
      <div className="col-lg-12">
        <div className="ibox float-e-margins">
          <div className="ibox-content">
            {!isLoading ?? (
              <h4>
                נמצאו {data?.length} תוצאות עבור :
                <span className="text-navy"> {term}</span>
              </h4>
            )}
            <div id="search-result-container" className="d-flex flex-column">
              <div id="search-result-data">
                {!isLoading ? (
                  <>
                    <SearchList data={data} />
                  </>
                ) : (
                  <Loading />
                )}
              </div>
              {totalAmountOfPages > 0 ? (
                <>
                  <div id="search-result-total-items">
                    סה"כ {totalAmountOfRcords} תוצאות
                  </div>
                  <div id="search-result-pagining">
                    <Pagination
                      currentPage={page}
                      totalAmontOfPages={totalAmountOfPages}
                      onChange={pageChangeHandler}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
