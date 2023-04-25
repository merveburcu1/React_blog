import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { Link } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function Post({title,subtitle,content,file, userdesc, createTime,tag,id}) {

  // React.useEffect(() => {
  //   async function postJSON(data) {
  //     try {
  //       const response = await fetch("http://localhost:5000/posts", {
  //         method: "POST", // or 'PUT'
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });
    
  //       const result = await response.json();
  //       console.log("Success:", result);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }
    
  //   const data = { createdAt:new Date(), title:"Title", subtitle:"Subtitle", content:"Content" };
  //   postJSON(data);
  // },[])

  React.useEffect(() => {
    async function postJSON() {
      try {
        const response = await fetch("http://localhost:5000/posts");
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    const data = { createdAt:new Date(), title:"Title", subtitle:"Subtitle", content:"Content" };
    postJSON();
  },[])

 const unique_id = uuid();
 const navigate=useNavigate();
 
  return (
   
    <div >
    <Card sx={{maxWidth:374, position:"relative",marginTop:5, direction:"flex", borderRadius:5,alignContent:"stretch"}}
    
      >
      <CardMedia
        sx={{height: 0,
          paddingTop: "56.25%", // 16:9
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
  
        }}
        image={file}
        title="green iguana"
      />
      <div style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",}}>
        <Typography variant="h6">{userdesc}</Typography>
        <Typography variant="body2">
        {moment(createTime).format('DD-MM-YYYY HH:mm')}
        </Typography>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div"  >
          {title}
        </Typography>
        <Typography component="div" >
          {subtitle}
        </Typography>
        <Typography component="div" >
          <Link>{tag}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content?.substring(0,150)+ "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='primary'>Share</Button>
        <Button size="small" onClick={()=>navigate(`/blog/${id}`)} >Learn More</Button>
      </CardActions>
    </Card>
    </div>
    
    
  );
}
