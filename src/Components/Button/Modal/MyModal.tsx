import PropTypes from 'prop-types'
import cl from './MyModal.module.css'

type IMymodal = {
  children?: React.ReactNode
  visible?: boolean
  onClose?: () => void
  color?: string
  backgroundColor?: string
}

const MyModal: React.FunctionComponent<IMymodal> = ({
  children,
  visible,
  onClose = () => {},
  color,
  backgroundColor,
}) => {
  const rootClasses = [cl.myModal]
  if (visible) {
    rootClasses.push(cl.active)
  }

  //

  return (
    <div style={{ color: color }}>
      <div
        style={{ color: backgroundColor }}
        className={rootClasses.join(' ')}
        onClick={(event) => {
          if (
            (event.target as HTMLTextAreaElement).classList.contains(cl.myModal)
          ) {
            onClose()
          }
        }}
      >
        <div className={cl.myModalContent}>
          <div className={cl.close} onClick={() => onClose()}></div>
          {children}
        </div>
      </div>
    </div>
  )
}

MyModal.propTypes = {
  children: PropTypes.string,
  visible: PropTypes.bool,
}

MyModal.defaultProps = {
  children: '',
  visible: true,
}

export default MyModal
