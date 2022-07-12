import React from 'react'
import './Char_info.css'

function Char_info({content}) {
  return (
    <div className="max-info">
        <div className="info-container">
            <div className="info-container-left">
                <img src={`${content.thumbnail.path}/portrait_incredible.${content.thumbnail.extension}`} alt={`${content.name}`}></img>
            </div>
            <div className="info-container-right">
                <h1>{content.name}</h1>
                <p>{content.description}</p>
                <div className='info-ls'>
                    <div className='info-comics'>
                        <h2>Comics</h2>
                        <ul>
                            {content.comics.items.map((item, index) => {return <li key={index}>{item.name}</li>})}
                        </ul>
                    </div>
                    <div className='info-series'>
                        <h2>Series</h2>
                        <ul>
                            {content.series.items.map((item, index) => {return <li key={index}>{item.name}</li>})}
                        </ul>
                    </div>
                    <div className='info-stories'>
                        <h2>Stories</h2>
                        <ul>
                            {content.stories.items.map((item, index) => {return <li key={index}>{item.name}</li>})}
                        </ul>
                    </div>
                    <div className='info-events'>
                        <h2>Events</h2>
                        <ul>
                            {content.events.items.map((item, index) => {return <li key={index}>{item.name}</li>})}
                        </ul>
                    </div>
                    <div className='info-stories'>
                        <h2>Stories</h2>
                        <ul>
                            {content.stories.items.map((item, index) => {return <li key={index}>{item.name}</li>})}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Char_info