/**
* File thiet lap cac phan xu ly va du lieu tra ve
* cua reducer.
* Du lieu cua reducer duoc tap hop vao 1 noi duoc
* goi la store.
* Store nay dong vai tro la noi trung gian, chiu
* trach nhiem chuyen du lieu giua cac component trong
* ung dung.
*/
// Nhap cac type cua action tu file constants
import * as types from "../constants";
// Khai bao du lieu mac dinh cua store
// Du lieu nay la 1 object {}
const DEFAULT_STATE = {
    products: [],
    isLoading: false
}
// Bien state nay la du lieu cua reducer
// Khong giong state o ben component
// state o ben component la du lieu ton tai ben trong
// component do
export default (state = DEFAULT_STATE, action) => {
    // Dung cau lenh switch de kiem tra tung
    // type cua action
    // Ung voi moi action, cau lenh return se tra
    // ve du lieu de container thong qua ham mapStateToProps
    // lay duoc
    switch (action.type) {
        case types.GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.listData,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                isLoading: false
            }
        case types.SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.listData,
                keySearch: action.payload.keySearch,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                isLoading: false
            }
        default:
            return state;
    }
}