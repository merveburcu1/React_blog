import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import { Container } from '@mui/material';
import { useState } from 'react';
import CommentList from './CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../store/Slices/commentSlice';

export default function TextareaValidator({postid}) {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const [comment,setComment]=useState("");

  const userDesc=useSelector((state)=>state.user.userdesc);
  

  const onChangeHandler=(e)=>{
    setComment(e.target.value);
  }

  const oncClickHandler=()=>{
    dispatch(addComment({id:0, userDesc, desc:comment, createTime:new Date(), postid:postid}))
  }

  return (
    <FormControl>
      <FormLabel>YORUMLAR</FormLabel  >
      <Textarea
        placeholder="Bir Şeyler Yazın..."
        minRows={3}
        value={comment}
        onChange={onChangeHandler}
        endDecorator={
          <Box
            sx={{
            
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}

            
            
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button sx={{ ml: 'auto' }} onClick={oncClickHandler} >Gönder</Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
        <Container
        sx={{
            display: 'flex',
            gap: 'var(--Textarea-paddingBlock)',
            pt: 'var(--Textarea-paddingBlock)',
            borderTop: '1px solid',
            borderColor: 'divider',
            flex: 'auto',
          }}
        >

        </Container>
        <CommentList postid={postid} />
        
      

      
    </FormControl>
    
  );
}