import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../components/navbar/navbar";
// import Footer from "../../components/footer/footer";
import HeaderPic1 from '../../assets/images/one.jpg';
import HeaderPic2 from '../../assets/images/two.jpg';
import HeaderPic3 from '../../assets/images/tools-photo.jpg';
import HeaderPic4 from '../../assets/images/Rectangle 12.png';
import GooglePlay from '../../assets/images/googleplay.png';
import AppStore from '../../assets/images/appstore.png';
import Repairing from '../../assets/icons/services icons/House Repairs.png';
import Electrical from '../../assets/icons/services icons/Electrical Work.png';
import Painting from '../../assets/icons/services icons/Painting Work.png';
import Shopping from '../../assets/icons/services icons/shopping.png';
import Gardening from '../../assets/icons/services icons/Gardening.png';
import Delivery from '../../assets/icons/services icons/Delivery.png';
import Photography from '../../assets/icons/services icons/Photographer.png';
import SelectService from '../../assets/icons/services icons/select service.png';
import GetQuote from '../../assets/icons/services icons/get quote.png';
import WorkDone from '../../assets/icons/services icons/work done.png';
import DarkGooglePlay from '../../assets/images/Google_Play_Store_badge_EN 1.png';
import DarkAppStore from '../../assets/images/Download_on_the_App_Store_RGB_blk 1.png';
import Star from '../../assets/icons/star/Icon.png';
import ThumbnailPhoto from '../../assets/images/Media.png';
import VideoMedia from '../../assets/images/Blue and White Modern Car Repair Service Mobile Video.mp4';
import DotPattern from '../../assets/images/Dot Pattern.png';
import Iphone1 from '../../assets/images/iPhone 12 _ 12 Pro.png';
import Iphone2 from '../../assets/images/iPhone 12 _ 12 Pro-1.png';
import Iphone3 from '../../assets/images/iPhone 12 _ 12 Pro-2.png';
import WhyChooseUs from '../../assets/images/how_it_works_pic_updated.jpg.png';
import LiveSupport from '../../Modals/liveSupport';
import CustomerService from '../../assets/images/pngtree-male-customer-service-customer-service-png-image_13588796.png';
import HomeStyles from './home.module.css';
import { Card } from "react-bootstrap";
import ScrollToTop from "../../components/scrollUp/scrollUp";

function Home() {
    const [isLiveSupportOpen, setIsLiveSupportOpen] = useState(false);

    const openLiveSupport = () => setIsLiveSupportOpen(true);
    const closeLiveSupport = () => setIsLiveSupportOpen(false);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            {/* Header Section */}
            <header className={HomeStyles.home_header}>
                <div className={HomeStyles.header_textContent}>
                    <h1 className={HomeStyles.header_title}>
                        Get the App <br />& Book trusted help <br />for home tasks
                    </h1>
                    <p className={HomeStyles.header_text}>
                        Tasker24 is convenient for customers, offering a wide range of services to meet all your needs.
                    </p>
                    <div className={HomeStyles.header_appInstall}>
                        <img className={HomeStyles.app_img} src={GooglePlay} alt="Google Play" />
                        <img className={HomeStyles.app_img} src={AppStore} alt="App Store" />
                    </div>
                </div>
                <div className={HomeStyles.header_imgContent}>
                    <div className={HomeStyles.customImg}>
                        <img src={HeaderPic2} alt="Header Image 2" className={HomeStyles.header_imgContent_two} />
                        <img src={HeaderPic1} alt="Header Image 1" className={HomeStyles.header_imgContent_one} />
                    </div>
                    <div className={HomeStyles.custom}>
                        <img src={HeaderPic4} alt="Header Image 4" className={HomeStyles.header_imgContent_one} />
                        <img src={HeaderPic3} alt="Header Image 3" className={HomeStyles.header_imgContent_two} />
                    </div>

                </div>
            </header>
            {/* Live Chat Icon */}
            <button onClick={openLiveSupport} className={HomeStyles.liveSupport_btn}>
                <img
                    className={HomeStyles.liveSupport_img}
                    src={CustomerService}
                    alt="Live Support"
                />
            </button>

            {/* Live Support Modal */}
            <LiveSupport isOpen={isLiveSupportOpen} onClose={closeLiveSupport} />
            <ScrollToTop />
            {/* Popular Service Section */}
            <div className={HomeStyles.popular_services}>
                <div className={HomeStyles.services_header}>
                    <h3 className={HomeStyles.services_title}>Popular Services</h3>
                    <Link to='/services'>
                        <button className={HomeStyles.viewAll_btn}>View All</button>
                    </Link>
                </div>
                <div className={HomeStyles.service_cards}>
                    <div>
                        <Card className={HomeStyles.service_card}>
                            <img className={HomeStyles.service_img} src={Repairing} alt="Repairing" />
                        </Card>
                        <p className={HomeStyles.service_name}>Repairing</p>
                    </div>
                    <div>
                        <Card className={HomeStyles.service_card}>
                            <img className={HomeStyles.service_img} src={Electrical} alt="Electrical" />
                        </Card>
                        <p className={HomeStyles.service_name}>Electrical</p>
                    </div>
                    <div>
                        <Card className={HomeStyles.service_card}>
                            <img className={HomeStyles.service_img} src={Painting} alt="Painting" />
                        </Card>
                        <p className={HomeStyles.service_name}>Painting</p>
                    </div>
                    <div>
                        <Card className={HomeStyles.service_card}>
                            <img className={HomeStyles.service_img} src={Shopping} alt="Shopping" />
                        </Card>
                        <p className={HomeStyles.service_name}>Shopping</p>
                    </div>
                    <div>
                        <Card className={HomeStyles.service_card}>
                            <img className={HomeStyles.service_img} src={Gardening} alt="Gardening" />
                        </Card>
                        <p className={HomeStyles.service_name}>Gardening</p>
                    </div>
                    <div>
                        <Card className={HomeStyles.service_card}>
                            <img className={HomeStyles.service_img} src={Delivery} alt="Delivery" />
                        </Card>
                        <p className={HomeStyles.service_name}>Delivery</p>
                    </div>
                    <div>
                        <Card className={HomeStyles.service_card}>
                            <img className={HomeStyles.service_img} src={Photography} alt="Photography" />
                        </Card>
                        <p className={HomeStyles.service_name}>Photography</p>
                    </div>
                </div>
            </div>

            {/* Service Flow Section */}
            <div className={HomeStyles.service_flow}>
                <div className={HomeStyles.service_flow_head}>
                    <h1 className={HomeStyles.service_flow_title}>How To Get Our Service</h1>
                    <p className={HomeStyles.service_flow_head_text}>
                        Getting started is simple! Browse, book, and enjoy hassle-free service in <br /> just a few steps.
                    </p>
                </div>
                <div className={HomeStyles.service_flow_cards}>
                    <div className={HomeStyles.service_flow_card}>
                        <img className={HomeStyles.service_flow_img} src={SelectService} alt="Select Service" />
                        <h3 className={HomeStyles.service_card_title}>Choose a service</h3>
                        <p className={HomeStyles.service_flow_para}>
                            Find the right service for your needs easily, with a variety of options available at your fingertips.
                        </p>
                    </div>
                    <div className={HomeStyles.service_flow_card}>
                        <img className={HomeStyles.service_flow_img} src={GetQuote} alt="Get Quote" />
                        <h3 className={HomeStyles.service_card_title}>Get a quote</h3>
                        <p className={HomeStyles.service_flow_para}>
                            Request price estimates from professionals to help you make informed decisions with ease.
                        </p>
                    </div>
                    <div className={HomeStyles.service_flow_card}>
                        <img className={HomeStyles.service_flow_img} src={WorkDone} alt="Work Done" />
                        <h3 className={HomeStyles.service_card_title}>Work done</h3>
                        <p className={HomeStyles.service_flow_para}>
                            Sit back and relax while skilled experts efficiently take care of your tasks, ensuring a job well done.
                        </p>
                    </div>
                </div>
            </div>

            {/* Subscribe and Notifications */}
            <div className={HomeStyles.notification_bigcontainer}>
                <div className={HomeStyles.gray}></div>
                <div className={HomeStyles.notifications_container}>
                    <div className={HomeStyles.notifications_container_inner}>
                        <div className={HomeStyles.notifications_header}>
                            <h5 className={HomeStyles.notifications_header_title}>SIMPLE SOLUTIONS</h5>
                            <h1 className={HomeStyles.notifications_header_banner}>
                                Hire The Best Service <br /><span>In Town</span>
                            </h1>
                        </div>
                        <div className={HomeStyles.notification_body}>
                            <div className={HomeStyles.notification_text_container}>
                                <p className={HomeStyles.notification_text}>
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                                </p>
                                <form className={HomeStyles.notification_form} method="post">
                                    <h5 className={HomeStyles.notification_form_label}>
                                        Sign up to be notified when there are new services
                                    </h5>
                                    <div className={HomeStyles.form_group}>
                                        <input
                                            className={HomeStyles.notification_form_input}
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                        <button
                                            className={HomeStyles.notification_btn}
                                            type="submit"
                                            name="submit_notification"
                                        >
                                            Notify Me
                                        </button>
                                    </div>
                                    <p className={HomeStyles.notification_footer}>
                                        We care about the protection of your data. Read our <span>Privacy Policy</span>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${HomeStyles.notification_image} ${isPlaying ? HomeStyles.playing : ''}`}
                        onClick={!isPlaying ? handlePlay : undefined}
                    >
                        <video ref={videoRef} poster={ThumbnailPhoto} controls>
                            <source src={VideoMedia} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            {/* Downloading the App */}
            <div className={HomeStyles.app_container}>
                <div className={HomeStyles.app_phones}>
                    <img src={Iphone2} alt="iPhone 2" />
                    <img src={Iphone1} alt="iPhone 1" />
                    <img src={Iphone3} alt="iPhone 3" />
                </div>
                <div className={HomeStyles.app_content}>
                    <div className={HomeStyles.app_header}>
                        <h5 className={HomeStyles.app_header_title}>DOWNLOAD THE APP</h5>
                        <h1 className={HomeStyles.app_header_banner}>
                            Order services quickly <br />and easily with Tasker24.
                        </h1>
                    </div>
                    <div className={HomeStyles.app_body}>
                        <p className={HomeStyles.app_text}>
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                        </p>
                    </div>
                    <div className={HomeStyles.app_imgGallery}>
                        <img className={HomeStyles.app_img} src={DarkAppStore} alt="App Store" />
                        <img className={HomeStyles.app_img} src={DarkGooglePlay} alt="Google Play" />
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className={HomeStyles.why_choose_us}>
                <div className={HomeStyles.why_choose_us_text_box}>
                    <h3 className={HomeStyles.why_choose_us_title}>Why Choose Us?</h3>
                    <ul className={HomeStyles.why_choose_us_list}>
                        <li className={HomeStyles.why_choose_us_item}>
                            <span className={`${HomeStyles.why_choose_us_number} ${HomeStyles.number_one}`}>1</span>
                            <span className={HomeStyles.why_choose_us_description}>
                                Find the Perfect Fit - Select a Tasker based on price, skills, and reviews.
                            </span>
                        </li>
                        <li className={HomeStyles.why_choose_us_item}>
                            <span className={`${HomeStyles.why_choose_us_number} ${HomeStyles.number_two}`}>2</span>
                            <span className={HomeStyles.why_choose_us_description}>
                                Book Instantly - Get the job done as early as today.
                            </span>
                        </li>
                        <li className={HomeStyles.why_choose_us_item}>
                            <span className={`${HomeStyles.why_choose_us_number} ${HomeStyles.number_three}`}>3</span>
                            <span className={HomeStyles.why_choose_us_description}>
                                All-in-One Convenience - Chat, pay, tip, and review—all in one place.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={HomeStyles.why_choose_us_image}>
                    <img src={WhyChooseUs} alt="Why Choose Us" />
                </div>
            </div>

            {/* Achievements */}
            <div className={HomeStyles.achievements}>
                <div className={HomeStyles.achievement_column}>
                    <h3 className={HomeStyles.achievement_title}>Furniture Assemblies</h3>
                    <p className={HomeStyles.achievement_value}>3.4 Million+</p>
                </div>
                <div className={HomeStyles.achievement_column}>
                    <h3 className={HomeStyles.achievement_title}>Moving Tasks</h3>
                    <p className={HomeStyles.achievement_value}>1.5 Million+</p>
                </div>
                <div className={HomeStyles.achievement_column}>
                    <h3 className={HomeStyles.achievement_title}>Items Mounted</h3>
                    <p className={HomeStyles.achievement_value}>1 Million+</p>
                </div>
                <div className={HomeStyles.achievement_column}>
                    <h3 className={HomeStyles.achievement_title}>Home Repairs</h3>
                    <p className={HomeStyles.achievement_value}>700,000+</p>
                </div>
                <div className={HomeStyles.achievement_column}>
                    <h3 className={HomeStyles.achievement_title}>Homes Cleaned</h3>
                    <p className={HomeStyles.achievement_value}>890,000+</p>
                </div>
            </div>

            {/* Clients Ratings */}
            <div className={HomeStyles.clients_ratings}>
                <h3 className={HomeStyles.ratings_head}>
                    See what happy customers are saying about Tasker24
                </h3>
                <div className={HomeStyles.clients_ratings_cards}>
                    <div className={HomeStyles.client_rating_card}>
                        <div className={HomeStyles.name_rating}>
                            <h4 className={HomeStyles.client_name}>Elizabeth P.</h4>
                            <div className={HomeStyles.stars_rating}>
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                            </div>
                        </div>
                        <p className={HomeStyles.rating_text}>
                            Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it…
                        </p>
                        <p className={HomeStyles.service_sector}>Furniture Assembly</p>
                    </div>
                    <div className={HomeStyles.client_rating_card}>
                        <div className={HomeStyles.name_rating}>
                            <h4 className={HomeStyles.client_name}>Elizabeth P.</h4>
                            <div className={HomeStyles.stars_rating}>
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                            </div>
                        </div>
                        <p className={HomeStyles.rating_text}>
                            Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it…
                        </p>
                        <p className={HomeStyles.service_sector}>Furniture Assembly</p>
                    </div>
                    <div className={HomeStyles.client_rating_card}>
                        <div className={HomeStyles.name_rating}>
                            <h4 className={HomeStyles.client_name}>Elizabeth P.</h4>
                            <div className={HomeStyles.stars_rating}>
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                            </div>
                        </div>
                        <p className={HomeStyles.rating_text}>
                            Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it…
                        </p>
                        <p className={HomeStyles.service_sector}>Furniture Assembly</p>
                    </div>
                    <div className={HomeStyles.client_rating_card}>
                        <div className={HomeStyles.name_rating}>
                            <h4 className={HomeStyles.client_name}>Elizabeth P.</h4>
                            <div className={HomeStyles.stars_rating}>
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                            </div>
                        </div>
                        <p className={HomeStyles.rating_text}>
                            Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it…
                        </p>
                        <p className={HomeStyles.service_sector}>Furniture Assembly</p>
                    </div>
                    <div className={HomeStyles.client_rating_card}>
                        <div className={HomeStyles.name_rating}>
                            <h4 className={HomeStyles.client_name}>Elizabeth P.</h4>
                            <div className={HomeStyles.stars_rating}>
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                            </div>
                        </div>
                        <p className={HomeStyles.rating_text}>
                            Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it…
                        </p>
                        <p className={HomeStyles.service_sector}>Furniture Assembly</p>
                    </div>
                    <div className={HomeStyles.client_rating_card}>
                        <div className={HomeStyles.name_rating}>
                            <h4 className={HomeStyles.client_name}>Elizabeth P.</h4>
                            <div className={HomeStyles.stars_rating}>
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                                <img className={HomeStyles.star_rating} src={Star} alt="Star" />
                            </div>
                        </div>
                        <p className={HomeStyles.rating_text}>
                            Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it…
                        </p>
                        <p className={HomeStyles.service_sector}>Furniture Assembly</p>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}

export default Home;