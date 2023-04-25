import  React, { useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Controller, useForm } from 'react-hook-form';
import FileBase64 from "react-file-base64"
import { Checkbox, DialogActions, DialogContentText, DialogTitle,  MenuItem  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { addPost } from '../store/Slices/postSlice';
import moment from 'moment/moment';

import { v4 as uuid } from 'uuid';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',  //herhangi bir element verdiğinde ortaya koyar
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  margin:2
  
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  "art",
  "science",
  "technology",
  "cinema",
  "design",
  "food",
];


export default function BasicModal({open, handleClose}) {
  const userDesc=useSelector((state)=>state.user.userdesc);

  const dispatch =useDispatch();

    const [file,setFile]=useState(null);

    const { handleSubmit, control,reset,watch}=useForm();
    
   
  const onSubmit =(data)=>{
    //Dispatch create post action
    console.log(data,"data")
    dispatch(addPost({...data,
      userdesc:userDesc,
    createTime:new Date(),id:uuid()
    })) 
    clearForm();
}
  const clearForm=()=>{
    reset();
    setFile(null);
    handleClose();
}

  return (     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >        
        <Box sx={style}>
        <DialogTitle>Yeni Yazı Oluştur</DialogTitle>
        <DialogContentText>Yeni bir yazı eklemek için formu doldurun</DialogContentText>    
            
        <form noValidate autoComplete='off'  onSubmit={handleSubmit(onSubmit)} style={{margin:12}}
         ><Controller 
         control={control}
         name='title'
         render={({field})=> <TextField sx={{margin:1}}
         {...field}
         id='title'
         label='Başlık'
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
         
         <DialogActions>
             <Button color='inherit' onClick={clearForm} >VAZGEÇ</Button>
             <Button color='primary' type='submit' variant='outlined' onClick={handleSubmit}>YAYINLA </Button>
         </DialogActions>
         </form>
        </Box>
      </Modal>
    
  );
}
