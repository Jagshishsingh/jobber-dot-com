import React from 'react';
import { Grid, IconButton, TextField, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EmailIcon from '@material-ui/icons/Email';
import * as Scroll from 'react-scroll';
import './Footer.css';
function Footer() {
    let scroll = Scroll.animateScroll;
    return (
        <footer>
        <Grid item container direction="row" spacing={1} className="grid">
            <Grid item xs={6} >
                <h4>Team Advet-Shambhav,Shreya,Jagshish</h4>
            </Grid>

            <Grid item xs={3} >
                <h5>123.456.7890</h5>
            </Grid>

            <Grid item xs={3} >
                <p style={{'fontSize':'1rem'}}>CONTACT</p>
            </Grid>

            <Grid item xs={4} >
                <IconButton onClick={() => scroll.scrollToTop()} aria-label="go-to-sign-in" style={{ 'background-color': 'black', 'color': 'white' }} >
                    <ArrowUpwardIcon />
                </IconButton>
            </Grid>

            <Grid item xs={8} >
                <form noValidate autoComplete="off" className="newsLetter">

                    <TextField size="small"  label="Email" variant="outlined" style={{'color':'white'}}/>
                    <Button variant="contained" color="primary" 
                        startIcon={<EmailIcon />}>
                        Subscribe To Newsletter
                     </Button>
                </form>
            </Grid>


        </Grid>
        </footer>

    )
}

export default Footer
