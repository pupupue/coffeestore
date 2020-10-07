import React, { Fragment } from 'react'
import Hero from '../components/hero/Hero';
import HeroText from '../components/hero/HeroText';
import HeadingSection from '../components/heading/HeadingSection';


function About() {
  const aboutustext = [
    {
      paragraph: "Our mission at Bulgatta coffe is ‘Bringing Coffee Love to your Community’."
    },
    {
      paragraph: "Established in UK in 2014, Bulgatta is a team of experienced and passionate coffee-lovers, with a drive to showcase, educate and inspire our customers about coffee. We pride ourselves on being a locally owned and community-minded coffee company, and stand above the rest with our unwavering dedication to providing our community with an excellent product and love for coffee."
    },
    {
      paragraph: "We believe that much of this begins at the ground level; our coffee is a direct link to the relationships we have fostered with farmers and producers, who now have become like family to us. Through ongoing collaborations with these amazing people, we hope to continually build sustainable long term relationships and showcase the passion, hard work and dedication of the farmers, families and communities behind each cup that you get to enjoy."
    },
  ];

  const ourcoffeetext = [
    {
      paragraph: "At Bulgatta coffee, our coffee is focused on quality. "
    },
    {
      paragraph: "We source in-season coffee beans from exceptional producers around the world to ensure every cup is perfect.  Before we introduce a new coffee to our menu, it must pass multiple rigorous cupping and tasting sessions in order to qualify against our stringent standards."
    },
    {
      paragraph: " You can already feel the positive energy. We'll continue to bring the same passion to what we do. I hope that our positive vibes will iSnspire our customers. Above all else, we want to bring a smile to your face with just one cup of coffee."
    },
    {
      paragraph: "Visit our online store to shop all of our current coffee offerings"
    },
  ];

  return (
    <Fragment>
      <Hero 
        imgName="coffee-cettle.jpg"
      />
      <HeroText 
        text={aboutustext}
      />
      <HeadingSection mainTxt="Our Coffee" secondaryTxt="我们的咖啡" />
      <HeroText 
        text={ourcoffeetext}
      />
    </Fragment>
  )
}

export default About
