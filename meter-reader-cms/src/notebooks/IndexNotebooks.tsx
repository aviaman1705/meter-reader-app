import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { urlNotebooks } from "../endpoints";
import { sysDataTablePager } from "../models/sysDataTablePager.models";
import { notebookDTO } from "./notebook.models";
import Search from "../utils/Search";
import ItemsPerPage from "../utils/ItemsPerPage";
import TableHeader from "../utils/TableHeader";
import Loading from "../utils/Loading";
import Pagination from "../utils/Pagination";
import Button from "../utils/Button";

import classes from "./../Table.module.css";
import customConfirm from "../utils/customConfirm";
import alert from "../utils/alert";

export default function IndexNotebooks() {
  const history = useHistory();
  const [data, setData] = useState<notebookDTO[]>([]);
  const [page, setPage] = useState(1);
  const [totalAmontOfPages, setTotalAmontOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState("number");
  const [sortType, setSortType] = useState<string>("asc");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
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
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const onSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handlePageItemCount = (event: any) => {
    setLimit(event.target.value!);
  };

  const handleDelete = (id: number) => {
    setLoading(true);
    axios
      .delete(`${urlNotebooks}/${id}`)
      .then((response: AxiosResponse<any>) => {
        loadData();
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        const errors: any = error.response.data;
        const errorMsg = errors[0];

        setTimeout(() => {
          alert(errorMsg);
          setLoading(false);
        }, 1000);
      });
  };

  return (
    <Row>
      <Col md={12}>
        <Card>
          <Container>
            <Row>
              <Col id={`${classes["table-one-section"]}`}>
                <Button
                  id={`${classes["btn-add-item-redirect"]}`}
                  variant="secondary"
                  onClick={() => {
                    history.push(`/notebooks/create`);
                  }}
                >
                  הוספת פנקס
                </Button>
                <Search onSearch={(e: any) => onSearch(e)} />
                <ItemsPerPage
                  limit={limit}
                  optins={options}
                  onChange={(e: any) => handlePageItemCount(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className={`${classes["grid-title"]}`}>רשימת פנקסים</h1>
                {loading && <Loading left="50%" top="50%" />}
                <Table responsive bordered hover striped>
                  <TableHeader columns={columns} onSorting={onSorting} />
                  <tbody>
                    {data?.map((item, index, currentArray) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.number}</td>
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
                        <td>
                          <a
                            className="btn btn-danger"
                            onClick={() =>
                              customConfirm(
                                () => handleDelete(item.id),
                                "האם אתה בטוח שברצונך למחוק ?"
                              )
                            }
                          >
                            מחיקה
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Pagination
                  currentPage={page}
                  totalAmontOfPages={totalAmontOfPages}
                  onChange={(newPage) => setPage(newPage)}
                />
              </Col>
            </Row>
          </Container>
          <Row id="table-three-section"></Row>
        </Card>
      </Col>
    </Row>
  );
}
