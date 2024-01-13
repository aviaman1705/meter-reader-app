import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

import { urlNotebooks } from "../endpoints";
import { sysDataTablePager } from "../models/sysDataTablePager.models";
import { notebookDTO } from "./notebook.models";

import Search from "../utils/Search";
import ItemsPerPage from "../utils/ItemsPerPage";
import TableHeader from "../utils/TableHeader";
import Loading from "../utils/Loading";
import Pagination from "../utils/Pagination";

import "./IndexNotebooks.css";

export default function IndexNotebooks() {
  const history = useHistory();
  const [data, setData] = useState<notebookDTO[]>([]);

  //pagination
  const [page, setPage] = useState(1);
  const [totalAmontOfPages, setTotalAmontOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  //sorting
  const [sortColumn, setSortColumn] = useState("number");
  const [sortType, setSortType] = useState<string>("asc");

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [pagesCount, setPagesCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  const options = [5, 10, 25, 50];
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([
    {
      dataKey: "id",
      title: "#",
      cursor: "pointer",
      backgroundImage: "",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "number",
      title: "מספר פנקס",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
  ]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      loadData();
    }, 1000);
  }, [page, limit, sortColumn, sortType, search]);

  const loadData = () => {
    axios
      .get(
        `${urlNotebooks}?page=${page}&itemPerPage=${limit}&sortColumn=${sortColumn}&sortType=${sortType}&search=${search}`
      )
      .then((response: AxiosResponse<sysDataTablePager<notebookDTO>>) => {
        const totalAmontOfRecords = parseInt(
          response.headers["totalamountofrcords"],
          10
        );
        setTotalAmontOfPages(Math.ceil(totalAmontOfRecords / recordsPerPage));

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
      if (sortType === "asc") {
        setSortType("desc");
        const index = columns.findIndex((emp) => emp.dataKey === dataKey);
        let copyArr = [...columns];
        copyArr[index].backgroundImage = `url("./../icons/sort_desc.png")`;
        setColumns(copyArr);
      } else {
        setSortType("asc");
        let copyArr = [...columns];
        updateState(copyArr);
      }
    } else {
      setSortColumn(dataKey);
      setSortType("asc");

      let copyArr = [...columns];
      updateState(copyArr);
    }
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
    <>
      <Row>
        <Col md={12}>
          <Card>
            {loading && <Loading left="50%" top="50%" />}
            <Row id="table-one-section">
              <Col id="table-one-section-col">
                <Link
                  id="btn-add-item-redirect"
                  className="btn btn-secondary"
                  to="/notebooks/create"
                  title="הוספת פנקס"
                >
                  הוספת פנקס
                </Link>
                <Search onSearch={(e: any) => onSearch(e)} />
                <ItemsPerPage
                  limit={limit}
                  optins={options}
                  onChange={(e: any) => handlePageItemCount(e)}
                />
              </Col>
            </Row>
            <Row id="table-two-section">
              <Col md={12}>
                <h1 className="grid-title">רשימת פנקסים</h1>
              </Col>
              <Col md={12}>
                <Table responsive bordered hover striped>
                  <TableHeader columns={columns} onSorting={onSorting} />
                  <tbody>
                    {data?.map((item, index, currentArray) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.number}</td>
                        <td>
                          <Button variant="danger">מחיקה</Button>
                        </td>
                        <td>
                          <Button
                            variant="info"
                            title={item.number.toString()}
                            onClick={() => {
                              history.push(`/notebooks/edit/${item.id}`);
                            }}
                          >
                            עריכה
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row id="table-three-section">
              <Pagination
                currentPage={page}
                totalAmontOfPages={totalAmontOfPages}
                onChange={(newPage) => setPage(newPage)}
              />
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
