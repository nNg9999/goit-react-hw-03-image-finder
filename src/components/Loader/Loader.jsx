import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


export default function Loader() {
  return (
    <div className="Spinner">
      <Spinner
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100} />
    </div>
  );
}





