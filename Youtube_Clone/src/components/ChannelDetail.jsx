import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  }, [id])
  return (
    <Box>
      <Box minHeight="95vh">
        <div style={{backgroundColor: '#8EC5FC',
 backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
, zIndex:10, height:'300px'}}>
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box> 
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos={videos}/>
      </Box>
      </Box>
  )
}

export default ChannelDetail
