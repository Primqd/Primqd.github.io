// c. Photo Project section: You will need to have high resolution JPEGs of the final images from each large photo project. A contact sheet JPEG to show process. Caption with the project name and a short statement about the project 2-3 sentences.
// § Photo scavenger Hunt (2 min. favorites) - No contact sheet required for this one
// § MPC 1 - Your Choice
// § MPC 2 - Your Choice
// § MPC 3 - Your Choice
// Final (MPC4) - Your Art, Your Choice

import ChenF_MPC1_Pun_CS from "../../../assets/photo_portfolio/ChenF_MPC1_Pun_CS.jpg"
import ChenF_MPC1_Pun_Edit_01 from "../../../assets/photo_portfolio/ChenF_MPC1_Pun_Edit_01.jpg"
import ChenF_MPC1_Pun_Edit_02 from "../../../assets/photo_portfolio/ChenF_MPC1_Pun_Edit_02.jpg"

import ChenF_MPC2_Product_CS from "../../../assets/photo_portfolio/ChenF_MPC2_Product_CS.png"
import ChenF_MPC2_Product_Edit_02 from "../../../assets/photo_portfolio/ChenF_MPC2_Product_Edit_02.jpg"
import ChenF_MPC2_Product_Edit_07 from "../../../assets/photo_portfolio/ChenF_MPC2_Product_Edit_07.jpg"

type PhotoProjectProps = {
    title: string;
    description: string;
    contact_sheet: string;
    edit_1: string;
    edit_2: string;
}

const PhotoProject: React.FC<PhotoProjectProps> = ({ title, description, contact_sheet, edit_1, edit_2 }) => {
    return (
        <div className="text-left">
            {title}{description}{contact_sheet}{edit_1}{edit_2}
        </div>
    )
}

export const PhotoProjects: React.FC = () => {
    return (
        <div className="max-w-screen flex flex-col justify-center">
            <h2 className="py-4 font-semibold text-5xl whitespace-nowrap text-center">Projects</h2>
            <PhotoProject
                title="MPC 1: Pun"
                description="test"
                contact_sheet={ChenF_MPC1_Pun_CS}
                edit_1={ChenF_MPC1_Pun_Edit_01}
                edit_2={ChenF_MPC1_Pun_Edit_02}
            />
        </div>
    )
}