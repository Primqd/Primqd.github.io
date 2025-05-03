// c. Photo Project section: You will need to have high resolution JPEGs of the final images from each large photo project. A contact sheet JPEG to show process. Caption with the project name and a short statement about the project 2-3 sentences.
// § Photo scavenger Hunt (2 min. favorites) - No contact sheet required for this one
// § MPC 1 - Your Choice
// § MPC 2 - Your Choice
// § MPC 3 - Your Choice
// Final (MPC4) - Your Art, Your Choice

import { Photo } from "../../../components/Photo"
import pig from "../../../assets/pig.png"

export const PhotoProjects: React.FC = () => {
    return (
        <div>
            <h1>Projects</h1>
            <Photo photo={pig} title="Photo 1" description="Weekly Photo" photo_style="style 1" />
        </div>
    )
}