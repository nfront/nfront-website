import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const imageWrapperStyle = {
    gridArea: '1/1',
    zIndex: 0,
};

// SPEC
// ========================================================================================================================
// GatsbyImage spec: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
// GatsbyImage creates an img inside a div wrapper
// Defaults
// - Image scales to container width (container outside wrapper), maintaining aspect ratio, but never grows larger than source image
// - objectFit: cover
// - objectPosition: 50% 50% (i.e. center)
// - as (HTML element used for the outer wrapper): div
// width/height - https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#widthheight
// - When using StaticImage, options are passed as props to the component
// - When using GatsbyImage, they are passed to the gatsbyImageData GraphQL resolver.
// - For a constrained image widht/height define the maximum size, as the image will scale down to fit smaller containers if needed.
// - Set just one: Source image resized while maintaining aspect ratio
// - Include both: Cropped to ensure exact size (but image is not distorted)

// getImage
// ========================================================================================================================
// If passed a File object, it will return file?.childImageSharp?.gatsbyImageData.
// If passed a node such as a ContentfulAsset that includes a gatsbyImageData field, it will return the gatsbyImageData object.
// If passed a gatsbyImageData object itself, it will return the same object.
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#getimage

// CONCLUSIONS
// ========================================================================================================================
// - Image's max width is set in GraphQL resolver, using width property (height adjusts automatically to keep aspect ratio)
// - If no width is set, source size is its max
// - Image shrinks with its container, if container is smaller than max width (set above)
// - To change size / modify sizes based on media-queries: Change width of ArtContainer or GatsbyImage wrapper via a new css class
// - The class can be made in styles.scss or in a custom styledComponents (CustomArtContainer, based on ArtContainer)
// - Class can be applied to GatsbyImage wrapper or img via pre-defined props (className and ImgClassName), set on the custom Image component
// - These are passed automatically to GatsbyImage (see "Image" component)
// - The same approach goes for all styles one wishes to add to GatsbyImage wrapper or img element
// - To change the style of the GatsbyImage wrapper, modify class "image-wrapper-class" in ArtContainer (or overwrite it)
// - To change the style of the img element, modify class "img-class" in ArtContainer (or overwrite it)
// - Props: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#widthheight
// - Image options (GraphQL): https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#image-options
// - Be careful: Many options are set on GraphQL query (for GatsbyImage), not as props on component
// - SVG is not controlled by GatsbyImage, so define styles with StyledComponents
// - ArtContainer is "display: flex"

const Image = ({ image, backgroundImage = false, asSvg, alt, ...rest }) => {
    // If image comes from Contentful, pass in image field, which will not contain childImageSharp
    // If image coming from allFile, pass in file node which contains childImageSharp
    // If any such image field contains an svg field that is not null, then it is an svg
    // If not svg, use getImage (regardless of source).
    // For allFile: Use getImage one level above childImageSharp (i.e. on the node)
    // For Contenful: Use getImage one level above gatsbyImageData
    // For svg, use publicUrl as source

    const {
        name,
        title,
        svg,
        ext,
        extension,
        mimeType,
        publicURL,
        publicUrl,
        url,
        childImageSharp,
    } = image;

    const isSvg =
        Boolean(svg) ||
        (ext && ext.includes('svg')) ||
        (extension && extension.includes('svg')) ||
        (mimeType && mimeType.includes('svg')) ||
        (typeof image === 'string' && image.includes('svg')) || (publicURL && publicURL.includes('svg')) || asSvg;

    const finalAlt = alt || name || title || '';
    console.log('image', image);
    console.log('imageAlt', finalAlt);
    console.log('mimeType', mimeType);

    const imageSource = isSvg ? (publicURL || publicUrl || url) ? (publicURL || publicUrl || url): image : getImage(image);
    console.log('isSvg', isSvg);
    console.log('imageSource', imageSource);

    const bgStyle = backgroundImage && imageWrapperStyle;

    // Image from filesystem contains ChildImageSharp
    // SVG: ChildImageSharp is null
    if (childImageSharp) {
        // Not SVG and not from Contentful
        return (
            <GatsbyImage
                image={imageSource}
                alt={finalAlt}
                style={backgroundImage && imageWrapperStyle}
                imgClassName="img-class"
                src=""
                {...rest}
            />
        );
    } else if (!childImageSharp && !isSvg) {
        // Not SVG and from Contentful
        return (
            <GatsbyImage
                image={imageSource}
                alt={finalAlt}
                style={backgroundImage && imageWrapperStyle}
                imgClassName="img-class"
                src=""
                {...rest}
            />
        );
    } else if (!childImageSharp && isSvg) {
        // SVG (can be from anywhere)
        return (
            <img
                src={imageSource}
                alt={finalAlt}
                style={{ ...bgStyle }}
                {...rest}
            />
        );
    } else {
        return null;
    }
};

export default Image;
