export const Games: React.FC = () => {
    return (
        <div className="bg-primary dark:bg-dark-primary pt-[5rem] min-h-screen items-center">
            <iframe
                className=""
                height={610}
                width={950}
                scrolling="no"
                src="src\assets\operator_game\index.html"
            />
        </div>
    );
}