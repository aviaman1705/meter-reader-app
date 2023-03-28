import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlSearch } from "../endpoints";
import Button from "../utils/Button";
import Loading from "../utils/loading/Loading";
import "./IndexSearch.css";

export default function IndexSearch() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { term }: any = useParams();
  const [data, setData] = useState<searchDTO[]>([]);

  useEffect(() => {
    if (term) {
      loadData();
    }
  }, []);

  const loadData = () => {
    setIsLoading(true);

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
            <div className="ibox float-e-margins">
              <div className="ibox-content">
                {!isLoading ? (
                  <h2>
                    נמצאו {data?.length} תוצאות עבור :
                    <span className="text-navy"> {term}</span>
                  </h2>
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
                            <div>{item.title}</div>
                          </a>
                        </h3>
                        <Link to={item.link} className="search-link">
                          מעבר לעמוד
                        </Link>
                        <p></p>
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
