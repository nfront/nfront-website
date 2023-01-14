import * as breakpoints from '@styles/scss/_breakpoints.module.scss';
import * as variables from '@styles/scss/_variables.module.scss';
import React from 'react';

// Get count of objects in array with property "outerProperty.innerProperty" matching "value"
export const getObjectCount = (array, outerProperty, innerProperty, value) =>
    array.filter((element) => element[outerProperty][innerProperty] === value)
        .length;

// Media queries multiply releative units (r)em to browser font-size, to get pixel size.
// It does not multiply (r)em with font-size of root element (html).
// Therefore, to get a pixel number that matches the media-query pixel numbers,
// multiply by browser's font-size setting.
export const breakpointToPxNum = (sizeProp) => {
    const defaultFontSize = getDefaultFontSize();
    const breakpointAsPxNum = defaultFontSize * breakpoints[`${sizeProp}Num`];
    return breakpointAsPxNum;
};

// Assumes we want 18 to be our standard root element font-size.
// Don't pull size of root dynamically here, because user may change browser's
// font-size, which changes root element's font-size.
// The rem we get here should always yield the same rem for the same px input (pure function).
export const pxToRem = (px) => {
    const rem = `${parseFloat(px) / 18}rem`;
    return rem;
};

// Returns font-size set in browser (default font-size).
// Assumes app adjusts browser font size by a percentage (on root | html elemeent)
const getDefaultFontSize = () => {
    // Root font-size (percentage of default font-size)
    const rootFontSize_PercentageAsNumber =
        parseFloat(variables.rootFontSize) / 100;

    const element = document.createElement('div');
    element.style.width = '1rem';
    element.style.display = 'none';
    document.body.append(element);

    const widthMatch = window
        .getComputedStyle(element)
        .getPropertyValue('width')
        .match(/^(\d*\.?\d*)px$/);

    element.remove();

    if (!widthMatch || widthMatch.length < 1) {
        return null;
    }

    const result = Number(widthMatch[1]);

    const browserFontSize = result / rootFontSize_PercentageAsNumber;

    return !isNaN(result) ? browserFontSize : null;
};

export function isClassComponent(component) {
    return (
        typeof component === 'function' &&
        !!component.prototype.isReactComponent
    );
}

export function isFunctionComponent(component) {
    return (
        typeof component === 'function' &&
        String(component).includes('return React.createElement')
    );
}

export function isReactComponent(component) {
    return isClassComponent(component) || isFunctionComponent(component);
}

export function isElement(element) {
    return React.isValidElement(element);
}

export function isDOMTypeElement(element) {
    return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element) {
    return isElement(element) && typeof element.type === 'function';
}

const queryCheck = (s) => document.createDocumentFragment().querySelector(s);

export function isSelectorValid(selector) {
    try {
        queryCheck(selector);
    } catch {
        return false;
    }
    return true;
}
