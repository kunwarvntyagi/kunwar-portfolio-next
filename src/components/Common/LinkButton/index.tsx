import { LinkButtonProps } from './LinkButton.types'
const LinkButton = (props: LinkButtonProps) => {
    const { target = '_self', link, children, className, url } = props
    return (
        <a
            target={target}
            href={url || link.url}
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    )
}

export default LinkButton
