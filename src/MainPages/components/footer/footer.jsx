import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '../../assets/images/Logo_Tasker.PNG';
import DarkGooglePlay from '../../assets/images/Google_Play_Store_badge_EN 1.png';
import DarkAppStore from '../../assets/images/Download_on_the_App_Store_RGB_blk 1.png';
import Facebook from '../../assets/icons/Social Icons/Facebook/Negative.svg';
import Instagram from '../../assets/icons/Social Icons/Instagram/Negative.svg';
import Twitter from '../../assets/icons/Social Icons/X (Twitter)/Negative.svg';
import TikTok from '../../assets/icons/Social Icons/TikTok/Negative.svg';
import FooterStyles from './footer.module.css';

function Footer() {
    return (
        <footer className={`${FooterStyles.footer_container} footer_container`}>
            <div className={`${FooterStyles.footer_content} footer_content`}>
                <div className={`${FooterStyles.footer_contacts} footer_contacts`}>
                    <img className={`${FooterStyles.footer_logo_img} footer_logo_img`} src={HomeIcon} alt="Tasker24 Logo" />
                    <h3 className={`${FooterStyles.footer_contact_head} footer_contact_head`}>Contact Us</h3>
                    <p className={`${FooterStyles.contact_text} contact_text`}>Praesent nulla massa, hendrerit vestilibulum gravida in, feugait auctor felis.</p>
                    <p className={`${FooterStyles.contact_email} contact_email`}>Email: Kontakt@tasker24.de</p>
                    <p className={`${FooterStyles.contact_us} contact_us`}>Have a complaint? let us know</p>
                </div>
                <div className={`${FooterStyles.footer_links_wrapper} footer_links_wrapper`}>
                    <div className={`${FooterStyles.footer_links} footer_links`}>
                        <h3 className={`${FooterStyles.footer_contact_head} footer_contact_head`}>Pages</h3>
                        <ul className={`${FooterStyles.footer_links_list} footer_links_list`}>
                            <Link to='/'>
                                <li className={`${FooterStyles.footer_link} footer_link`}>Home</li>
                            </Link>
                            <Link to='/services'>
                                <li className={`${FooterStyles.footer_link} footer_link`}>Services</li>
                            </Link>
                            <Link to='/contactUs'>
                                <li className={`${FooterStyles.footer_link} footer_link`}>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={`${FooterStyles.footer_links} footer_links`}>
                        <h3 className={`${FooterStyles.footer_contact_head} footer_contact_head`}>Services</h3>
                        <ul className={`${FooterStyles.footer_links_list} footer_links_list`}>
                            <li className={`${FooterStyles.footer_link} footer_link`}>Assembling</li>
                            <li className={`${FooterStyles.footer_link} footer_link`}>Repairs</li>
                            <li className={`${FooterStyles.footer_link} footer_link`}>Cleaning</li>
                            <li className={`${FooterStyles.footer_link} footer_link`}>Moving</li>
                        </ul>
                    </div>
                    <div className={`${FooterStyles.footer_links} footer_links`}>
                        <h3 className={`${FooterStyles.footer_contact_head} footer_contact_head`}>The Company</h3>
                        <ul className={`${FooterStyles.footer_links_list} footer_links_list`}>
                            <li className={`${FooterStyles.footer_link} footer_link`}>
                                <Link to='/GeneralTermsAndConditions'>
                                    General Terms & Conditions (AGB)
                                </Link>
                            </li>
                            <li className={`${FooterStyles.footer_link} footer_link`}>
                                <Link to='/Guidelines'>
                                    Guidelines - Terms of
                                </Link>
                            </li>
                            <li className={`${FooterStyles.footer_link} footer_link`}>
                                <Link to='/PrivacyPolicy'>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className={`${FooterStyles.footer_link} footer_link`}>Imprint</li>
                        </ul>
                    </div>
                    <div className={`${FooterStyles.footer_social_links} footer_social_links`}>
                        <h3 className={`${FooterStyles.footer_contact_head} footer_contact_head`}>Download The App</h3>
                        <div className={`${FooterStyles.app_imgGallery} app_imgGallery`}>
                            <img className={`${FooterStyles.app_img} app_img`} src={DarkAppStore} alt="Download on the App Store" />
                            <img className={`${FooterStyles.app_img} app_img`} src={DarkGooglePlay} alt="Get it on Google Play" />
                        </div>
                        {/* Add social media icons */}
                        <div className={`${FooterStyles.social_icons} social_icons`}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={Facebook} alt="Facebook" className={`${FooterStyles.social_icon} social_icon`} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" className={`${FooterStyles.social_icon} social_icon`} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={Twitter} alt="Twitter" className={`${FooterStyles.social_icon} social_icon`} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <img src={TikTok} alt="TikTok" className={`${FooterStyles.social_icon} social_icon`} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className={`${FooterStyles.footer_copyright} footer_copyright`}>Tasker24 - <a href="https://novixcode.com">Novix Code</a> © 2025 - All Rights reserved</p>
        </footer>
    );
}

export default Footer;