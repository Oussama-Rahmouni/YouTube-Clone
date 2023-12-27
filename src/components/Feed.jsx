import { Typography } from "@mui/material";
import Sidebar  from "./Sidebar";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

const Feed = () => (
  <Stack sx={{flexDirection:{ sx:
  "column", md:"row"}}}>
    <Box sx={{height: {
      sx:"auto", md:'92vh'
    }, borderRight: '1px solid #3d3d3d', px: { sx:0, md:2 }}}>
      <Sidebar /> 
      <Typography className="copyright"
      variant="body2" sx={{mt:1.5, color:'#fff'}}>
          copy right oussama rahmouniS
      </Typography>
    </Box>
  </Stack>
  )


export default Feed;
