// react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// img
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';

export const Slide = () => {
  const EnhancedSwipeableViews = autoPlay(SwipeableViews);
  // JSX
  return (
    <EnhancedSwipeableViews enableMouseEvents interval={5000}>
      <img src={Img1} alt='Image' className='img-st' />
      <img src={Img2} alt='Image' className='img-st' />
      <img src={Img3} alt='Image' className='img-st' />
    </EnhancedSwipeableViews>
  );
};
