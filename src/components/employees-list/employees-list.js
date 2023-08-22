import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

export default function EmloyeesList({data, onDelete, onToggleProp, onSalaryChange}) {
    return (
        <ul className="app-list list-group">
            {data.map(employee => {
                        const {id, ...props} = employee;
                        return <EmployeesListItem 
                            key={id}
                            {...props}
                            onDelete={() => onDelete(id)}
                            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                            onSalaryChange={(e) => onSalaryChange(id, e.currentTarget.value)}
                        />
                    }   
                )
            }
        </ul>
    )
}