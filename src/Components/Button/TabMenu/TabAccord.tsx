import Accordion from './TabMenu'
import { accordionData } from './TabContetnt'

const AppLing = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <div className="accordion">
        {accordionData.map(({ title, content, id }) => (
          <Accordion
            key={id}
            title={title}
            content={content}
            isActive={false}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}
            setIsActive={function (): void {
              throw new Error('Function not implemented.')
            }}
            type={''}
            backgroundColor={''}
            text={''}
          />
        ))}
      </div>
    </div>
  )
}

export default AppLing
