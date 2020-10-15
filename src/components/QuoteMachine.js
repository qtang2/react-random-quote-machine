import Typography  from '@material-ui/core/Typography'
import Card  from '@material-ui/core/Card'
import CardActions  from '@material-ui/core/CardActions'
import CardContent  from '@material-ui/core/CardContent'
import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

function QuoteMachine({selectedQuote,assignNewQuoteIndex,textColor}) {
    return (
        <Card style={{color: textColor,fontSize:'50px'}}>
        <CardContent>
            <Typography id="text" style={{fontSize:'40px',transitionDuration:'1s',transitionTimingFunction:'linear'}}>
            { selectedQuote.quote}  
            </Typography>
            <Typography id="authorText" style={{fontSize:'20px',display:'flex',justifyContent:'flex-end'}}>
             <span id="author" style={{transitionDuration:'1s',transitionTimingFunction:'linear'}}>---{selectedQuote.author}</span>
            </Typography>
        </CardContent>
        
        <CardActions>
        <IconButton
        id="tweet-quote"
            target = "_blank"
           
            href={ encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`) }
        >
            <FontAwesomeIcon icon={faTwitter} size="md" >

            </FontAwesomeIcon>
        </IconButton>
        <Button size="small" onClick={assignNewQuoteIndex} id="new-quote" style={{color: textColor}}>New Quote</Button>
        
        </CardActions>
         
       
        </Card>
    )
}

export default QuoteMachine
