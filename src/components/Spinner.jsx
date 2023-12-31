import './Spinner.css'

import { useState } from 'react'
import { useEffect } from 'react'

export const Spinner = (daytime) => {
  console.log(daytime)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(spinnerTimeout);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className={`spinner ${daytime.className} ${visible ? ' visible' : ''}`}>
      <div className="spinner-wrapper">
        <img src="assets/images/spinner.png" alt="spinner" />
        <div class="loader-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  )
}
