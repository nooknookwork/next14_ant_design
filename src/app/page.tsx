'use client'
import { Button as AntButton } from 'antd';
import { Container, Button as BsButton } from 'react-bootstrap';

const Home = () => {

  const handleBs = () => {
    console.log('handleBs-------')

  }
  const handleAntButton = () => {
    console.log('antDesign-------')
  }
  return (
    <Container className="text-center mt-5">
      <h1>Hello, Next.js 14 with Bootstrap and Ant Design!</h1>
      <BsButton variant="primary" className="m-2" onClick={handleBs}>
        Bootstrap Button
      </BsButton>
      <AntButton type="primary" className="m-2" onClick={handleAntButton}>
        Ant Design Button
      </AntButton>
    </Container>
  );
}

export default Home
