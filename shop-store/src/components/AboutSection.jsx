import React from 'react'
import '../index.css'

function AboutSection() {
  return (
    <div className=''>
      <div className='w-full text-center '>
        <h1 className='m-28 text-5xl font-bold'>About TechShed</h1>
        <hr className='border-stone-300 border-[1px] w-10/12 m-auto flex-nowrap'/>
      </div>
      <div className='m-auto flex flex-row w-10/12 flex-nowrap h-[674px] my-24'>
        <div className="w-1/2 overflow-hidden h-full bg-center bg-[url('https://static.wixstatic.com/media/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg/v1/fill/w_1569,h_1011,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg')]">

        </div>
        <div className='w-[400px] m-auto'>
            <p className='m-auto text-lg'>                
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p><br />
                <p className='m-auto text-lg'>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
        </div>
      </div>
      <hr className='border-stone-300 border-[1px] w-10/12 m-auto flex-nowrap'/>
    </div>
  )
}

export default AboutSection
