import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const formattedDate = new Date(snippet?.publishedAt).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 1 }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} 
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }} 
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '150px' }}>
        <Link to={videoId ? `/video/${videoId}` : '#'}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '#'} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "white", ml: "5px" }} />
          </Typography>
          <Typography variant="subtitle3" color="gray">
            {snippet?.description.slice(0, 70)}. . .
          </Typography>
          <Typography variant="subtitle4" color="gray" >
            {formattedDate}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
