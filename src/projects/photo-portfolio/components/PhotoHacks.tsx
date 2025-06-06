// Cell Phone/Camera Hacks section: Caption each (of the 6) with the technique

import { Carousel } from "flowbite-react"
import { Photo } from "../../../components/Photo"
import ChenF_Hacks_Pinhole from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_Pinhole.png";
import ChenF_Hacks_CDReflector from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_CDReflector.jpg";
import ChenF_Hacks_CustomBokeh from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_CustomBokeh.jpg";
import ChenF_Hacks_DigitalBokeh from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_DigitalBokeh.jpg";
import ChenF_Hacks_FilteredLight from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_FilteredLight.jpg";
import ChenF_Hacks_TinfoilBokeh from "../../../assets/photo_portfolio/Hacks/ChenF_Hacks_TinfoilBokoeh.jpg";

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
                        description="By placing a thin paper with a hole in front of an IPhone camera, it creates a pinhole camera effect."
                    />
                    <HackPhoto
                        photo={ChenF_Hacks_CDReflector}
                        title="CD Reflector"
                        description="By reflecting light off a CD with a flashlight, one can cast rainbow patterns onto subjects, especially prisms."
                    />
                    <HackPhoto
                        photo={ChenF_Hacks_FilteredLight}
                        title="Filtered Light"
                        description="Using a colored filter in front of a flashlight can be used to create highly focused colored light."
                    />
                    <HackPhoto
                        photo={ChenF_Hacks_CustomBokeh}
                        title="Custom Bokeh"
                        description="Using shapes with custom cutouts in front of a lens can create unique bokeh shapes."
                    />
                    <HackPhoto
                        photo={ChenF_Hacks_TinfoilBokeh}
                        title="Tinfoil Bokeh"
                        description="Using tinfoil in the background with proper lighting and low aperature can create a bokeh effect without much setup."
                    />
                    <HackPhoto
                        photo={ChenF_Hacks_DigitalBokeh}
                        title="Digital Bokeh"
                        description="Using a computer screen with a bokeh image and placing it behind a subject can create a bokeh effect with no setup."
                    />
                </Carousel>
            </div>
        </div>
    )
}