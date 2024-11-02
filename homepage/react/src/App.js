import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="sections"
      hidden={value !== index}
      id={`section-${index}`}
      aria-labelledby='sections-${index}'
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `section-${index}`,
    'aria-controls': `sections-${index}`,
  };
}

const MyTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(30)
}));

function Content() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="none"
      >
        <MyTab label="About me" {...a11yProps(0)} />
        <MyTab label="Projects" {...a11yProps(1)} />
        <MyTab label="Education" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Projects />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Education />
      </TabPanel>
    </Box>
  );
}

function Homepage() {
  return (
    <div style={{ background: '#cbf3d9' }}>
      <Content />
    </div>
  );
}

export default Homepage;
