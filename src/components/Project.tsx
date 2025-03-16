import { Link } from "react-router-dom"


type ProjectProps = {
    title : string,
    description : string,
    image : string,
    link : string,
}

function Project({title, description, image, link} : ProjectProps) {
    return(
        <div className="w-[95%] px-[2.5%] h-[50%] pt-[2.5%]">
            <div className="flex border-4 border-neutral-500 bg-neutral-600 align-middle">
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