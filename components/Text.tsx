import React from 'react'
import { FontSizes, useFontSize, useMarginBottom } from './utils/textUtils'

type TextProps = {
    fontSize?: FontSizes
    noMargin?: boolean,
    text: string,
    textStyle?: string
}

export function TextDisplay({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 96;
    return (
        <h1 className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-trade-winds`}>
            {text}
        </h1>
    )
}

export function TextNavLarge({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 60;
    return (
        <h1 className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-trade-winds font-medium`}>
            {text}
        </h1>
    )
}

export function TextHeading({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 36;
    return (
        <h2 className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-cairo`}>
            {text}
        </h2>
    )
}

export function TextTitle({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 30;
    return (
        <h2 className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-cairo`}>
            {text}
        </h2>
    )
}


export function TextSubheading({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 24;
    return (
        <h3 className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-assistant`}>
            {text}
        </h3>
    )
}

export function TextSubsubheading({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 20;
    return (
        <h3 className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-assistant`}>
            {text}
        </h3>
    )
}

export function TextBody({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 16;
    return (
        <p className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-assistant`}>
            {text}
        </p>
    )
}

export function TextButton({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 16;
    return (
        <p className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-assistant`}>
            {text}
        </p>
    )
}



export function TextSmall({ text, fontSize, noMargin, textStyle }: TextProps) {
    const defaultFontSize = 12;
    return (
        <small className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} ${textStyle} font-assistant`}>
            {text}
        </small>
    )
}

/* TODO
export function TextCaption({ }: TextProps) {
    return (
        <h1>

        </h1>
    )
}

export function TextQuote({ }: TextProps) {
    return (
        <h1>

        </h1>
    )
}
*/