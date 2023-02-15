import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';


const Search = () => {
    return (
        <div className='search container section'>
            <div className='sectionContainer grid'>

                <div className='btns flex'>
                    <div className='signleBtn'>
                        <span >Economy</span>
                    </div>

                    <div className='signleBtn'>
                        <span >Buniness Class</span>
                    </div>
                    <div className='signleBtn'>
                        <span >First class</span>
                    </div>

                </div>

                <div className='searchInputs flex'>
                    <div className='singleInput flex'>
                        <div className='iconDiv'>
                            <HiOutlineLocationMarker className='icon' />
                        </div>
                        <div className='texts'>
                            <h4>Location</h4>
                            <input type="text" placeholder='Where do you want to go' />
                        </div>
                    </div>

                    <div className='singleInput flex'>
                        <div className='iconDiv'>
                            <RiAccountCircleLine className='icon' />
                        </div>
                        <div className='texts'>
                            <h4>Travelers</h4>
                            <input type="text" placeholder='Add guests' />
                        </div>
                    </div>

                    <div className='singleInput flex'>
                        <div className='iconDiv'>
                            <RxCalendar className='icon' />
                        </div>
                        <div className='texts'>
                            <h4>Check In</h4>
                            <input type="text" placeholder='Add date' />
                        </div>
                    </div>

                    <div className='singleInput flex'>
                        <div className='iconDiv'>
                            <RxCalendar className='icon' />
                        </div>
                        <div className='texts'>
                            <h4>Check Out</h4>
                            <input type="text" placeholder='Add date' />
                        </div>
                    </div>

                    <button className='btn btnBlock flex'>Search Fight</button>

                </div>

            </div>

        </div>
    )
}

export default Search