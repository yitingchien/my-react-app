import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/wave'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Welcome to your new site by react. Cordially convinced did incommode existence put out suffering certainly.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className='Cards'>
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design system"
          text="8 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Sound design"
          text="10 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="ARkit 2"
          text="5 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="This function is a valid React component because it accepts a single props (which stands for properties) object argument with data and returns a React element."
    />
  </div>
)

export default IndexPage



