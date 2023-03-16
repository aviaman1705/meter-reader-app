import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { urlTracks } from "../../endpoints";
import Button from "../Button";
import customConfirm from "../customConfirm";
import GenericList from "../GenericList";
import Pagination from "../Pagination/Pagination";
import RecordsPerPageSelect from "../RecordsPerPageSelect";
import "./IndexEntity.css";

export default function IndexEntity<T>(props: indxEntityProps<T>) {
  const [entities, setEntities] = useState<T[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  function loadData() {
    axios
      .get(`${urlTracks}?Page=${page}&RecrdsPerPage=${recordsPerPage}`)
      .then((response: AxiosResponse<T[]>) => {
        const totalAmountOfRcords = parseInt(
          response.headers["totalamountofrcords"],
          10
        );
        setTotalAmountOfPages(Math.ceil(totalAmountOfRcords / recordsPerPage));
        setEntities(response.data);
      });
  }

  async function deleteEntity(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
    } catch (error) {
      //   if (error && error.response) console.log(error.response.data);
    }
  }

  const buttons = (editUrl: string, id: number) => (
    <>
      <Link to={editUrl} className="btn-edit-grid-item">
        <i className="material-icons">edit</i>
      </Link>
      <Link
        to="/#"
        className="btn-delete-grid-item"
        onClick={() => customConfirm(() => deleteEntity(id))}
      >
        <i className="material-icons">clear</i>
      </Link>
    </>
  );

  return (
    <>
      <h3>{props.title}</h3>
      <Link className="btn btn-primary" to={props.createURL}>
        {props.buttonText}
      </Link>
      <RecordsPerPageSelect
        onChange={(amnoutOfRecords) => {
          setPage(1);
          setRecordsPerPage(amnoutOfRecords);
        }}
      />

      <div id="wrap-table">
        <GenericList list={entities}>
          <table className="table table-hover">
            {props.children(entities!, buttons)}
          </table>
        </GenericList>
      </div>

      <Pagination
        currentPage={page}
        totalAmontOfPages={totalAmountOfPages}
        onChange={(newPage) => {
          console.log(`newPage ${newPage}`);
          setPage(newPage);
        }}
      />
    </>
  );
}

interface indxEntityProps<T> {
  url: string;
  title: string;
  createURL: string;
  entityName: string;
  buttonText: string;
  children(
    entities: T[],
    buttons: (editUrl: string, id: number) => ReactElement
  ): ReactElement;
}
