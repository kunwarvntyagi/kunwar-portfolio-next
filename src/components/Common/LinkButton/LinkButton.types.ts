import { ReactNode } from 'react'

export type LinkButtonProps = {
    className?: string
    target?: string
    link?: {
        url?: string
    }
    url?: string
    children?: ReactNode
}
