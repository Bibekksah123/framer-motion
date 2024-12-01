import React from 'react'
import {motion,MotionConfig} from'framer-motion'
function Gesture() {
  return (
    <div style={{height:'100vh',display:'grid', placeContent:'center',gap:'0.8rem'}} >

<MotionConfig transition={{
  ease:'backOut',
duration:0.2
}}><motion.button whileHover={{
  scale:1.5
}} whileTap={{scale:0.4, rotate:'3.5deg'}} transition={
{
  ease:'easeInOut',
  duration:0.5,
}} className='btn'>Click me !</motion.button>
<motion.button whileHover={{
  scale:1.5
}} whileTap={{scale:0.8, rotate:'9.5deg'}} transition={
{
  ease:'easeInOut',
  duration:0.5,
}} className='btn'>Click me !</motion.button>
</MotionConfig>

    </div>
  )
}

export default Gesture