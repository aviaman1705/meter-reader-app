import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Button from "./Button";
import customConfirm from "./customConfirm";
import GenericList from "./GenericList";
import Pagination from "./Pagination";
import RecordsPerPageSelect from "./RecordsPerPageSelect";

export default function IndexEntity<T>(props: indxEntityProps<T>) {
  const [entities, setEntities] = useState<T[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  //`${urlGenres}?Page=${page}&RecrdsPerPage=${recordsPerPage}`
  function loadData() {
    axios.get(props.url).then((response: AxiosResponse<T[]>) => {
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
      <Link className="btn btn-success" to={editUrl}>
        Edit
      </Link>

      <Button
        onClick={() => customConfirm(() => deleteEntity(id))}
        className="btn btn-danger"
      >
        Delete
      </Button>
    </>
  );

  return (
    <>
      <h3>{props.title}</h3>
      <Link className="btn btn-primary" to={props.createURL}>
        {props.entityName}
      </Link>
      <RecordsPerPageSelect
        onChange={(amnoutOfRecords) => {
          setPage(1);
          setRecordsPerPage(amnoutOfRecords);
        }}
      />

      <Pagination
        currentPage={page}
        totalAmontOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />

      <GenericList list={entities}>
        <table className="table table-striped">
          {props.children(entities!, buttons)}
        </table>
      </GenericList>
    </>
  );
}

interface indxEntityProps<T> {
  url: string;
  title: string;
  createURL: string;
  entityName: string;
  children(
    entities: T[],
    buttons: (editUrl: string, id: number) => ReactElement
  ): ReactElement;
}
