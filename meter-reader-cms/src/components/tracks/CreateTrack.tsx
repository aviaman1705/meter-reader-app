import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlTracks } from "../../endpoints";
import DisplayErrors from "../../utils/DisplayErrors";
import { convertTrackToFormData } from "../../utils/formDataUtils";
import Loading from "../../utils/Loading";
import { trackDTO } from "./track.models";
import TrackForm from "./TrackForm";

import classes from "./../../Form.module.css";

export default function CreateTrack() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();
  const track: trackDTO = {
    date: "dfdfd",
    desc: "",
    notebookId: null as any,
    called: "",
    unCalled: "",
  };

  async function create(track: trackDTO) {
    setLoading(true);
    const formData = convertTrackToFormData(track);
    axios({
      method: "post",
      url: urlTracks,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response: AxiosResponse<number>) => {
        setTimeout(() => {
          setLoading(false);
          history.push(`/tracks`);
        }, 2000);
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  }

  return (
    <div className="form-container">
      <div className={classes["form-box"]}>
        <DisplayErrors errors={errors} />
        {loading === true ? <Loading left="45%" top="42%" /> : null}
        <TrackForm
          title="יצירת מסלול"
          model={track}
          onSubmit={async (values) => await create(values)}
        />
      </div>
    </div>
  );
}
