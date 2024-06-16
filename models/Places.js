import 'react-native-get-random-values';

export class Place {
    constructor(title, imgUri, location, id) {
        this.id = id;
        this.title = title;
        this.imgUri = imgUri;
        this.address = location.address;
        this.location = {
            lat: location.lat,
            lng: location.lng
        };
    }
}
