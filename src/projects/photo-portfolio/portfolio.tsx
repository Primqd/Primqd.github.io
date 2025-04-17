import PhotoHacks from "./components/hacks"
import PhotoHeader from "./components/header"
import PhotoProjects from "./components/projects"
import WeeklyPhotos from "./components/wp"


function PhotoPortfolio() {
    return <div>
        <PhotoHeader />
        <PhotoProjects />
        <WeeklyPhotos />
        <PhotoHacks />
    </div>
}

export default PhotoPortfolio