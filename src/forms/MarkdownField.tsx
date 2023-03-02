import { Field, useFormikContext, ErrorMessage } from "formik";
import ReactMarkdown from "react-markdown";

import "./MarkdownField.css";

export default function MarkdownField(props: markdownFieldProps) {
  const { values } = useFormikContext<any>();
  return (
    <div className="mb-3 form-markdown">
      <div>
        <label>{props.displayName}</label>
        <div>
          <Field
            name={props.field}
            as="textarea"
            className="form-control form-textarea"
          />
        </div>
      </div>
      {/* <div>
        <label>{props.displayName} (preview):</label>
        <div className="markdown-container">
          <ReactMarkdown>{values[props.field]}</ReactMarkdown>
        </div>
      </div> */}
      <div>
        <ErrorMessage name={props.field}>
          {(msg) => <div className="text-danger">{msg} </div>}
        </ErrorMessage>
      </div>
    </div>
  );
}

interface markdownFieldProps {
  displayName: string;
  field: string;
}
