import { Link } from "react-router-dom"

type ProjectProps = {
    title: string,
    description: string,
    image: string,
    link: string,
}

export const Project: React.FC<ProjectProps> = ({ title, description, image, link }) => {
    return (
        <div className="max-w px-[5%] h-[35%] pt-[2.5%]">
            <div className="flex flex-col lg:flex-row border-4 border-border-bright dark:border-dark-border-bright bg-secondary dark:bg-dark-secondary align-middle">
                <div className="p-[1rem] lg:p-[2rem] w-[100%]">
                    <Link
                        to={link}
                        className="text-5xl font-semibold hover:underline py-[1vh] w-fit text-text-highlight dark:text-dark-text-highlight"
                    >
                        {title}
                    </Link>
                    <p className="pt-[2vh] text-2xl text-text-default dark:text-dark-text-default">
                        {description}
                    </p>
                </div>
                <Link to={link}>
                    <figure className="p-[1rem] lg:p-[2rem]">
                        <img
                            className="min-w-1 border-4 border-border-bright dark:border-dark-border-bright"
                            alt="clay pig"
                            src={image}
                        />
                    </figure>
                </Link>
            </div>
        </div>
    )
}