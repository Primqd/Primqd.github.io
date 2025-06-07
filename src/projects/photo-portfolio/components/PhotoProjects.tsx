// c. Photo Project section: You will need to have high resolution JPEGs of the final images from each large photo project. A contact sheet JPEG to show process. Caption with the project name and a short statement about the project 2-3 sentences.
// § Photo scavenger Hunt (2 min. favorites) - No contact sheet required for this one
// § MPC 1 - Your Choice
// § MPC 2 - Your Choice
// § MPC 3 - Your Choice
// Final (MPC4) - Your Art, Your Choice

import { Carousel } from "flowbite-react"
import { Photo } from "../../../components/Photo"
import { PropsWithChildren } from "react"

import ChenF_MPC1_Pun_CS from "../../../assets/photo_portfolio/MPC/ChenF_MPC1_Pun_CS.jpg"
import ChenF_MPC1_Pun_Edit_01 from "../../../assets/photo_portfolio/MPC/ChenF_MPC1_Pun_Edit_01.jpg"
import ChenF_MPC1_Pun_Edit_02 from "../../../assets/photo_portfolio/MPC/ChenF_MPC1_Pun_Edit_02.jpg"

import ChenF_MPC2_Product_CS from "../../../assets/photo_portfolio/MPC/ChenF_MPC2_Product_CS.png"
import ChenF_MPC2_Product_Edit_02 from "../../../assets/photo_portfolio/MPC/ChenF_MPC2_Product_Edit_02.jpg"
import ChenF_MPC2_Product_Edit_07 from "../../../assets/photo_portfolio/MPC/ChenF_MPC2_Product_Edit_07.jpg"

import ChenF_MPC3_Quote_CS from "../../../assets/photo_portfolio/MPC/ChenF_MPC3_Quote_CS.jpg"
import ChenF_MPC3_Quote_Edit_05 from "../../../assets/photo_portfolio/MPC/ChenF_MPC3_Quote_Edit_05.jpg"
import ChenF_MPC3_Quote_Edit_08 from "../../../assets/photo_portfolio/MPC/ChenF_MPC3_Quote_Edit_08.jpg"

import ChenF_MPC4_Crystalline_CS from "../../../assets/photo_portfolio/MPC/ChenF_MPC4_Crystalline_CS.jpg"
import ChenF_MPC4_Crystalline_Edit_04 from "../../../assets/photo_portfolio/MPC/ChenF_MPC4_Crystalline_Edit_04.jpg"
import ChenF_MPC4_Crystalline_Edit_12 from "../../../assets/photo_portfolio/MPC/ChenF_MPC4_Crystalline_Edit_12.jpg"

type MPCProps = {
    title: string;
    description: string;
}

type MPCPhotoProps = {
    title: string;
    photo: string;
    description: string;
}

const MPCPhoto: React.FC<MPCPhotoProps> = ({ title, photo, description }) => {
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

const MPC: React.FC<PropsWithChildren<MPCProps>> = ({ title, description, children }) => {
    return (
        <div className="p-12 flex flex-row text-left max-h-[40rem]">
            <div className="p-4 flex flex-col w-[40%]">
                <h1 className="font-semibold text-4xl">{title}</h1>
                <h3 className="pt-2 text-xl/8">{description}</h3>
            </div>
            <div className="w-[60%]">
                <Carousel pauseOnHover slideInterval={30000} theme={
                    {
                        "indicators": {
                            "active": {
                                "off": "bg-gray-800/50 hover:bg-gray-800",
                                "on": "bg-gray-800"
                            }
                        },
                        "control": {
                            "base": "inline-flex h-8 w-8 items-center justify-center rounded-fullgroup-focus:outline-none group-focus:ring-4  sm:h-10 sm:w-10 bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70",
                            "icon": "h-5 w-5 sm:h-6 sm:w-6 text-gray-800"
                        }
                    }
                }>
                    {children}
                </Carousel>
            </div>
        </div >
    )
}

export const PhotoProjects: React.FC = () => {
    return (
        <div className="max-w-screen flex flex-col justify-center">
            <h2 className="pt-4 font-semibold text-5xl whitespace-nowrap text-center">Projects</h2>
            <MPC
                title="MPC 1: Pun"
                description={`
                For my first Mini Photo Challenge, I decided to choose the theme "pun," literally showing a pun in action.
                I decided to photograph the puns "we don't see eye to eye," "I can't focus," and "a drop in the bucket."
                For the first pun, I took a photo of myself looking at and away from a mirror, then cropped them together in Photoshop for the final edit.
                For the second pun, I intentionally took off my lens to get an extreme close-up and low focus effect.
                Finally, for the third pun, I used low aperature and high shutter speed to capture a drop of water falling into a bucket.
            `}
            >
                <MPCPhoto
                    photo={ChenF_MPC1_Pun_CS}
                    title="MPC1 Contact Sheet"
                    description="Contact Sheet for the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC1_Pun_Edit_01}
                    title={`Edit 1: "A drop in the bucket"`}
                    description="First edit of the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC1_Pun_Edit_02}
                    title={`Edit 2: "We don't see eye to eye"`}
                    description="Second edit of the project"
                />
            </MPC>
            <MPC
                title="MPC 2: Product"
                description={`
                For my second Mini Photo Challenge, I decided to choose the theme "product," attempting to "sell" a product using photography.
                I decided to photograph my watch (Casio MQ24 Series), a set of prisms, and some shoes.
                For the first photo, I took a photo of my watch against black plastic background, using my computer screen to reflect a fake bokoeh behind the watch.
                And for the edit, I cropped the image for a central focus and slightly tweaked the exposure and contrast.
                For the second edit, I used low aperature to focus on the prism itself, decreasing the temperature slightly in post to bring out the blue color.
            `}
            >
                <MPCPhoto
                    photo={ChenF_MPC2_Product_CS}
                    title="MPC2 Contact Sheet"
                    description="Contact Sheet for the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC2_Product_Edit_02}
                    title={`Edit 1: Watch`}
                    description="First edit of the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC2_Product_Edit_07}
                    title={`Edit 2: Prism`}
                    description="Second edit of the project"
                />
            </MPC>
            <MPC
                title="MPC 3: Quote"
                description={`
                For my third Mini Photo Challenge, I decided to choose the theme "quote," attempting to capture a quote in a photo.
                I decided to photograph several quotes, including "The only thing worse than being blind is having sight but no vision," "Life could be a dream," and "Darkness cannot drive out darkness- only light can do that."
                For the first edit, I took a photo of a flashlight through a tube, using low aperature to focus detail on the edges of the tube.
                After adjusting some basic exposure and viginette, I used PhotoShop to "wrap" the quote around the edge of the tube.
                For the second edit, I took a photo of the sky, using 3 exposure brackets to capture the full dynamic range of the sky.
                `}
            >
                <MPCPhoto
                    photo={ChenF_MPC3_Quote_CS}
                    title="MPC3 Contact Sheet"
                    description="Contact Sheet for the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC3_Quote_Edit_05}
                    title={`Edit 1: "The only thing worse than being blind is having sight but no vision."`}
                    description="First edit of the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC3_Quote_Edit_08}
                    title={`Edit 2: "Darkness cannot drive out darkness- only light can do that."`}
                    description="Second edit of the project"
                />
            </MPC>
            <MPC
                title="MPC 4: Crystalline"
                description={`
                For my fourth Mini Photo Challenge, I decided to choose the theme "crystalline," capturing photos of crystals and other crystal-like things.
                I decided to photograph several things, including a plastic crystal tree, a glass gem-like ball, a glass dice from a classmate, a crystal of amythest, and a rock of (I think) pyrite.
                For the first edit, I used blue and green light to illuminate the tree, which, interestingly enough, turned into blue and yellow light by maximizing the tint slider to +150. I focused the details of the tree using low aperature with a macro lens.
                For the second edit, I used a CD to refract rainbows along the amythest crystal, using a macro lens with high aperature to capture how the amythest reflected the light.
                I also turned up the tint significantly to emphasize the purple color of the amythest throughout the majority of the photo.
            `}
            >
                <MPCPhoto
                    photo={ChenF_MPC4_Crystalline_CS}
                    title="MPC4 Contact Sheet"
                    description="Contact Sheet for the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC4_Crystalline_Edit_04}
                    title={`Edit 1: Crystal Tree`}
                    description="First edit of the project"
                />
                <MPCPhoto
                    photo={ChenF_MPC4_Crystalline_Edit_12}
                    title={`Edit 2: Amethyst Crystal`}
                    description="Second edit of the project"
                />
            </MPC>
        </div>
    )
}