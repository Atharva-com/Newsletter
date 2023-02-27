import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pageSize: '9',
        country: 'in',
        category: 'general'
    }

    static propsTypes = {
        pageSize: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }

    capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("I am a constructor from News component.")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 0
        }
        document.title = `NewsApp - ${this.capitalize(this.props.category)} - ${document.title}`
    }

    async updateNews() {
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        const data = await fetch(url)
        this.props.setProgress(30)
        const parsedData = await data.json()
        this.props.setProgress(70)
        this.setState({ articles: parsedData.articles, totalResult: parsedData.totalResults, loading: false })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.updateNews()
    }

    // handlePrevClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updateNews()
    // }

    // handleNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.updateNews()
    // }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        const data = await fetch(url)
        const parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResult: parsedData.totalResults,
            page: this.state.page + 1,
            loading: false
        })
    };
    render() {
        return (
            <>
                <h1 className="text-center container pt-5 mt-5" style={{ fontWeight: '600' }}>NewsApp - Top {this.props.heading} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={this.state.articles.length !== this.state.totalResult && <Spinner />} >

                    <div className="container my-5">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-sm-4 col-12 d-flex justify-content-center my-5" key={element.url}>
                                    <NewsItems title={element.title ? element.title.slice(0, 40) : "Nigerian agritech Releaf gets more capital as it launches new Tech for..."} description={element.description ? element.description.slice(0, 80) : "Releaf, a Nigerian agritech that supplies ingredients to food has recieved $3.3 million in an..."} imageUrl={!element.urlToImage ? "https://techcrunch.com/wp-content/uploads/2023/01/7813F47F-27F7-4F35-A904-CEA743E3FC33.jpeg" : element.urlToImage} newsUrl={element.url} source={element.source.name} publishDate={element.publishedAt} />
                                </div>

                            })}
                            {/* {!this.state.loading && this.state.articles.map((element) => {
                                    return <div className="col-sm-4 col-12 text-center my-5" key={element.url}>
                                        <NewsItems title={element.title?element.title.slice(0, 40):"Nigerian agritech Releaf gets more capital as it launches new Tech for..."} description={element.description?element.description.slice(0, 80):"Releaf, a Nigerian agritech that supplies ingredients to food has recieved $3.3 million in an..."} imageUrl={!element.urlToImage?"https://techcrunch.com/wp-content/uploads/2023/01/7813F47F-27F7-4F35-A904-CEA743E3FC33.jpeg":element.urlToImage} newsUrl={element.url} source={element.source.name} publishDate={element.publishedAt}/>
                                    </div>

                                })} */}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-between my-3 mx-3">
                    <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News