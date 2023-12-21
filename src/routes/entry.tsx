import { Button,Paper } from "@mui/material";
import { Link } from "react-router-dom";
import IconPositionTabs from "../pages/alllessons";



export const Jio ={
    path:"/",
    element: <>
<Paper>
  <center>
<br /><br /><br />
<Link to='/pug'>
<Button variant="outlined" >Lessons</Button>
</Link>
<Button variant="contained" >Project</Button>
<br/><br /><br /><br />
</center>
</Paper>
</>
}

export const Topics={
    path:'/pug',
    element:<> 
    <IconPositionTabs/>
    
    </>
}