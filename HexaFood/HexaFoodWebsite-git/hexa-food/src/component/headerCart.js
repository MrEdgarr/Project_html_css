import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const HeaderCart = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    const { information, removeCart, itemPrice, formatCash } = useGlobalContext();

    // console.log(information);

    return (
        <>
            {/* DROP-DOWN CART */}
            <div className={` ${isSidebarOpen ? 'drop-down-cart d-block position-fixed' : 'drop-down-cart'}`}>
                {/* <div className={` ${isSidebarOpen ? 'drop-down-cart d-block position-fixed' : 'drop-down-cart'}`}> */}
                <div className="container-lg position-relative">
                    <div className="cart">
                        <div className="btn-close" onClick={closeSidebar}>
                            <div><i className="fa-sharp fa-solid fa-xmark" /></div>
                        </div>
                        <div className='content'>
                            {
                                information.length === 0 && <h5>Cart Is Empty</h5>
                            }
                            {
                                information.map((cartItem) => {
                                    const { id, title, category, price, img, qty } = cartItem;
                                    return <div className="content-item" key={id}>
                                        <div className="content-img">
                                            <img src={img} alt={title} />
                                        </div>
                                        <div className="title">
                                            <h3>{title}</h3>
                                            <br />
                                            <div className="amount-price">
                                                {qty} x {' '}
                                                <span>
                                                    {formatCash(price)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="btn-delete" onClick={() => removeCart(cartItem)}>
                                            <a>xóa</a>
                                            <i className="fa-sharp fa-solid fa-xmark" />
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className={`${information.length === 0 ? 'd-none' : 'd-block'}`}>
                            <div className="total-price">
                                Tổng : {' '}
                                <span>
                                    {formatCash(itemPrice)}
                                </span>
                            </div>
                            <div className="button" onClick={closeSidebar}>
                                <Link to="/singleCart">
                                    Chi tiết giỏ hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeaderCart