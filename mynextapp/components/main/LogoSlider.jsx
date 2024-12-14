import React, { useEffect, useRef } from 'react';
import './LogoSlider.css';
import $ from 'jquery';
import Image from 'next/image';

const ClientLogoSlider = () => {
  const clientSliderRef = useRef(null);

  useEffect(() => {
    const $clientSlider = $(clientSliderRef.current);
    let clients = $clientSlider.children().length;
    let clientWidth = clients * 220;

    $clientSlider.css('width', clientWidth);

    let rotating = true;
    const clientSpeed = 1800;
    let seeClients = setInterval(rotateClients, clientSpeed);

    function rotateClients() {
      if (rotating) {
        const $first = $clientSlider.find('li:first');
        $first.animate(
          { 'margin-left': '-220px' },
          2000,
          function () {
            $first.remove().css({ 'margin-left': '0px' });
            $clientSlider.append($first);
          }
        );
      }
    }

    const handleMouseEnter = () => (rotating = false);
    const handleMouseLeave = () => (rotating = true);

    const ourClientsElement = $('#ourclients');
    ourClientsElement.on('mouseenter', handleMouseEnter);
    ourClientsElement.on('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(seeClients);
      ourClientsElement.off('mouseenter', handleMouseEnter);
      ourClientsElement.off('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div id="ourclients">
      <h3 className="z-10 font-ethnocentric flex justify-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-5">
        Our Partners:
      </h3>
      <div className="clients-wrap">
        <ul id="clientlogo" className="clearfix" ref={clientSliderRef}>
          <li><Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2FEuphoria.png?alt=media&token=3ac1cbc5-2b18-49a2-b88c-ace8275b2f10" alt="Logo" width={220} height={100} /></li>
          <li><Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2FEuphoria.png?alt=media&token=3ac1cbc5-2b18-49a2-b88c-ace8275b2f10" alt="Logo" width={220} height={100} /></li>
          <li><Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2FEuphoria.png?alt=media&token=3ac1cbc5-2b18-49a2-b88c-ace8275b2f10" alt="Logo" width={220} height={100} /></li>
          <li><Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2FEuphoria.png?alt=media&token=3ac1cbc5-2b18-49a2-b88c-ace8275b2f10" alt="Logo" width={220} height={100} /></li>
          <li><Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2FEuphoria.png?alt=media&token=3ac1cbc5-2b18-49a2-b88c-ace8275b2f10" alt="Logo" width={220} height={100} /></li>
          <li><Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2FEuphoria.png?alt=media&token=3ac1cbc5-2b18-49a2-b88c-ace8275b2f10" alt="Logo" width={220} height={100} /></li>
          <li><Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2FEuphoria.png?alt=media&token=3ac1cbc5-2b18-49a2-b88c-ace8275b2f10" alt="Logo" width={220} height={100} /></li>
        </ul>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
