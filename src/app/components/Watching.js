import React from 'react';

const Watching = ({ collection }) => {
    if (collection) {
        const { video } = collection;

        return (
            <div className='watching'>
                <h3>{collection.title}</h3>
                <p>Video {video.index} of {collection.totalVideos}: {video.title}</p>
            </div>
        )
    }

    return null;
}

export default Watching;
