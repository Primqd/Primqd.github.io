// d. Weekly photos section: Each weekly photo captioned with the prompt and number

import React, { PropsWithChildren } from "react"
import pig from "../../../assets/pig.png"
import { Photo } from "../../../components/Photo"


type WeeklyPhotoProps = {
    photo: string,
    title: string,
}

const WeeklyPhoto: React.FC<PropsWithChildren<WeeklyPhotoProps>> = ({ photo, title, children }) => {
    return (
        <div className="relative w-[20rem] h-[20rem] m-5">
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
            <WeeklyPhoto
                photo={pig}
                title="WP1: My Life"
            >
                This is my (unsorted) pile of clothes sitting in my room. I used back lighting to better emphasize the texture on the clothes. I used a bird's eye view to emphasize the overall texture, rather than one specific texture.
            </WeeklyPhoto>
        </div>
    )
}