import React from 'react'

export default function LoadingAnimation() {
    return (
        <div style={{ position: 'fixed', top: '30%', left: '50%', marginTop: '-50px', marginLeft: '-50px' }}>
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
