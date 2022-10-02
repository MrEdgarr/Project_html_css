import React, { useEffect, useState } from 'react'


const loading = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setLoading(false)
        }, 2000)
    })
    return (
        <div className={`loader-container ${loading == false ? 'fade-out' : ''}`}>
            <div className="spinner">
                <div className="dot1" />
                <div className="dot2" />
            </div>
        </div>
    )
}

export default loading