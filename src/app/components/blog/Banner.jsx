import Image from "next/image";

const Banner = ({ image }) => (
    <div className="mil-banner-sm-2 mil-deep-bg">
        <Image
            src={image}
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            alt="Publication cover"
        />
        <div className="mil-overlay"></div>
    </div>
);

export default Banner;