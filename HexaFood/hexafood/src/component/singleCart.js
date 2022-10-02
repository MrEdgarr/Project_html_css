import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SingleCart = () => {
  const { information, removeCart, itemPrice, handleMinus, getInformation } = useGlobalContext();
  const { isWidth } = useGlobalContext();

  const handleValue = () => { }
  return (
    <>
      {/* -------Banner Start-------- */}
      <section className="banner-promotion">
        <div className="container-lg">
          <div className="title">
            <h1>Blog</h1>
          </div>
        </div>
      </section>
      {/* -------Single Blog Start-------- */}
      <section className="product-cart">
        <div className="container-lg">
          <div className="row">
            <div className="content-cart">
              <form action="">
                {
                  information.length === 0 && <div><h5 className='text-center'>Cart Is Empty</h5> <button className='btn mt-4'
                    style={{ background: "#ebe9eb", color: "#515151", fontWeight: "700" }}>Chưa có sản phẩm nào trong giỏ hàng.</button></div>
                }
                <table className={` ${information.length === 0 ? 'd-none' : ''}`}>
                  <thead>
                    <tr>
                      <th className="product-image" />
                      <th className="product-name">Sản phẩm</th>
                      <th className="product-price">Giá</th>
                      <th className="product-quantity">Số lượng</th>
                      {/* <th className="product-subtotal">Tổng</th> */}
                      <th className="product-remove" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                    </tr>
                    {
                      information.map((item) => {
                        const { id, title, category, price, img, qty } = item;
                        return <tr key={id}>
                          <td className="product-image">
                            <img src={img} alt={title} />
                          </td>
                          <td className="product-name">{title}</td>
                          <td className="product-price">{price}$</td>
                          <td className="product-quantity">
                            <div className="quantity">
                              <input type="button" className="minus" defaultValue="-" onClick={() => handleMinus(item)} />
                              <input
                                type="number"
                                className="input-text"
                                min={0}
                                value={qty}
                                onChange={() => handleValue()}
                              />
                              <input type="button" className="plus" defaultValue="+" onClick={() => getInformation(item)} />
                            </div>
                          </td>
                          {/* <td className="product-subtotal">{qty * price} $</td> */}
                          <td className="product-remove" onClick={() => removeCart(item)}>
                            <a href="" className="remove">
                              Xóa
                            </a>
                            <i className="fa-sharp fa-solid fa-xmark" />
                          </td>
                        </tr>
                      })
                    }
                    <tr>
                      <td colSpan={6} className="border-bottom-0" />
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <div className="coupon">
                          <input
                            type="text"
                            className="input-coupon"
                            placeholder="Mã ưu đãi"
                          />
                          <button className="button-coupon" type="submit">
                            Áp dụng
                          </button>
                        </div>
                        <div className="extortion">
                          <strong>Tổng:</strong>
                          <strong>{itemPrice} $</strong>
                          <p>
                            <em>(Chưa bao gồm phí vận chuyển)</em>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div className="information-cart">
              <form action="">
                <div className="title">
                  <h3>THÔNG TIN THANH TOÁN</h3>
                </div>
                <div className="name obligatory">
                  <input
                    type="text"
                    className="input-name"
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="phone obligatory">
                  <input
                    type="text"
                    className="input-phone "
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="address obligatory">
                  <input
                    type="text"
                    className="input-address"
                    placeholder="Địa chỉ"
                  />
                </div>
                <div className="comment">
                  <p className="ml-3">Yêu cầu khác</p>
                  <textarea
                    name="order_comment"
                    className="order_comment"
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Ví dụ: Bỏ hành tây, ớt chuông...."
                    defaultValue={""}
                  />
                </div>
                <div className="text-center mt-4">
                  <p>
                    Quý khách vui lòng điền đầy đủ thông tin để HEXA FOOD phục vụ
                    quý khách được tốt nhất!
                  </p>
                </div>
                <div className="button-cart text-center">
                  <a href="">Đặt hàng</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default SingleCart