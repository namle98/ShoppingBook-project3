import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
import {itemTotal} from './cartHelpers'

const isActive = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    } else {
        return {color: '#ffffff'}
    }
}

const Menu = ({history}) => {
    return ( 
        <div>
            <ul className = "nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        style={isActive(history, '/')} 
                        to='/'
                        >
                            Trang chủ
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        style={isActive(history, '/shop')} 
                        to='/shop'
                        >
                            Mua Hàng
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        style={isActive(history, '/cart')} 
                        to='/cart'
                        >
                            Giỏ hàng <sup><small className='cart-badge'>{itemTotal()}</small></sup>
                    </Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/user/dashboard")}
                            to="/user/dashboard"
                        >
                            Tổng quan
                        </Link>
                    </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/admin/dashboard")}
                            to="/admin/dashboard"
                        >
                            Tổng quan
                        </Link>
                    </li>
                )}
            
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                style={isActive(history, '/signin')} 
                                to='/signin'
                                >
                                Đăng nhập
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            className="nav-link" 
                            style={isActive(history, '/signup')} 
                            to='/signup'
                            >
                                Đăng kí
                            </Link>
                        </li>
                    </Fragment>
                )}
            
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span 
                        className="nav-link" 
                        style={{cursor: 'pointer', color: '#ffffff'}} 
                        onClick={() => signout(() => {
                            history.push('/')
                        })}
                        >
                            Đăng xuất
                        </span>
                    </li>
                    
                )}
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        style={isActive(history, '/contact')} 
                        to='/contact'
                        >
                            Liên Hệ
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu)
