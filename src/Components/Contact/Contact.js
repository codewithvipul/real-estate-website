import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</span>
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./main4.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
