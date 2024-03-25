import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { FiTablet } from 'react-icons/fi';

import './App.css';
import pcImg from './assets/oldComputer.png';

function App() {
  const [urlSite, setUrlSite] = useState('');
  const [viewDevices, setViewDevices] = useState(false);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [showIframe, setShowIframe] = useState(false);

  function CaptureValue(width, height) {
    setWidth(width);
    setHeight(height);
    setShowIframe(true);
  }

  return (
    <div className="App">
      <img src={pcImg} />

      <h1>Verificador de site responsivo</h1>
      <p>Visualize instantaneamente o seu site responsivo e veja como ele fica nos dispositivos mais populares (celular, tablet e computador) ou em resoluções personalizadas.</p>

      <div className="interactionUser">
        <input
          type="text"
          name="urlSite"
          placeholder="URL do site"
          value={urlSite}
          onChange={e => setUrlSite(e.target.value)}
        />
        <button onClick={() => setViewDevices(true)}>Testar site</button>
      </div>

      {viewDevices &&
        <div className="devicesContainer">
          <div className="devices">
            <div className="deviceEspecifc">
              <button onClick={() => CaptureValue(768, 1024)}>
                <FiTablet size={30} color="#fff" />

                <h3>Ipad Mini</h3>
                <p>768 x 1024</p>
              </button>
            </div>

            <div className="deviceEspecifc">
              <button onClick={() => CaptureValue(1024, 768)}>
                <FiTablet size={30} color="#fff" />

                <h3>Ipad Mini Horizontal</h3>
                <p>1024 x 768</p>
              </button>
            </div>

            <div className="deviceEspecifc">
              <button onClick={() => CaptureValue(320, 480)}>
                <FiTablet size={30} color="#fff" />

                <h3>Iphone 4</h3>
                <p>320 x 480</p>
              </button>
            </div>

            <div className="deviceEspecifc">
              <button onClick={() => CaptureValue(414, 736)}>
                <FiTablet size={30} color="#fff" />

                <h3>Iphone 7 Plus</h3>
                <p>414 x 736</p>
              </button>
            </div>

            <div className="deviceEspecifc">
              <button onClick={() => CaptureValue(360, 640)}>
                <FiTablet size={30} color="#fff" />

                <h3>Samsung S6</h3>
                <p>360 x 640</p>
              </button>
            </div>
          </div>

          <div className="iframes">
            {showIframe &&
              <Iframe url={urlSite}
                width={width}
                height={height}
              />
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
