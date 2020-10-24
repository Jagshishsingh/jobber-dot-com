import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { NavBar } from '../common'
import { Job } from './common'
import SideFilter from './pages/SideFilter'
const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS

const useStyles = createUseStyles({
    body: {
        marginLeft: '20%',
        backgroundColor: 'pink',
        padding: '5%'
    }

})

function JobsPage() {
    const styles = useStyles();
    var data = [{
        title: "Web",
        salary: 5000,
        companyName:"facebook"
    },
    {
        title: "App",
        salary: 7000,
        companyName:"facebook"

    },
    ]

    useEffect(() => {
        axios({
            method: "post",
            url: `${SERVER_BASE_ADDRESS}/jobs`,
        }).then((err, res) => {
            if (err) {
                return;
            }
            data = res;
        })

    }, [])
    return (
        <div>
            <NavBar />
            <SideFilter />
            <Container className={styles.body}>
                {
                    data.map(item => {
                        return <Job data={item} />
                    })
                }
            </Container>

        </div>
    )
}

export default JobsPage
