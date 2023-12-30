import styles from "./book-style.module.css"
export default function Book() {
    return (
        <div className={styles.book_main_container}>
            <div className={styles.book_container}>
                <div className={styles.book_left_container}>
                    <div className={styles.book_subtitle_container}>
                        <h4>1 0 +  Y E A R S  O F  D E T A I L I N G  D E D I C A T I O N</h4>
                    </div>
                    <div className={styles.book_title_container}>
                        <h2>WHEN EXPERIENCE MATTERS.</h2>
                    </div>
                    <div className={styles.book_text_container}>
                        <p>Welcome to  IK Professional Auto Detailing , your premier destination for top-quality car detailing services. With a passion for perfection and a commitment to excellence, we have been serving individuals and businesses for years, creating a loyal customer base in Sevier County, Knox, and Blount County areas.

                            At IK Professional Auto Detailing , we believe that every vehicle deserves royal treatment. Our skilled technicians use state-of-the-art equipment and industry-leading techniques to deliver outstanding results, making your car look like it just rolled off the showroom floor.

                            What sets us apart is our dedication to customer satisfaction. We treat each vehicle with utmost care, tailoring our services to meet your specific needs. Whether you choose our exterior detailing, interior detailing, or polishing services, expect nothing less than perfection.

                            Convenience is at the heart of our services. Our mobile car detailing brings the best to your doorstep, saving you time and effort. We service a wide range of areas, including Seymour, Knoxville, Maryville, Sevierville, Pigeon Forge, Gatlinburg, Dandridge, and Morristown, ensuring that everyone can benefit from our exceptional services..</p>
                    </div>
                    <div className={styles.book_left_book_btn}>
                        <button>BOOK</button>
                    </div>
                </div>
                <div className={styles.book_right_container}>
                    <div className={styles.book_right_img_container}>
                        <img src="/assets/book-img.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}