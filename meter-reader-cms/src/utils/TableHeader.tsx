import { tableHeaderDTO } from "./table.model";

export default function TableHeader(props: tableHeaderProps) {
  return (
    <>
      <thead>
        <tr>
          <th>מחיקה</th>
          <th>עריכה</th>
          {props.columns?.map(function (item, index) {
            return (
              <th
                key={index}
                className="sortable"
                data-key={item.dataKey}
                style={{
                  cursor: item.cursor,
                  backgroundImage: item.backgroundImage,
                  backgroundRepeat: item.backgroundRepeat,
                  backgroundPosition: item.backgroundPosition,
                  color: item.color,
                }}
                onClick={(event: any) => {
                  const td = event.target;
                  const dataKey = td.attributes["data-key"].value;
                  props.onSorting(dataKey);
                }}
              >
                {item.title}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
}

interface tableHeaderProps {
  columns: tableHeaderDTO[];
  onSorting(sortColumn: string): void;
}
