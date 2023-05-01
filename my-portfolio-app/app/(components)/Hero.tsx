"use client"
import Typewriter from 'typewriter-effect';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Anime, mains, Textanime } from './Motion'

const Heros = () => {
  return (
    <>
    <div id='hero' ></div>
    <motion.div variants={mains} initial={'hidden'} whileInView={'show'} className='mt-[100px] text-center '>
        <motion.div 
        variants={Anime}
        whileInView={'show'}
        initial={'hidden'}
        >

    <Image  className='mx-auto' src="/main.png" alt='dd' width={500} height={200} />
        </motion.div>
        <motion.div
        variants={Textanime} initial={'hidden'} whileInView={'show'}   >

<h1 className='font-font min-[320px]:text-[60px] md:text-[100px] lg:text-[100px]'>Anime <span className='text-[#FC6B00]'>Pros</span> </h1>
<Typewriter
  options={{
    strings: ['Code Your Dreams','We make websites faster', 'Better people , better websites'],
    autoStart: true,
    loop: true,
  }}
/>
        </motion.div>
    </motion.div>
    </>
  )
}

export default Heros