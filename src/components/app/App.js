import { useState, useEffect, useReducer } from "react";
import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyeesList from "../employees-list/employees-list";
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {id: 1, name: 'Alex Smith', salary: 1000, rise: true, increase: false},
                {id: 2, name: 'John Karter', salary: 1500, rise: false, increase: true},
                {id: 3, name: 'Erick Kaze', salary: 2000, rise: false, increase: false}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id )
            }
        })
    }

    addItem = (event, newItem) => {
        event.preventDefault();

        if(newItem.name === '' || newItem.salary <= 0) return

        this.setState(({data}) => {
            return {
                data: [...data, {
                    ...newItem,
                    id: crypto.randomUUID()
                }]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            const newData = data.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        [prop]: !item[prop]
                    };
                } else {
                    return item;
                }
            });

            return {
                data: newData
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo data={this.state.data}/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmloyeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm
                    data={this.state.data}
                    onFormSubmit={this.addItem} />
            </div>
        )
    }
}