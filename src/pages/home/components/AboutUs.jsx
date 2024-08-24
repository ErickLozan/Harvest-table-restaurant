import AboutUsImage from '../../../assets/AboutUs.jpg'

function AboutUs() {
  return (
    <>
      <section className='section container' id='about-us'>
        <h2 className='subtitle'>About Us</h2>
        <div className='about-us__info-container'>
          <div className='about-us__info'>
            <p>
              Welcome to Harvest Table, where passion meets plate! At Harvest
              Table, we believe that a great meal starts with fresh,
              high-quality ingredients and a heartfelt dedication to our craft.
              Our restaurant is more than just a place to {"eat-it's"} a
              community gathering spot where every dish is crafted with care and
              every guest is treated like family.
            </p>
            <br />
            <p>
              Founded with a love for wholesome, home-cooked meals, our team is
              committed to bringing you an exceptional dining experience. We
              source our ingredients from local farms and purveyors to ensure
              that every bite is both flavorful and sustainable. Our menu
              features a range of comforting classics and innovative creations,
              all designed to celebrate the rich flavors of seasonal produce.
            </p>
          </div>
          <img src={AboutUsImage} alt="about-us" className='about-us__img' />
        </div>
      </section>

      <section className='section about-us__mission-container'>
        <div className='about-us__mission-container-short'>
          <h3 className='about-us__subtitle'>Mission</h3>
          <p className='about-us__p'>
            At Harvest Table, we are dedicated to providing an authentic and
            comforting dining experience by using fresh, high-quality ingredients
            to create dishes that celebrate simplicity and flavor. Our goal is to
            offer a warm and welcoming environment where every meal becomes a
            special moment.
          </p>

          <br />

          <h3 className='about-us__subtitle'>Vision</h3>
          <p className='about-us__p'>
            We aim to be recognized as the preferred destination for those seeking
            an exceptional and homey dining experience. We aspire to expand our
            presence, standing out for our commitment to culinary excellence and
            customer satisfaction, and creating a lasting legacy of quality and
            warmth in every dish.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
