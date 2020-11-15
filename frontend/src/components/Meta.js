import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords}/>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welecome to the Flower Boutique',
  description: 'We sell beautiful flower arrangements',
  keywords: 'flowers, arrangements'
}

export default Meta
