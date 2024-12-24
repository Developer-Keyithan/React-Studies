import './Brand.css'

import image1 from '../../Assets/brandImg1.png'
import image2 from '../../Assets/brandImg2.png'
import image3 from '../../Assets/brandImg3.png'
import image4 from '../../Assets/brandImg4.png'
import image5 from '../../Assets/brandImg5.png'

const Brand = () => {
  return (
    <section className="brand" id="brand">
            <h2 className="brand-heading">OUR TRUSTED BRAND</h2>
            <span></span>
            <div className="brand-images">
                <img src={image1} alt="A Coffee Brand Logo" className="brand-img"/>
                <img src={image2} alt="A Coffee Brand Logo" className="brand-img"/>
                <img src={image3} alt="A Coffee Brand Logo" className="brand-img"/>
                <img src={image4} alt="A Coffee Brand Logo" className="brand-img"/>
                <img src={image5} alt="A Coffee Brand Logo" className="brand-img"/>
            </div>
        </section>

  )
}

export default Brand