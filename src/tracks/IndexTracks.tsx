import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import axios, { AxiosResponse } from "axios";
import { urlTracks } from "../endpoints";
import { trackDTO } from "../tracks/tracks.model";
import IndexEntity from "../utils/indexEntity/IndexEntity";

export default function IndexTracks() {
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

  return <IndexEntity<trackDTO> url={urlTracks} columns={columns} />;
}
