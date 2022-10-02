import React from 'react'
import { Link } from 'react-router-dom'

const singleBlog = () => {
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
            {/* -------Bog Start-------- */}
            <section className="blog single-blog">
                <div className="container-lg">
                    <div className="row">
                        <div className="detail">
                            <div className="detail-item">
                                <div className="detail-img">
                                    <Link to='singleBlog'>
                                        <img
                                            src="../assets/images/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="detail-desc">
                                    <h3>
                                        <Link to='singleBlog'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequatur inventore minima tenetur natus deserunt nemo animi.
                                        Eaque natus quia, tempore aut maiores alias quas, cumque earum,
                                        consequuntur atque autem ipsam?
                                    </p>
                                </div>
                                <div className="detail-btn">
                                    <Link to='singleBlog'>
                                        Đọc chi tiết
                                    </Link>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-img">
                                    <Link to='singleBlog'>
                                        <img
                                            src="../assets/images/faizan-saeed-mwYTNZO0WhA-unsplash.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="detail-desc">
                                    <h3>
                                        <Link to='singleBlog'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequatur inventore minima tenetur natus deserunt nemo animi.
                                        Eaque natus quia, tempore aut maiores alias quas, cumque earum,
                                        consequuntur atque autem ipsam?
                                    </p>
                                </div>
                                <div className="detail-btn">
                                    <Link to='singleBlog'>
                                        Đọc chi tiết
                                    </Link>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-img">
                                    <Link to='singleBlog'>
                                        <img
                                            src="../assets/images/ivan-torres-MQUqbmszGGM-unsplash.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="detail-desc">
                                    <h3>
                                        <Link to='singleBlog'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Consequatur inventore minima tenetur natus deserunt nemo animi.
                                        Eaque natus quia, tempore aut maiores alias quas, cumque earum,
                                        consequuntur atque autem ipsam?
                                    </p>
                                </div>
                                <div className="detail-btn">
                                    <Link to='singleBlog'>
                                        Đọc chi tiết
                                    </Link>
                                </div>
                            </div>
                            <div className='navigation'>
                                <a className='previouspostslink'><i class="fa-sharp fa-solid fa-angles-left"></i></a>
                                <a className='active'>1</a>
                                <a>2</a>
                                <a>3</a>
                                <a>4</a>
                                <a>5</a>
                                <a className='nextpostslink'><i class="fa-sharp fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                        <div className="other-content">
                            <div className="title">
                                <h3>BÀI VIẾT KHÁC</h3>
                            </div>
                            <div className="content">
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                                <div className="other-content-item">
                                    <div className="img">
                                        <img src="./assets/images/Artboard-6.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>
                                            <a href="">Pizza mua 1 tặng 1</a>
                                        </h3>
                                        <span>33-44-2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default singleBlog