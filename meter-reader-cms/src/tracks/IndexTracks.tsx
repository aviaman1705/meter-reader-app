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

export default function IndexTracks() {
  const history = useHistory();
  const [data, setData] = useState<trackDTO[]>([]);
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
      dataKey: "unCalled",
      title: "לא נקרא",
      color: "black",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "called",
      title: "נקרא",
      color: "black",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "desc",
      title: "תיאור",
      color: "black",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },

    {
      dataKey: "date",
      color: "black",
      title: "תאריך",
      cursor: "pointer",
      backgroundImage: `url("./../icons/sort_asc.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    {
      dataKey: "id",
      title: "#",
      color: "black",
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
    axios
      .get(
        `${urlTracks}?page=${page}&itemPerPage=${limit}&sortColumn=${sortColumn}&sortDirection=${sortDirection}&search=${search}`
      )
      .then((response: AxiosResponse<sysDataTablePager<trackDTO>>) => {
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
      <Container id="notebooks-container">
        <Row className="table-row">
          {loading && <Loading left="50%" bottom="0%" />}
          <Col>
            <Card>
              <Row>
                <Col md="12">
                  <Link
                    className="btn btn-secondary m-3"
                    to="/tracks/create"
                    title="הוספת מסלול"
                  >
                    הוספת מסלול
                  </Link>
                </Col>
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
                          <td>{item.unCalled}</td>
                          <td>{item.called}</td>
                          <td>{item.desc}</td>
                          <td>{item.date}</td>
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
    </>

    // <Container>
    //   <Row>
    //     <Col xl={24}>
    //       <h1 className="h1 mb-4 mt-4">רשימת מסלולים</h1>
    //     </Col>
    //     <Col xl={24}>
    //       <Button
    //         className="mt-2 mb-2"
    //         appearance="primary"
    //         onClick={handleRediredctToAddTrack}
    //       >
    //         הוספת מסלול
    //       </Button>
    //     </Col>
    //     <Col xl={4} xlOffset={20}>
    //       <Input
    //         className="mt-2 mb-4"
    //         placeholder="חפש..."
    //         onChange={handleSearch}
    //       />
    //     </Col>
    //     <Col xl={24}>
    //       <div style={{ height: "auto" }}>
    //         <CustomProvider locale={he_IL} rtl>
    //           <Table
    //             id="grid-table"
    //             loading={loading}
    //             height={300}
    //             hover={true}
    //             sortColumn={sortColumn}
    //             sortType={sortType}
    //             fillHeight={false}
    //             autoHeight={true}
    //             data={rowData}
    //             bordered={true}
    //             cellBordered={true}
    //             headerHeight={40}
    //             rowHeight={46}
    //             onSortColumn={handleSortColumn}
    //             locale={{ emptyMessage: "לא נמצאו רשומות" }}
    //           >
    //             {columns.map((column, index) => {
    //               const { key, label, ...rest } = column;

    //               return (
    //                 <>
    //                   {key === "operation" ? (
    //                     <Column flexGrow={1} key={index}>
    //                       <HeaderCell>עריכה/מחיקה</HeaderCell>
    //                       <ActionCell
    //                         dataKey="id"
    //                         onClick={redirectToEditPage}
    //                       />
    //                     </Column>
    //                   ) : (
    //                     <Column {...rest} sortable key={index}>
    //                       <CustomHeaderCell
    //                         className="table-header"
    //                         key={index}
    //                       >
    //                         {label}
    //                       </CustomHeaderCell>
    //                       <CustomCell dataKey={key} />
    //                     </Column>
    //                   )}
    //                 </>
    //               );
    //             })}
    //           </Table>
    //           <div style={{ padding: "20px 0px 0px 0px" }}>
    //             <Pagination
    //               prev
    //               next
    //               first
    //               last
    //               ellipsis
    //               boundaryLinks
    //               maxButtons={5}
    //               size="xs"
    //               layout={["total", "-", "limit", "|", "pager", "skip"]}
    //               total={totalItems}
    //               limitOptions={[10, 30, 50]}
    //               limit={limit}
    //               activePage={page}
    //               onChangePage={handleChangePage}
    //               onChangeLimit={handleChangeLimit}
    //             />
    //           </div>
    //         </CustomProvider>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
