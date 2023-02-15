import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi';


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
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Search