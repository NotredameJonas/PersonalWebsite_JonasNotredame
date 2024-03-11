import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className='Home'>
      <section className='left'></section>
      <section className='right'>
        <h2 className='welcome'>Hi there, my name is</h2>
        <h1>Jonas Notredame</h1>
        <h2>
          and I am a <b>Junior Software Developer</b> ready to create some
          fresh looking applications
        </h2>
      </section>
    </div>
  );
}
export default Home;
