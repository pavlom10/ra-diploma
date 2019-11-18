import React from 'react';
import banner from '../img/banner.jpg'
import headerLogo from '../img/header-logo.png'
import { NavLink } from 'react-router-dom';

export default function Header(props) {

    return (
        <>
            
            <header className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <a className="navbar-brand" href="/">
                                <img src={headerLogo} alt="Bosa Noga" />
                            </a>

                            <div className="collapase navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">

    
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/" exact>Главная</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/catalog.html">Каталог</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/about">О магазине</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/contacts">Контакты</NavLink>
                                    </li>
                                </ul>

                                <div>
                                    <div className="header-controls-pics">
                                        <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                        {/* Do programmatic navigation on click to /cart.html */}
                                        <div className="header-controls-pic header-controls-cart">
                                            <div className="header-controls-cart-full">1</div>
                                            <div className="header-controls-cart-menu"></div>
                                        </div>
                                    </div>

                                    <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                                        <input className="form-control" placeholder="Поиск" />
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img src={banner} className="img-fluid" alt="К весне готовы!" />
                            <h2 className="banner-header">К весне готовы!</h2>
                        </div>

                        {props.children}
                    </div>
                </div>

                
            </main>

        </>
    );
    
}