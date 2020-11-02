
import * as types from "../constants"

function getProductsAction(data) {
    return {
        type: types.GET_PRODUCT_REQUEST,
        payload: data
    }
}
function searchProductsAction(data) {
    return {
        type: types.SEARCH_PRODUCT_REQUEST,
        payload: data
    }
}
export {
    getProductsAction,
    searchProductsAction
}
