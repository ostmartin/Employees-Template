import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;
    let className = (increase ? 'increase ' : '') + (rise ? 'like ' : '') + "list-group-item d-flex justify-content-between";
    
    return (<li className={className}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} disabled />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
    )
}

export default EmployeesListItem;