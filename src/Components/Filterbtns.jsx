import React from 'react'
import styles from './jobcard.module.css'
import { v4 as uuid } from 'uuid'

function Filterbtns(props) {
    const { onsort, onchg, filtermtd, place } = props
    return (
        <>
            <h1>FILTERS</h1>
            <div ><label for="button">Sort By Salary:</label>
                {['asc', 'des'].map(order => (
                    <button key={uuid()} onClick={() => onsort(order)}>
                        {order}
                    </button>
                ))}
            </div>
            <div>
                <br />
                <label for="filtermtd">
                    Filter By Location:{" "}   </label>
                <select name='filtermtd' value={filtermtd} onChange={onchg}>
                    {place.map(item => (
                        <option key={uuid()} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <br />
            </div>
        </>
    )
}


export default Filterbtns;