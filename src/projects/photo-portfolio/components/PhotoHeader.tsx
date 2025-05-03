// a. Title (First and Last name), subtitle (Photographer), header image (must be yours)

// https://v1.tailwindcss.com/course/cropping-and-positioning-images photo manipulation :)

type PhotoHeaderProps = { photo: string } // props are good!

// TODO: convert all function components to this style
export const PhotoHeader: React.FC<PhotoHeaderProps> = (
    { photo }
) => {

    return (
        <div>
            <figure className="max-w-screen h-[20rem] relative">
                <img src={photo} className="w-full h-[20rem] absolute object-cover object-center brightness-65" alt="clay pig" />
                <h1 id="name" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white font-semibold text-5xl whitespace-nowrap">Franklin Chen</h1>
                <h1 id="name" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-7 transform text-white text-3xl">Photographer</h1>
                {/* <figcaption className="mt-2 text-sm text-center text-gray-400 italic">Picture unrelated.</figcaption> */}
            </figure>
        </div>);
}