import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProducts, fetchPexelsImages } from '../api/product';
import * as Type from './actions';

function* fetchProductsWorker() {
    yield put({ type: Type.GET_PRODUCTS_REQUEST});
    try {
        const response = yield call(fetchProducts);
        const data = yield response.json();

        if (response.ok) {
            yield put({ type: Type.GET_PRODUCTS_COMPLETED, payload: data });
        } else {
            yield put({ type: Type.GET_PRODUCTS_ERROR, payload: data.message || 'Error fetching products.' });
        }
    } catch (error) {
        yield put({ type: Type.GET_PRODUCTS_ERROR, payload: error.message });
    }
}

export function* fetchPexelsImagesWorker(action) {
    yield put({ type: Type.GET_PEXELS_IMAGES_REQUEST });
    try {
        const data = yield call(fetchPexelsImages, action.payload);
        const images = data.photos.map(photo => photo.src.large);
        
        yield put({ type: Type.GET_PEXELS_IMAGES_COMPLETED, payload: images });
    } catch (error) {
        yield put({ type: Type.GET_PEXELS_IMAGES_ERROR, payload: error.message });
    }
}

export function* watchProduct() {
    yield takeEvery(Type.GET_PRODUCTS, fetchProductsWorker); 
}

export function* watchPexelsImages(){
    yield takeEvery(Type.GET_PEXELS_IMAGES, fetchPexelsImagesWorker)
}