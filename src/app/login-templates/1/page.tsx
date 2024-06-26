'use client';

import './style.css';
import Image from 'next/image';

import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className='page-main'>
      <div className='page-container'>
        <div className='left-part'>
          <div className='left-top'>
            <Image
              width={60}
              height={60}
              src='https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/login-page-templates/Group_780.png'
              alt=''
            />
            <h2>Login Templates</h2>
          </div>
          <Image
            width={424}
            height={356}
            src='https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/login-page-templates/Layer_2.png'
            alt=''
          />
          <div className='left-bottom'>
            <h3>加入我们的社区</h3>
            <h3>获取更多优秀的登录页模板</h3>
            <span>每个模板都经过精心设计，确保视觉效果和用户体验</span>
          </div>
        </div>
        <div className='right-part'>
          <h3>使用现成的登录页模板</h3>
          <h3>快速启动您的项目</h3>
          <div className='right-button-line'>
            <div className='right-button'>
              <Image
                width={18}
                height={18}
                src='https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/login-page-templates/icons8-google.png'
                alt=''
              />
              <span>谷歌登录</span>
            </div>
            <div className='right-button'>
              <Image
                width={18}
                height={18}
                src='https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/login-page-templates/Shape.png'
                alt=''
              />
              <span>GitHub登录</span>
            </div>
          </div>
          <div className='underline-input-container'>
            <label className='underline-input-label'>用户名</label>
            <input
              className='underline-input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='underline-input-container'>
            <label className='underline-input-label'>邮箱</label>
            <input
              className='underline-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='underline-input-container'>
            <label className='underline-input-label'>密码</label>
            <input
              className='underline-input'
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='sign-line'>
            <div>
              <input
                type={'checkbox'}
                className='sign-checkbox'
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className='user-text'>我同意接受用户条款</span>
            </div>
            <button className='sign-button'>注册</button>
          </div>
          <div className='jump-line'>
            <span className='user-text'>已有账号？</span>
            <span className='jump-text'>去登录</span>
          </div>
        </div>
      </div>
    </main>
  );
}
