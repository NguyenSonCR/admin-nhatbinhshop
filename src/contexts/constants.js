export const apiUrl =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/admin' : 'https://noloce.com:5000/api/admin';
export const LOCAL_STORAGE_TOKEN_NAME_ACCESS = 'accessToken';
export const LOCAL_STORAGE_TOKEN_NAME_REFRESH = 'refreshToken';

// auth
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const PUT_AUTH = 'PUT_AUTH';

export const PRODUCTS_LOADED_SUCCESS = 'PRODUCTS_LOADED_SUCCESS';
export const PRODUCTS_LOADED_FAIL = 'PRODUCTS_LOADED_FAIL';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const FIND_PRODUCT = 'FIND_PRODUCT';
export const TRASH_PRODUCTS_LOADED_SUCCESS = 'TRASH_PRODUCTS_LOADED_SUCCESS';
export const RESTORE_PRODUCT = 'RESTORE_PRODUCT';
export const DELETE_FORCE_PRODUCT = 'DELETE_FORCE_PRODUCT';
export const POST_COMMENT = 'POST_COMMENT';
export const ADD_BOUGHTS = 'ADD_BOUGHTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// transport
export const ADD_TRANSPORT = 'ADD_TRANSPORT';
export const SET_TRANSPORT = 'SET_TRANSPORT';
export const DELETE_TRANSPORT = 'DELETE_TRANSPORT';

// category

export const CATEGORIES_LOADED_SUCCESS = 'CATEGORIES_LOADED_SUCCESS';
export const CATEGORIES_LOADED_FAIL = 'CATEGORIES_LOADED_FAIL';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const FIND_CATEGORY = 'FIND_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_CATEGORY_CHILDREN = 'ADD_CATEGORY_CHILDREN';
export const DELETE_CATEGORY_CHILDREN = 'DELETE_CATEGORY_CHILDREN';
export const SET_CATEGORY_CHILD = 'SET_CATEGORY_CHILD';

// post
export const ADD_POST = 'ADD_POST';
export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS';
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL';
export const FIND_POST = 'FIND_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const GET_POSTS_DELETED = 'GET_POSTS_DELETED';
export const GET_POSTS_DELETED_FAIL = 'GET_POSTS_DELETED_FAIL';
export const RESTORE_POST = 'RESTORE_POST';
export const DESTROY_POST = 'DESTROY_POST';

// user
export const GUESTS_LOADED_SUCCESS = 'GUESTS_LOADED_SUCCESS';
export const GUESTS_LOADED_FAIL = 'GUESTS_LOADED_FAIL';
export const FIND_GUEST = 'FIND_GUEST';
export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';

// alert
export const ALERT_SHOW = 'ALERT_SHOW';
export const ALERT_HIDE = 'ALERT_HIDE';

// order
export const ORDER_LOADED_SUCCESS = 'ORDER_LOADED_SUCCESS';
export const ORDER_LOADED_FAIL = 'ORDER_LOADED_FAIL';
export const DELETE_SOFT_ORDER = 'DELETE_SOFT_ORDER';
export const RESTORE_ORDER = 'RESTORE_ORDER';
export const ORDER_DONE = 'ORDER_DONE';
export const CONFIRM_ORDER = 'CONFIRM_ORDER';
export const PACKED_ORDER = 'PACKED_ORDER';
export const SHIPPER_ORDER = 'SHIPPER_ORDER';
export const TRANSPORTED_ORDER = 'TRANSPORTED_ORDER';
export const DONE_ORDER = 'DONE_ORDER';
export const DESTROY_ORDER = 'DESTROY_ORDER';

// toast
export const ADD_TOAST = 'ADD_TOAST';
export const DELETE_TOAST = 'DELETE_TOAST';
