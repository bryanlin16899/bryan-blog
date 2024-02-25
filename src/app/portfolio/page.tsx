'use client'
import { useState } from 'react';
import Modal from './components/modal/modal';
import Timeline from './components/timeline/timeline';
import './styles.css';

function Page() {
    const [ openModal, setOpenModal ] = useState({
        open: false,
        contentNum: '',
        type: ''
    })
    const categories = {
        'work': {
            'tag': 'work',
            'color': '#018f69'
        },
        'goal': {
            'tag': 'personal goal',
            'color': '#8a4af3'
        }
    }
    const timelineData = [
        {
            text: 'Vanyi Co., Ltd. - Backend Software Engineer',
            date: 'September 2023',
            category: categories.work,
            link: {
                text: <button onClick={() => setOpenModal({
                    open: true,
                    contentNum: 'vanyi',
                    type: 'work'
                })}>Read more</button>
            }
        },
        {
            text: 'Personal Blog Deplyed',
            date: 'January 2023',
            category: categories.goal,
            // link: {
            //     text: <button disabled={true} onClick={() => setOpenModal({
            //         open: true,
            //         contentNum: 'personalBlog',
            //         type: 'goal'
            //     })}>Read more</button>
            // }
        },
        {
            text: 'Anfu Solutions - Backend Software Engineer',
            date: 'September 2022',
            category: categories.work,
            link: {
                text: <button onClick={() => setOpenModal({
                    open: true,
                    contentNum: 'anfu',
                    type: 'work'
                })}>Read more</button>
            }
        },
        {
            text: 'Touch Whale - EPR system for E-commerce',
            date: 'November 2021',
            category: categories.goal,
            link: {
                text: <button onClick={() => setOpenModal({
                    open: true,
                    contentNum: 'touchWhale',
                    type: 'goal'
                })}>Read more</button>
            }
        },
        {
            text: 'CoinLog - Dashboard for my binance investment, and cryptocurrency marketcap list.',
            date: 'May 2021',
            category: categories.goal,
            link: {
                text: <button onClick={() => setOpenModal({
                    open: true,
                    contentNum: 'coinLog',
                    type: 'goal'
                })}>Read more</button>
            }
        },
    ];

  return (
    <div className="flex flex-col flex-grow pt-10 bg-slate-500">
        <div className='flex flex-col self-center'>
            <h1 className="text-4xl font-bold">Experience</h1>
            {/* <p className="text-lg">This is a portfolio page.</p> */}
        </div>
        
        {timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((obj, index) => (
                    <Timeline data={obj} key={index} />
                ))}
            </div>
        )}
        {openModal.open && <Modal closeModal={setOpenModal} contentNum={openModal.contentNum} contentType={openModal.type} />}
    </div>
  )
}

export default Page