import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import xooth_logo from "../Asset/xooth_logo.png";
import axios from 'axios';


export default function Newscontent() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]); // State to hold comments
  const [newComment, setNewComment] = useState(''); // State for new comment input
  const [likes, setLikes] = useState(0); // State to track likes

  // Fetch the news content by ID
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://xooth-backend.onrender.com/api/getNewsById/${id}`);
        if (response.data.status === 'ok' && response.data.data) {
          setNewsItem(response.data.data);
        } else {
          setError('No news found');
        }
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/getCommentsByNewsId/${id}`);
        if (response.data.status === 'ok' && response.data.comments) {
          setComments(response.data.comments);
        }
      } catch (err) {
        console.error('Error fetching comments:', err.message);
      }
    };

    fetchNews();
    fetchComments();
  }, [id]);

  // Handle new comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment) return;

    try {
      const response = await axios.post(`http://localhost:3500/api/addComment`, {
        newsId: id,
        comment: newComment
      });

      if (response.data.status === 'ok') {
        setComments([...comments, response.data.comment]);
        setNewComment('');
      }
    } catch (err) {
      console.error('Error adding comment:', err.message);
    }
  };

  // Handle likes
  const handleLike = () => {
    setLikes(likes + 1);
    // Optionally send the like to the backend to persist it
    axios.post(`http://localhost:3500/api/addLike`, { newsId: id });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!newsItem) return <div>No news found</div>;

  return (
    <div>
      <section>
        <header className='bg-white w-full h-[4rem] shadow-lg'>
          <span className='xl:-mt-12'>
            <img src={xooth_logo} alt='' className='w-[15%] xl:w-[5%] m-2 p-2'/>
          </span>
        </header>
      </section>
      <div className='w-[100%] flex flex-col md:flex-row'>
        <div className='w-[100%] xl:w-[70%]'>
          <h1 className="font-bold xl:text-5xl w-full text-xl p-4 pt-[2rem] m-2">
            {newsItem.news_headline || 'No Headline'}
          </h1>
          <img 
            src={newsItem.image_url || newsItem.image} 
            alt={newsItem.news_headline || 'No Alt Text'} 
            className="w-full xl:w-full m-2 h-auto"
          />
          <p className="font-normal text-[16px] p-4 xl:w-full text-justify">
            {newsItem.content || 'No Content'}
          </p>
          {newsItem.publish_date && (
            <p className="text-sm p-2">
              Published on: {new Date(newsItem.publish_date).toLocaleString()}
            </p>
          )}
          
          {/* Like button */}
          <div className='flex items-center p-4'>
            <button 
              onClick={handleLike} 
              className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
            >
              Like
            </button>
            <span className='ml-4 text-xl'>{likes} Likes</span>
          </div>

          {/* Comments section */}
          <div className='p-4'>
            <h2 className='font-semibold text-2xl mb-4'>Comments</h2>
            
            {/* Display existing comments */}
            {comments.length > 0 ? (
              <ul className='space-y-4'>
                {comments.map((comment, index) => (
                  <li key={index} className='bg-gray-100 p-4 rounded'>
                    <p>{comment.comment}</p>
                    <p className='text-sm text-gray-500'>
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
            
            {/* New comment form */}
            <form onSubmit={handleCommentSubmit} className='mt-4'>
              <textarea 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder='Add a comment...'
                className='w-full p-2 border rounded'
              />
              <button 
                type='submit' 
                className='bg-green-500 text-white p-2 mt-2 rounded hover:bg-green-600'
              >
                Submit Comment
              </button>
            </form>
          </div>
        </div>

        <div>
          <h1>Place Advert Here</h1>
        </div>
        
      </div>
    </div>
  );
}
