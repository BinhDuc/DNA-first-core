import React, { Component } from 'react'
import '../styles/style.css'
// Tao ra 1 component cua React voi cu phap
// class Ten_Component extends React.Component {}
// Component Student chi bao gom cac the html
// de hien thi thong tin hoc sinh
class Nav extends Component {
    render() {
        return (
            <div>
                {/* <!-- Offcanvas Menu Begin --> */}
                <div class="offcanvas-menu-overlay"></div>
                <div class="offcanvas-menu-wrapper">
                    <div class="offcanvas__close">+</div>
                    <ul class="offcanvas__widget">
                        <li><span class="icon_search search-switch"></span></li>
                        <li><a href="/"><span class="icon_heart_alt"></span>
                            <div class="tip">2</div>
                        </a></li>
                        <li><a href="/"><span class="icon_bag_alt"></span>
                            <div class="tip">2</div>
                        </a></li>
                    </ul>
                    <div class="offcanvas__logo">
                        <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                    <div class="offcanvas__auth">
                        <a href="/">Login</a>
                        <a href="/">Register</a>
                    </div>
                </div>
                {/* <!-- Offcanvas Menu End --> */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3 col-lg-2">
                                <div class="header__logo">
                                    <a href="/"><img src="img/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7">
                                <nav class="header__menu">
                                    <ul>
                                        <li class="active"><a href="./index.html">Home</a></li>
                                        <li><a href="/">Women’s</a></li>
                                        <li><a href="/">Men’s</a></li>
                                        <li><a href="/">Shop</a></li>
                                        <li><a href="/">Pages</a>
                                            <ul class="dropdown">
                                                <li><a href="./product-details.html">Product Details</a></li>
                                                <li><a href="./shop-cart.html">Shop Cart</a></li>
                                                <li><a href="./checkout.html">Checkout</a></li>
                                                <li><a href="./blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-3">
                                <div class="header__right">
                                    <div class="header__right__auth">
                                        <a href="/">Login</a>
                                        <a href="/">Register</a>
                                    </div>
                                    <ul class="header__right__widget">
                                        <li><span class="icon_search search-switch"></span></li>
                                        <li><a href="/"><span class="icon_heart_alt"></span>
                                            <div class="tip">2</div>
                                        </a></li>
                                        <li><a href="/"><span class="icon_bag_alt"></span>
                                            <div class="tip">2</div>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="canvas__open">
                            <i class="fa fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>

        )


    }
}
export default Nav