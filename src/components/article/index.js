import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../image";
import './styles.css';

const Article = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulArticleData {
                nodes {
                    description {
                        description
                    }
                }
            }
            contentfulAsset(id: {eq: "0fbc6ffe-12d0-5751-865d-e91bea4631ba"}) {
                id
                title
                file {
                    url
                }
            }
            allContentfulTextarea {
                nodes {
                    updatedAt(fromNow: true)
                    id
                }
            }
        }
    `);
    
    const url = data?.contentfulAsset?.file?.url;
    const title = data?.contentfulAsset?.title;
    const articles = data?.allContentfulArticleData?.nodes || [];

    return <div>
        <h2>{title}</h2>
        <Image src={url} alt={title} />
        {articles.map(item => <p key={item?.id}>{item?.description?.description}</p>)}
    </div>
}

export default Article;