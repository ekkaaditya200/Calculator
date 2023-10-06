import React, { useEffect, useRef } from 'react'
import './Header.css';

const Header = (props) => {
  const resultRef = useRef();
  const expressionRef = useRef();
  
  //UseEffect run after the return run
  useEffect(() => {
    // resultRef.current.scrollIntoView({behavior:"smooth"});
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression])

  return (
    <div className='header custom-scroll'>
      <div className='header_history'>
        {
          props.history?.map((item, index) => <p key={item + Math.random() * 20}>{item}</p>)
        }
      </div>

      <div ref={expressionRef} className='header_expression custom-scroll'>
        <p>{props.expression}</p>
      </div>

      <p ref={resultRef} className='header_result'>
        {props.result}
      </p>

    </div>
  )
}

export default Header;
