import React, { Component } from 'react'
import '../styles/vendor/bootstrap/css/bootstrap.min.css'
// Tao ra 1 component cua React voi cu phap
// class Ten_Component extends React.Component {}
// Component Student chi bao gom cac the html
// de hien thi thong tin hoc sinh
class Product extends Component {
    render() {
        // Thong tin hoc sinh se duoc truyen xuong day
        // thong qua props item
        // Khi goi component student o dau ta can dua props item
        // de Student nhan cac thong tin ma hien ra
        // VD: <Student item={{ id: 1, name: 'Huy', age: 10, score: 5 }} />
        // React se chuyen cac the td duoi day thanh
        // <td>1</td>
        // <td>Huy</td>
        // <td>10</td>
        // <td>5</td>
        return (
            // <tr>
            //     <td>{this.props.item.id}</td>
            //     <td></td>
            //     <td></td>
            //     <td></td>
            // </tr>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="/"><img className="card-img-top" src="http://placehold.it/700x400" alt="1  1" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="/">{this.props.item.name}</a>
                        </h4>
                        <h5>{this.props.item.price}</h5>
                        <p className="card-text">{this.props.item.note}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div >
        )


    }
}
export default Product