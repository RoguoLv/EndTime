import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { getTime } from '../api/time';
import './CouponBanner.scss'

const EndTime = () => {
    const [data, setData]= useState(0)
    let timer = useRef(null)
    useEffect(() => {
        getTime().then(res => {
            setData(res.data[0].allTime)
        })
    }, [])
    useEffect(() => {
        timer.current = setInterval(() => {
            setData(data - 1)
        }, 1000);
        return () => {
            clearInterval(timer.current)
        }
    }, [data])

    return (
        <div className='box'>
            <div className='context'>
                <div className="left">
                    <p>Enjoy now your<br></br>
                        favorite brands with<br></br>
                        <span>30%&emsp;off</span></p>
                    <div className="left_second"></div>
                    <div className="left_third">
                        <img style={{ height: '100%' }} src="https://camo.githubusercontent.com/c02728f69304ac9bdf8c1172690479269789fdea7e9396316aa63c9ca6e628a5/68747470733a2f2f696d672e6d727663646e2e636f6d2f75732f6d656469612f34366332313736396430343930313037623939353037616665333439313335352d3537362d3639382e706e67" alt="" />
                    </div>
                    {/* <div className="left_fourth"></div> */}

                </div>
                <div className="right">
                    <div className="right_second">
                        Ends in <div>{(Math.floor(data / 3600)) < 10 ? '0' + (Math.floor(data / 3600)) : (Math.floor(data / 3600))}</div> h
                        <div>{(Math.floor((data - Math.floor(data / 3600) * 3600) / 60)) < 10 ? '0' + (Math.floor((data - Math.floor(data / 3600) * 3600) / 60))
                            : (Math.floor((data - Math.floor(data / 3600) * 3600) / 60))}</div> m
                        <div>{(data - Math.floor(data / 3600) * 3600 - 60 * Math.floor((data - Math.floor(data / 3600) * 3600) / 60)) < 10
                            ? '0' + (data - Math.floor(data / 3600) * 3600 - 60 * Math.floor((data - Math.floor(data / 3600) * 3600) / 60))
                            : (data - Math.floor(data / 3600) * 3600 - 60 * Math.floor((data - Math.floor(data / 3600) * 3600) / 60))}</div>  s
                    </div>
                    <div className="right_third">
                        <p className='p1'>30%<br></br>
                            OFF
                        </p>
                        <p className='p2'>
                            Welcome Coupon
                        </p>
                        <div className="right_fourth">
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default EndTime;