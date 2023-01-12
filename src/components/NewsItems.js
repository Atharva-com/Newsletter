import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        const { title, description, imageUrl, newsUrl, source, publishDate} = this.props;
        return (
            <div>
                <div className="card" style={{ width: '21rem' }}>
                    <button type="button" className="d-flex justify-content-center align-items-center btn position-absolute top-0 start-50 translate-middle bg-dark" style={{width: '19rem', height: '2.5rem', color: 'white', fontSize: '1.1rem', letterSpacing: '0.1rem'}}>
                        Source : {source} 
                    </button>
                    <img src={imageUrl} className="card-img-top" style={{ height: '10rem' }} alt="..." />
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-light">{title} ...</h5>
                        <p className="card-text text-secondary">{description} ...</p>
                        <h6 className="card-text text-danger">Published At : {publishDate}</h6>
                        <a href={newsUrl} target={"_blank"} rel="noreferrer" className="btn btn-outline-warning mt-3">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems