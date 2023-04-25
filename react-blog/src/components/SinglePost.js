import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import moment from "moment";
import EditPost from "./EditPost";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import {deletePost} from "../store/Slices/postSlice"
import kullaniciBulunamadi from "../images/kullaniciBulunamadi.png"
import { Box, Card, Container, Typography } from "@mui/material";
import Comments from "./Comments";

const SinglePost = ({tag,title,subtitle,content,file}) => {

  const dispatch = useDispatch();
  const {unique_id:id} = useParams();
  const [open, setOpen] = useState(false);

  const postList=useSelector((state)=>state.postList.list)
  
  const singlePost=postList.find((item)=>item.id===id)
  console.log(singlePost,postList)
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate=useNavigate()
  
  const handleDelete = () => {
    dispatch(deletePost(id));
    navigate("/blog")
  };

  return (
    <div>
      <Header/>
    <div className="single" style={{}}>
       <div className="content">
        <img src={ singlePost && singlePost.file} alt="" style={{borderRadius:20}} />
        <div className="user" >
          <img src={kullaniciBulunamadi} alt=""/>
          <div className="info">
            <Typography variant="h6" >{singlePost && singlePost.userdesc}</Typography>
            <Typography variant="body2">{moment(singlePost && singlePost.createTime).format("DD.MM.YYYY")}</Typography>
          </div>
          <div className="edit">
            <Link onClick={handleOpen}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt=""  onClick={handleDelete}/>
          </div>
          <Card style={{padding:5, backgroundColor: "#e7b9df"}}>
          <Typography component="div" >
          <Link style={{textDecoration:"none",
           color:"inherit"}} >{singlePost && singlePost.tag}</Link>
        </Typography>
        </Card>
        </div>
        <Container>
        <Typography>{singlePost && singlePost.title}</Typography> 
        <Typography>{singlePost && singlePost.subtitle}</Typography> 
        <Typography variant="body2" color="text.secondary">
        {singlePost && singlePost.content}  
        </Typography> 
        <Box sx={{  borderTop: 1 ,margin:5}} >
        <Comments postid={singlePost.id}/></Box>
        </Container>
      
      </div> 
      
      <EditPost open={open} handleClose={handleClose} post={singlePost} />
      


    </div>
    
    </div>
  );
};

export default SinglePost;
