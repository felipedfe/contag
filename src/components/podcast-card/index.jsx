import { AiOutlineSpotify } from 'react-icons/ai';
import { RiDownloadLine } from 'react-icons/ri';
import podcastThumb1 from '../../assets/images/thumb-podcast-1.jpg';

const PodcastCard = () => {
  return (
    <>
      <p>podcast card</p>
      <img src={podcastThumb1}/>
      <AiOutlineSpotify size={40} color='#8f401c' />
      <RiDownloadLine size={40} color='#8f401c' />

    </>
  )
};

export default PodcastCard;
