export function useCols(n?: number): string {
    if (n && (n < 1 || n > 12)) {
        throw new Error('Input must be between 1 and 12.');
    }
    return n ? cols[n] : 'grid-cols-12';
}

export function useRows(n?: number): string {
    if (n && (n < 1 || n > 12)) {
        throw new Error('Input must be between 1 and 12.');
    }
    return n ? rows[n] : 'grid-rows-4';
}

export function useColSpan(n?: number): string {
    if (n && (n < 1 || n > 12)) {
        throw new Error('Input must be between 1 and 12.');
    }
    return n ? colSpans[n] : 'col-auto';
}

export function useRowSpan(n?: number): string {
    if (n && (n < 1 || n > 12)) {
        throw new Error('Input must be between 1 and 12.');
    }
    return n ? rowSpans[n] : 'row-auto';
}

export function useColStart(n?: number): string {
    if (n && (n < 1 || n > 13)) {
        throw new Error('Input must be between 1 and 13.');
    }
    return n ? colStart[n] : 'col-start-auto';
}

export function useRowStart(n?: number): string {
    if (n && (n < 1 || n > 13)) {
        throw new Error('Input must be between 1 and 13.');
    }
    return n ? rowStart[n] : 'row-start-auto';
}

const cols: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12'
};

const rows: Record<number, string> = {
    1: 'grid-rows-1',
    2: 'grid-rows-2',
    3: 'grid-rows-3',
    4: 'grid-rows-4',
    5: 'grid-rows-5',
    6: 'grid-rows-6',
    7: 'grid-rows-7',
    8: 'grid-rows-8',
    9: 'grid-rows-9',
    10: 'grid-rows-10',
    11: 'grid-rows-11',
    12: 'grid-rows-12'
};

const colSpans: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12'
};

const rowSpans: Record<number, string> = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
    5: 'row-span-5',
    6: 'row-span-6',
    7: 'row-span-7',
    8: 'row-span-8',
    9: 'row-span-9',
    10: 'row-span-10',
    11: 'row-span-11',
    12: 'row-span-12'
};

const colStart: Record<number, string> = {
    1: 'col-start-1',
    2: 'col-start-2',
    3: 'col-start-3',
    4: 'col-start-4',
    5: 'col-start-5',
    6: 'col-start-6',
    7: 'col-start-7',
    8: 'col-start-8',
    9: 'col-start-9',
    10: 'col-start-10',
    11: 'col-start-11',
    12: 'col-start-12',
    13: 'col-start-13'
};

const rowStart: Record<number, string> = {
    1: 'row-start-1',
    2: 'row-start-2',
    3: 'row-start-3',
    4: 'row-start-4',
    5: 'row-start-5',
    6: 'row-start-6',
    7: 'row-start-7',
    8: 'row-start-8',
    9: 'row-start-9',
    10: 'row-start-10',
    11: 'row-start-11',
    12: 'row-start-12',
    13: 'row-start-13'
};
