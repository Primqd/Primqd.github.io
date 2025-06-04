// Artist bio/statement: 90 word min. - type in Microsoft Word to check the word count * (see resources for how to write artist statement
/*
Franklin Chen is a high school sophomore and practicing photographer in Seattle, WA.
Growing up surrounded by forests and art, he enjoys taking photos of nature and abstract ideas.
Over the last three years, he has honed his photography skills the last three years as a yearbook photographer and hobbyist photographer.
Franklin specializes in digital photography and digital design.
*/

export const PhotoBio: React.FC = () => {
    return (
        <div id="photo-bio" className="max-w-screen min-h-[22rem] bg-neutral-800 flex flex-col text-center items-center justify-center">
            <h2 className="pt-4 font-semibold text-5xl text-white whitespace-nowrap">About the Artist</h2>
            <p className="py-4 max-w-[60%] text-white text-xl/10">
                Franklin Chen is a high school sophomore and practicing photographer in Seattle, WA.
                Growing up surrounded by forests and art, he enjoys taking photos of nature and abstract ideas.
                Over the last three years, he has honed his photography skills as a yearbook photographer and hobbyist photographer.
                Franklin specializes in digital photography and digital design.
            </p>
        </div>
    );
};
