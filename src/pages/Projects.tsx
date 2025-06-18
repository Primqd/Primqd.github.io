import photo_portfolio_thumbnail from "../assets/photo_portfolio_thumbnail.png";

import { Project } from "../components/Project";

export const Projects: React.FC = () => {
    return <div className="bg-primary text-white pt-[5rem] pb-[4rem] min-h-screen max-w-screen items-center flex flex-col">
        <Project
            title="Photo Portfolio"
            description={`
                My minimalistic photography portfolio website for my photography class.
                The site features a clean and responsive layout, allowing users to browse high-quality images easily.
                I learned a lot about component-based design and modern CSS utilities during this project, as this was my first time using Flowbite.
            `}
            image={photo_portfolio_thumbnail}
            link="/projects/photo-portfolio"
        />
    </div>
}