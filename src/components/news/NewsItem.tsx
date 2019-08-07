import React, { Component } from "react";
import { Article } from "../../entities/Article";
import './NewsItem.css';
import history from '../../constants/history';

export interface IProps{
    item: Article;
}

export interface IState extends Article{
    
}

export default class NewsItem extends Component<IProps, IState> {

    public render() {
        const article = this.props.item;
        return (
            <div className="Article">
                <div></div>
                <div className="ArticleTitle">
                    <h2>{article.title}</h2>
                </div>
                <img src={"data:image/gif;base64," + article.smallImage} alt="Logo"/>
                <div>{article.shortDescription}</div>
                <button className="moreBtn" onClick={()=> this.handleClick(article)}>More ...</button>
            </div>
        );
    }

    handleClick(article: Article)  {
        history.push("/detailed/" + article.id, {article: article});
    }
}