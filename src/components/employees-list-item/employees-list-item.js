import "./employees-list-item.css";
import { Component } from "react";

export default class EmployeesListItem extends Component{
    constructor(props) {
        super(props)
        this.name = props.name;
        this.salary = props.salary;
        this.onDelete = props.onDelete;
        this.state = {
            increase: false,
            star: false
        };
    }

    increaseEmployee = () => {
        this.setState(state => ({
            increase: !this.state.increase
        }))
    }

    like = () => {
        this.setState(state => ({
            like: !this.state.like
        }))
    }

    render() {
        let className = (this.state.increase ? 'increase ' : '') + (this.state.like ? 'like ' : '') + "list-group-item d-flex justify-content-between";
        const {name, salary, onDelete} = this.props;

        return (<li className={className}>
            <span className="list-group-item-label" onClick={this.like}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.increaseEmployee}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>)
    }
}