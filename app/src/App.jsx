import React from 'react';
import Box from './components/Box';
import Case from './components/Case';
import Content from './components/Content';
import Footer from './components/Footer';
import FooterFluid from './components/FooterFluid';
import List from './components/List';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

import rasm1 from './img/rasm (1).png'
import rasm2 from './img/rasm (2).png'
import rasm3 from './img/rasm (3).png'
import rasm4 from './img/rasm (4).png'
import rasm5 from './img/rasm (5).png'



const App = () => {
  return (
    <>

      <Navbar />
      <Main />

      <Content rasm1={rasm1} rasm2={rasm2} rasm3={rasm3} rasm4={rasm4} rasm5={rasm5} />

      <Box />

      <Case />
      <List />
      <Wrapper />

      <Footer />

      <FooterFluid />
    </>
  );
};

export default App;