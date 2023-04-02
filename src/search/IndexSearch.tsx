import axios, { AxiosResponse } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlSearch } from "../endpoints";
import Button from "../utils/Button";
import Loading from "../utils/loading/Loading";
import "./IndexSearch.css";
import SearchContext from "./SearchContext";

export default function IndexSearch() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { term }: any = useParams();
  const [data, setData] = useState<searchDTO[]>([]);
  const { update } = useContext(SearchContext);

  useEffect(() => {
    if (term) {
      loadData();
      update(true);
    }
  }, []);

  const loadData = () => {
    setIsLoading(true);
    setData([]);

    setTimeout(() => {
      axios
        .get(`${urlSearch}/${term}`)
        .then((response: AxiosResponse<searchDTO[]>) => {
          setData(response.data);
          setIsLoading(false);
        });
    }, 2000);
  };

  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="col-lg-12">
            <h1>תוצאות חיפוש</h1>
          </div>
          <div className="col-lg-12">
            <div className="ibox float-e-margins">
              <div className="ibox-content">
                {!isLoading ? (
                  <h4>
                    נמצאו {data?.length} תוצאות עבור :
                    <span className="text-navy"> {term}</span>
                  </h4>
                ) : (
                  <h2>מחפש...</h2>
                )}
                {!isLoading ? (
                  data.map((item, index) => (
                    <div key={index}>
                      <div className="hr-line-dashed"></div>
                      <div className="search-result">
                        <h3>
                          <a href="/#">
                            <h5>{item.title}</h5>
                          </a>
                        </h3>
                        <Link to={item.link} className="search-link">
                          מעבר לעמוד
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
