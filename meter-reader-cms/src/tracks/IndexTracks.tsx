import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import dayjs from "dayjs";
import { urlTracks } from "../endpoints";
import { sysDataTablePager } from "../models/sysDataTablePager.models";
import Search from "../utils/Search";
import ItemsPerPage from "../utils/ItemsPerPage";
import TableHeader from "../utils/TableHeader";
import TableFooter from "../utils/TableFooter";

import "./IndexTracks.css";
import Loading from "../utils/Loading";
import { trackDTO } from "./track.models";
import Pagination from "../utils/Pagination";

export default function IndexTracks() {
  const history = useHistory();
  const [data, setData] = useState<trackDTO[]>([]);

  //pagination
  const [page, setPage] = useState(1);
  const [totalAmontOfPages, setTotalAmontOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);

  const [pagesCount, setPagesCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [sortColumn, setSortColumn] = useState("number");
  const [sortDirection, setSortDirection] = useState<string>("asc");
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
      dataKey: "date",
      title: "תאריך",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "desc",
      title: "תיאור",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "called",
      title: "נקרא",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "unCalled",
      title: "לא נקרא",
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
  }, [page, limit, sortColumn, sortDirection, search]);

  const loadData = () => {
    axios
      .get(
        `${urlTracks}?page=${page}&itemPerPage=${limit}&sortColumn=${sortColumn}&sortDirection=${sortDirection}&search=${search}`
      )
      .then((response: AxiosResponse<sysDataTablePager<trackDTO>>) => {
        debugger;
        const totalAmontOfRecords = parseInt(
          response.headers["totalamountofrcords"],
          10
        );
        setTotalAmontOfPages(Math.ceil(totalAmontOfRecords / recordsPerPage));

        let mappedTracks = response.data.aaData.map((track) => {
          return {
            id: track.id,
            called: track.called,
            unCalled: track.unCalled,
            desc: track.desc,
            date: dayjs(track.date).format("DD/MM/YY"),
            notebookId: track.notebookId,
          };
        });

        setLimit(response.data.iTotalDisplayRecords);
        setTotalItems(response.data.iTotalRecords);

        let totalPages = Math.floor(
          response.data.iTotalRecords / response.data.iTotalDisplayRecords
        );

        setPagesCount(totalPages);
        setData(mappedTracks);
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
    <>
      <Container>
        <Row>
          <Col md={12}>
            <Card>
              {loading && <Loading left="50%" top="50%" />}
              <Row id="table-one-section">
                <Col id="table-one-section-col">
                  <Link
                    id="btn-add-item-redirect"
                    className="btn btn-secondary"
                    to="/tracks/create"
                    title="הוספת מסלול"
                  >
                    הוספת מסלול
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
                  <h1 className="grid-title">רשימת מסלולים</h1>
                </Col>
                <Col md={12}>
                  <Table responsive bordered hover striped>
                    <TableHeader columns={columns} onSorting={onSorting} />
                    <tbody>
                      {data?.map((item, index, currentArray) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.date}</td>
                          <td>{item.desc}</td>
                          <td>{item.called}</td>
                          <td>{item.unCalled}</td>
                          <td>
                            <Button variant="danger">מחיקה</Button>
                          </td>
                          <td>
                            <Button
                              variant="info"
                              title={item.desc}
                              onClick={() => {
                                history.push(`/tracks/edit/${item.id}`);
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
                {/* <TableFooter
                  pageCount={pagesCount}
                  page={page}
                  totalItems={totalItems}
                  onClick={handlePageChange}
                /> */}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
