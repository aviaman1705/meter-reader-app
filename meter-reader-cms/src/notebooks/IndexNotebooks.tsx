import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { urlNotebooks } from "../endpoints";
import { sysDataTablePager } from "../models/sysDataTablePager.models";
import { notebookDTO } from "./notebook.models";
import Search from "../utils/Search";
import ItemsPerPage from "../utils/ItemsPerPage";
import TableHeader from "../utils/TableHeader";
import TableFooter from "../utils/TableFooter";

import "./IndexNotebooks.css";
import Loading from "../utils/Loading";

export default function IndexNotebooks() {
  const history = useHistory();
  const [data, setData] = useState<notebookDTO[]>([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [sortColumn, setSortColumn] = useState("number");
  const [sortDirection, setSortDirection] = useState<string>("asc");
  let [currentPage, setCurrentPage] = useState(1);
  const optins = [5, 10, 25, 50];
  const [loading, setLoading] = useState(false);
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
      dataKey: "",
      color: "black",
      title: "#",
      cursor: "pointer",
      backgroundImage: "",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
  ]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      loadData();
    }, 1000);
  }, [page, limit, sortColumn, sortDirection, search]);

  const loadData = () => {
    setLoading(true);

    axios
      .get(
        `${urlNotebooks}/?page=${page}&itemPerPage=${limit}&sortColumn=${sortColumn}&sortDirection=${sortDirection}&search=${search}`
      )
      .then((response: AxiosResponse<sysDataTablePager<notebookDTO>>) => {
        let mappedNotebooks = response.data.aaData.map((notebook) => {
          return {
            id: notebook.id,
            number: notebook.number,
            tracksCount: notebook.tracksCount,
          };
        });

        setLimit(response.data.iTotalDisplayRecords);
        setTotalItems(response.data.iTotalRecords);

        let totalPages = Math.floor(
          response.data.iTotalRecords / response.data.iTotalDisplayRecords
        );

        setPagesCount(totalPages);
        setData(mappedNotebooks);
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

  const onSorting = (dataKey: string) => {
    if (sortColumn === dataKey) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
        const index = columns.findIndex((emp) => emp.dataKey === dataKey);
        let copyArr = [...columns];
        copyArr[index].backgroundImage = `url("./../icons/sort_desc.png")`;
        setColumns(copyArr);
      } else {
        setSortDirection("asc");
        let copyArr = [...columns];
        updateState(copyArr);
      }
    } else {
      setSortColumn(dataKey);
      setSortDirection("asc");

      let copyArr = [...columns];
      updateState(copyArr);
    } // // אם העמודה כבר מממשת את הסיד
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
      <Row className="table-row">
        {loading && <Loading left="50%" top="0%" />}
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
                  <TableHeader columns={columns} onSorting={onSorting} />
                  <tbody>
                    {data?.map((item, index, currentArray) => (
                      <tr key={index}>
                        <td>
                          {item.tracksCount === 0 ? (
                            <Button variant="danger">מחיקה</Button>
                          ) : null}
                        </td>
                        <td>
                          <Button
                            variant="info"
                            title={item.tracksCount.toString()}
                            onClick={() => {
                              history.push(`/notebooks/edit/${item.id}`);
                            }}
                          >
                            עריכה
                          </Button>
                        </td>
                        <td>{item.number}</td>
                        <td>{index + 1}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
              <Col md="12">
                <TableFooter
                  pageCount={pagesCount}
                  page={page}
                  totalItems={totalItems}
                  onClick={handlePageChange}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
