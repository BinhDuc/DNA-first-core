/**
* File saga su dung de tuong tac voi Backend (noi luu tru du lieu goc)
* Va tra ve du lieu cho Reducer khi co action chuyen toi
* Luong di la: Container => Saga(dang o day) => Reducer => Container
*/
// Nhap cac ham tu thu vien saga de su dung
import { put, takeEvery } from 'redux-saga/effects'
// Nhap cac file API de goi qua Backend
import getProductAPI from '../apis/getProducts'
import getAllProductAPI from '../apis/getAllProducts'
import searchProductAPI from '../apis/searchProducts'
import searchAllProductAPI from '../apis/searchAllProducts'
// Nhap type cua cac action tu file constants
// Vi file constants export ra 1 object chua nhieu bien
// nen ta su dung cu phap import * as types de dua het
// cac bien trong file constants vao bien types
import * as types from '../constants'
// Ham se duoc goi khi nhan duoc action GET_STUDENT_REQUEST
const limit = 6
function* getProducts(action) {
    try {
        // Goi API
        const get_all = yield getAllProductAPI();
        const response = yield getProductAPI(action.payload);
        const totalPage = Math.ceil(get_all.length / limit)

        // Goi API thanh cong
        // => Ban action SUCCESS cho reducer kem theo du lieu
        // Du lieu tra ve cua API duoc dua vao bien response
        // Sau do lai duoc chuyen vao payload cua action de chuyen di
        // O saga thi ta su dung ham put de chuyen action di
        // Khac voi Container su dung redux, redux su dung ham dispatch
        // de chuyen action di
        yield put({
            type: types.GET_PRODUCT_SUCCESS,
            payload: {
                listData: response,
                totalPage: totalPage,
                activePage: action.payload
            }
        })
    } catch {
        // Co loi trong qua trinh goi API
        // => Ban action FAILURE cho reducer
        yield put({
            type: types.GET_PRODUCT_FAILURE,
        })
    }
}
function* searchProducts(action) {
    try {
        const search_all = yield searchAllProductAPI(action.payload.keySearch);
        const response = yield searchProductAPI(action.payload);
        const totalPage = Math.ceil(search_all.length / limit)
        console.log("saga", action.payload)
        yield put({
            type: types.SEARCH_PRODUCT_SUCCESS,
            payload: {
                listData: response,
                keySearch: action.payload.keySearch,
                totalPage: totalPage,
                activePage: action.payload.activePage
            }
        })
    } catch {
        // Co loi trong qua trinh goi API
        // => Ban action FAILURE cho reducer
        yield put({
            type: types.SEARCH_PRODUCT_FAILURE,
        })
    }
}
// Tao ra 1 bien chua tat ca cac phan bat action
const ProductSaga = [
    // Ta su dung ham takeEvery de bat action tu Container
    // 2 tham so cua ham takeEvery la:
    // - tham so dau tien la type cua action
    // - tham so thu hai la ham ma sau khi bat duoc action no se goi vao
    // Nhu o day khi bat duoc action GET_STUDENT saga se goi
    // ham getStudents
    takeEvery(types.GET_PRODUCT_REQUEST, getProducts),
    takeEvery(types.SEARCH_PRODUCT_REQUEST, searchProducts),
];
// Xuat ra bien nay de dua vao file saga chung o duong dan /src/sagas/index.js
export default ProductSaga;
