import { useActions } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
    forceVisible?: boolean;
    previousCellId: string | null;
}
const AddCell: React.FC<AddCellProps> = ({forceVisible, previousCellId: nextCellId}) => {
    const { insertCellAfter } = useActions();

    return <div className={`add-cell ${forceVisible && 'force-visible'}`}>
        <div className="add-buttons">
            <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'code')}>
                <span className="icon is-small">
                    <i className="fas fa-plus" />
                </span>
                <span>Code</span>
            </button>
            <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'text')}>
                <span className="icon is-small">
                    <i className="fas fa-plus" />
                </span>
                <span>Text</span>
            </button>
        </div>
        
        <div className="divider"></div>
    </div>
}

export default AddCell;