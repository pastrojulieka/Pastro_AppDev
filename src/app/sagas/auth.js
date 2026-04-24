import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser, registerUser } from '../api/auth';
import * as Type from './actions';

function* loginWorker(action) {
    yield put({ type: Type.USER_LOGIN_REQUEST });
    try {
        const response = yield call(loginUser, action.payload);
        const data = yield response.json();

        if (response.ok) {
            yield put({ type: Type.USER_LOGIN_COMPLETED, payload: data });
        } else {
            yield put({ type: Type.USER_LOGIN_ERROR, payload: data.message || 'Login failed.' });
        }
    } catch (error) {
        yield put({ type: Type.USER_LOGIN_ERROR, payload: error.message });
    }
}

function* registerWorker(action) {
    yield put({ type: Type.USER_REGISTER_REQUEST });
    try {
        const response = yield call(registerUser, action.payload);
        const data = yield response.json();

        if (response.ok) {
            yield put({ type: Type.USER_REGISTER_COMPLETED, payload: data });
        } else {
            yield put({ type: Type.USER_REGISTER_ERROR, payload: data.message || 'Registration failed.' });
        }
    } catch (error) {
        yield put({ type: Type.USER_REGISTER_ERROR, payload: error.message });
    }
}

export function* watchLogin() {
    yield takeEvery(Type.USER_LOGIN, loginWorker);
}

export function* watchRegister() {
    yield takeEvery(Type.USER_REGISTER, registerWorker);
}