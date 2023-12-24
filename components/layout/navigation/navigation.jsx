import { useState, useEffect } from 'react'
import styles from './navigation-style.module.css'

import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navigation = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, []);
    return (
        <div className={styles.nav_container}>
            <div className={styles.info_links_container}>
                <div className={styles.info_links}>
                    <div className={styles.phone}>Call: <a href="#">0101010101</a></div>
                    <div className={styles.location}>Location: <a href="#">7575 Airport Rd,Hornell, NY 14843</a></div>
                </div>
                <img className={styles.logo} src="/assets/logo.png" alt="Logo" />
                <div className={styles.book_btn_container}>
                    <button className={styles.book_btn}>Book Now</button>
                </div>
            </div>
            <div className={styles.nav_list_container}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_list_item}>HOME</li>
                    <li className={styles.nav_list_item}>CERAMIC COATING</li>
                    <li className={styles.nav_list_item}>PAINT CORRECTION</li>
                    <li className={styles.nav_list_item}>PREMIUM DETAILING</li>
                    <li className={styles.nav_list_item}>METAL POLISHING</li>
                    <li className={styles.nav_list_item}>GALLERY</li>
                    <li className={styles.nav_list_item}>MORE</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation