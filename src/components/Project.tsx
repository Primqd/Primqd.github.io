import { Link } from "react-router-dom"


type ProjectProps = {
    title : string,
    description : string,
    image : string,
    link : string,
}

function Project({title, description, image, link} : ProjectProps) {
    return(
        <div className="px-[10vw] py-[8vh] w-[97.5vw] h-[47.5vh]">
            <div className="flex border-4 border-neutral-600 bg-neutral-700 align-middle">
                <div className="px-[2.5vw] py-[2.5vh] w-[100%]">
                        <Link to={link} className="text-5xl font-semibold hover:underline py-[1vh] w-fit">
                            {title}
                        </Link>
                        <p className="py-[1vh] text-2xl text-neutral-400">
                            {description}
                        </p>
                </div>
                <Link to={link}>
                    <figure className="max-w px-[2.5vw] py-[2.5vh]">
                        <img className="max-w-[25vw] border-4 border-gray-400" alt="clay pig" src={image}></img>
                    </figure>
                </Link>
            </div>
        </div>
    )
}

export default Project;