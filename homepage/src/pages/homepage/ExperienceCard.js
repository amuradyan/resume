import { useState } from 'react';
import Chip from '@mui/material/Chip';
import { Typography, Box } from '@mui/material';

function ExperienceCard({ company, logo, role, period, brief, tech }) {
  const [imageError, setImageError] = useState(false);

  const getInitials = (companyName) => {
    const words = companyName.split(' ');
    if (words.length === 1) {
      return companyName.substring(0, 2).toUpperCase();
    }
    return words.map(word => word[0]).join('').substring(0, 2).toUpperCase();
  };

  const getBackgroundColor = (companyName) => {
    const colors = [
      '#4A90E2', '#E24A4A', '#4AE290', '#E2C44A',
      '#9B4AE2', '#E24A9B', '#4AE2C4', '#E2904A'
    ];
    const index = companyName.length % colors.length;
    return colors[index];
  };

  return (
    <div className="experience-card">
      <div className="experience-card-left">
        {imageError ? (
          <div
            className="experience-logo-placeholder"
            style={{ backgroundColor: getBackgroundColor(company) }}
          >
            <span>{getInitials(company)}</span>
          </div>
        ) : (
          <img
            src={logo}
            alt={`${company} logo`}
            className="experience-logo"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="experience-card-right">
        <div className="experience-card-header">
          <div>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
              {role}
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', marginBottom: 1 }}>
              {company}
            </Typography>
          </div>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
            {period}
          </Typography>
        </div>
        <Typography sx={{ marginBottom: 2, lineHeight: 1.6 }}>
          {brief}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {tech.map((tool, index) => (
            <Chip
              key={index}
              color="info"
              variant="outlined"
              size="small"
              label={tool}
            />
          ))}
        </Box>
      </div>
    </div>
  );
}

export default ExperienceCard;
