import React from 'react'
import PropTypes from 'prop-types'
import { PodcastsPageTemplate } from '../../templates/podcasts-page'

const PodcastsPagePreview = ({ entry, widgetFor }) => (
  <PodcastsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)
 
PodcastsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PodcastsPagePreview
