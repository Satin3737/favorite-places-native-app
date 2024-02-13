import {v4 as uid} from 'uuid';

class Place {
    constructor(title, imgUri, address, location) {
        this.title = title;
        this.imgUri = imgUri;
        this.address = address;
        this.location = location;
        this.id = uid();
    }
}
