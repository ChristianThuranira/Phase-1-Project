import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const isSelected = bodyPart === item;

  // Common styles
  const cardStyles = {
    background: '#fff',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '282px',
    cursor: 'pointer',
    gap: '47px',
    borderTop: isSelected ? '4px solid #FF2625' : 'none', // Conditional border for selected state
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={cardStyles} // Using the defined styles
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt={`${item} icon`} style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
