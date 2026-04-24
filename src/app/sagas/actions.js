// AUTH/USER_LOGIN
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_COMPLETED = 'USER_LOGIN_COMPLETED';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_RESET = 'USER_LOGIN_RESET';

// USER REGISTER
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_COMPLETED = 'USER_REGISTER_COMPLETED';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

// PRODUCTS
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_COMPLETED = 'GET_PRODUCTS_COMPLETED';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const GET_PEXELS_IMAGES = 'GET_PEXELS_IMAGES';
export const GET_PEXELS_IMAGES_REQUEST = 'GET_PEXELS_IMAGES_REQUEST';
export const GET_PEXELS_IMAGES_COMPLETED = 'GET_PEXELS_IMAGES_COMPLETED';
export const GET_PEXELS_IMAGES_ERROR = 'GET_PEXELS_IMAGES_ERROR';

// Action Creators
export const getProducts = () => ({
    type: GET_PRODUCTS,
});

export const getProductsRequest = () => ({
    type: GET_PRODUCTS_REQUEST,
});

export const getProductsCompleted = (payload) => ({
    type: GET_PRODUCTS_COMPLETED,
    payload,
});

export const getProductsError = (payload) => ({
    type: GET_PRODUCTS_ERROR,
    payload,
});

export const userRegister = (payload) => ({
    type: USER_REGISTER,
    payload,
});

export const userRegisterRequest = () => ({
    type: USER_REGISTER_REQUEST,
});

export const userRegisterCompleted = (payload) => ({
    type: USER_REGISTER_COMPLETED,
    payload,
});

export const userRegisterError = (payload) => ({
    type: USER_REGISTER_ERROR,
    payload,
});

export const userLoginReset = () => ({
    type: USER_LOGIN_RESET,
});

export const getPexelsImages = (payload) => ({
    type: GET_PEXELS_IMAGES,
    payload,
});

export const getPexelsImagesRequest = () => ({
    type: GET_PEXELS_IMAGES_REQUEST,
});

export const getPexelsImagesCompleted = (payload) => ({
    type: GET_PEXELS_IMAGES_COMPLETED,
    payload,
});

export const getPexelsImagesError = (payload) => ({
    type: GET_PEXELS_IMAGES_ERROR,
    payload,
});