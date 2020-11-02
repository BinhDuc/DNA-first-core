/**
* File dinh nghia API lay du lieu tu Backend
*/
import { URL } from '../constants';
function getProducts(data) {
    return new Promise((resolve, reject) => {
        // API gui toi server can biet:
        // - method: Co the la GET, POST, PUT, DELETE, ...
        // - url: Duong dan toi Backend
        // - du lieu chuyen qua server thong qua body hoac header
        // Day la API lay du lieu nen khong can chuyen them du lieu gi
        // chi can url va method GET
        const url = URL + '?_page=' + data + '&_limit=6'
        // Ham fetch la ham cua Javascript su dung de goi toi Backend
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export default getProducts;