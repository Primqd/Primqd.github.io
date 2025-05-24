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
import WP_11_12 from "../../../assets/photo_portfolio/WP/ChenF_WP_11_12.jpg"
import WP_13 from "../../../assets/photo_portfolio/WP/ChenF_WP_13.jpg"

type WeeklyPhotoProps = {
    photo: string,
    title: string,
}

const WeeklyPhoto: React.FC<PropsWithChildren<WeeklyPhotoProps>> = ({ photo, title, children}) => {
    return (
        <div className={"relative w-[25] h-[25vh]"}>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16] text-center text-white font-semibold text-3xl pointer-events-none z-1">{title}</h1>
            <Photo
                photo={photo}
                photo_style="w-[100%] h-[100%] object-cover grayscale hover:grayscale-0 transition-all duration-300"
                title={title}
            >
                {children}
            </Photo>
        </div>
    )
}

// TODO: lags like shit when sliding over many elements
export const PhotoWeekly: React.FC = () => {
    return (
        <div>
            <h2 className="pb-10 font-semibold text-5xl whitespace-nowrap text-center">Projects</h2>
            <div className="min-w-[99vw] items-center grid grid-cols-4">
                <WeeklyPhoto
                    photo={WP_1}
                    title="WP1: My Life"
                />
                <WeeklyPhoto
                    photo={WP_2}
                    title="WP2: Debug"
                />
                <WeeklyPhoto
                    photo={WP_3}
                    title="WP3: Debug"
                />
                <WeeklyPhoto
                    photo={WP_4}
                    title="WP4: Debug"
                />
                <WeeklyPhoto
                    photo={WP_5}
                    title="WP5: Debug"
                />
                <WeeklyPhoto
                    photo={WP_6}
                    title="WP6: Debug"
                />
                <WeeklyPhoto
                    photo={WP_7}
                    title="WP7: Debug"
                />
                <WeeklyPhoto
                    photo={WP_8}
                    title="WP8: Debug"
                />
                <WeeklyPhoto
                    photo={WP_9}
                    title="WP9: Debug"
                />
                <WeeklyPhoto
                    photo={WP_10}
                    title="WP10: Debug"
                />
                <WeeklyPhoto
                    photo={WP_11_12}
                    title="WP11&12: Debug"
                />
                <WeeklyPhoto
                    photo={WP_13}
                    title="WP13: Debug"
                />
            </div>
        </div>
    )
}