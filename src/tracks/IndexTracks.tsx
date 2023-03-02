import React from "react";
import { urlTracks } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { trackDTO } from "./tracks.model";

export default function IndexTracks() {
  return (
    <>
      <IndexEntity<trackDTO>
        url={urlTracks}
        createURL="track/create"
        title="Tracks"
        entityName="Track"
      >
        {(tracks, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {tracks
                ? tracks.map((track) => (
                    <tr key={track.id}>
                      <td>{buttons(`tracks/edit/${track.id}`, track.id)}</td>
                      <td>{track.desc}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </>
        )}
      </IndexEntity>
    </>
  );
}
