export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export function useObjectFit(o?: ObjectFit){
    
    return o ? o : 'cover'

}