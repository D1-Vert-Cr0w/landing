import './App.css';
import { Layout, Menu, Breadcrumb} from 'antd';
import { Row, Col } from 'antd';
import forest_img from './img/Forest.jpg'
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <>
    <Layout className="layout">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item className='MI'>Обо мне</Menu.Item>
        <Menu.Item className='MIi'>Мои проекты</Menu.Item>
      </Menu>
    </Header>
    <Content className='ha' style={{backgroundColor:'rgba(0,0,0,0)'}}>
      <img src={forest_img} 
      className="f_img"
      ></img>
    <Row>g</Row>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
    </>
  );
}

export default App;
