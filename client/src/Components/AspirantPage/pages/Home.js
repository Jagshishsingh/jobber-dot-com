import React,{useEffect} from 'react'
import { createUseStyles } from 'react-jss'
import { Container, Row } from 'react-bootstrap'
import { NavBar, SideNavBar } from '../../common'
import axios from 'axios'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;
const userName = "aaa";
const useStyles = createUseStyles({
    body: {
        marginLeft: '20%'
    }
})


function Home() {
    const styles = useStyles();
    var data = {
        name:"Jagshish",
        school:"aa"
    }

    useEffect(() => {
        axios({
            method:"get",
            url:`${SERVER_BASE_ADDRESS}/aspirant/info/${userName}`
        }).then((error,response)=>{
            if (error){
                return;
            }
            data = response
        })
        
    }, [])

    return (
        <div>
            <NavBar />
            <SideNavBar />
            <div className={styles.body}>
                <h1 >HOME</h1>
                {Object.keys(data).map(key=>(
                    <h1>{key}: {data[key]}</h1>)
                )}
            </div>


        </div>
    )
}

export default Home
