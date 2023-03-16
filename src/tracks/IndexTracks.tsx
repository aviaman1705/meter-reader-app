import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import axios, { AxiosResponse } from "axios";
import { urlTracks } from "../endpoints";
import { trackDTO } from "../tracks/tracks.model";

export default function IndexTracks() {
  const [data, setData] = useState<trackDTO[]>([]);
  const [totalAmountOfRcords, setTotalAmountOfRcords] = useState<number>(0);
  const [sorting, setSorting] = useState([{ id: "date", desc: true }]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  useEffect(() => {
    console.log(`globalFilter ${globalFilter}`);
    axios
      .get(
        `${urlTracks}?pageIndex=${pagination.pageIndex + 1}&pageSize=${
          pagination.pageSize
        }&sortColumn=${sorting[0].id}&sortDir=${
          sorting[0].desc ? "desc" : "asc"
        }&search=${globalFilter}`
      )
      .then((response: AxiosResponse<trackDTO[]>) => {
        const totalAmountOfRcords = parseInt(
          response.headers["totalamountofrcords"],
          10
        );

        setTotalAmountOfRcords(totalAmountOfRcords);
        setData(response.data);
      });
  }, [pagination.pageIndex, pagination.pageSize, sorting, globalFilter]);

  const columns = useMemo<MRT_ColumnDef<trackDTO>[]>(
    () => [
      {
        accessorKey: "id",
        header: "מזהה ייחודי",
      },
      {
        accessorKey: "called",
        header: "נקרא",
      },
      {
        accessorKey: "unCalled",
        header: "לא נקרא",
      },
      {
        accessorKey: "desc",
        header: "תיאור",
      },
      {
        accessorKey: "date",
        header: "תאריך",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
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
