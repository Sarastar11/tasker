import React from "react";
import { useState } from "react";
import ContactStyles from './contactUs.module.css';
import LocationPin from '../../assets/icons/addAddressIcon.png';
import EmailMessage from '../../assets/icons/mail.svg';
import FacebookLogo from '../../assets/icons/Social Icons/Facebook/Negative.svg';
import TwitterLogo from '../../assets/icons/Social Icons/X (Twitter)/Negative.svg';
import TikTokLogo from '../../assets/icons/Social Icons/TikTok/Negative.svg';
import InstagramLogo from '../../assets/icons/Social Icons/Instagram/Negative.svg';
import LiveSupport from "../../Modals/liveSupport";
import CustomerService from '../../assets/images/pngtree-male-customer-service-customer-service-png-image_13588796.png'
import ScrollToTop from "../../components/scrollUp/scrollUp";

function ContactUs() {
    const [isLiveSupportOpen, setIsLiveSupportOpen] = useState(false);
    
        const openLiveSupport = () => setIsLiveSupportOpen(true);
        const closeLiveSupport = () => setIsLiveSupportOpen(false);
    return (
        <>

            <div className={ContactStyles.contact_container}>

                <div className={ContactStyles.contact_description}>
                    <div className={ContactStyles.contact_img_field}>
                        <img className={ContactStyles.contact_img} src={CustomerService} />
                    </div>
                    <div className={ContactStyles.contact_text}>
                        <h1 className={ContactStyles.contact_head}>We Want To Hear From You!</h1>
                        <p className={ContactStyles.contact_description_text}>Communicating with homeowners, business professionals, press and potential customers is very important to us. No Matter what type of question you have, we are here to answer it.</p>
                    </div>
                </div>
                <hr />
                <div className={ContactStyles.contactUs}>
                    <div className={ContactStyles.social_links}>
                        <h3 className={ContactStyles.contactUs_title}>Contact Us</h3>
                        <p className={ContactStyles.contactUs_bio}>If you have any question we are happy to help.</p>
                        <p className={ContactStyles.contact_address}>
                            <img className={ContactStyles.contact_icon} src={LocationPin} />
                            Deutschland, Berlin, Germany.
                        </p>
                        <p className={ContactStyles.contact_address}>
                            <img className={ContactStyles.contact_icon} src={EmailMessage} />
                            Kontakt@tasker24.de
                        </p>
                        <div className={ContactStyles.get_connected}>
                            <h4 className={ContactStyles.getConnected_title}>Get Connected</h4>
                            <ul className={ContactStyles.socialLinks_list}>
                                <li className={ContactStyles.social_link}>
                                    <img className={ContactStyles.socialLink_img} src={FacebookLogo} />
                                </li>
                                <li className={ContactStyles.social_link}>
                                    <img className={ContactStyles.socialLink_img} src={InstagramLogo} />
                                </li>
                                <li className={ContactStyles.social_link}>
                                    <img className={ContactStyles.socialLink_img} src={TikTokLogo} />
                                </li>
                                <li className={ContactStyles.social_link}>
                                    <img className={ContactStyles.socialLink_img} src={TwitterLogo} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form className={ContactStyles.contact_form} method="post">
                        <div className={ContactStyles.client_info}>
                            <input className={ContactStyles.client_data} placeholder="Full Name" type="text" name="full_name" />
                            <input className={ContactStyles.client_data} placeholder="Email Address" type="email" name="email" />
                            <input className={ContactStyles.client_data} placeholder="Phone Number" type="text" name="phone_number" />
                            <input className={ContactStyles.client_data} placeholder="Address or City" type="text" name="address" />
                            <input className={ContactStyles.client_data} placeholder="Postal Code" type="text" name="postal_code" />
                        </div>
                        <div className={ContactStyles.client_info}>
                            <div className={ContactStyles.contact_message}>
                                <textarea className={ContactStyles.message_input} placeholder="Your Message"></textarea>
                            </div>
                            <div className={ContactStyles.terms_of_use}>
                                <p className={ContactStyles.term_of_use}>
                                    <input className="" type="checkbox" />
                                    I've read and accepted <span className="">Terms of use</span>
                                </p>
                                <p className={ContactStyles.term_of_use}>
                                    <input className="" type="checkbox" />
                                    I've read and accepted <span className="">The Privacy Policy</span>
                                </p>
                            </div>
                            <button className={ContactStyles.contact_btn} name="send_message" type="submit">Submit</button>

                        </div>


                    </form>
                </div>
                {/* Live Chat Icon */}
                <button onClick={openLiveSupport} className={ContactStyles.liveSupport_btn}>
                    <img className={ContactStyles.liveSupport_img} src={CustomerService} alt="Live Support"/>
                </button>

                {/* Live Support Modal */}
                <LiveSupport isOpen={isLiveSupportOpen} onClose={closeLiveSupport} />
                <ScrollToTop />
            </div>
        </>
    )
}
export default ContactUs;