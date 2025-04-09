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

function Services() {
    const [isLiveSupportOpen, setIsLiveSupportOpen] = useState(false);
    
    const openLiveSupport = () => setIsLiveSupportOpen(true);
    const closeLiveSupport = () => setIsLiveSupportOpen(false);

    // Updated services array with descriptions matching the screenshot
    const services = [
        { image: Assembling, name: "Assembling", description: "Assemble furniture and equipment efficiently", price: "$30", originalPrice: "$50" },
        { image: ElectricalWork, name: "Electrical Work", description: "Professional electrical solutions and repairs", price: "$40", originalPrice: "$60" },
        { image: MovingAssistance, name: "Moving Assistance", description: "Reliable moving services to help you relocate", price: "$50", originalPrice: "$70" },
        { image: PaintingWork, name: "Painting Work", description: "High-quality painting services for your home", price: "$35", originalPrice: "$55" },
        { image: RepairsintheHouse, name: "Repairs in the House", description: "Fixing minor to major home repair services", price: "$45", originalPrice: "$65" },
        { image: FurnitureAssembly, name: "Furniture Assembly", description: "Fast and reliable furniture assembly services", price: "$30", originalPrice: "$50" },
        { image: PlumbingWork, name: "Plumbing Work", description: "Fixing, installing, and plumbing solutions", price: "$40", originalPrice: "$60" },
        { image: WallMounting, name: "Wall Mounting", description: "Secure mounting of TVs, shelves, and home essentials", price: "$25", originalPrice: "$45" },
        { image: Photography, name: "Photography", description: "Professional photography for events, and memories", price: "$60", originalPrice: "$80" },
        { image: Cooking, name: "Cooking", description: "Healthy meals for your convenience", price: "$20", originalPrice: "$40" },
        { image: Delivery, name: "Delivery", description: "Fast and reliable package delivery services", price: "$15", originalPrice: "$30" },
        { image: EventPlanning, name: "Event Planning", description: "Professional event planning for all occasions", price: "$50", originalPrice: "$70" },
        { image: Translation, name: "Translation", description: "Accurate translations in multiple languages", price: "$25", originalPrice: "$45" },
        { image: Packaging, name: "Packaging", description: "Secure and efficient packaging for moving", price: "$20", originalPrice: "$40" },
        { image: PetCare, name: "Pet Care", description: "Loving and reliable pet sitting and care", price: "$30", originalPrice: "$50" },
        { image: Shopping, name: "Shopping", description: "Personal shopping services for your convenience", price: "$25", originalPrice: "$45" },
        { image: Cleaning, name: "Cleaning", description: "Thorough and deep home cleaning services", price: "$35", originalPrice: "$55" },
        { image: Gardening, name: "Gardening", description: "Landscaping, planting, and garden care services", price: "$40", originalPrice: "$60" },
        { image: Locksmith, name: "Locksmith", description: "Key cutting, lock repairs, and security solutions", price: "$30", originalPrice: "$50" },
        { image: SanitaryServices, name: "Sanitary Services", description: "Plumbing and sanitation solutions for homes", price: "$45", originalPrice: "$65" },
        { image: Mounting, name: "Mounting", description: "Secure mounting of furniture, appliances, decor", price: "$25", originalPrice: "$45" },
        { image: OnlineService, name: "Online Service", description: "Virtual support and customer service solutions", price: "$20", originalPrice: "$40" },
        { image: Errands, name: "Errands", description: "Personal errand running and daily task support", price: "$15", originalPrice: "$30" },
        { image: RegalMontage, name: "Regal Montage", description: "Secure mounting of shelves and storage solutions", price: "$30", originalPrice: "$50" },
        { image: HeavyLifting, name: "Heavy Lifting", description: "Moving and lifting heavy items with care", price: "$50", originalPrice: "$70" },
        { image: GeriatricCare, name: "Geriatric Care", description: "Compassionate care and support for seniors", price: "$40", originalPrice: "$60" },
        { image: Other, name: "Other", description: "Custom services tailored to your specific needs", price: "$20", originalPrice: "$40" },
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
                                    <button className={styles.servicePriceCardPriceTagBtn}>Book Now</button>
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