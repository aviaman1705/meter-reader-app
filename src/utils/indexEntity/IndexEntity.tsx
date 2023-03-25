import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import "./IndexEntity.css";

export default function IndexEntity<T>(props: indexEntityProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([{ id: "date", desc: true }]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [totalAmountOfRcords, setTotalAmountOfRcords] = useState<number>(0);

  useEffect(() => {
    if (sorting.length > 0) {
      axios
        .get(
          `${props.url}?pageIndex=${pagination.pageIndex + 1}&pageSize=${
            pagination.pageSize
          }&sortColumn=${sorting[0].id}&sortDir=${
            sorting[0].desc ? "desc" : "asc"
          }&search=${globalFilter}`
        )
        .then((response: AxiosResponse<T[]>) => {
          setData(response.data);
          const totalAmountOfRcords = parseInt(
            response.headers["totalamountofrcords"],
            10
          );

          setTotalAmountOfRcords(totalAmountOfRcords);
        });
    }
  }, [pagination.pageIndex, pagination.pageSize, sorting, globalFilter]);

  return (
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
      }}
    />
  );
}

interface indexEntityProps<T> {
  url: string;
  columns: MRT_ColumnDef<T>[];
}
