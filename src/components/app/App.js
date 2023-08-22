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
                {id: 1, name: 'Alex Smith', salary: 1000, rise: false, increase: false},
                {id: 2, name: 'John Karter', salary: 1500, rise: false, increase: false},
                {id: 3, name: 'Erick Kaze', salary: 2000, rise: false, increase: false}
            ],
            term: '',
            filter: 'all'
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.name.indexOf(term) > -1)
    }
    
    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default: return items;
        }
    }

    onSalaryChange = (id, value) => {
        const editedValue = +value.split('').splice(0, value.length - 1).join('');

        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            salary: +editedValue
                        };
                    }
                    return item;
                })
            };
        })
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo data={data}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmloyeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryChange={this.onSalaryChange} />
                <EmployeesAddForm
                    data={data}
                    onFormSubmit={this.addItem} />
            </div>
        )
    }
}