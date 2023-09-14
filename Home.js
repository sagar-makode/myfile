import React from 'react';
import img from '../images/photo.png';
import './Home.css'; // Import a CSS file to apply styling

function Home() {
    return (
        <div >



            <img src={img} alt="Responsive" className="responsive-image" />

            <div className='tools container'>
                <div className='overlay-container '>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-solid fa-image fa-flip text-primary mb-4"></i>
                            <h5 className="mb-3">Compress Image</h5>
                            <p className="m-0">Reduce Your Image Size Using This Tool</p>
                        </div>
                    </div>
                </div>
                <div className='overlay-container '>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-solid fa-image fa-flip text-primary mb-4"></i>
                            <h5 className="mb-3">Compress Image</h5>
                            <p className="m-0">Reduce Your Image Size Using This Tool</p>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-solid fa-image fa-flip text-primary mb-4"></i>
                            <h5 className="mb-3">Compress Image</h5>
                            <p className="m-0">Reduce Your Image Size Using This Tool</p>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-solid fa-image fa-flip text-primary mb-4"></i>
                            <h5 className="mb-3">Compress Image</h5>
                            <p className="m-0">Reduce Your Image Size Using This Tool</p>
                        </div>
                    </div>
                </div>





            </div>

        </div>
    );
}

export default Home;
