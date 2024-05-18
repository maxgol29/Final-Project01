import {Footer, MainNavbar} from '../components/components'
import video from '../images/Other/IphoneVideo.mp4'



function WithoutCatalog() {
  return (
    <div>
        <MainNavbar />
            <div className='w-full'>
                <video className='w-full h-auto' loop autoPlay playsInline> 
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
        <Footer />

    </div>
  )
}

export default WithoutCatalog
