import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import git from '../assets/git.png'
import tailwind from '../assets/tailwind.png'
import jquery from '../assets/jquery.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import postgresql from '../assets/postgresql.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='CSS icon' />
                    <p className='my-4'>CSS</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt='JavaScript icon' />
                    <p className='my-4'>JavaScript</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={jquery} alt='jQuery icon' />
                    <p className='my-4'>jQuery</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={git} alt='Git icon' />
                    <p className='my-4'>Git</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon' />
                    <p className='my-4'>Tailwind</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt='Node.JS icon' />
                    <p className='my-4'>Node.JS</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={express} alt='Express.JS icon' />
                    <p className='my-4'>Express.JS</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongo} alt='MongoDB icon' />
                    <p className='my-4'>MongoDB</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={postgresql} alt='PostgreSQL icon' />
                    <p className='my-4'>PostgreSQL</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt='React.JS icon' />
                    <p className='my-4'>React.JS</p>
                </div>                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={redux} alt='Redux icon' />
                    <p className='my-4'>Redux</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Skills;