import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_POSTS, loadData } from "../reducers/postsReducer";
import axios from 'axios';

const getPosts = () => axios.get("https://studapi.teachmeskills.by/blog/posts/")

function* fetchPostsWorker() {
  const response = yield call(getPosts);
  if (response.status === 200) {
    yield put(loadData(response.data.results));
  }
}

export function* postsWatcher() {
  yield takeEvery(FETCH_POSTS, fetchPostsWorker)
}
