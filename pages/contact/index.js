import { Fragment } from "react";
import styles from "./index-style.module.css"

export default function Contact() {
    return (
        <Fragment>
            <div className={styles.contact_header}></div>
            <div className={styles.contact_title_container}>
                <h1>Contact Us</h1>
            </div>
        </Fragment>
    )
}
