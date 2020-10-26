import React from 'react'

import { JobAdd, JobsPage, NavBar, SideNavBar } from '../../common'

function Jobs() {
    var filters ={
        companyName:"facebook",// current companyName 
    } 
    return (
        <div>
            <NavBar/>
            <SideNavBar></SideNavBar>
            <JobsPage filters={filters} companySide={true}/>
        </div>
    )
}

export default Jobs
