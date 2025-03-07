type ProjectProps = {
    title : string,
    description : string,
    image : string,
}

function Project({title, description, image} : ProjectProps) {
    return <div className="justify-center items-center gap-[30vw] px-[8vw]">
        {title}
    </div>

}

function Projects() {
    return <div className="bg-neutral-800 text-white pt-[8vh] h-[100vh]">
        <Project title="hello" description="test" image="test" />
    </div>
}

export default Projects;