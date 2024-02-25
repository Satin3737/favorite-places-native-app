import {GOOGLE_MAP_API_KEY} from '../const';

export const getMapPreviewUri = (coords = null, zoom = 14, width = 600, height = 400) => {
    if (!coords) {
        return null;
    }
    const {lat, lng} = coords;
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
};
