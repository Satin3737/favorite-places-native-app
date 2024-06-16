import * as SQLite from 'expo-sqlite/legacy';
import {Place} from '../models/Places';

const placesDb = SQLite.openDatabase('places.db');

export const initDb = () => {
    return new Promise((resolve, reject) => {
        placesDb.transaction(tx => {
            tx.executeSql(
                `
                    CREATE TABLE IF NOT EXISTS places (
                        id INTEGER PRIMARY KEY NOT NULL,
                        title TEXT NOT NULL,
                        imgUri TEXT NOT NULL,
                        address TEXT NOT NULL,
                        lat REAL NOT NULL,
                        lng REAL NOT NULL
                    );
                `,
                [],
                resolve,
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
};

export const insertPlace = async ({title, imgUri, address, location}) => {
    return new Promise((resolve, reject) => {
        placesDb.transaction(tx => {
            tx.executeSql(
                `INSERT INTO places (title, imgUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [title, imgUri, address, location.lat, location.lng],
                (_, res) => {
                    resolve(res);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
};

export const fetchPlaces = async () => {
    return new Promise((resolve, reject) => {
        placesDb.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM places`,
                [],
                (_, res) => {
                    resolve(
                        res.rows._array.map(
                            ({title, imgUri, address, lat, lng, id}) =>
                                new Place(title, imgUri, {address, lat, lng}, id)
                        )
                    );
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
};

export const fetchPlaceDetails = async placeId => {
    return new Promise((resolve, reject) => {
        placesDb.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM places WHERE id = ?`,
                [placeId],
                (_, res) => {
                    const {title, imgUri, address, lat, lng, id} = res.rows._array[0];
                    resolve(new Place(title, imgUri, {address, lat, lng}, id));
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
};
