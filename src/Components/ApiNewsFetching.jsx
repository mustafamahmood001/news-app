import React, { useEffect, useState } from 'react';

const url =
  'https://newsapi.org/v2/everything?q=bitcoin&apiKey=d5e0db74f26f4bb3a72e86986985a4c7';

const ApiNewsFetching = () => {

    const [isOpen, setIsOpen] = useState(false);
    
      const showPopup = () => {
        setIsOpen(true);
      };
    
      const hidePopup = () => {
        setIsOpen(false);
      };

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const data = await fetch(url);
      const dataResponse = await data.json();
      setNews(dataResponse.articles);
      console.log(dataResponse);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>

      {/* Breaking News Section */}
      <div className="breaking-news">Breaking News: Latest Updates on Bitcoin and World Events!</div>

      {/* News Section */}
      <div className="container my-4">
        <div className="row">
          {news.map((changeData, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card news-card">
                <img src={changeData.urlToImage || 'https://via.placeholder.com/300'} className="card-img-top" alt="News" />
                <div className="card-body">
                  <h5 className="card-title">{changeData.author || 'No Title Available'}</h5>
                  <p className="card-text">{changeData.title || 'No Description Available'}</p>
                  <button className="btn btn-primary" target="_blank" rel="noopener noreferrer" onClick={showPopup}>
                    Read More
                  </button>
                  {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={hidePopup}>
              &times;
            </span>
            <h5>{changeData.author}</h5>
            <h5>{changeData.title}</h5>
            <p>{changeData.description}</p>
          </div>
        </div>
      )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>&copy; 2025 News Portal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ApiNewsFetching;
