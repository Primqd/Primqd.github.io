export const Games: React.FC = () => {
    return (
        <div className="bg-primary dark:bg-dark-primary pt-[5rem] min-h-screen items-center">
            <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                height={610}
                width={1000}
                scrolling="no"
                src="src\assets\operator_game\index.html"
            />
        </div>
    );
}