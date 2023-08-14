import './employees-add-form.css';

export default function EmployeesAddForm() {
    return (
        <div className="app-add-form">
            <h3>Додати нового працівника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Ім'я працівника" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}