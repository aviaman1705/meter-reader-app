import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SearchList from "../components/Search/SearchList/SearchList";
import SearchResultItem from "../components/Search/SearchResultItem/SearchResultItem";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const SearchResult = () => {
  const [searchList, setSearchList] = useState([]);
  const [searchItem, setSearchItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  if (params.term) {
    useEffect(() => {
      fetchSearchResult(params.term);
    }, [params.term]);
  }

  if (params.item) {
    useEffect(() => {
      fetchSearchItem(params.item);
    }, [params.item]);
  }

  const fetchSearchItem = (item) => {
    setSearchList([]);
    setIsLoading(true);

    setTimeout(() => {
      fetch(`https://localhost:44319/api/Search/SearchItem/${item}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const tranformedSearchResult = {
            id: data.Id,
            number: data.Number,
            called: data.MetersReaders.reduce((a, b) => a + b.Called, 0),
            uncalled: data.MetersReaders.reduce((a, b) => a + b.UnCalled, 0),
          };
          setIsLoading(false);
          setSearchItem(tranformedSearchResult);
        })
        .catch();
    }, 3000);
  };

  const fetchSearchResult = (term) => {
    setSearchList([]);
    setIsLoading(true);

    setTimeout(() => {
      fetch(`https://localhost:44319/api/Search/?term=${term}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const tranformedSearchResult = data.map((searchData) => {
            return {
              item: searchData.Item,
              link: searchData.Link,
              trackDone: searchData.TrackDone,
            };
          });

          setIsLoading(false);
          setSearchList(tranformedSearchResult);
        })
        .catch();
    }, 3000);
  };

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="page-title">תוצאות חיפוש</h1>
      </div>
      {isLoading && <LoadingSpinner />}
      {searchList && <SearchList data={searchList} />}
      {searchItem && <SearchResultItem item={searchItem} />}
    </div>
  );
};

export default SearchResult;
