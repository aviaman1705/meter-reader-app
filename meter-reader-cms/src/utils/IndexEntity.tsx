import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import PaginationItem from "../utils/PaginationItem";
import { urlNotebooks } from "../endpoints";
import { sysDataTablePager } from "../models/sysDataTablePager.models";
// import { notebookDTO } from "./notebook.models";
// import "rsuite/dist/rsuite.min.css";
// import "./IndexNotebooks.css";
import Search from "../utils/Search";
import { event } from "jquery";
import ItemsPerPage from "./ItemsPerPage";
import { ReactElement } from "react-markdown/lib/react-markdown";

export default function IndexEntity<T>(props: indexEntityProps<T>) {
  const history = useHistory();

  const [data, setData] = useState<T[]>([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  //   const [sortColumn, setSortColumn] = useState("number");
  //   const [sortDirection, setSortDirection] = useState<string>("asc");
  let [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const optins = [5, 10, 25, 50];

  const [columns, setColumns] = useState([
    {
      dataKey: "number",
      title: "מספר פנקס",
      color: "black",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "id",
      color: "black",
      title: "#",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
  ]);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [page, limit, props.sortColumn, props.sortDirection, search]);

  const loadData = () => {
    axios
      .get(
        `${props.url}/?page=${page}&itemPerPage=${limit}&sortColumn=${props.sortColumn}&sortDirection=${props.sortDirection}&search=${search}`
      )
      .then((response: AxiosResponse<sysDataTablePager<T>>) => {
        setLimit(response.data.iTotalDisplayRecords);
        setTotalItems(response.data.iTotalRecords);

        let totalPages = Math.floor(
          response.data.iTotalRecords / response.data.iTotalDisplayRecords
        );

        setPagesCount(totalPages);
        setData(response.data.aaData);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  const updateState = (arr: any[]) => {
    arr.forEach(function (item, index) {
      item.backgroundImage = `url("./../icons/sort_asc.png")`;
    });

    setColumns(arr);
  };

  const handlePageChange = (event: any) => {
    const paginationItem = event.target.innerText.toLowerCase();

    if (paginationItem.indexOf("first") > -1 && currentPage > 1) {
      initilazePagination(1);
    } else if (paginationItem.indexOf("‹") > -1) {
      if (currentPage > 1) {
        let current = currentPage - 1;
        initilazePagination(current);
      }
    } else if (paginationItem.indexOf("›") > -1) {
      if (currentPage < pagesCount) {
        let current = currentPage + 1;
        initilazePagination(current);
      }
    } else if (paginationItem.indexOf("last") > -1) {
      initilazePagination(pagesCount);
    } else {
      if (!isNaN(paginationItem)) {
        initilazePagination(parseInt(paginationItem));
      }
    }
  };

  const initilazePagination = (num: number) => {
    setCurrentPage(num);
    setPage(num);
  };

  const onSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handlePageItemCount = (event: any) => {
    setLimit(event.target.value!);
  };

  return (
    <Container id="notebooks-container">
      <Row>
        <Col>
          <Card>
            <Row>
              <Col md="12">
                <Row className="align-items-center p-3">
                  <Col md="3">
                    <Search onSearch={(e: any) => onSearch(e)} />
                  </Col>
                  <Col md={{ span: 2, offset: 7 }}>
                    <ItemsPerPage
                      limit={limit}
                      optins={optins}
                      onChange={(e: any) => handlePageItemCount(e)}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md="12">
                <Table striped bordered hover>
                  {props.children(data)}
                </Table>
              </Col>
              <Col md="12">
                <Row className="align-items-center p-3">
                  <Col md="6">
                    <PaginationItem
                      pagesCount={pagesCount}
                      page={page}
                      onClick={(e) => handlePageChange(e)}
                    />
                  </Col>
                  <Col md="6">
                    <div>סה"כ {totalItems} רשומות</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

interface indexEntityProps<T> {
  url: string;
  sortColumn: string;
  sortDirection: string;
  children(entities: T[]): ReactElement;
}

IndexEntity.defaultProps = {
  sortDirection: "asc",
};
