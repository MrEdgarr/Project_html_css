import React from 'react'

const footer = () => {
  return (
    <>
  {/* -------Footer Start-------- */}
  <footer className="footer">
    <div className="container-lg">
      <div className="logo">
        <img src="./assets/images/hexaFood-2.png" alt="" />
      </div>
      <div className="title">
        <h4>CÔNG TY TNHH HEXA FOOD VIỆT NAM</h4>
      </div>
      <div className="text">
        <p>
          Để đặt bánh pizza, vui lòng liên hệ tổng đài số:{" "}
          <a href="">(123) 45678900</a>
        </p>
        <p>
          Để phản ánh chất lượng dịch vụ, vui lòng gọi số:{" "}
          <a href="">1234567890</a>
        </p>
        <p>
          Email: <a href="">hexa@gmail.com</a>
        </p>
        <p>
          <a href="">Chính sách bảo mật thông tin cá nhân</a>
        </p>
        <p>
          <a href="">Chính sách đổi/trả sản phẩm và hoàn tiền</a>{" "}
        </p>
        <p>
          <a href="">Chính sách thanh toán</a>
        </p>
      </div>
      <div className="address">
        <div className="row">
          <div className="address-item">
            <div className="img">
              <img src="./assets/images/so_01.png" alt="" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="address-button">
              <a href="">
                <i className="fa-solid fa-location-arrow" />
                Xem trên bản đồ
              </a>
            </div>
          </div>
          <div className="address-item">
            <div className="img">
              <img src="./assets/images/so_02.png" alt="" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="address-button">
              <a href="">
                <i className="fa-solid fa-location-arrow" />
                Xem trên bản đồ
              </a>
            </div>
          </div>
          <div className="address-item">
            <div className="img">
              <img src="./assets/images/so_03.png" alt="" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="address-button">
              <a href="">
                <i className="fa-solid fa-location-arrow" />
                Xem trên bản đồ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="img">
          <a href="">
            <img
              src="./assets/images/20150827110756-dathongbao-e1541406698873.png"
              alt=""
            />
          </a>
        </div>
        <div className="text">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <br />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <br />
          <span>
            Số điện thoại: 1234567890
            <br />
            Email:
            <a href="">hexa@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default footer