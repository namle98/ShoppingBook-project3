import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth/index'
import {Link} from 'react-router-dom'
import { getPurchaseHistory } from "./apiUser"
import moment from "moment"

const Dashboard = () => {

    const [history, setHistory] = useState([])

    const {user: {_id, name, email, role}} = isAuthenticated()

    const token = isAuthenticated().token

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setHistory(data);
            }
        });
    };

    useEffect(() => {
        init(_id, token);
    }, []);

    const userLinks = () => {
        return (
            <div className='card'>
                <h4 className='card-header'></h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link className = 'nav-link' to ='/cart'>Giỏ hàng</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className="nav-link" to={`/profile/${_id}`}>Cập nhật thông tin</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className='card-header'>Thông tin khách hàng</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>Tên: {name}</li>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'> {role === 1 ? "Quản lý" : "Khách hàng"}</li>
                </ul>
            </div>
        )
    }

    const purchaseHistory = history => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Lịch sử thanh toán</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        {history.map((h, i) => {
                            return (
                                <div>
                                    <hr />
                                    {h.products.map((p, i) => {
                                        return (
                                            <div key={i}>
                                                <h6>Tên sản phẩm: {p.name}</h6>
                                                <h6>
                                                    Giá sản phẩm: {p.price} VNĐ
                                                </h6>
                                                {/* <h6>
                                                    Ngày mua:{" "}
                                                    {moment(
                                                        p.createdAt
                                                    ).fromNow()}
                                                </h6> */}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout title="Tổng quan" description={`Xin chào ${name}!`} className='container-fluid'>
            <div className='row'>
                <div className= 'col-3'>
                    {userLinks()}
                </div>
                <div className= 'col-9'>
                    {userInfo()}
                    {purchaseHistory(history)}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard