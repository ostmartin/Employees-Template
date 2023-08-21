import './app-filter.css';

export default function AppFilter(props) {
    const buttonsData = [
        {name: 'all', lable: 'Усі працівники'},
        {name: 'rise', lable: 'На підвищення'},
        {name: 'moreThen1000', lable: 'З/п більше 1000$'}
    ];

    const buttons = buttonsData.map(({name, lable}) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button className={`btn ${clazz}`} type="button" key={name} onClick={() => props.onFilterSelect(name)}>
                {lable}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}