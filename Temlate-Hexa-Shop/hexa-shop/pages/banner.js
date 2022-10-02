import React, { useState, useEffect } from 'react'
import data from '../dataHexa'

const banner = () => {
    const [people, setPeople] = useState(data.banner);
    const [index, setIndex] = useState(0);
    const [pagination, setPagination] = useState(people.length)

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people])

    useEffect(() => {
        let slide = setInterval(() => {
            setIndex(index + 1);
        }, 3000)

        return () => clearInterval(slide);
    })

    const handleClickPagination = (id) => {
        if (id) {
            return setIndex(id - 1);
        }
    }
    return (
        <section className="main-banner" id="home">
            {/* <div class="overlay"></div> */}
            <div className="carousel">
                {
                    people.map((person, personIndex) => {
                        const { id, image, text } = person;

                        let position = 'nextSlide';
                        if (personIndex === index) {
                            position = 'activeSlide';
                        }
                        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide';
                        }
                        return (
                            <div className={`carousel-item ${position}`} key={id}>
                                <div className="image">
                                    <img src={image} alt="" />
                                </div>
                                <div className="container">
                                    <div className="main_home">
                                        <div className="home_text">
                                            <h1 className="text">{text} - {id}</h1>
                                        </div>
                                        <div className="home_btn">
                                            <a href="#" className="btn">Purchase Now!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="nav-button">
                    <button type="button" className="prev-banner" onClick={() => setIndex(index - 1)} />
                    <button type="button" className="next-banner" onClick={() => setIndex(index + 1)} />
                </div>
            </div>
            <div className="controls">
                {
                    people.map((pagination) => {
                        const { id } = pagination;

                        return (
                            <span className={`controls-pagination ${index == id - 1 ? "active" : "controls-pagination"}`} key={id} onClick={() => handleClickPagination(id)} />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default banner;