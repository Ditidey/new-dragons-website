import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryNews = ({ news }) => {
    const { _id, title, details, author, image_url, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
            <Image style={{height:"50px"}} src={author?.img} roundedCircle />
            <div className='ps-2 flex-grow-1'>
                <p className='mb-0 '>{author?.name}</p>
                <p>{moment(author?.published_date).format('YYYY-MM-D')}</p>
            </div>
            <div>
               <FaBookmark></FaBookmark>
               <FaShareAlt></FaShareAlt>
            </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}.... 
                    <Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
                 
            </Card.Body>
            <Card.Footer className="d-flex align-items-center">
                <div className='flex-grow-1'>
                     <Rating
                     placeholderRating={rating?.number} 
                     readonly
                     emptySymbol={<FaStar></FaStar>}
                     placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                     fullSymbol={<FaStarHalfAlt className='text-white'></FaStarHalfAlt>}
                     >

                     </Rating>
                     <span className='ms-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CategoryNews;