import PhotoHacks from "./components/hacks"
import PhotoHeader from "./components/header"
import PhotoProjects from "./components/projects"
import WeeklyPhotos from "./components/wp"


function PhotoPortfolio() {
    return <div className="pt-[5rem]">
        <PhotoHeader />
        <PhotoProjects />
        <WeeklyPhotos />
        <PhotoHacks />
    </div>
}

export default PhotoPortfolio