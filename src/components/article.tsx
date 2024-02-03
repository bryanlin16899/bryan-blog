import React from 'react';

interface Article {
    title: string;
    description: string;
}

interface ArticleListButtonProps {
    article: Article;
}

const ArticleListButton: React.FC<ArticleListButtonProps> = ({ article }) => {
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {/* Add button functionality here */}
        </div>
    );
};

export default ArticleListButton;
