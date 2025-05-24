// d. Weekly photos section: Each weekly photo captioned with the prompt and number

import React, { PropsWithChildren } from "react"
import { Photo } from "../../../components/Photo"

import WP_1 from "../../../assets/photo_portfolio/WP/ChenF_WP_01.jpg"
import WP_2 from "../../../assets/photo_portfolio/WP/ChenF_WP_02.png"
import WP_3 from "../../../assets/photo_portfolio/WP/ChenF_WP_03.jpg"
import WP_4 from "../../../assets/photo_portfolio/WP/ChenF_WP_04.webp"
import WP_5 from "../../../assets/photo_portfolio/WP/ChenF_WP_05.jpg"
import WP_6 from "../../../assets/photo_portfolio/WP/ChenF_WP_06.jpg"
import WP_7 from "../../../assets/photo_portfolio/WP/ChenF_WP_07.jpg"
import WP_8 from "../../../assets/photo_portfolio/WP/ChenF_WP_08.webp"
import WP_9 from "../../../assets/photo_portfolio/WP/ChenF_WP_09.jpg"
import WP_10 from "../../../assets/photo_portfolio/WP/ChenF_WP_10.jpg"
import WP_11 from "../../../assets/photo_portfolio/WP/ChenF_WP_11.jpg"
import WP_12 from "../../../assets/photo_portfolio/WP/ChenF_WP_12.jpg"
import WP_13 from "../../../assets/photo_portfolio/WP/ChenF_WP_13.jpg"

type WeeklyPhotoProps = {
    photo: string,
    title: string,
    position?: string,
}

const WeeklyPhoto: React.FC<PropsWithChildren<WeeklyPhotoProps>> = ({ photo, title, children, position }) => {
    return (
        <div className={"relative w-[20rem] h-[20rem] absolute " + position}>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16rem] text-center text-white font-semibold text-3xl pointer-events-none z-1">{title}</h1>
            <Photo
                photo={photo}
                photo_style="w-[20rem] h-[20rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
                title={title}
            >
                {children}
            </Photo>
        </div>
    )
}

export const PhotoWeekly: React.FC = () => {
    return (
        <div>
            <h2 className="pb-10 font-semibold text-5xl whitespace-nowrap text-center">Projects</h2>
            <WeeklyPhoto
                photo={WP_1}
                title="WP1: My Life"
                position="left-[50%] -translate-x-1/2"
            >
                This is my (unsorted) pile of clothes sitting in my room. I used back lighting to better emphasize the texture on the clothes. I used a bird's eye view to emphasize the overall texture, rather than one specific texture.
            </WeeklyPhoto>
        </div>
    )
}