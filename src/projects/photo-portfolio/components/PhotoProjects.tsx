// c. Photo Project section: You will need to have high resolution JPEGs of the final images from each large photo project. A contact sheet JPEG to show process. Caption with the project name and a short statement about the project 2-3 sentences.
// § Photo scavenger Hunt (2 min. favorites) - No contact sheet required for this one
// § MPC 1 - Your Choice
// § MPC 2 - Your Choice
// § MPC 3 - Your Choice
// Final (MPC4) - Your Art, Your Choice

import { Carousel } from "flowbite-react"
import { Photo } from "../../../components/Photo"

import ChenF_MPC1_Pun_CS from "../../../assets/photo_portfolio/ChenF_MPC1_Pun_CS.jpg"
import ChenF_MPC1_Pun_Edit_01 from "../../../assets/photo_portfolio/ChenF_MPC1_Pun_Edit_01.jpg"
import ChenF_MPC1_Pun_Edit_02 from "../../../assets/photo_portfolio/ChenF_MPC1_Pun_Edit_02.jpg"

import ChenF_MPC2_Product_CS from "../../../assets/photo_portfolio/ChenF_MPC2_Product_CS.png"
import ChenF_MPC2_Product_Edit_02 from "../../../assets/photo_portfolio/ChenF_MPC2_Product_Edit_02.jpg"
import ChenF_MPC2_Product_Edit_07 from "../../../assets/photo_portfolio/ChenF_MPC2_Product_Edit_07.jpg"

type MPCProps = {
    title: string;
    description: string;
    contact_sheet: string;
    edit_1: string;
    edit_2: string;
}

type MPCPhotoProps = {
    title: string;
    photo: string;
    description: string;
}

const MPCPhoto: React.FC<MPCPhotoProps> = ({ title, photo, description }) => {
    return (
        <>
            <Photo
                photo={photo}
                title={title}
                description={description}
                photo_style={"h-[100%] object-contain place-self-center rounded-lg align-top p-16"}
            />
            <h3 className="absolute text-center text-2xl top-0 left-0 right-0 p-4">
                {title}
            </h3>
        </>
    )
}

const MPC: React.FC<MPCProps> = ({ title, description, contact_sheet, edit_1, edit_2 }) => {
    return (
        <div className="p-12 flex flex-row text-left max-h-[40rem]">
            <div className="p-1 flex flex-col w-[40%]">
                <h1 className="object-left-top font-semibold text-4xl">{title}</h1>
                <h3 className="object-left-bottom">{description}</h3>
            </div>
            <div className="w-[60%]">
                <Carousel slide={false}>
                    <MPCPhoto
                        photo={contact_sheet}
                        title="MPC1 Contact Sheet"
                        description="Contact Sheet for the project"
                    />
                    <MPCPhoto
                        photo={edit_1}
                        title={`Edit 1: "A drop in the bucket"`}
                        description="First edit of the project"
                    />
                    <MPCPhoto
                        photo={edit_2}
                        title={`Edit 2: "We don't see eye to eye"`}
                        description="Second edit of the project"
                    />
                </Carousel>
            </div>
        </div >
    )
}

export const PhotoProjects: React.FC = () => {
    return (
        <div className="max-w-screen flex flex-col justify-center">
            <h2 className="pt-4 font-semibold text-5xl whitespace-nowrap text-center">Projects</h2>
            <MPC
                title="MPC 1: Pun"
                description="test"
                contact_sheet={ChenF_MPC1_Pun_CS}
                edit_1={ChenF_MPC1_Pun_Edit_01}
                edit_2={ChenF_MPC1_Pun_Edit_02}
            />
        </div>
    )
}