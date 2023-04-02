import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import "./IndexEntity.css";
import Loading from "../loading/Loading";

export default function IndexEntity<T>(props: indexEntityProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([{ id: "date", desc: true }]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const [totalAmountOfRcords, setTotalAmountOfRcords] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadData();
  }, [pagination.pageIndex, pagination.pageSize, sorting, globalFilter]);

  const loadData = () => {
    if (sorting.length > 0) {
      setIsLoading(true);

      setTimeout(() => {
        axios
          .get(
            `${props.url}?page=${pagination.pageIndex + 1}&itemPerPage=${
              pagination.pageSize
            }&sortColumn=${sorting[0].id}&sortType=${
              sorting[0].desc ? "desc" : "asc"
            }&search=${globalFilter}`
          )
          .then((response: AxiosResponse<gridDTO>) => {
            setData(response.data.aaData);
            const totalAmountOfRcords = parseInt(
              response.headers["totalamountofrcords"],
              10
            );

            setTotalAmountOfRcords(totalAmountOfRcords);
            setIsLoading(false);
          });
      }, 2000);
    }
  };

  return (
    <>
      <h1>גריד {props.title}</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <MaterialReactTable
          columns={props.columns}
          data={data}
          rowCount={totalAmountOfRcords}
          manualPagination={true}
          manualSorting={true}
          manualFiltering={true}
          enableColumnFilters={false}
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          onGlobalFilterChange={setGlobalFilter}
          state={{ pagination, sorting, globalFilter }}
          localization={{
            toggleFullScreen: "החלף מסך מלא",
            toggleDensity: "החלף צפיפות",
            showHideFilters: "הצג/הסתר סינון",
            showHideSearch: "הצג/הסתר חיפוש",
            rowsPerPage: "אייטמים בעמוד",
            showHideColumns: "הצג/הסתר עמודות",
            filterByColumn: "סנן לפי {column}",
            noRecordsToDisplay: "אין רשומות להצגה",
            noResultsFound: "לא נמצאו תוצאות",
            goToFirstPage: "עבור לדף הראשון",
            goToNextPage: "עבור לדף הבא",
            goToLastPage: "עבור לדף האחרון",
            search: "חפש",
            showAll: "הצג הכל",
            hideAll: "הסתר הכל",
          }}
        />
      )}
    </>
  );
}

interface indexEntityProps<T> {
  title: string;
  url: string;
  columns: MRT_ColumnDef<T>[];
}
