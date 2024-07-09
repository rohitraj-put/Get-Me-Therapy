import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    };

    fetchQuote();
    const intervalId = setInterval(fetchQuote, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className='text-center mt-8 px-16'>{quote}</p>
    </div>
  );
};

export default Quotes;
