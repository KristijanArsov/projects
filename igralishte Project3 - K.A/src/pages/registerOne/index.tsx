import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const LogOnPage:NextPage = () => {
    
  return (

    <div className='container d-flex justify-content-center flex-column login-familyFont' style={{height:`80vh`}}>
    <div className="row">
        <div className="col-12 text-center">
            <img src="/images/Logo.png" style={{width:`180px`, height:`40px`}} alt="" />
        </div>
    </div>
    <div className="row pt-5 pb-3">
        <div className="col-12 d-flex justify-content-center ">
            <Link href={`/registerOne/registerTwo`} className='login-links py-2 text-dark'>Регистрирај се со емаил адреса</Link>
        </div>
    </div>
    <div className="row pb-1">
        <div className="col-12 text-center">
            <p>или</p>
        </div>
    </div>
    <div className="row pb-3">
        <div className="col-12 d-flex justify-content-center ">
            <Link href={`https://accounts.google.com/signin`} className='login-links py-2 text-dark'>Регистрирај се преку Google</Link>
        </div>
    </div>
    <div className="row pb-3">
        <div className="col-12 d-flex justify-content-center ">
            <Link href={`https://www.facebook.com/?locale=mk_MK`} className='login-links py-2 text-dark'>Регистрирај се преку Facebook</Link>
        </div>
    </div>
    <div className="row pb-3">
        <div className="col-12 d-flex justify-content-center ">
           <p >Веќе имаш профил? <Link href={`/login`} style={{color:`#8a8328`,textDecoration:`underline`}}>Логирај се</Link> </p>
        </div>
    </div>
    <div className="row">
        <div className="col-12 pt-5">
        <p className='text-center' style={{fontSize:`8px`}}>Сите права задржани @ Игралиште Скопје</p>
        </div>
    </div>
    </div>
  
    
  )
}

export default LogOnPage
