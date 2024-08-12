import React from 'react'
import StickyVideo from '../stickyVideo';
import OverlayText from '../overlayText';

export default function ParallaxScroll({
    videoUrl,
    subHeading,
    subHeading2,
    subHeading3,
    showBtn,
    heading,
}) {
    return (
        <section>
            <div className='relative h-[140vh]'>
                <StickyVideo videoUrl={videoUrl} />
                <OverlayText 
                    heading={heading}
                    subHeading={subHeading}
                    subHeading2={subHeading2}
                    subHeading3={subHeading3}
                    showBtn={showBtn}
                />
            </div>
        </section>
    );
}



