import React from 'react';

const Map = () => {
    return (
        <section className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11606.512940659088!2d-79.824707!3d43.3429679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3b71d44ad354627!2sCima%20Enoteca!5e0!3m2!1sen!2sca!4v1620752630840!5m2!1sen!2sca"
                title="Map of CIMA location"
                // aria-hidden="true"
                allowFullScreen="" 
                loading="lazy">

            </iframe>
        </section>
    )
}
export default Map