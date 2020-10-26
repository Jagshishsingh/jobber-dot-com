import React from 'react'

import { JobsPage, NavBar, SideNavBar } from '../../common'

function Jobs() {
    var filters ={
        companyName:"facebook",// current companyName 
    } 
    return (
        <div>
            <NavBar/>
            <SideNavBar></SideNavBar>
            <JobsPage filters={filters}/>
        </div>
    )
}

export default Jobs
