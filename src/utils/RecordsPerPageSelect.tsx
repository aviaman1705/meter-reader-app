export default function RecordsPerPageSelect(props: recordsPerPageSelectProps) {
  return (
    <div className="mb-3" style={{ width: "150px" }}>
      <label>רשומות לכל דף:</label>
      <select
        className="form-select"
        defaultValue={5}
        onChange={(e) => {
          props.onChange(parseInt(e.currentTarget.value, 10));
        }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}

interface recordsPerPageSelectProps {
  onChange(recordsPerPage: number): void;
}
