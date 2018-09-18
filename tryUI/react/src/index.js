import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
