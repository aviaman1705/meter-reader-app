import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { urlTracks } from "../../endpoints";
import DisplayErrors from "../../utils/DisplayErrors";
import { convertTrackToFormData } from "../../utils/formDataUtils";
import Loading from "../../utils/Loading";
import { trackDTO } from "./track.models";
import TrackForm from "./TrackForm";

import classes from "./../../Form.module.css";

export default function EditTrack() {
  const { id }: any = useParams();
  const [track, setTrack] = useState<trackDTO>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${urlTracks}/${id}`)
      .then((response: AxiosResponse<trackDTO>) => {
        setTrack(response.data);
      });
  }, [id]);

  async function edit(track: trackDTO) {
    setLoading(true);
    const formData = convertTrackToFormData(track);
    axios
      .put(`${urlTracks}/${id}`, formData)
      .then((response: AxiosResponse<trackDTO>) => {
        setTimeout(() => {
          setLoading(false);
          history.push(`/tracks`);
        }, 2000);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }

  return (
    <div className="form-container">
      <div className={classes["form-box"]}>
        <DisplayErrors errors={errors} />
        {loading === true ? <Loading left="45%" top="42%" /> : null}
        {track && (
          <TrackForm
            title="עריכת מסלול"
            model={track}
            ddlNotebooksValue={track.notebookId}
            onSubmit={async (value) => {
              await edit(value);
            }}
          />
        )}
      </div>
    </div>
  );
}
