import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

export default function EmloyeesList({data}) {
    return (
        <ul className="app-list list-group">
            {data.map(employee => {
                        const {id, ...props} = employee;
                        return <EmployeesListItem 
                            key={id}
                            {...props}
                        />
                    }   
                )
            }
        </ul>
    )
}