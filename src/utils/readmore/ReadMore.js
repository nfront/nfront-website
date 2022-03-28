import { Link } from 'gatsby';
import React, { useState } from 'react';

const ReadMore = ({ text }) => {
    const [isReadMore] = useState(true);
    // const toggleReadMore = () => {
    //     setIsReadMore(!isReadMore);
    // };

    return (
        <p className="testimonials__quote__text">
            {isReadMore ? text.slice(0, 150) : text}
            {/* // condition that will render 'read more' only if the text.length is
            greated than 150 chars */}
            {text.length > 150 && (
                <span>
                    {isReadMore && (
                        <Link to="/portfolio/">{'...read more'}</Link>
                    )
                    // : ' ...show less'
                    }
                </span>
            )}
        </p>
    );
};

export default ReadMore;
