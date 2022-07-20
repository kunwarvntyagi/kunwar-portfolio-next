import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Typography = ({
  className,
  component: componentProp,
  children,
  markdown,
  noDisallowedTypes,
  ...other
}) => {
  const Component = componentProp || 'p'
  if (markdown) {
    return <></>
  }

  return (
    <Component className={className} {...other}>
      {children}
    </Component>
  )
}

export default Typography
