import { Link } from "react-router-dom"


type ProjectProps = {
    title: string,
    description: string,
    image: string,
    link: string,
}

export const Project: React.FC<ProjectProps> = ({ title, description, image, link }) => {
    return (
        <div className="w-[95%] px-[2.5%] h-[50%] pt-[2.5%]">
            <div className="flex border-4 border-border-bright bg-secondary align-middle">
                <div className="px-[2rem] py-[2rem] w-[100%]">
                    <Link to={link} className="text-5xl font-semibold hover:underline py-[1vh] w-fit text-text-highlight">
                        {title}
                    </Link>
                    <p className="py-[1vh] text-2xl text-text-default">
                        {description}
                    </p>
                </div>
                <Link to={link}>
                    <figure className="max-w px-[2rem] py-[2rem]">
                        <img className="max-w-[25rem] border-4 border-border-bright" alt="clay pig" src={image}></img>
                    </figure>
                </Link>
            </div>
        </div>
    )
}