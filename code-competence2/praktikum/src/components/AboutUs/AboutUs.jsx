import React from "react";
import "./AboutUs.css";
import image from "../../assets/images/bromo1.jpg";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about_container">
        <h2>About Us</h2>
        <img src={image} alt="" />
        <p className="deskription-aboutUs">
          Gunung Bromo atau dalam bahasa Tengger dieja "Brama", juga disebut
          Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur,
          Indonesia. Gunung ini memiliki ketinggian 2.329 meter di atas
          permukaan laut dan berada dalam empat wilayah kabupaten, yakni
          Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang, dan
          Kabupaten Malang. Gunung Bromo terkenal sebagai objek wisata utama di
          Jawa Timur. Sebagai sebuah objek wisata, Bromo menjadi menarik karena
          statusnya sebagai gunung berapi yang masih aktif. Gunung Bromo
          termasuk dalam kawasan Taman Nasional Bromo Tengger Semeru.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
