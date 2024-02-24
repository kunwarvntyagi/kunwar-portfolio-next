import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { TypographyProps } from './Typography.types'

const Typography = ({
    className,
    component: componentProp,
    children,
    markdown,
    noDisallowedTypes,
    ...other
}: TypographyProps) => {
    const Component = componentProp || 'p'
    if (markdown) {
        return (
            <Component className={className} {...other}>
                {
                    <ReactMarkdown
                        unwrapDisallowed
                        disallowedElements={noDisallowedTypes ? [] : ['p']}
                        children={markdown}
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                        {...other}
                    />
                }
            </Component>
        )
    }

    return (
        <Component className={className} {...other}>
            {children}
        </Component>
    )
}

export default Typography
