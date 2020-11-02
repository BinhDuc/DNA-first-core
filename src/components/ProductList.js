// De su dung component cua React ta can
// import tu thu vien
import React, { Component } from 'react'
// De chinh giao dien cho component tu cac file css
// ta can tao file css va import vao file nay
import '../styles/vendor/bootstrap/css/bootstrap.min.css'
// import Carousel from 'react-bootstrap/Carousel'
// Import cac file component khac
import Product from './Product'
import Pagination from './PaginationComponent'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { createSlides } from "./slides";
// import SearchBar from "material-ui-search-bar";
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keySearch: '',
        };
    }

    render() {
        // Du lieu tu Container chuyen qua se duoc lay ra
        // Va dua vao component con (Student) duoc dinh nghia o ben tren
        // Du lieu tu students la 1 tap hop cac doi tuong
        // thong qua ham map de tao ra nhieu the <Student />
        // Cac the nay duoc gan vao bien dataTable
        let dataTable = this.props.products.map((product, idx) => (
            <Product key={idx} {...this.props} item={product} />
        )
        )
        return (
            <div className="container">
                <Splide
                    options={{
                        type: 'slide',
                        gap: '1rem',
                        rewind: true,
                        fixedWidth: '24rem',
                        // direction: 'ttb',
                        autoplay: true,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        resetProgress: false,
                        arrows: 'slider',
                    }}
                    hasSliderWrapper
                    hasAutoplayProgress
                >
                    {createSlides().map(slide => (
                        <SplideSlide key={slide.src}>
                            <img src={slide.src} alt={slide.alt} />
                        </SplideSlide>
                    ))}
                </Splide>
                <div className="row">
                    <div className="col-lg-3">

                        <h1 className="my-4">DNA Store</h1>
                        <div className="list-group">
                            <a href="/" className="list-group-item">Category 1</a>
                            <a href="/" className="list-group-item">Category 2</a>
                            <a href="/" className="list-group-item">Category 3</a>
                        </div>

                    </div>
                    <div className="col-lg-9">


                        {/* <SearchBar
                            value={this.state.keySearch}
                            onChange={(newValue) => this.setState({ keySearch: newValue })}
                            onRequestSearch={() => this.props.searchProduct({ keySearch: this.state.keySearch, activePage: 1 })}
                        /> */}
                        <div>
                            <input type="text" className="form-control" onChange={(e) => this.setState({ keySearch: e.target.value })} />
                            <button className="btn btn-primary" onClick={() => this.props.searchProduct({ keySearch: this.state.keySearch, activePage: 1 })}>Search</button>
                        </div>

                        <div className="row">
                            {dataTable}
                        </div>
                        {
                            this.props.keySearch
                                ?
                                <Pagination
                                    totalPage={this.props.totalPage}
                                    activePage={this.props.activePage}
                                    onHandleMethodPagination={(e) =>
                                        this.props.searchProduct({ keySearch: this.props.keySearch, activePage: e })
                                    }
                                />
                                :
                                <Pagination
                                    totalPage={this.props.totalPage}
                                    activePage={this.props.activePage}
                                    onHandleMethodPagination={(e) => this.props.initLoad(e)
                                    }
                                />
                        }
                    </div>
                </div>

            </div >


        )
    }
}
// Vi ca 2 component Student, AddNewStudentForm
// duoc tap hop vao component DemoComponent nen
// ta chi can xuat ra component DemoComponent
// de nhap vao Container
export default ProductList;
