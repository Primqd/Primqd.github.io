const ASPECT_RATIO = 9 / 16; // y / x
const WIDTH_PERCENT = 0.5
let gameWidth = screen.availWidth * WIDTH_PERCENT;
let gameHeight = gameWidth * ASPECT_RATIO;

// TODO: switch to web host and host game locally, add mobile compat
export const Games: React.FC = () => {
    return (
        <div className="bg-primary dark:bg-dark-primary pt-[5rem] min-h-screen items-center">
            <div // loading text
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-default dark:text-dark-text-default`}
            >
                Loading Game...
            </div>
            <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width={gameWidth} // 80% of screen width
                height={gameHeight} // 80% of screen width attuned to aspect ratio 16:9
                src="https://play.unity.com/api/v1/games/game/974f96db-7cac-40e1-bdab-fc4ad5b2095a/build/latest/frame"
            />
            <div // description text
                className="absolute text-text-highlight dark:text-dark-text-highlight bottom-15 inset-x-0 left-1/2 -translate-x-1/2 text-center"
            >
                The AWPerator
            </div>
            <div // description text
                className="absolute text-text-default dark:text-dark-text-default bottom-10 inset-x-0 left-1/2 -translate-x-1/2 text-center"
            >
                Small game made by yours truly for WANIC Digipen 2025. currently hosted on Unity Play
            </div>
        </div>
    );
}