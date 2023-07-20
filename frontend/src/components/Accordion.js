import React, { useState }  from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';

const Accordion = ({key,title,text }) => {
    const [clicked, setClicked] = useState(false)
    function showFaq() {
        setClicked(!clicked)
    }
    return (
        <div className=''>
        <div className='max-w-4xl w-4xl min-w-4xl mx-auto'>
            <div className='border-t-[1px] border-white/30 ' />
            <div className='flex place-content-between items-center py-1'>
                                        <h1 className='font-bold text-white'>{title}</h1>
                                        <IconButton style={{color:'#e50913'}} onClick={showFaq}>
                                            { clicked ? <ControlPointIcon /> : <RemoveCircleOutlineIcon /> }
                                        </IconButton>
                                    </div>

        </div>
          { clicked &&  <p className='max-w-2xl text-white/40'>{text}</p> }  
        </div>
    )
}

export default Accordion
