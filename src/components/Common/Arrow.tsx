import classNames from 'classnames'
import { ArrowProps } from '../../types/common'

const PreviousArrow = (props: ArrowProps) => {
    const { className, onClick, name } = props
    return (
        <button
            className={classNames(className, name)}
            aria-label={`${name} Slide`}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

export default PreviousArrow
