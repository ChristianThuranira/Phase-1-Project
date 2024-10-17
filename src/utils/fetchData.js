// src/utils/fetchData.js

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e50ea60f84msh646bc6674476364p13b694jsne6b76a172ca0', // Your API key
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_YOUTUBE_API_KEY', // Replace with your YouTube API key
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};
