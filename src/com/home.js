import { useState,react } from 'react';
import '../App.css'
import NavBar from './parts/navbar';
const Home = ()=>{
    const [tab, settab] = useState(0)
    const work = [
        {
        name:'Apple',
        long:"Front-end Developer  Apple .Inc",
        location:'California, United States',
        time:"Nov 2020 - Present · Full-time",
        tags:JSON.stringify([{name:'Swift'},{name:'Go'}]),
        point:JSON.stringify([{name:"Improving overall website performance for mobile users."},{name:"Developing new features for the website."},{name:"Working with the team to improve the website."}])
        },        
        {
        name:'Microsoft',
        long:"CS Microsoft .Inc",
        location:'California, United States',
        time:"Dec 2019 - 2020 · Full-time",
        tags:JSON.stringify([{name:'React'},{name:'nodejs'}]),
        point:JSON.stringify([{name:"Developing new features for the website."},{name:"Working with the team to improve the website."},])
        },
        {
            name:'Apple',
            long:"Front-end Developer  Apple .Inc",
            location:'California, United States',
            time:"Nov 2020 - Present · Full-time",
            tags:JSON.stringify([{name:'Swift'},{name:'Go'}]),
            point:JSON.stringify([{name:"Improving overall website performance for mobile users."},{name:"Developing new features for the website."},{name:"Working with the team to improve the website."}])
            },        
            {
            name:'Microsoft',
            long:"CS Microsoft .Inc",
            location:'California, United States',
            time:"Dec 2019 - 2020 · Full-time",
            tags:JSON.stringify([{name:'React'},{name:'nodejs'}]),
            point:JSON.stringify([{name:"Developing new features for the website."},{name:"Working with the team to improve the website."},])
            },
            {
                name:'Apple',
                long:"Front-end Developer  Apple .Inc",
                location:'California, United States',
                time:"Nov 2020 - Present · Full-time",
                tags:JSON.stringify([{name:'Swift'},{name:'Go'}]),
                point:JSON.stringify([{name:"Improving overall website performance for mobile users."},{name:"Developing new features for the website."},{name:"Working with the team to improve the website."}])
                },        
                {
                name:'Microsoft',
                long:"CS Microsoft .Inc",
                location:'California, United States',
                time:"Dec 2019 - 2020 · Full-time",
                tags:JSON.stringify([{name:'React'},{name:'nodejs'}]),
                point:JSON.stringify([{name:"Developing new features for the website."},{name:"Working with the team to improve the website."},])
                },

]
    return(
<div className=" text-white bga ">

<NavBar />
<div className='md:flex sm:grid sm:mt-12 md:mt-32  sm:px-6 md:px-[10%]'>
<div className='w-full'>
    {/* text */}
    {/* line */}
    <div className='flex mt-2'>
    <div className="avatar lg:flex lg:justify-center w-full">
  <div className="sm:w-16 lg:w-32 mask mask-circle">
  <img src='as/zyro-image.png' className=''/>

  </div>
</div>
    </div>
    <div className='sm:text-3xl mt-8 sm:leading-[2.7rem] lg:leading-[3rem] lg:flex lg:justify-center Poppins  w-full lg:text-center lg:text-4xl'>
        <div className='lg:max-w-[50%]'>
        <span>Software <span className='text-[#7E74F1]'>designer</span>, founder, and amateur astronaut.</span>
        </div>

        {/* OMAR<span className='text-[#7E74F1]'> YOUSEF</span> */}
    </div>
    <div className='mt-5 leading-[1.7rem] lg:flex lg:justify-center w-full lg:text-center Poppins sm:px-2 md:px-0  text-[1.09rem] inter text-[#A1A1AA]'>
        <div className='lg:max-w-[40vw]'>
        <article>
    I'm omar, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
    {/* Full stack developer with expertise in React, Node.js, and Databases. Proficient in web design and cyber security. Dedicated to creating scalable and efficient solutions for complex problems.         */}
    </article>
        </div>

    </div>
    <div className='mt-6 ml-4 lg:text-center lg:justify-center w-full  flex inter text-[#F1F1F1]'>
    <i href='https://www.instagram.com/o0mrs/' className="fa-brands sm:text-3xl md:text-3xl mr-4 cursor-pointer fa-instagram"></i>
    <i href='https://github.com/o0mrs' className="fa-brands sm:text-3xl md:text-3xl mr-4 cursor-pointer fa-github"></i>
    <i href='https://twitter.com/o6mrs' className="fa-brands sm:text-3xl md:text-3xl mr-4 cursor-pointer fa-twitter"></i>
    </div>
{/* 
    <div class=" py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 text-white">Trusted by the world’s most innovative teams</h2>
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width="158" height="48"/>
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" width="158" height="48"/>
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158" height="48"/>
      <img class="col-span-2 sm:hidden lg:block max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width="158" height="48"/>
      <img class="col-span-2 sm:hidden lg:block col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width="158" height="48"/>
    </div>
  </div>
</div> */}

</div>
{/* <div className='md:ml-auto grid  place-items-center'>

    <div className='md:w-[19rem] sm:w-[64vw]  rounded-xl  -rotate-12 sm:mt-16 md:-mt-10 md:h-[22rem] sm:h-[19rem] bg-[#7E74F1]'>
    <div className='md:w-[19rem] sm:w-[64vw] rounded-xl  rotate-12  md:h-[22rem] sm:h-[19rem] bg-[#eae9e9]'></div>
    </div>
</div> */}
</div>
<div className='mt-72   inter font-bold text-3xl text-center'>
Specialized in
</div>

<div className='grid place-items-center sm:px-7 mt-20 border-blue-300  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
<div className='bg-[#ebeaea] md:w-[20rem]  h-[17rem] text-center md:mt-0  rounded-xl'>
<i className="fa-solid fa-pen-to-square text-[#7E74F1] mt-10 rounded-xl text-xl bg-[#F5F3FE] p-2 "></i>
<div className='text-[#232E35] text-md mt-3 inter'>
UI/UX Design
</div>
<div className='text-[#232E35] mt-7 inter text-sm px-10'>
UI/UX design is the process of creating intuitive and effective user interfaces and user experiences for digital products.</div>
</div>

<div className='bg-[#ebeaea] md:w-[20rem] h-[17rem] text-center sm:mt-9 md:mt-0  rounded-xl'>
<i className="fa-solid fa-code text-[#7E74F1] mt-10 rounded-xl text-xl bg-[#F5F3FE] p-2 "></i>
<div className='text-[#232E35] text-md mt-3 inter'>
Full-stack web developer
</div>
<div className='text-[#232E35] mt-7 inter text-sm px-10'>
Turn what you have in mind of a digital product into reality. For any platform you consider.</div>
</div>
<div className='bg-[#ebeaea] md:w-[20rem] h-[17rem] text-center sm:mt-9 md:mt-0  rounded-xl'>
<i className="fa-regular fa-circle-check text-[#7E74F1] mt-10 rounded-xl text-xl bg-[#F5F3FE] p-2 "></i>
<div className='text-[#232E35] text-md mt-3 inter'>
Pentesting
</div>
<div className='text-[#232E35] mt-7 inter text-sm px-10'>
Pentesting is the process of testing a website's security to identify vulnerabilities and improve coding for secure websites.</div>
</div>

</div>
<div className='mt-32 sm:px-10   md:px-20 inter'>
<div className='flex'>
    <div className="w-[1rem]  h-[0.1rem] bg-white"></div>
    <div className='-mt-3 ml-4 text-[#656D72] text-base'>
    MY WORKS
    </div>
    </div>
    <div className='text-3xl font-bold mt-4'>
Featured <span className='text-[#7E74F1]'>Portfolios</span>
    
</div>
<div className='grid place-items-center  mt-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
<div className='bg-[#fff] sm:w-[80vw] md:w-[25vw]  text-center md:mt-0 flex rounded-xl'>
<img className='w-full h-full rounded-xl' src='https://cdn.dribbble.com/users/2045817/screenshots/16070106/media/15862d3d16670ad40229e9da6666e551.png?compress=1&resize=1600x1200&vertical=top'/>
{/* <div className='md:-ml-[23rem] sm:-ml-[80vw] bg-[#00000069] rounded-md w-[23rem] h-[20rem]  mt-auto'></div>
<div className='md:-ml-[23rem] sm:-ml-[80vw] bg-[#171616af] rounded-b-md w-[23rem] h-[5.5rem]   mt-auto'>
<div className='w-full text-left text-[#ffffff] text-sm p-3 plus'>
Estore Website.
</div>
<div>
    <div className='flex'>
    <div className='text-xs  text-[#cbcccd] ml-3 p-1 bg-[#0202028a] rounded-md border border-[#020202] w-[2.9rem] plus text-left '>
    React
</div>
   <a href="https://estore-clothes-1.pages.dev/"><i className="fa-solid fa-link text-[#656D72] mt-[0.3rem] cursor-pointer ml-4"></i></a> 
    </div>
</div>
</div> */}
</div>

<div className='bg-[#fff] sm:mt-5 sm:w-[80vw] md:w-[25vw]  text-center md:mt-0 flex rounded-xl'>
<img className='w-full h-full rounded-xl' src="as/connectly.pages.dev_.png"/>
{/* <div className='md:-ml-[23rem] sm:-ml-[80vw] bg-[#00000069] rounded-md w-[23rem] h-[20rem]  mt-auto'></div>
<div className='md:-ml-[23rem] sm:-ml-[80vw] bg-[#171616af] rounded-b-md w-[23rem] h-[5.5rem]   mt-auto'>
<div className='w-full text-left text-[#ffffff] text-sm p-3 plus'>
Cars Dashboard Website.
</div>
<div>
    <div className='flex'>
        <div className='text-xs  text-[#cbcccd] ml-3 p-1 bg-[#0202028a] rounded-md border border-[#020202] w-[2.9rem] plus text-left '>
    React
</div>
   <a href="https://estore-clothes-1.pages.dev/"><i className="fa-solid fa-link text-[#656D72] mt-[0.3rem] cursor-pointer ml-4"></i></a> 
    </div>
</div>
</div> */}
</div>
<div className='bg-[#fff] sm:mt-5 sm:w-[80vw] md:w-[25vw]  text-center md:mt-0 flex rounded-xl'>
<img className='w-full h-full rounded-xl' src='https://cdn.dribbble.com/userupload/2845126/file/original-04cc94ee5d9377ac3479f8440c36db1b.png?compress=1&resize=2048x1536'/>
{/* <div className='md:-ml-[23rem] sm:-ml-[80vw] bg-[#00000069] rounded-md w-[23rem] h-[20rem]  mt-auto'></div>
<div className='md:-ml-[23rem] sm:-ml-[80vw] bg-[#171616af] rounded-b-md w-[23rem] h-[5.5rem]   mt-auto'>
<div className='w-full text-left text-[#ffffff] text-sm p-3 plus'>
Dashboard Website.
</div>
<div>
    <div className='flex'>
    <div className='text-xs  text-[#cbcccd] ml-3 p-1 bg-[#0202028a] rounded-md border border-[#020202] w-[2.9rem] plus text-left '>
    React
</div>
   <a href="https://estore-clothes-1.pages.dev/"><i className="fa-solid fa-link text-[#656D72] mt-[0.3rem] cursor-pointer ml-4"></i></a> 
    </div>
</div>
</div> */}
</div>

</div>
</div>




{/* wrok */}
<div className='mt-32  sm:px-10 md:px-20 inter'>
<div className='flex'>
    <div className="w-[1rem]  h-[0.1rem] bg-white"></div>
    <div className='-mt-[0.5rem] ml-4 text-[#656D72] text-sm'>
    C A R E E R <span className='pl-2'>P A T H</span>
    </div>
    </div>
    <div className='text-3xl font-bold mt-4'>
    Work <span className='text-[#7E74F1]'>Experices</span>
    
</div>

<div className=' h-[20rem] md:flex'>
<div className='sm:hidden md:block  mt-9'>
{work.map((gf,i)=>{
    if(tab == i){
return(
    <div onClick={()=>{settab(i)}} className='bg-[#FFFFFF] font-bold md:w-[13.8rem] h-[3rem] mt-4 flex text-[#7E74F1] text-sm pt-[0.93rem] sm:px-4 md:pl-4 rounded-md'>
    {gf.name}
    <span className='ml-auto sm:hidden md:block md:mr-4'><i className="fa-solid fa-angle-right"></i></span>
    </div>
)
    }else{
return(
<>
<div onClick={()=>{settab(i)}} className='hover:bg-[#0000001f] snap-center font-bold cursor-pointer mt-4 md:w-[13.8rem] h-[3rem] flex  text-sm pt-[0.93rem] sm:px-4 md:pl-4 rounded-md'>
    {gf.name}

    </div>
    </>
    
)
    }
})}
    </div>
    <div className='md:hidden px-1 max-w-[100vw] mt-9'>
    <div className=" focus:outline-none mt-3  elative w-auto max-w-96 flex gap-6 scrollbar-hide snap-x  scroll-p-8 hover:scroll-p-0 will-change-scroll overflow-x-auto ">


{work.map((gf,i)=>{
    if(tab == i){
return(
    <div onClick={()=>{settab(i)}} className='bg-[#FFFFFF] font-bold md:w-[13.8rem] h-[3rem] mt-4 flex text-[#7E74F1] text-sm pt-[0.93rem] sm:px-4 md:pl-4 rounded-md'>
    {gf.name}
    <span className='ml-auto tab snap-normal scrollbar-hide snap-center shrink-0 sm:hidden md:block md:mr-4'><i className="fa-solid fa-angle-right"></i></span>
    </div>
)
    }else{
return(
<>
<div onClick={()=>{settab(i)}} className='hover:bg-[#0000001f]  snap-normal scrollbar-hide snap-center shrink-0 font-bold cursor-pointer mt-4 md:w-[13.8rem] h-[3rem] flex  text-sm pt-[0.93rem] sm:px-4 md:pl-4 rounded-md'>
    {gf.name}

    </div>
    </>
    
)
    }
})}
</div>
    </div>
    <div className='md:ml-auto sm:mt-12   text-lg md:px-10  md:pl-24 w-full md:-mt-12'>
    {work[tab].long}
    <br />
    <span className='text-sm text-[#acaaaa]'>{work[tab].location}</span>
    <br />
    <div className='text-sm text-[#acaaaa] mt-3'>{work[tab].time}</div>
    <div className='flex'>
    {JSON.parse(work[tab].tags).map((gf)=>{
        return(
            <div className='mt-4 mr-4'>
            <span className='text-xs  text-[#acaaaa] px-2 mt-4 p-1 rounded-md border border-[#afb1b3]  plus text-left '>{gf.name}</span>
    
            </div>
        )
    })}
    </div>
    <div className='flex mt-10'>
    <div className="w-full  h-[0.1rem] bg-[#d4d2d2]"></div>

    </div>
    <div className='grid text-sm mt-5 text-[#acaaaa]'>
    {JSON.parse(work[tab].point).map((gf)=>{
        return(
<div className='mb-2'>
    <span className='text-white'>-</span> {gf.name}

</div>
        )
    })}




        </div>
    </div>
</div>

</div>

<footer className="footer p-10  mt-52 text-neutral-content">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>Copyright © 2022 - All right reserved<br />Created by omar yousef</p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
</div>
    )
}
export default Home;