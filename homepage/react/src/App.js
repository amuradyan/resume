import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AboutMe from './pages/AboutMe';
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

function UnderConstruction() {
  return (
    <div>
      <div class="construction-banner">= = under construction = = = = =</div>
      <div class="yellow-tape">= = = = = = = = = = = = = = = = = = =</div>
    </div>
  );
}

function Content() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{
      width: '80%',
      marginTop: '5%',
      marginLeft: '10%',
      marginRight: '10%',
    }}>
      <UnderConstruction />

      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="none"
      >
        <MyTab label="About me" {...a11yProps(0)} />
        <MyTab label="Projects" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects />
      </TabPanel>
    </Box>
  );
}

function Homepage() {
  return (
    <div>
      <Content />
    </div>
  );
}

export default Homepage;
