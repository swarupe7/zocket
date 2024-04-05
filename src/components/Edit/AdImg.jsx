import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { adImage } from '../../app/adSlice.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from '@fortawesome/free-solid-svg-icons'


function AdImg() {

    const [adimage,setAdImage] = useState()
    const [imgname,setImgName] = useState()
    const dispatch = useDispatch()

    const imageHandler = (e) => {
        const filename = (e.target.value).split('\\')
        setImgName(filename[2])
        const imgurl = URL.createObjectURL(e.target.files[0])
        setAdImage(imgurl)
    }
    
    useEffect(() =>{
        dispatch(adImage(adimage))
    },[adimage,dispatch])

  return (
    <div className='flex items-center h-14 w-5/6 sm:w-4/5 border-2 border-slate-300 rounded-lg'>
      <input type="file" id="image-input" hidden onChange={(e)=>imageHandler(e)} />
      <FontAwesomeIcon icon={faFileImport} className="m-2 cursor-pointer"/>
      <label className='text-sm text-slate-500' >Change the ad creative image.</label>
      <label htmlFor="image-input" className='ml-1 text-sm text-blue-700 font-semibold cursor-pointer underline underline-offset-1'>select file</label>
      <label className='text-xs ml-3 text-slate-500 truncate w-[10rem]' >{imgname}</label>
    </div>
  )
}

export default AdImg
