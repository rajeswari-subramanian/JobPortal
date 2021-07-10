import React from 'react'
export const JobContext = React.createContext()

let place = [
    { name: "All" },
    { name: "Bangalore" },
    { name: "Chennai" },
    { name: "Delhi" }
]

const initState = {
    title: "",
    salary: "",
    companyName: "",
    location: "",
    remote: false,
    date: "",
}

export default class JobContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initState,
            show: false,
            data: [],
            logo: React.createRef(),
            sortmtd: null,
            filtermtd: "All"
        };
    }

    //SORT BY SALARY
    handleSort = (order) => {
        this.setState({
            sortmtd: order
        })
    }

    //FILTER BY LOCATION
    handleFilter = (location) => {
        this.setState({
            filtermtd: location
        })
    }

    //FORM INPUT IS STORED IN COMPONENT STATE
    handleChange = (event) => {
        let val
        if (event.target.type === "checkbox") {
            val = event.target.checked
        } else val = event.target.value

        this.setState({ [event.target.name]: val });
    }

    //ON FORM SUBMIT DATA OF OBJECT IS CREATED
    handleSubmit = (e) => {
        e.preventDefault();
        const { title, salary, companyName, location, remote, logo, data, date, show } = this.state
        let val = remote === true ? "Remote" : "NotRemote"
        let obj = {
            title: title,
            salary: salary,
            companyName: companyName,
            location: location,
            remote: val,
            logo: logo.current.files[0] ? logo.current.files[0].name ? logo.current.files[0].name : "" : "",
            date: date,
        }
        this.setState({
            data: [...data, obj],
            show: true
        })
        this.reset()
    }

    //RESET FORM AFTER SUBMISSION
    reset = () => {
        this.setState({
            ...initState
        })
    }

    render() {
        const { title, salary, companyName, location, remote, logo, date, filtermtd, sortmtd, data, show } = this.state
        const { handleChange, handleSort, handleSubmit, handleFilter } = this
        return (
            <JobContext.Provider value={{place, title, salary, companyName, location, remote, logo, date, filtermtd, sortmtd, data, show, handleChange, handleSort, handleSubmit, handleFilter }}>{this.props.children}</JobContext.Provider>
        )
    }
}