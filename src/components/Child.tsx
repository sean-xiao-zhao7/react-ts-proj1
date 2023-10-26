interface ChildProps {
    onClickHandler?: () => void;
    children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({ onClickHandler, children }) => {
    return (
        <>
            {children}
            {onClickHandler ? (
                <button onClick={onClickHandler}>Click this</button>
            ) : (
                <>Nothing to do</>
            )}
        </>
    );
};
