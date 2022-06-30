import React from 'react';

function Tag(props) {
    return (
        <div className='tag'>
            <div className='tag-text'>{props.tag}</div>
            <div className='actions'>
                <button className='tag_btn' onClick={() => props.deleteTag(props.index)}>&times;</button>
            </div>
        </div>
    );
}

export default Tag;