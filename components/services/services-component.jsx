import styles from "./services-style.module.css"

export default function Services() {
    return (
        <div className={styles.services_main_container}>
            <div className={styles.services_title_container}>
                <h2>WHAT WE DO BEST</h2>
            </div>
            <div className={styles.services_subtitle_container}>
                <h4>Specializing in All Vehicle Types. <span>Cars/SUVs/Trucks, Big Rigs, Motorcycles, Hotrods/Classics/Exotics...</span> You Name It.</h4>
            </div>
            <div className={styles.services_container}>
                <div className={styles.services_item_container}>
                    <div className={styles.services_item_img_container}>
                        <img src="/assets/services1.jpg" alt="" />
                    </div>
                    <div className={styles.services_item_title_container}>
                        <h5>CERAMIC COATINGS</h5>
                    </div>
                    <div className={styles.services_item_content_container}>
                        <p>We apply ceramic coatings to all vehicles, from motorcycles & pick-up trucks, to semi-trucks & farm equipment. We have the perfect ceramic coating package to best suit your vehicle.</p>
                    </div>
                    <div className={styles.services_item_button_container}>
                        <button>PRICING & PACKAGES</button>
                    </div>
                </div>
                <div className={styles.services_item_container}>
                    <div className={styles.services_item_img_container}>
                        <img src="/assets/services1.jpg" alt="" />
                    </div>
                    <div className={styles.services_item_title_container}>
                        <h5>METAL POLISHING</h5>
                    </div>
                    <div className={styles.services_item_content_container}>
                        <p>We apply ceramic coatings to all vehicles, from motorcycles & pick-up trucks, to semi-trucks & farm equipment. We have the perfect ceramic coating package to best suit your vehicle.</p>
                    </div>
                    <div className={styles.services_item_button_container}>
                        <button>PRICING & PACKAGES</button>
                    </div>
                </div>
                <div className={styles.services_item_container}>
                    <div className={styles.services_item_img_container}>
                        <img src="/assets/services1.jpg" alt="" />
                    </div>
                    <div className={styles.services_item_title_container}>
                        <h5>PAINT CORRECTIONS</h5>
                    </div>
                    <div className={styles.services_item_content_container}>
                        <p>We apply ceramic coatings to all vehicles, from motorcycles & pick-up trucks, to semi-trucks & farm equipment. We have the perfect ceramic coating package to best suit your vehicle.</p>
                    </div>
                    <div className={styles.services_item_button_container}>
                        <button>PRICING & PACKAGES</button>
                    </div>
                </div>
                <div className={styles.services_item_container}>
                    <div className={styles.services_item_img_container}>
                        <img src="/assets/services1.jpg" alt="" />
                    </div>
                    <div className={styles.services_item_title_container}>
                        <h5>VEHICLE DETAILING</h5>
                    </div>
                    <div className={styles.services_item_content_container}>
                        <p>We apply ceramic coatings to all vehicles, from motorcycles & pick-up trucks, to semi-trucks & farm equipment. We have the perfect ceramic coating package to best suit your vehicle.</p>
                    </div>
                    <div className={styles.services_item_button_container}>
                        <button>PRICING & PACKAGES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}