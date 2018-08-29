import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.0652229536518!2d37.80011131579129!3d48.01244976784641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e0904202a8c573%3A0x7ae1d5744509789a!2z0YPQuy4g0JDRgNGC0LXQvNCwLCA5NCwg0JTQvtC90LXRhtC6LCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4MzAwMA!5e0!3m2!1sru!2sua!4v1535566039219"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
