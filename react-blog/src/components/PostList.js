import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import {  Button, Grid } from '@mui/material'
import gridFour from "../images/grid_four.svg";
import gridThree from "../images/grid_three.svg";
import { useLocation } from 'react-router-dom';



const PostList = () => {
const search=useLocation().search
console.log(search,"search")
  const [layout, setLayout] = useState("gridThree");

  const calculateMd = () => {
    return layout === "gridThree" ? 4 : 3;
  };

  console.log(search.split('=')[1],"splited")
 
  const postList=useSelector((state)=>state.postList.list).filter((x) => search !== "" ? x.tag === search.split('=')[1] : x)
  console.log(postList,"burası post")
  return (
    <>
        
        {/* Layout Shifter */}
        <div sx={{float: "right",margin:2}}>
        <Button
          variant="text"
          size="small"
          onClick={() => setLayout("gridThree")}
        >
          <img
            src={gridThree}
            style={{ background: layout === "gridThree" ? "#ccc" : "" }}
            alt="Three Columns Grid Icon"
          />
        </Button>
        <Button
          variant="text"
          size="small"
          onClick={() => setLayout("gridFour")}
        >
          <img
            src={gridFour}
            style={{ background: layout === "gridFour" ? "#ccc" : "" }}
            alt="Four Columns Grid Icon"
          />
        </Button>
      </div>
    
    <div
     style={{display:"flex", flexDirection:"row", margin:15 , alignSelf:'center',  }}
    className="">
      <div  style={{width:"100%"}}>
      <Grid container spacing={2} alignContent="stretch" sx={{border:'100%'}}>
      {postList &&  postList.map((post,index)=>(
        <Grid item key={post?.index} xs={12} md={calculateMd()}>
        <Post
        key={index}
        id={post.id}
        cat={post.cat}
        title={post.title}
        subtitle={post.subtitle}
        content={post.content}
        file={post.file}
        userdesc={post.userdesc}
        createTime={post.createTime}
        tag={post.tag}
        />
        </Grid>
      ))}
      </Grid>
      

    </div>
    </div>
    </>
  )
}

export default PostList
