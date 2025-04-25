// a. Title (First and Last name), subtitle (Photographer), header image (must be yours)
// Artist bio/statement: 90 word min. - type in Microsoft Word to check the word count * (see resources for how to write artist statement

type PhotoHeaderProps = { photo: string } // props are good!

// TODO: convert all function components to this style
export const PhotoHeader: React.FC<PhotoHeaderProps> = (
    { photo }
) => {

    return (
        <div>
            <h1>Header</h1>
            <h2>{photo}</h2>
        </div>);

}


export default PhotoHeader