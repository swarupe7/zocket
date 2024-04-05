import Canvas from './Canvas'
import { useSelector } from 'react-redux';
import './bg.css'

const Display = () => {
   
  const adInfo = useSelector((state) => state.ad)
  
   
  return (
    <div class="diagonal-lines">
      <div className="content">
    <div className='sm:w-1/2 w-screen sm:h-screen h-[30rem] flex justify-center items-center'>
     
    
      
    <Canvas adInfo={adInfo}/>
    </div>
    </div>

    </div>
  )
}
export default Display