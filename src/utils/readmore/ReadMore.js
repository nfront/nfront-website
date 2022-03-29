import React, { useState } from 'react';

const ReadMore = ({ text, link }) => {
    console.log(link);
    const [isReadMore] = useState(true);
    // const toggleReadMore = () => {
    //     setIsReadMore(!isReadMore);
    // };

    return (
        <p>
            {isReadMore ? text.slice(0, 100) : text}
            {/* // condition that will render 'read more' only if the text.length is
            greated than 150 chars */}
            {text.length > 100 && (
                <span>
                    {isReadMore && <a href={link}>{'...read more'}</a>
                    // : ' ...show less'
                    }
                </span>
            )}
        </p>
    );
};

export default ReadMore;
