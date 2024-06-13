import 'react-native-get-random-values';
import {v4 as uid} from 'uuid';

export class Place {
    constructor(title, imgUri, location) {
        this.id = uid();
        this.title = title;
        this.imgUri = imgUri;
        this.address = location.address;
        this.location = {
            lat: location.lat,
            lng: location.lng
        };
    }
}
