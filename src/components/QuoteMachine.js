import Typography  from '@material-ui/core/Typography'
import Card  from '@material-ui/core/Card'
import CardActions  from '@material-ui/core/CardActions'
import CardContent  from '@material-ui/core/CardContent'
import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

function QuoteMachine({selectedQuote,assignNewQuoteIndex}) {
    return (
        <Card>
        <CardContent>
            <Typography id="text">
            { selectedQuote.quote}  -- <span id="author">{selectedQuote.author}</span>
            </Typography>
        </CardContent>
        
        <CardActions>
        <Button size="small" onClick={assignNewQuoteIndex} id="new-quote">New Quote</Button>
        <IconButton
        id="tweet-quote"
            target = "_blank"
            href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`}
        >
            <FontAwesomeIcon icon={faTwitter} size="md" >

            </FontAwesomeIcon>
        </IconButton>
        </CardActions>
         
       
        </Card>
    )
}

export default QuoteMachine
