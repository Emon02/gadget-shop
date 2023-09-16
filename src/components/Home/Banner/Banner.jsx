import "./Banner.scss";
import BannerImag from '../../../assets/banner-img.png'
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit magnam cumque atque voluptates consequatur?</p>
                <div className="ctas">
                    <button className="button-cta v1">Read More</button>
                    <button className="button-cta v2">Shop Now</button>
                </div>
            </div>
            <img className="banner-img" src={BannerImag} alt="Banner-Image" />
        </div>
    </div>;
};

export default Banner;
