import PhotoHacks from "./components/hacks"
import PhotoHeader from "./components/header"
import PhotoProjects from "./components/projects"
import WeeklyPhotos from "./components/wp"
import debug from "../../assets/debug_navbar_art.png"

function PhotoPortfolio() {
    return <div className="">
        <PhotoHeader photo={debug}/>
        <PhotoProjects />
        <WeeklyPhotos />
        <PhotoHacks />
    </div>
}

export default PhotoPortfolio