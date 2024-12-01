import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { useState } from 'react'

function Basic() {
  const [hidden, sethidden] = useState(true)
  return (
    <motion.div style={{height:'100vh',display:'grid', placeContent:'center',gap:'0.8rem'}}>
    <motion.button layout onClick={()=>sethidden(!hidden)}>hideand show</motion.button>
    <AnimatePresence mode='popLayout'>
    {hidden?<><motion.div style={{height:'150px',width:'150px', backgroundColor:'black'}} initial={{rotate:'0deg',
      scale:0,
      y:0
    }} animate={{rotate:'300deg',
      scale:1,
      y:[0,-150,50,-200]
    }} transition={{
      duration:2,
      delay:1,
      times:[0,0.5,0.8],
      ease:'backInOut' }} exit={{
        rotate:'0deg',
        scale:0,
        y:0
      }}>
    </motion.div></>:''}
    </AnimatePresence >
  </motion.div>
  )
}

export default Basic