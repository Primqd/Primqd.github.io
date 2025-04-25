// a. Title (First and Last name), subtitle (Photographer), header image (must be yours)
// Artist bio/statement: 90 word min. - type in Microsoft Word to check the word count * (see resources for how to write artist statement

// https://v1.tailwindcss.com/course/cropping-and-positioning-images photo manipulation :)

type PhotoHeaderProps = { photo: string } // props are good!

// TODO: convert all function components to this style
export const PhotoHeader: React.FC<PhotoHeaderProps> = (
    { photo }
) => {

    return (
        <div>
            <figure className="max-w-screen h-[20rem]">
                <img src={photo} className="w-full h-[20rem] object-cover object-top" alt="clay pig"></img>
                <figcaption className="mt-2 text-sm text-center text-gray-400 italic">Picture unrelated.</figcaption>
            </figure>
        </div>);

}


export default PhotoHeader