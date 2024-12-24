import './About.css'
import image from '../../Assets/About.png'

const About = () => {
  return (
    <section className="about-us" id="about">
    <div className="about-image">
        <img className="about-img" src={image} alt="A Cup of coffee" />
    </div>
    <div className="about-content">
        <h2 className="about-heading">ABOUT US</h2>
        <span className="span"></span>
        <p className="about-discription">
            At Coffee House in Berndorf, Germany, we pride ourselves on being a go-to destination for coffee lovers and conversation seekers alike.We're dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
        </p>
    </div>
</section>
  )
}

export default About