export const fontSizeVariants: { [K in FontSizes]: string } = {
    12: 'text-xs',
    14: 'text-sm',
    16: 'text-base',
    18: 'text-lg',
    20: 'text-xl',
    24: 'text-2xl',
    30: 'text-3xl',
    36: 'text-4xl',
    48: 'text-5xl',
    60: 'text-6xl',
    72: 'text-7xl',
    96: 'text-8xl',
    128: 'text-9xl',
};

const marginBottomVariants: { [K in FontSizes]: string } = {
    12: 'mb-1',  // 0.25rem
    14: 'mb-1',  // 0.25rem
    16: 'mb-2',  // 0.5rem
    18: 'mb-2',  // 0.5rem
    20: 'mb-3',  // 0.75rem
    24: 'mb-4',  // 1rem
    30: 'mb-5',  // 1.25rem
    36: 'mb-6',  // 1.5rem
    48: 'mb-8',  // 2rem
    60: 'mb-10', // 2.5rem
    72: 'mb-12', // 3rem
    96: 'mb-16', // 4rem
    128: 'mb-20', // 5rem
};

// this hack was requires to see the available numbers when hovering the type
type FontSizeNumbers = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96, 128];
export type FontSizes = FontSizeNumbers[number];

export function useFontSize(fontSize?: FontSizes, defaultNumber: FontSizes = 36): string {
    return fontSize !== undefined ? fontSizeVariants[fontSize] : fontSizeVariants[defaultNumber];
}

export function useMarginBottom(fontSize?: FontSizes, defaultNumber: FontSizes = 24, noMargin?: boolean): string {
    if (noMargin) {
        return '';
    } else {
        return fontSize !== undefined ? marginBottomVariants[fontSize] : marginBottomVariants[defaultNumber];
    }
}