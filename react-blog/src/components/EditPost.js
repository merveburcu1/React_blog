import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { DialogActions, DialogContentText, DialogTitle, MenuItem, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import FileBase64 from "react-file-base64"
import { addPost, updatePost } from '../store/Slices/postSlice';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const tags = [
    "Art",
    "Science",
    "Technology",
    "Cinema",
    "Design",
    "Food",
  ];

export default function EditPost({handleClose,open,post}) {
    
    const { handleSubmit, control,reset,watch}=useForm({
      defaultValues:post,
    });

    const dispatch =useDispatch();

    const [file,setFile]=React.useState(post?.file);

    const onSubmit =(data)=>{
        const updatedPost={
           id:post.id,
           ...data,
           file:file
         };
         dispatch(updatePost(updatedPost));
         reset();
         setFile(null);
         handleClose();
     }


  return (
    <div>
      
      <Modal
        open={open}
        handleClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <DialogTitle>Güncelleme Ekranı</DialogTitle>            
        <form noValidate autoComplete='off'  onSubmit={handleSubmit(onSubmit)} style={{margin:12}}
         ><Controller 
         control={control}
         name='title'
         label="başlık"
         render={({field})=> <TextField sx={{margin:1}}
         {...field}
         id='title'
         name='title'
         variant='outlined'
         size='small'
         fullWidth
         />}
         />
         <Controller
            control={control}
            name='subtitle'
            render={({field})=><TextField sx={{margin:1}}
            {...field}
            id='subtitle'
            label='Alt Başlık'
            name='subtitle'
            variant='outlined'
            size='small'      
            fullWidth
            />}
            />
             <Controller
            control={control}
            name='tag'
            render={({field})=><TextField sx={{margin:1}}
            {...field}
            label='Tag'
            variant='outlined'
            size='small' 
            fullWidth
            select
            >
             {tags.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
            </TextField>}
            />  
            <Controller  
            control={control}
            name='content'
            render={({field})=><TextField sx={{margin:1}}
            {...field}
            id='content'
            label='içerik'
            name='content'
            multiline
            rows={4}
            variant='outlined'
            size='small' 
            fullWidth
            />}
            />

            <Controller
            control={control}
            name='file'
            render={({field:{value, onChange}})=><FileBase64  multiple={false} onDone={({base64})=> onChange(base64)}/>}
            />
            <img src={watch().file ?? ""} alt='avatar' width={40} height={40} />            
         
         
             <Button color='inherit' variant='outlined' onClick={handleClose} style={{margin:10}} >VAZGEÇ</Button>
             <Button color='primary' type='submit' variant='outlined' onSubmit={onsubmit} >KAYDET </Button>
         
         </form>
        </Box>
      </Modal>
    </div>
  );
}