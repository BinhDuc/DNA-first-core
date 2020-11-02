import { URL } from '../constants';
function getAllProducts() {
    return new Promise((resolve, reject) => {
        const url = URL
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
export default getAllProducts;