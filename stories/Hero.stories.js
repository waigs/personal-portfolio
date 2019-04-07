import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import Hero from '../src/components/Hero'

const stories = storiesOf('Hero', module)
stories.addDecorator(withKnobs)

const renderFooter = props => <Hero {...props} />

stories.add('main hero', () =>
  renderFooter({
    data: {
      heroDescription: text(
        'Hero Text',
        'I’m Waigs, an enthusiastic and skilled web developer, with 10+ years of industry experience. I focus on Front-end design and development.'
      ),
      heroDescriptionMobile: text(
        'Mobile Text',
        'Slide through project images'
      ),
    },
  })
)
