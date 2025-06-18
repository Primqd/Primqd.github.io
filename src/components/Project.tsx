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
            <div className="flex border-4 border-neutral-500 bg-neutral-600 align-middle">
                <div className="px-[2rem] py-[2rem] w-[100%]">
                    <Link to={link} className="text-5xl font-semibold hover:underline py-[1vh] w-fit">
                        {title}
                    </Link>
                    <p className="py-[1vh] text-2xl text-neutral-400">
                        {description}
                    </p>
                </div>
                <Link to={link}>
                    <figure className="max-w px-[2rem] py-[2rem]">
                        <img className="max-w-[25rem] border-4 border-neutral-500" alt="clay pig" src={image}></img>
                    </figure>
                </Link>
            </div>
        </div>
    )
}