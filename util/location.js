import {GOOGLE_MAP_API, GOOGLE_MAP_API_KEY} from '../const';

export const getMapPreviewUri = (coords = null, zoom = 14, width = 600, height = 400) => {
    if (!coords) {
        return null;
    }
    const {lat, lng} = coords;
    return `${GOOGLE_MAP_API}/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
};

export const getAddressFromApi = async (lat = '', lng = '') => {
    const res = await fetch(`${GOOGLE_MAP_API}/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`);

    if (!res.ok) {
        throw new Error('Failed to fetch address!');
    }

    const data = await res.json();
    return data?.results[0]?.formatted_address ?? '';
};
