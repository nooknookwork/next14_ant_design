'use client'
import { Button as AntButton } from 'antd';

const Home = () => {
  const handleAntButton = () => {
    console.log('antDesign-------')
  }
  return (
    <div className="text-center mt-5">
      <h1>Hello, Next.js 14 and Ant Design!</h1>
      <AntButton type="primary" className="m-2" onClick={handleAntButton}>
        Ant Design Button
      </AntButton>
    </div>
  );
}

export default Home
