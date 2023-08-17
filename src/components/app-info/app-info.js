import './app-info.css';

export default function AppInfo({ data }) {
    const increase = data.filter(item => item.increase)
    return (
        <div className="app-info">
            <h1>Облік працівників компанії N</h1>
            <h2>Загальна кількість працівників: {data.length}</h2>
            <h3>Премію отримають: {increase.length}</h3>
        </div>
    )
}