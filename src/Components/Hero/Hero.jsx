import './Hero.css'
import image from '../../Assets/Hero.png'

const Hero = () => {
  return (
    <section className="hero" id="home">
            <div className="left-section">
                <h2 className="hero-heading">Best Coffee</h2>
                <h2 className="note">Make your day great with our special coffee!</h2>
                <p className="hero-discription">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                <a href="#menu" className="hero-button"><button type="button" className="hero-btn">Order Now</button></a>
                <a href="#contact" className="hero-button"><button type="button" className="hero-btn">Cantact Us</button></a>
            </div>
            <div className="right-section">
                <img className="hero-img" src={image} alt="A cup of coffee with splash"/>
            </div>
        </section>
  )
}

export default Hero