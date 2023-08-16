import './employees-add-form.css';
import { Component } from 'react';

export default class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;

        return (<div className="app-add-form">
                    <h3>Додати нового працівника</h3>
                    <form
                        onSubmit={(event) => this.props.onFormSubmit(event, this.state)}
                        className="add-form d-flex">
                        <input type="text"
                            className="form-control new-post-label"
                            placeholder="Ім'я працівника"
                            onChange={this.onValueChange}
                            value={name}
                            name='name'
                            required />
                        <input type="number"
                            className="form-control new-post-label"
                            placeholder="З/П в $?"
                            onChange={this.onValueChange}
                            value={salary}
                            name='salary'
                            required />

                        <button type="submit"
                                className="btn btn-outline-light">
                            Добавить
                        </button>
                    </form>
                </div>)
    }
}