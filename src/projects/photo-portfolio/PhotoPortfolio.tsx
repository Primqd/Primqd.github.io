import { PhotoHacks } from "./components/PhotoHacks"
import { PhotoHeader } from "./components/PhotoHeader"
import { PhotoProjects } from "./components/PhotoProjects"
import { PhotoWeekly } from "./components/PhotoWeekly"
import { PhotoBio } from "./components/PhotoBio"
import pig from "../../assets/pig.png"

export const PhotoPortfolio: React.FC = () => {
    return <div className="">
        <PhotoHeader photo={pig} />
        <PhotoBio />
        <PhotoProjects />
        <PhotoWeekly />
        <PhotoHacks />
    </div>
}