import Link from "next/link"
import aboutImage from "../public/assets/about.jpg"
import Image from "next/image"

export default function About() {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#549475]">About Us</p>
                    <h2 className="py-4">Ivan Car Wash</h2>
                    <p className="py-2 text-gray-600">
                        At our mobile detailing company, we prioritize delivering top-quality car detailing services. Our skilled technicians, equipped with state-of-the-art tools, ensure your vehicle looks brand new. Using premium products and techniques, we guarantee exceptional results. Whether you opt for exterior detailing, interior detailing, or polishing, our services cater to your specific needs.
                        Client satisfaction is our ultimate goal, driving our commitment to excellence. Choose us to revitalize your car and experience the difference in our dedicated approach
                    </p>
                    <Link href="/">
                        <button className='w-1/2 p-4 text-gray-100 mt-4'>
                            Learn More
                        </button>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl" src={aboutImage} alt="Computer on table"></Image>
                </div>
            </div>
        </div>
    )
}
