import React from "react";
import { useState } from "react";
import TrustedServiceImg from '../../assets/images/Home-Maintenance.jpg';
import ServiceBannerImg from '../../assets/images/AdobeStock_297783683-1024x684.jpeg';
import styles from './services.module.css';
import Assembling from '../../assets/images/Assembling.png';
import ElectricalWork from '../../assets/images/Electrical-Work.png';
import MovingAssistance from '../../assets/images/Moving-Assistance.png';
import PaintingWork from '../../assets/images/Painting-Work.png';
import PlumbingWork from '../../assets/images/Plumbing-Work.png';
import RepairsintheHouse from '../../assets/images/Repairs-in-the-House.png';
import FurnitureAssembly from '../../assets/images/Furniture Assembly.png';
import WallMounting from '../../assets/images/Wall Mounting.png';
import Photography from '../../assets/images/Photography.png';
import Cooking from '../../assets/images/Cooking.png';
import Delivery from '../../assets/images/Delivery.png';
import EventPlanning from '../../assets/images/Event-Planning.png';
import Translation from '../../assets/images/Translation.png';
import Packaging from '../../assets/images/Packaging.png';
import PetCare from '../../assets/images/Pet-Care.png';
import Shopping from '../../assets/images/Shopping.png';
import Cleaning from '../../assets/images/Cleaning.png';
import Gardening from '../../assets/images/Gardening.png';
import Locksmith from '../../assets/images/Locksmith.png';
import SanitaryServices from '../../assets/images/Sanitary Services.png';
import Mounting from '../../assets/images/Mounting.png';
import OnlineService from '../../assets/images/Online Service.png';
import Errands from '../../assets/images/Errands.png';
import RegalMontage from '../../assets/images/Regal Montage.png';
import HeavyLifting from '../../assets/images/Heavy Lifting.png';
import GeriatricCare from '../../assets/images/Geriatric Care.png';
import Other from '../../assets/images/Other.png';
import star from '../../assets/icons/star/linear.svg';
import flexible from '../../assets/icons/edit/flexible.png';
import capable from '../../assets/icons/edit/capable.png';
import realiable from '../../assets/icons/edit/realiable.png';
import LiveSupport from '../../Modals/liveSupport';
import CustomerService from '../../assets/images/pngtree-male-customer-service-customer-service-png-image_13588796.png';
import ScrollToTop from "../../components/scrollUp/scrollUp";
import { useNavigate } from "react-router-dom";
import Assembling1 from '../../../clientPages/assets/icons/app icons/Assembling.svg';
import ElectricalWork1 from '../../../clientPages/assets/icons/app icons/Electrical Work.svg';
import MovingAssistance1 from '../../../clientPages/assets/icons/app icons/Moving Assistance.svg';
import PaintingWork1 from '../../../clientPages/assets/icons/app icons/Painting Work.svg';
import Repairsinthehouse from '../../../clientPages/assets/icons/app icons/House Repairs.svg';
import FurnitureAssembly1 from '../../../clientPages/assets/icons/app icons/Furniture Assembly.svg';
import PlumbingWork1 from '../../../clientPages/assets/icons/app icons/Plumbing Work.svg';
import WallMounting1 from '../../../clientPages/assets/icons/app icons/Wall Mounting.svg';
import Photography1 from '../../../clientPages/assets/icons/app icons/Photographer.svg';
import Cooking1 from '../../../clientPages/assets/icons/app icons/Cook.svg';
import Delivery1 from '../../../clientPages/assets/icons/app icons/Delivery.svg';
import EventPlanning1 from '../../../clientPages/assets/icons/app icons/Event Planning.svg';
import Translation1 from '../../../clientPages/assets/icons/app icons/Translation.svg';
import Packaging1 from '../../../clientPages/assets/icons/app icons/Packaging.svg';
import PetCare1 from '../../../clientPages/assets/icons/app icons/Pet Care.svg';
import Shopping1 from '../../../clientPages/assets/icons/app icons/Shopping.svg';
import Cleaning1 from '../../../clientPages/assets/icons/app icons/Cleaning.svg';
import Gardening1 from '../../../clientPages/assets/icons/app icons/Gardening.svg';
import Locksmith1 from '../../../clientPages/assets/icons/app icons/Locksmith.svg';
import SanitaryServices1 from '../../../clientPages/assets/icons/app icons/Sanitary.svg';
import Mounting1 from '../../../clientPages/assets/icons/app icons/Mounting.svg';
import OnlineService1 from '../../../clientPages/assets/icons/app icons/Online Service.svg';
import Errands1 from '../../../clientPages/assets/icons/app icons/Errands.svg';
import RegalMontage1 from '../../../clientPages/assets/icons/app icons/Regalmontage.svg';
import HeavyLifting1 from '../../../clientPages/assets/icons/app icons/Heavy Lifting.svg';
import GeriatricCare1 from '../../../clientPages/assets/icons/app icons/Geriatric Care.svg';
import Other1 from '../../../clientPages/assets/icons/app icons/Others.svg';

function Services() {
    const navigate = useNavigate();

    // Function to handle card click
    const handleCardClick = (service) => {
      navigate("/client/place-order", { state: { service, services } }); 
    };

    const [isLiveSupportOpen, setIsLiveSupportOpen] = useState(false);
    
    const openLiveSupport = () => setIsLiveSupportOpen(true);
    const closeLiveSupport = () => setIsLiveSupportOpen(false);

    // Updated services array with descriptions matching the screenshot
    const services = [
        { icon: Assembling1, image: Assembling, name: "Assembling", description: "Assemble furniture and equipment efficiently", price: "$30", originalPrice: "$50" },
        { icon: ElectricalWork1, image: ElectricalWork, name: "Electrical Work", description: "Professional electrical solutions", price: "$40", originalPrice: "$60" },
        { icon: MovingAssistance1, image: MovingAssistance, name: "Moving Assistance", description: "Reliable moving services", price: "$50", originalPrice: "$70" },
        { icon: PaintingWork1, image: PaintingWork, name: "Painting Work", description: "High-quality painting services", price: "$35", originalPrice: "$55" },
        { icon: Repairsinthehouse, image: RepairsintheHouse, name: "Repairs in the House", description: "Home repair solutions", price: "$45", originalPrice: "$65" },
        { icon: FurnitureAssembly1, image: FurnitureAssembly, name: "Furniture Assembly", description: "Expert furniture assembly", price: "$30", originalPrice: "$50" },
        { icon: PlumbingWork1, image: PlumbingWork, name: "Plumbing Work", description: "Reliable plumbing services", price: "$40", originalPrice: "$60" },
        { icon: WallMounting1, image: WallMounting, name: "Wall Mounting", description: "Secure wall mounting", price: "$25", originalPrice: "$45" },
        { icon: Photography1, image: Photography, name: "Photography", description: "Professional photography", price: "$60", originalPrice: "$80" },
        { icon: Cooking1, image: Cooking, name: "Cooking", description: "Healthy meals for your convenience", price: "$20", originalPrice: "$40" },
        { icon: Delivery1, image: Delivery, name: "Delivery", description: "Fast and reliable delivery services", price: "$15", originalPrice: "$30" },
        { icon: EventPlanning1, image: EventPlanning, name: "Event Planning", description: "Professional event planning", price: "$50", originalPrice: "$70" },
        { icon: Translation1, image: Translation, name: "Translation", description: "Accurate translations in multiple languages", price: "$25", originalPrice: "$45" },
        { icon: Packaging1, image: Packaging, name: "Packaging", description: "Secure and efficient packaging", price: "$20", originalPrice: "$40" },
        { icon: PetCare1, image: PetCare, name: "Pet Care", description: "Loving care for your pets", price: "$30", originalPrice: "$50" },
        { icon: Shopping1, image: Shopping, name: "Shopping", description: "Personal shopping services", price: "$25", originalPrice: "$45" },
        { icon: Cleaning1, image: Cleaning, name: "Cleaning", description: "Thorough home cleaning", price: "$35", originalPrice: "$55" },
        { icon: Gardening1, image: Gardening, name: "Gardening", description: "Landscaping and garden care", price: "$40", originalPrice: "$60" },
        { icon: Locksmith1, image: Locksmith, name: "Locksmith", description: "Key cutting and lock solutions", price: "$30", originalPrice: "$50" },
        { icon: SanitaryServices1, image: SanitaryServices, name: "Sanitary Services", description: "Plumbing and sanitation solutions", price: "$45", originalPrice: "$65" },
        { icon: Mounting1, image: Mounting, name: "Mounting", description: "Secure mounting of furniture", price: "$25", originalPrice: "$45" },
        { icon: OnlineService1, image: OnlineService, name: "Online Service", description: "Virtual support and services", price: "$20", originalPrice: "$40" },
        { icon: Errands1, image: Errands, name: "Errands", description: "Personal errand running", price: "$15", originalPrice: "$30" },
        { icon: RegalMontage1, image: RegalMontage, name: "Regal Montage", description: "Shelf and storage mounting", price: "$30", originalPrice: "$50" },
        { icon: HeavyLifting1, image: HeavyLifting, name: "Heavy Lifting", description: "Moving heavy items", price: "$50", originalPrice: "$70" },
        { icon: GeriatricCare1, image: GeriatricCare, name: "Geriatric Care", description: "Compassionate care for seniors", price: "$40", originalPrice: "$60" },
        { icon: Other1, image: Other, name: "Other", description: "Miscellaneous services", price: "$20", originalPrice: "$40" },
    ];
    return (
        <>
            <header className={styles.servicesHeaderBox}>
                <h2 className={styles.servicesMainTitle}>Keep Your Home Safe & Energy-Efficient <br />with Pro Maintenance!</h2>
                <p className={styles.serviceMainText}>Get Expert Repair and maintenance services with automatic reminders, so your home stays efficient, safe and cost-effective without the hassle</p>
            </header>
            <section className={styles.serviceSection}>
                {/* Header */}
                <div className="p-3 d-flex justify-content-between align-items-center mt-4 mb-5"
                    style={{
                        backgroundColor: 'var(--greenBar)',
                        height: 61,
                    }}
                >
                    <span style={{ fontSize: 24, fontWeight: 500 }}>Services</span>
                </div>

                <div className={styles.servicePriceCards}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.servicePriceCard}>
                            <img className={styles.servicePriceCardImg} src={service.image} alt={service.name} />
                            <div className={styles.servicePriceCardInfo}>
                                <h2 className={styles.servicePriceCardName}>{service.name}</h2>
                                <p className={styles.servicePriceCardPara}>{service.description}</p>
                                <div className={styles.servicePriceCardPriceTag}>
                                    <p className={styles.servicePriceCardPriceTagPara}>Starting at {service.price} <span>{service.originalPrice}</span></p>
                                    <button onClick={() => handleCardClick(service)} className={styles.servicePriceCardPriceTagBtn}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Trusted Services Achievements */}
            <section className={styles.trustedServicesAchievements}>
                <div className={styles.trustedServicesContent}>
                    <div className={styles.trustedServicesText}>
                        <h2 className={styles.trustedServicesTitle}>Trusted Service With Affordable Price</h2>
                        <div className={styles.trustedServicesImage}>
                            <img src={TrustedServiceImg} alt="Trusted Service Worker" />
                        </div>
                    </div>
                    <div className={styles.trustedServicesAchievementsContent}>
                        <div className={styles.trustedServicesStats}>
                            <div className={styles.statItem}>
                                <p className={styles.statNumber}>32 +</p>
                                <p className={styles.statLabel}>Years Experience</p>
                            </div>
                            <div className={styles.statItem}>
                                <p className={styles.statNumber}>2,649 +</p>
                                <p className={styles.statLabel}>Client Satisfaction</p>
                            </div>
                        </div>
                        <div className={styles.featuresList}>
                            <div className={styles.featureRow}>
                                <div className={styles.featureItem}>
                                    <img src={star} className={styles.featureIcon} alt="Experienced Icon" />
                                    <div>
                                        <h3 className={styles.featureTitle}>Experienced</h3>
                                        <p className={styles.featureDescription}>Adipiscing turpis sed faucibus magna at sit incididunt. Non.</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <img src={realiable} className={styles.featureIcon} alt="Reliable Icon" />
                                    <div>
                                        <h3 className={styles.featureTitle}>Reliable</h3>
                                        <p className={styles.featureDescription}>Adipiscing turpis sed faucibus magna at sit incididunt. Non.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.featureRow}>
                                <div className={styles.featureItem}>
                                    <img src={capable} className={styles.featureIcon} alt="Capable Icon" />
                                    <div>
                                        <h3 className={styles.featureTitle}>Capable</h3>
                                        <p className={styles.featureDescription}>Adipiscing turpis sed faucibus magna at sit incididunt. Non.</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <img src={flexible} className={styles.featureIcon} alt="Flexible Icon" />
                                    <div>
                                        <h3 className={styles.featureTitle}>Flexible</h3>
                                        <p className={styles.featureDescription}>Adipiscing turpis sed faucibus magna at sit incididunt. Non.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={styles.getStartedBtn}>Get Started</button>
                    </div>
                </div>
            </section>
            {/* Live Chat Icon */}
            <button onClick={openLiveSupport} className={styles.liveSupport_btn}>
                <img className={styles.liveSupport_img} src={CustomerService} alt="Live Support" />
            </button>

            {/* Live Support Modal */}
            <LiveSupport isOpen={isLiveSupportOpen} onClose={closeLiveSupport} />
            <ScrollToTop />
        </>
    );
}
export default Services;