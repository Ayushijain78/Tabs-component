import React from 'react'

const TabPanel = React.memo(({content}) => {
  return (
    <div className='tab-panel'>
      {content}
    </div>
  )
})

export default TabPanel
