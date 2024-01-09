import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { urlNotebooks } from "../endpoints";
import { notebookDTO } from "./notebook.models";
import { convertNotebookToFormData } from "../utils/formDataUtils";
import DisplayErrors from "../utils/DisplayErrors";
import Loading from "../utils/Loading";
import NotebookForm from "./NotebookForm";

export default function EditNotebook() {
  const { id }: any = useParams();
  const [notebook, setNotebook] = useState<notebookDTO>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${urlNotebooks}/${id}`)
      .then((response: AxiosResponse<notebookDTO>) => {
        setNotebook(response.data);
      });
  }, [id]);

  async function edit(notebook: notebookDTO) {
    setLoading(true);
    const formData = convertNotebookToFormData(notebook);
    axios
      .put(`${urlNotebooks}/${id}`, formData)
      .then((response: AxiosResponse<notebookDTO>) => {
        setTimeout(() => {
          setLoading(false);
          history.push(`/notebooks`);
        }, 2000);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }

  return (
    <>
      <DisplayErrors errors={errors} />
      {loading === true ? <Loading left="60%" top="62%" /> : null}
      {notebook && (
        <NotebookForm
          title="עריכת פנקס"
          model={notebook}
          onSubmit={async (value) => {
            await edit(value);
          }}
        />
      )}
    </>
  );
}
