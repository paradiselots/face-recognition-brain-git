import React from 'react'

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>{'This magic brain will detect faces in your images. Give it a try!'}</p>
            <input className='f4 pa2 w-70 center' type='text' placeholder='paste image url here.'></input>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >Detect</button>
        </div>
    )
}

export default ImageLinkForm
