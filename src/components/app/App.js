import { useState, useEffect, useReducer } from "react";
import './App.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyeesList from "../employees-list/employees-list";
import EmployeesAddForm from '../employees-add-form/employees-add-form';

export default function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel />
            <AppFilter />
        </div>

        <EmloyeesList />
        <EmployeesAddForm />
    </div>
  )
}