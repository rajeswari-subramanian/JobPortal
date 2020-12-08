import React from 'react'
import styles from './jobcard.module.css'
import styled from 'styled-components'
import { JobDetailsCard } from './JobDetailsCard'
import { JobContext } from '../Context/JobContextProvider'
import Filterbtns from './Filterbtns'
import { v4 as uuid } from 'uuid'

const JobWrapper = styled.div`
display:flex;
padding:10px;
flex-wrap:wrap;
width:80%;
margin:auto
`
const FilterWraper = styled.div`
background-color: #6E9AA5;
border:2px solid black;
margin:10px;
flex:1
`
const JobCardWrapper = styled.div`
flex:100%;
`
class JobDetails extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { place, title, salary, companyName, location, remote, logo, date, filtermtd, sortmtd, data, show, handleChange, handleSort, handleSubmit, handleFilter } = this.context
        return (
            <JobWrapper>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <h1>ADD A NEW JOB</h1>
                        <label for="name">
                            Title:{" "} </label>
                        <input type='text' name='title' onChange={(e) => handleChange(e)} value={title} placeholder='title' />
                        <br />
                        <label for="salary">
                            Salary:{" "} </label>
                        <input type='text' name='salary' onChange={(e) => handleChange(e)} value={salary} placeholder='salary' />
                        <br />
                        <label for="companyName">
                            CompanyName:{" "} </label>
                        <input type='text' name='companyName' onChange={(e) => handleChange(e)} value={companyName} placeholder='companyname' />
                        <br />
                        <label for="location">
                            Location:{" "}   </label>
                        <select name='location' value={location} onChange={handleChange}>
                            <option>Select Location</option>
                            {place.map(item => (
                                <option key={uuid()} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                        <br />
                        <label style={{ textAlign: "left" }} >
                            Remote: {" "}  </label>
                        <input type="checkbox" checked={remote} name='remote' value={remote} onChange={(e) => handleChange(e)} />
                        <br />
                        <label for="logo">
                            CompanyLogo:{" "} </label>
                        <input type='file' name='logo' ref={logo} placeholder='logo' />
                        <br />
                        <label for="date">
                            Date:{" "} </label>
                        <input type='text' name='date' onChange={(e) => handleChange(e)} value={date} placeholder='date' />
                        <br />         <br />
                        <input type="submit" value="Submit" />  <br />  <br />
                    </div>
                </form>
                {/*------------FILTER COMPONENT-------------*/}
                <FilterWraper>
                    <Filterbtns onsort={handleSort} onchg={handleChange} filtermtd={filtermtd} place={place} />
                </FilterWraper>
                {/*----------CONDITIONAL RENDERING----------*/}
                {show &&
                    <JobCardWrapper>
                        {data && data
                            ?.filter(({ location }) => {
                                if (filtermtd === "" || filtermtd === "All") return true
                                else if (filtermtd === `${location}`) return true
                                else return
                            })
                            .sort((a, b) => {
                                if (sortmtd === null) {
                                    return true
                                } else if (sortmtd === "asc") {
                                    return a.salary - b.salary
                                }
                                else return b.salary - a.salary
                            })
                            .map(item => (
                                <JobDetailsCard data={item} key={item.id} />
                            ))}
                    </JobCardWrapper>}
            </JobWrapper>
        )
    }
}

JobDetails.contextType = JobContext;
export default JobDetails
