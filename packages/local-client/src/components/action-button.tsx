
interface ActionButtonProps {
    className: string;
    onClick:(event: React.MouseEvent<HTMLButtonElement>) => void
}
const ActionButton: React.FC<ActionButtonProps> = ({ onClick, className }) => {
    return (
    <button className="button is-primary is-small" onClick={onClick}>
        <span className="icon">
            <i className={"fas " + className} />
        </span>
    </button>
    );
}

export default ActionButton;