import React, { useState } from "react";
import { urlTracks } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import TrackForm from "./TrackForm";
import { trackCreationDTO, trackDTO } from "./tracks.model";
import { convertTrackToFormData } from "../utils/formDataUtils";

export default function EditTrack() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function transform(track: trackDTO): trackCreationDTO {
    return {
      called: track.called,
      unCalled: track.unCalled,
      desc: track.desc,
      date: new Date(track.date),
    };
  }

  function loading(loading: boolean) {
    setIsLoading(loading);
  }

  return (
    <>
      <EditEntity<trackCreationDTO, trackDTO>
        url={urlTracks}
        indexURL="/tracks"
        entityName="מסלול"
        transformFormData={convertTrackToFormData}
        transform={transform}
        isLoading={loading}
      >
        {(entity, edit) => (
          <TrackForm
            isLoading={isLoading}
            model={entity}
            onSubmit={async (values) => {
              await edit(values);
            }}
          />
        )}
      </EditEntity>
    </>
  );
}
