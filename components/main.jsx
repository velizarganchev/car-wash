import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
    return (
        <div id="home" className="w-full h-screen text-center ">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className=" p-2 text-gray-700">Detailing Company Car Wash</h1>
                    <p className="p-4 text-gray-600 max-w-[70%] m-auto">
                        With our state-of-the-art equipment and friendly, skilled technicians, we can make your vehicle look like new again.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto p-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 border border-emerald-200">
                            <a href="https://www.linkedin.com/in/velizar-ganchev-29311621b/">
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 border border-emerald-200">
                            <a href="https://github.com/velizarganchev">
                                <FaGithub />
                            </a>
                        </div>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 border border-emerald-200">
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <Link href="/resume">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 border border-emerald-200">
                                <BsPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
