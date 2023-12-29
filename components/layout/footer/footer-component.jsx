import styles from './footer-style.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className={styles.footer_main_container}>
            <div className={styles.footer_quick_links_container}>
                <div className={styles.quick_links_title_container}>
                    <h4>QUICK LINKS</h4>
                </div>
                <div className={styles.footer_quick_links_list_container}>
                    <ul className={styles.footer_quick_links}>
                        <li className={styles.footer_quick_links_item}>HOME</li>
                        <li className={styles.footer_quick_links_item}>CERAMIC COATING</li>
                        <li className={styles.footer_quick_links_item}>PAINT CORRECTION</li>
                        <li className={styles.footer_quick_links_item}>PREMIUM DETAILING</li>
                        <li className={styles.footer_quick_links_item}>METAL POLISHING</li>
                        <li className={styles.footer_quick_links_item}>GALLERY</li>
                        <li className={styles.footer_quick_links_item}>MORE</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_location_container}>
                <div className={styles.footer_location_title_container}>
                    <h4>OUR LOCATION</h4>
                </div>
                <div className={styles.footer_address_container}>
                    <p>7575 Airport Rd, Hornell, NY 14843</p>
                </div>
                <div className={styles.footer_map_container}>
                    <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.316625095056!2d8.295605176556604!3d51.59908687183433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbd0fd24079d37%3A0x9b1f6913496ffcde!2sSchlehengrund%205%2C%2059597%20Erwitte!5e0!3m2!1sde!2sde!4v1699550695318!5m2!1sde!2sde" style={{ width: '100%', height: '200px', border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className={styles.footer_contact_container}>
                    <a href="#">pmsdetailing@yahoo.com</a>
                    <a href="#">(607) 794-1094</a>
                </div>
                <div className={styles.footer_book_btn}>
                    <button>BOOK TODAY</button>
                </div>
            </div>
            <div className={styles.footer_opening_hours_container}>
                <div className={styles.opening_hours_working_days_container}>
                    <div className={styles.opening_hours_title_container}>
                        <h4>HOURS OF OPERATION</h4>
                    </div>
                    <div className={styles.opening_hours_container}>
                        <div className={styles.opening_hours}>
                            <p>Mon - Fri: 9am - 5pm EST</p>
                        </div>
                        <div className={styles.opening_hours}>
                            <p>Sat: 9am - 2pm EST</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_holiday_container}>
                    <div className={styles.holiday_title_container}>
                        <h4>HOLIDAY CLOSURES</h4>
                    </div>
                    <ul className={styles.footer_holiday_list}>
                        <li className={styles.holiday_item}>Memorial Day</li>
                        <li className={styles.holiday_item}>Independence Day</li>
                        <li className={styles.holiday_item}>Labor Day</li>
                        <li className={styles.holiday_item}>Thanksgiving Day</li>
                        <li className={styles.holiday_item}>Day after Thanksgiving</li>
                        <li className={styles.holiday_item}>Christmas</li>
                        <li className={styles.holiday_item}>New Years Day</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_follow_us_container}>
                <div className={styles.footer_follow_us_logo_container}>
                    <img src="/assets/logo.png" alt="" />
                </div>
                <div className={styles.footer_follow_us_text_container}>
                    <p>For the last decade, Premier Mirror Shine has strived for quality results and unmatched experience. We have catered to our reputation in the auto detailing industry by perfecting our services, including ceramic coatings, metal polishing, premium interior and exterior details, paint corrections and more. We make it our mission to ensure your vehicle is in quality hands when you look to Premier Mirror Shine for your auto detailing needs.</p>
                </div>
                <div className={styles.footer_follow_us_social_main_container}>
                    <div className={styles.footer_follow_us_title_container}>
                        <h4>FOLLOW US</h4>
                    </div>
                    <div className={styles.footer_follow_us_social_container}>
                        <div className={styles.follow_us_social_icon_container}>
                            <MdEmail />
                        </div>
                        <div className={styles.follow_us_social_icon_container}>
                            <FaFacebookF />
                        </div>
                        <div className={styles.follow_us_social_icon_container}>
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
