const HeroSection = () => {

  return (
    <>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.spymee.in/img/slider/1.jpg" className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.spymee.in/img/slider/2.jpg" className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://cdn11.bigcommerce.com/s-n824142/images/stencil/original/carousel/50/SpyFinderPro-Homepage-Banner-Kevin-Harrington.jpg?c=2" className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.spymee.in/img/slider/3.jpg" className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://cdn11.bigcommerce.com/s-n824142/images/stencil/original/carousel/44/home-banner-top-1170x450-protect-hidden-cameras__80945.jpg?c=2" className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.spymee.in/img/slider/4.jpg" className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.spymee.in/img/slider/5.jpg" className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.spymee.in/img/slider/1.jpg" className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default HeroSection;