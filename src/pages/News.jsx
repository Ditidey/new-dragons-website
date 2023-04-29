import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from './EditorInsights';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, author, image_url, category_id } = news;
    return (
        <> 
        <Card>
            <Card.Img variant="top" src={image_url}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                     {details}
                </Card.Text>
                 <Link to={`/category/${category_id}`}>
                 <Button variant="danger"><FaArrowLeft></FaArrowLeft> All Category News in Back</Button>
                 </Link>
            </Card.Body>
        </Card>
        <EditorInsights></EditorInsights>
        </>
    );
};

export default News;