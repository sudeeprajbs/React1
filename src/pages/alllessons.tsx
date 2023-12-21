import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Hook } from '../components/Hook';
import { Filter1, Filter2, Filter3, Filter4 } from '@mui/icons-material';

export default function IconPositionTabs() {
    const [value, setValue] = useState('1');
  
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    }
   return <>
    <TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example">
      <TabList>
      <Tab icon={<Filter1 />} label="Use state" value={'1'}/>
      <Tab icon={<Filter2 />} iconPosition="top" value={'2'} label="Use effect" />
      <Tab icon={<Filter3 />} iconPosition="top" value={'3'} label="Social share" />
      <Tab icon={<Filter4 />} iconPosition="top" value={'4'} label="Lesson4" />
      </TabList>
    </Tabs>
    <TabPanel value={'1'}><Hook/></TabPanel>
    <TabPanel value={'2'}> <h1>lesson 2</h1></TabPanel>
    <TabPanel value={'3'}> <h1>lesson 3</h1></TabPanel>
    <TabPanel value={'4'}> <h1>lesson 4</h1></TabPanel>

    </TabContext>
    </>
}      