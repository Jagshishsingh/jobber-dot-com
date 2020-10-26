import React from 'react'
import { createUseStyles } from 'react-jss';



const useStyles = createUseStyles({
    root: {
        height: '100%',
        width: '20%',
        background: 'red',
        display: 'flex',
        position: 'absolute',
    }
})

function JobFilter() {

    const styles = useStyles();

    return (
        <div className={styles.root}>
            <h1>FILTERS</h1>            
        </div>
    )
}

export default JobFilter
