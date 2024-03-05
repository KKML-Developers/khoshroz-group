import "./banner.scss";
import bannerImage from '../../assets/img/about_bg.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="image" />
        </div>
    )
}

export default Banner