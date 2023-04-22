import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNews from './CategoryNews';

const FindCategory = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            {
                categoryNews.map(news => <CategoryNews 
                    key={news._id} 
                    news ={news}> 
                    </CategoryNews>)
            }
        </div>
    );
};

export default FindCategory;