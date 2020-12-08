import React from 'react'
import styles from './jobcard.module.css'
import styled from 'styled-components'
import { Logo } from './Logo'

const FlexItems = styled.div`
flex:1;align-self: center;
`
const Button = styled.button`
width:30px;
height:30px;
border-radius:50%;
background: ${props => props.remote === "Remote" ? "green" : "red"};`

export const JobDetailsCard = ({ data }) => {
    const {
        title,
        salary,
        location,
        companyName,
        remote,
        logo,
        date,
    } = data

    {/*CARD DISPLAY COMPONENT*/ }
    return (
        <div className={styles.cardwrapper}>
            <FlexItems style={{ alignSelf: "center" }}>
                <Logo value={logo} />
            </FlexItems>
            <FlexItems style={{ flex: 1.5 }}>
                <span>CompanyName</span>
                <p>{companyName}</p>
            </FlexItems>
            <FlexItems style={{ flex: 1.5 }}>
                <span>Title</span>
                <p>{title}</p>
            </FlexItems>
            <FlexItems>
                <span>Salary</span>
                <p>{salary}</p>
            </FlexItems>
            <FlexItems>
                <span>Location</span>
                <p>{location}</p>
            </FlexItems>
            <FlexItems style={{ flex: 0.5 }}>
                <span>Remote</span>
            </FlexItems>
            <FlexItems style={{ alignSelf: "center", flex: 0.5 }}>
                <Button remote={`${remote}`} ></Button>
            </FlexItems>
        </div >
    )
}

