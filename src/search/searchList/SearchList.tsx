import { Link } from "react-router-dom";
import "./SearchList.css";

export default function SearchList(props: searchListProps) {
  return (
    <>
      {props.data.length > 0 ? (
        props.data.map((item, index) => (
          <div key={index}>
            <div className="hr-line-dashed"></div>
            <div className="search-result">
              <h5>{item.title}</h5>
              <Link to={item.link} className="search-link">
                מעבר לעמוד
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div id="no-records-text">אין רשומות להצגה</div>
      )}
    </>
  );
}

interface searchListProps {
  data: searchDTO[];
}
