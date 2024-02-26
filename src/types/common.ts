import { MouseEventHandler, ReactNode } from 'react'

export type ArrowProps = {
    className?: string
    children?: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
    name?: string
}
