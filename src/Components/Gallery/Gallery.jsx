import './Gallery.css'

import image1 from '../../Assets/gallery-1.jpg'
import image2 from '../../Assets/gallery-2.jpg'
import image3 from '../../Assets/gallery-3.jpg'
import image4 from '../../Assets/gallery-4.jpg'
import image5 from '../../Assets/gallery-5.jpg'
import image6 from '../../Assets/gallery-6.jpg'
import image7 from '../../Assets/gallery-7.jpg'
import image8 from '../../Assets/gallery-8.jpg'
import image9 from '../../Assets/gallery-9.jpg'
import image10 from '../../Assets/gallery-10.jpg'
import image11 from '../../Assets/gallery-11.jpg'
import image12 from '../../Assets/gallery-12.jpg'
import image13 from '../../Assets/gallery-13.jpg'
import image14 from '../../Assets/gallery-14.jpg'
import image15 from '../../Assets/gallery-15.jpg'
import image16 from '../../Assets/gallery-16.jpg'

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
            <h2 className="gallery-heading">GALLERY</h2>
            <span></span>
            <div className="gallery-images">
                <img src={image1} alt="Our Food Products" className="gallery-img" />
                <img src={image2} alt="Our Food Products" className="gallery-img" />
                <img src={image3} alt="Our Food Products" className="gallery-img" />
                <img src={image4} alt="Our Food Products" className="gallery-img" />
                <img src={image5} alt="Our Food Products" className="gallery-img" />
                <img src={image6} alt="Our Food Products" className="gallery-img" />
                <img src={image7} alt="Our Food Products" className="gallery-img" />
                <img src={image8} alt="Our Food Products" className="gallery-img" />
                <img src={image9} alt="Our Food Products" className="gallery-img" />
                <img src={image10} alt="Our Food Products" className="gallery-img" />
                <img src={image11} alt="Our Food Products" className="gallery-img" />
                <img src={image12} alt="Our Food Products" className="gallery-img" />
                <img src={image13} alt="Our Food Products" className="gallery-img" />
                <img src={image14} alt="Our Food Products" className="gallery-img" />
                <img src={image15} alt="Our Food Products" className="gallery-img" />
                <img src={image16} alt="Our Food Products" className="gallery-img" />
            </div>
        </section>
  )
}

export default Gallery