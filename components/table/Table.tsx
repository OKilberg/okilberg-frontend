import { ReactNode } from "react"

type TableItemProps = {
  content: string,
  dataLabel?: string
}

type ChildProps = {
  children: ReactNode | ReactNode[]
}

type TableProps = ChildProps & {
  className?: string
}

export function Table({ children, className }: TableProps) {
  return (
    <table className={'table-auto ' + className}>
      {children}
    </table>
  )
}

export function TableHeaderItem({ content }: TableItemProps) {
  return (
    <th className='px-4 py-2 pe-24 font-light align-bottom tracking-wider uppercase border-b-1 text-white opacity-80 border-opacity-80 border-white'>
      {content}
    </th>
  )
}

export function TableItem({ content, dataLabel }: TableItemProps) {
  return (
    <td data-label={dataLabel} className='p-4 align-top text-white font-light text-xl'>
      {content}
    </td>
  )
}

export function TableHead({ children, className }: TableProps) {
  return (
    <thead className={className}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className }: TableProps) {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  )
}

export function TableRow({ children, className }: TableProps) {
  return (
    <tr className={className}>
      {children}
    </tr>
  )
}