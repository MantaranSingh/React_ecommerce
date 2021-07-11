import React from 'react';

const MenuItem = ({ title, imageUrl, size = '' }) => {
    return (
        <div className={`menu-item ${size}`} >
            <div className="content" style={{
                backgroundImage: `url(${imageUrl})`
            }}>
                <div className='wrapper'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;