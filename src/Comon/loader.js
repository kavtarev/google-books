import React from 'react'
import style from './loader.module.css'

export default function Loader() {
    return (
        <div className={style.wrapper}>
            <div className={style.ldsgrid}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
