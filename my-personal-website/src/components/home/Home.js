import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className='Home'>
      <section className='left'>
      {/* <img className='profile_pic' src={require('../../assets/images/me4-Photoroom.png')} alt='photo_me' /> */}
      </section>
      <section className='right'>
        <h2 className='welcome'>Hello, my name is</h2>
        <h1>Jonas Notredame,</h1>
        <h2>
          I am a <b>Junior Software Developer</b> ready to create some
          fresh looking applications
        </h2>
      </section>
    </div>
  );
}
export default Home;
