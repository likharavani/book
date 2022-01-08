import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import img1 from "../public/img.jpg";

import { faArrowLeft, faChevronLeft, faChevronRight, faExpandAlt, faExpandArrowsAlt, faPaintBrush, faSearch, faShareAlt } from '@fortawesome/free-solid-svg-icons';

export default function Layout() {
    return (
        <>
            <div className="container">
                <div className="row p-4 ">
                    <div className="col-8">
                        <div className="bg-secondary text-white d-flex p-2 justify-content-between align-items-center">
                            <div>
                                <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
                            </div>
                            <div>
                                <input type="range" class="form-range " id="customRange1" />
                            </div>
                            <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
                            <div className=''>
                                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                                <input type="number" className='w-25 mx-2'></input>
                                <span className='mx-2'>/100</span>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                            <div>
                                <input type="search" className='w-25 mx-2'></input>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </div>

                        </div>
                        <div>
                            <div className='border'>
                                <Image src={img1} className='img-fluid'></Image>
                            </div>
                        </div>
                    </div>
                    <div className="col-4  py-2 bg-secondary text-white ">
                        <div className=''>
                            <span><FontAwesomeIcon icon={faPaintBrush} className='mx-2'></FontAwesomeIcon>Styling</span>
                            <div className="d-flex justify-content-between my-2">
                                <span>Background Image </span>
                                <input type="file" ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Branding Image </span>
                                <input type="file" ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Branding Url </span>
                                <input type="text"  ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Stretched Background </span>
                                <input type="checkbox"  ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Background Color </span>
                                <input type="text"  ></input>
                            </div>

                            <div className="d-flex justify-content-between my-2">
                                <span>Background Alpha </span>
                                <input type="number" style={{ width: "36px", height: "30px" }} value="1"></input>
                                <input type="range" class="form-range w-25" id="customRange1" />
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Gradient Colors </span>
                                <div >
                                    <input type="text"  ></input>
                                    <input type="text"  ></input>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Page Shadows </span>
                                <input type="checkbox"  ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Arrow Color</span>
                                <input type="text"  ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Arrow Size</span>
                                <input type="number" style={{ width: "36px", height: "30px" }} value="1"></input>
                                <input type="range" class="form-range w-25" id="customRange1" />
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Panel Color</span>
                                <input type="text"  ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Panel Alpha</span>
                                <input type="number" style={{ width: "36px", height: "30px" }} value="1"></input>
                                <input type="range" class="form-range w-25" id="customRange1" />
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Link Color</span>
                                <input type="text"  ></input>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Link Alpha</span>
                                <input type="number" style={{ width: "36px", height: "30px" }} value="1"></input>
                                <input type="range" class="form-range w-25" id="customRange1" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}