import React from 'react'
import { storiesOf } from '@storybook/react'
import CustomButton from '../CustomButton'

storiesOf('CustomButton', module)
  .add('test', () => {
    return (
      <CustomButton icon="filter">
        Storybook
      </CustomButton>

      
    )
  })