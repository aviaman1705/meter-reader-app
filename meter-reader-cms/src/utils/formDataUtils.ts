import { notebookDTO } from "../notebooks/notebook.models";
import { trackCreationDTO, trackDTO } from "../tracks/track.models";

export function convertTrackToFormData(track: trackDTO): FormData {
    const formData = new FormData();

    if (track.id) {
        formData.append('id', track.id.toString());
    }

    if (track.date) {
        formData.append('date', formatDate(track.date));
    }

    if (track.called) {
        formData.append('called', track.called.toString());
    }

    if (track.unCalled) {
        formData.append('unCalled', track.unCalled.toString());
    }

    if (track.desc) {
        formData.append('desc', track.desc);
    }

    if (track.notebookId) {
        formData.append('notebookId', track.notebookId.toString());
    }

    return formData;
}

export function convertNotebookToFormData(notebook: notebookDTO): FormData {
    const formData = new FormData();

    if (notebook.id) {
        formData.append('id', notebook.id.toString());
    }

    if (notebook.number) {
        formData.append('number', notebook.number.toString());
    }

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