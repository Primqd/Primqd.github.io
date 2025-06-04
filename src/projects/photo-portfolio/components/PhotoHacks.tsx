// Cell Phone/Camera Hacks section: Caption each (of the 6) with the technique

import { Carousel } from "flowbite-react"
import { Photo } from "../../../components/Photo"

import ChenF_Hacks_Pinhole from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_Pinhole.png";

export const PhotoHacks: React.FC = ({ }) => {
    return (
        <div className="max-w-screen flex flex-col justify-center items-center">
            <h2 className="pt-4 font-semibold text-5xl whitespace-nowrap text-center">Photo Hacks</h2>
            <div className="w-[80vw] h-[80vh] pt-4">
                <Carousel pauseOnHover slideInterval={30000}>
                    <Photo
                        photo={ChenF_Hacks_Pinhole}
                        title="Pinhole Camera"
                        photo_style="h-[100%] object-contain place-self-center rounded-lg align-top p-16"
                    />
                </Carousel>
            </div>
        </div>
    )
}