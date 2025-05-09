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
        <Photo
            photo={photo}
            photo_style="w-full h-[20rem] object-cover object-center brightness-75"
            title={title}
        >
            {children}
        </Photo>
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