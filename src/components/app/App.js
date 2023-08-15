import { useState, useEffect, useReducer } from "react";
import './App.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyeesList from "../employees-list/employees-list";
import EmployeesAddForm from '../employees-add-form/employees-add-form';

export default function App() {
    const data = [
        {
            id: 1,
            name: 'Alex',
            surname: 'Smith',
            salary: 1000,
            increase: true
        },
        {
            id: 2,
            name: 'John',
            surname: 'Karter',
            salary: 1500,
            increase: false
        },
        {
            id: 3,
            name: 'Erick',
            surname: 'Kaze',
            salary: 2000,
            increase: true
        }
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmloyeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}