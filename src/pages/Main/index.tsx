import React from 'react'
import Layout from './styles';
import Text from '../../components/Text';

interface MainProps {
  
}

const Main: React.FC<MainProps> = (props) => {
  
  return (<Layout><Text size="heading1" color='text'>메인화면</Text></Layout>)
}

export default Main;