import { trackCreationDTO } from "../tracks/tracks.model";


export function convertTrackToFormData(track: trackCreationDTO): FormData {
    const formData = new FormData();

    if (track.called) {
        formData.append('called', track.called.toString());
    }

    if (track.unCalled) {
        formData.append('unCalled', track.unCalled.toString());
    }

    if (track.desc) {
        formData.append('desc', track.desc);
    }

    if (track.date) {
        formData.append('dateOfBirth', formatDate(track.date));
    }
    formData.append('createdDate', formatDate(new Date()));

    return formData;
}

function formatDate(date: Date) {
    date = new Date(date);
    const format = new Intl.DateTimeFormat("he", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const [
        { value: month }, ,
        { value: day }, ,
        { value: year }
    ] = format.formatToParts(date);

    return `${month}/${day}/${year}`;
}