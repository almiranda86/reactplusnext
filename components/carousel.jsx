import React from "react"

const Carousel = () => {
    return(
        <div id="intro">
            <div id="carouselMain" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="imageWraper">
                            <img className="carousel-img" src="https://via.placeholder.com/2000x800.png?text=Image1" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="imageWraper">
                            <img className="carousel-img" src="https://via.placeholder.com/2000x800.png?text=Image2" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="imageWraper">
                            <img className="carousel-img" src="https://via.placeholder.com/2000x800.png?text=Image3" />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselMain" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselMain" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>         
        </div>
    );
}


export default Carousel;