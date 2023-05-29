import React, { useState, useEffect } from 'react';
import axios from "axios";
import Silla from '../components/silla';
import Timer from '../components/Timer';

function Bus() {
  let content = null;

  const url = 'http://localhost:5000/api/busInfo/6474549c1f775508d9b04a78';
  let reset = false
  const [busInfo, setBusInfo] = useState({
    loading: false,
    data: null
  });
  let sillasList = null;
  useEffect(() => {
    setBusInfo({
      loading: true,
      data: null
    });
    axios.get(url).then((res) => {
      setBusInfo({
        loading: false,
        data: res.data
      });
    });
  }, [reset]);

  if (busInfo.loading) {
    content = <p>Loading...</p>;
  }

  if (busInfo.data) {
    sillasList = busInfo.data.sillas;
    content = (
      <div className='text-center'>
        <h3 >Ruta: Bogota - Chia</h3>
        <div className='justify-items-center justify-center grid grid-cols-3 gap-1 w-full'></div>
            <div>
                <Timer tiempoRestante={busInfo.data.tiempoRestante}/>
            </div>
        <div/>
        <br/>
        <div className='justify-items-center w-full'>

            <div className='legend justify-items-center justify-center grid grid-cols-3 gap-1 w-full'>
            <p>
                <svg class="available" width="20" height="20">
                    <use href="#available"></use>
                </svg>
                <span>
                    Available
                </span>
            </p>
            <p>
                <svg class="reserved" width="20" height="20">
                    <use href="#reserved"></use>
                </svg>
                <span>
                    Disabled
                </span>
            </p>
            <p>
                <svg class="selected" width="20" height="20">
                    <use href="#selected"></use>
                </svg>
                <span>
                    Used
                </span>
            </p>
            </div>
        </div>
        <br/>

        <div>
            <Silla tieneSobrepeso={busInfo.data.tieneSobrepeso} sillas={sillasList} />
        </div>
        <svg display="none" viewBox="1 1 100000 1">
            <symbol id="available" viewBox="0 0 100 100" >
            <defs>
                    <clipPath
                        id="clip">
                        <circle
                            cx="50"
                            cy="50"
                            r="50">
                        </circle>
                    </clipPath>
                </defs>
                <g
                    fill="currentColor">
                    <circle
                        cx="50"
                        cy="50"
                        r="50">
                    </circle>
                    <g clip-path="url(#clip)"
                        fill="#000"
                        opacity="0.12">
                        <circle
                            cx="50"
                            cy="42"
                            r="15">
                        </circle>
                        <circle
                            cx="50"
                            cy="110"
                            r="40">
                        </circle>
                    </g>
                </g>
            </symbol>
            <symbol id="reserved" viewBox="0 0 100 100">
                <defs>
                    <clipPath
                        id="clip">
                        <circle
                            cx="50"
                            cy="50"
                            r="50">
                        </circle>
                    </clipPath>
                </defs>
                <g
                    fill="currentColor">
                    <circle
                        cx="50"
                        cy="50"
                        r="50">
                    </circle>
                    <g clip-path="url(#clip)"
                        fill="#000"
                        opacity="0.12">
                        <circle
                            cx="50"
                            cy="42"
                            r="15">
                        </circle>
                        <circle
                            cx="50"
                            cy="110"
                            r="40">
                        </circle>
                    </g>
                </g>
            </symbol>
            <symbol id="selected" viewBox="0 0 100 100">
            <defs>
                    <clipPath
                        id="clip">
                        <circle
                            cx="50"
                            cy="50"
                            r="50">
                        </circle>
                    </clipPath>
                </defs>
                <g
                    fill="currentColor">
                    <circle
                        cx="50"
                        cy="50"
                        r="50">
                    </circle>
                    <g clip-path="url(#clip)"
                        fill="#000"
                        opacity="0.12">
                        <circle
                            cx="50"
                            cy="42"
                            r="15">
                        </circle>
                        <circle
                            cx="50"
                            cy="110"
                            r="40">
                        </circle>
                    </g>
                </g>
            </symbol>
        </svg>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Bus;
