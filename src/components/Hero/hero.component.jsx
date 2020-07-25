import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomeBanner from '../HomeBanner/homebanner.component.jsx'
import './_hero.styles.scss'
import { selectSections } from '../../redux/homepage/homepage.selectors.js';



const Hero = ({ sections }) => (
  <div className='hero'>
      {sections.map(({ id, ...otherSectionProps }) => (<HomeBanner key={id} {...otherSectionProps}/>))}
  </div>
);

const mapStateToProps = state => createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Hero);