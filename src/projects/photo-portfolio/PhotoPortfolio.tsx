import { PhotoHacks } from "./components/hacks"
import { PhotoHeader } from "./components/header"
import { PhotoProjects } from "./components/projects"
import { PhotoWeekly } from "./components/wp"
import pig from "../../assets/pig.png"

export const PhotoPortfolio: React.FC = () => {
    return <div className="">
        <PhotoHeader photo={pig} />
        <PhotoProjects />
        <PhotoWeekly />
        <PhotoHacks />
    </div>
}