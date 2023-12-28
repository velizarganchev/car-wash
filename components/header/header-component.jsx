import styles from "./header-style.module.css"

export default function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_title_container}>
                <h1 className={styles.title}>YOUR VEHICLE, OUR PASSION.</h1>
                <p className={styles.sub_title}>Detailing & Polishing Everything From Hot Rods To Big Rigs - Servicing New York&apos;s Southern Tier</p>
            </div>
        </div>
    )
}