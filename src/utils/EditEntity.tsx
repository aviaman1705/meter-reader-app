import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useHistory, useParams } from "react-router-dom";
import DisplayErrors from "./DisplayErrors";
import Loading from "./loading/Loading";

export default function EditEntity<TCreation, TRead>(
  props: editEntityProps<TCreation, TRead>
) {
  const { id }: any = useParams();
  const [entity, setEntity] = useState<TCreation>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${props.url}/${id}`).then((response: AxiosResponse<TRead>) => {
      setEntity(props.transform(response.data));
    });
  }, [id]);

  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  async function edit(entityToEdit: TCreation) {
    props.isLoading(true);
    await delay(2000);
    try {
      if (props.transformFormData) {
        const formData = props.transformFormData(entityToEdit);
        await axios({
          method: "put",
          url: `${props.url}/${id}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.put(`${props.url}/${id}`, entityToEdit);
      }
      props.isLoading(false);
      //history.push(props.indexURL);
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <div className="col-lg-4 col-md-12 col-sm-8 col-xs-12">
      <h3>{props.entityName} עריכת</h3>
      <DisplayErrors errors={errors} />
      {entity ? props.children(entity, edit) : <Loading />}
    </div>
  );
}

interface editEntityProps<TCreation, TRead> {
  url: string;
  entityName: string;
  indexURL: string;
  isLoading(loading: boolean): void;
  transform(entity: TRead): TCreation;
  transformFormData?(model: TCreation): FormData;
  children(entity: TCreation, edit: (entity: TCreation) => void): ReactElement;
}

EditEntity.defaultProps = {
  transform: (entity: any) => entity,
};
