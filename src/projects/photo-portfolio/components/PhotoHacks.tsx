// Cell Phone/Camera Hacks section: Caption each (of the 6) with the technique

import { Carousel } from "flowbite-react"
import { Photo } from "../../../components/Photo"

import ChenF_Hacks_Pinhole from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_Pinhole.png";

type HackProps = {
    title: string;
    photo: string;
    description: string;
}

const HackPhoto: React.FC<HackProps> = ({ title, photo, description }) => {
    return (
        <>
            <Photo
                photo={photo}
                title={title}
                photo_style={"h-[100%] object-contain place-self-center rounded-lg align-top p-16"}
            >
                {description}
            </Photo>
            <h3 className="absolute text-center text-2xl top-0 left-0 right-0 p-4">
                {title}
            </h3>
        </>
    )
}

export const PhotoHacks: React.FC = ({ }) => {
    return (
        <div className="max-w-screen flex flex-col justify-center items-center">
            <h2 className="pt-4 font-semibold text-5xl whitespace-nowrap text-center">Photo Hacks</h2>
            <div className="w-[80vw] h-[80vh] pt-4">
                <Carousel pauseOnHover slideInterval={30000}>
                    <HackPhoto
                        photo={ChenF_Hacks_Pinhole}
                        title="Pinhole Camera"
                        description="Placing a thin paper with a hole in front of an IPhone camera lens creates a pinhole camera effect."
                    />
                </Carousel>
            </div>
        </div>
    )
}