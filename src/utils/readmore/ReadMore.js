import React, { useState } from 'react';

const ReadMore = ({ text, link }) => {
    const [isReadMore] = useState(true);
    // const toggleReadMore = () => {
    //     setIsReadMore(!isReadMore);
    // };

    return (
        <p>
            {isReadMore ? text.slice(0, 150) : text}
            {/* // condition that will render 'read more' only if the text.length is
            greated than 150 chars */}
            {text.length > 150 && (
                <span>
                    {<p>{isReadMore}</p> && (
                        <p className="readmore">
                            <a href={link}>{'Read More'}</a>
                        </p>
                    )
                    // : ' ...show less'
                    }
                </span>
            )}
        </p>
    );
};

export default ReadMore;
