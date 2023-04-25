import { Box, Card, Container, FormLabel, Typography } from '@mui/material'
import moment from 'moment/moment'
import React from 'react'
import { useSelector } from 'react-redux'

const CommentList = ({postid}) => {
    const comments=useSelector((state)=>state.comments.comment)?.filter(x => x.postid === postid);

  return (
    <Container style={{backgroundColor:'white',minWidth:300, 
    fontWeight:"normal",
    fontStyle: 'initial',borderRadius:8,}}>
        {comments && comments.map((text)=>
        <Card>
       <div className="info" >
            <Typography variant="h6" >{text.userDesc}</Typography>
            <Typography variant="body2">{moment(text.createTime).format("DD.MM.YYYY")}</Typography>
            <Typography >{text.desc}</Typography> 
            
          </div>
        
        </Card>
        )}
    </Container>
  )
}

export default CommentList
