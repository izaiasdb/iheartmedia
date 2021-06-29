import { takeLatest, all } from "redux-saga/effects"
import API from "../services/Api";

import { SongTypes } from '../pages/song/redux';

import * as Song from '../pages/song/sagas';

const api = API.create();

export default function * root () {
    yield all([
        takeLatest(SongTypes.SONG_SEARCH, Song.search, api),
    ])
}
