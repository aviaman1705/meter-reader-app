import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";
import dayjs from "dayjs";
import { urlTracks } from "../endpoints";
import { sysDataTablePager } from "../models/sysDataTablePager.models";
import { trackDTO } from "./track.models";
import Search from "../utils/Search";
import ItemsPerPage from "../utils/ItemsPerPage";
import TableHeader from "../utils/TableHeader";
import Loading from "../utils/Loading";
import Pagination from "../utils/Pagination";
import customConfirm from "../utils/customConfirm";
import Button from "../utils/Button";

import classes from "./../Table.module.css";

export default function IndexTracks() {
  const history = useHistory();
  const [data, setData] = useState<trackDTO[]>([]);
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
  }, [page, limit, sortColumn, sortType, search]);

  const loadData = () => {
    axios
      .get(
        `${urlTracks}?page=${page}&itemPerPage=${limit}&sortColumn=${sortColumn}&sortType=${sortType}&search=${search}`
      )
      .then((response: AxiosResponse<sysDataTablePager<trackDTO>>) => {
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
        //setTotalItems(response.data.iTotalRecords);

        // let totalPages = Math.floor(
        //   response.data.iTotalRecords / response.data.iTotalDisplayRecords
        // );

        // setPagesCount(totalPages);
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

  async function remove(id: number) {
    customConfirm(() => {
      setLoading(true);
      axios
        .delete(`${urlTracks}/${id}`)
        .then((response: AxiosResponse<any>) => {
          setTimeout(() => {
            console.log(response);
            setData(data.filter((track) => track.id !== id));
            setLoading(false);
          }, 2000);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }, "האם אתה בטוח שברצונך למחוק את הפריט ?");
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h1 className={`${classes["grid-title"]}`}>רשימת מסלולים</h1>
          <Button
            id={classes["grid-redirect-btn"]}
            onClick={() => {
              history.push(`/tracks/create`);
            }}
          >
            הוספת מסלול
          </Button>
        </div>
        <div className="col-lg-2 offset-lg-4">
          <Search onSearch={(e: any) => onSearch(e)} />
        </div>
        <div className="col-lg-6">
          <div id={classes["select-option-wrapper"]} className="row">
            <div className="col-lg-3">
              <ItemsPerPage
                limit={limit}
                optins={options}
                onChange={(e: any) => handlePageItemCount(e)}
              />
            </div>
          </div>
        </div>
        <div id={classes["table-wrapper"]} className="col">
          {loading && <Loading left="50%" top="50%" />}
          <table className="table table-bordered table-hover table-striped table-responsive">
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
                  <td>
                    <Button
                      variant="danger"
                      title="מחיקה"
                      onClick={() => {
                        remove(item.id);
                      }}
                    >
                      מחיקה
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={page}
            totalAmontOfPages={totalAmontOfPages}
            onChange={(newPage) => setPage(newPage)}
          />
        </div>
        <div className="row"></div>
      </div>
    </>
  );
}
