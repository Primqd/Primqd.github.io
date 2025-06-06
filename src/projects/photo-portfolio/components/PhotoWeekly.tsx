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

import WP_1_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_01_Thumbnail.jpg"
import WP_3_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_03_Thumbnail.jpg"
import WP_5_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_05_Thumbnail.jpg"
import WP_6_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_06_Thumbnail.jpg"
import WP_7_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_07_Thumbnail.jpg"
import WP_9_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_09_Thumbnail.jpg"
import WP_10_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_10_Thumbnail.jpg"
import WP_11_12_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_11_12_Thumbnail.jpg"
import WP_13_Th from "../../../assets/photo_portfolio/WP/Thumbnails/ChenF_WP_13_Thumbnail.jpg"

type WeeklyPhotoProps = {
    photo: string,
    title: string,
}

// alternative speration: w-[22.5vw], gap-8
const WeeklyPhoto: React.FC<PropsWithChildren<WeeklyPhotoProps>> = ({ photo, title, children }) => {
    return (
        <div className={"w-[24.775vw] h-[25vh] relative"}>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16vw] text-center text-white font-semibold text-3xl pointer-events-none z-1">{title}</h1>
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
            <h2 className="pb-10 font-semibold text-5xl whitespace-nowrap text-center">Weekly Photos</h2>
            <div className="min-w-[99vw] items-center grid grid-cols-4">
                <WeeklyPhoto photo={WP_1} title="WP1: My Life">
                    This is my (unsorted) pile of clothes sitting in my room. I used back lighting to better emphasize the texture on the clothes. I used a bird's eye view to emphasize the overall texture, rather than one specific texture.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_2} title="WP2: Details">
                    This is a model clay(?) pig I got from a yard sale a couple months ago. I used a close up shot with low aperture to capture the texture of the pig. I used both natural and artificial light in the photo, using my slightly reflective table as a diffuser for natural light to contrast the background from the pig. I highlighted the pig itself using artificial light from my desk's lamp.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_3} title="WP3: Frame in Frame">
                    This is a photo of my fire place. I used the fireplace screen as a secondary frame to focus the viewer on the central flame. Due to the nature of fire, it was difficult to balance the fast shutter speed needed to "freeze" the fire while still keeping enough aperture to keep the screen in focus. Originally, I had wanted to focus on both the screen and the fire, but my camera couldn't capture a decent brightness photo (even with max ISO), so I focused just on the screen instead. Even then, the final photo ended up darker than I liked, so I turned up the exposure, highlights, and temperature in Camera Raw afterwards to compensate. I still feel as though the photo is a bit blurry, but I've tried my best to focus it as much as I could.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_4} title="WP4: Color of Emotion">
                    I took a picture of a skull along with a black color to give off the emotion of fear and death. Interestingly, while I took many dark photos, this one was originally a pretty bright one: I used camera raw to turn down the exposure, highlights, whites, blacks, and other settings down to make the picture as dark as possible. I think this was for the better, as it allowed me to maintain focus on the skull while still keeping the photo as detailed as possible.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_5} title="WP5: Reflections">
                    This is my small mirror that I use to help put on my contacts. I used the mirror itself as a secondary frame to focus on me, taking the photo itself. Unfortunately, my slightly orange table accidentally served as a diffuser, so I turned down the temperature in Camera Raw slightly afterwards.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_6} title="WP6: Entropy">
                    This is a photo of decomposing apple peels and strawberry stems, ~16 hours after preparing my lunch. I intentionally used low exposure to artificially lower the net brightness of the photo, as it looked too bright and alive with high exposure.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_7} title="WP7: Light and Shadow">
                    This is a photo of my house's guest bedroom, with lights being casted by the rising sun. I liked this photo because my window casted several  sharp shadows, emphasizing the hardness of the light. While unintentional, this photo also uses a (mostly) monochromatic color set, helping emphasize the lights and the shadows.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_8} title="WP8: Collections">
                    I took this photo of a vending machine of Pepsi at my dad's workplace. I intentionally used a high temperature in this photo to give the impression that this photo was taken in a cold environment.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_9} title="WP9: Natural Elements">
                    I took a photo of a shrub cutter cutting a small tree we have in our front. I used a low aperture to center the viewer's focus on the tree. Also, this image was taken right before sunset (8:00PM), so the image was really blue for some reason. I tried to turn down the temperature in Camera Raw, but it still feels a bit blue. Oops.
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_10} title="WP10: Nostalgia">
                    This is a recreation of one of the first photos I ever took with my camera. When I took the original photo, I was frustrated with how I couldn't get the camera to focus on just the front part of the image, but now I know to use a low aperture for that effect! I also used camera raw to spice up the photo a little bit, using photoshop to convert the image to a nice, old look (high grain, black and white + sepia filter)
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_11_12} title="WP11 & WP12">
                    <div>
                        <p className="pb-5">WP11: This is a close-up photo of my wallet. This photo was taken using a micro lens I had recently gotten, using low aperture and an external light to highlight the texture of the wallet.</p>

                        <p>WP12: This is a close-up photo of my nose, using my micro lens Originally, I planned to use much higher aperture to capture the texture better, but as it turns out it is nigh impossible to stay at a constant distance from a camera while adjusting the manual focus (the lens doesn't allow autofocus) while taking the photo itself. As such, I had to compromise by turning down the aperture significantly to turn the shutter speed high enough to get something... discernable, to say the least. Unfortunately, this causes the texture to kind of blend in and make it compositionally strange, but right now I can't access my camera to take a better photo. :/</p>
                    </div>
                </WeeklyPhoto>
                <WeeklyPhoto photo={WP_13} title="WP13: Endings">
                    This is a photo of a road near my house that looks a lot shorter than it actually is. I used a medium aperature to capture the detail within the edges of the photo, but to make the rest of the trail sort of "fade away." I also used camera raw to turn up the highlights and darken the shadows to better emphasize the contrast.
                </WeeklyPhoto>
            </div>
        </div>
    )
}