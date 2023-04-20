import { useState,react } from 'react';
import '../App.css'
import NavBar from './parts/navbar';
const Home = ()=>{
    const [tab, settab] = useState(0)
    const work = [
      {
        title: 'Mindix',
        href: '#',
        category: { name: 'full-stack', href: '#', color: 'bg-indigo-100 text-indigo-800' },
        description:
          'Launch with complete anonymity and security. Our servers and web development services are designed to keep your identity safe. We accept crypto payments and do not log any IPs..',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        image:"/as/projects/mindix/mindix.xyz_ (1).png",
        readingTime: '6 min',
      },
      {
        title: 'Connectly',
        href: '',
        category: { name: 'Hardware', href: '#', color: 'bg-pink-100 text-pink-800' },
        description:
          'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        image:"/as/projects/connectly/localhost_5174_.png",
        readingTime: '4 min',
      },
      {
        title: 'earthquakes alarm system',
        href: 'https://github.com/o0mrs/esos',
        category: { name: 'open-source', href: '#', color: 'bg-green-100 text-green-800' },
        description: 'We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway',
        date: 'Feb 12, 2020',
        image:"/as/projects/esos/esos.pages.dev_.png",
        datetime: '2020-02-12',
        readingTime: '11 min',
      },
    ]
const posts = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Paul York',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '6 min',
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      author: {
        name: 'Dessie Ryan',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '4 min',
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '11 min',
    },
  ]
  const features = [
    {
      name: 'Full-stack web development',
      description:
        `Turn what you have in mind of a digital product into reality. For any platform you consider.`,
      icon: 'fa-solid fa-code',
    },
    {
      name: 'UI/UX Design',
      description:
        `UI/UX design is the process of creating intuitive and effective user interfaces and user experiences for digital products.`,
      icon: 'fa-solid fa-pen-to-square',
    },
    {
      name: 'automation scripts',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: 'fa-solid fa-robot',
    },
    {
      name: 'Pentesting',
      description:
       `Pentesting is the process of testing a website's security to identify vulnerabilities and improve coding for secure websites.`,
      icon: 'fa-regular fa-circle-check',
    },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
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
  <img src='as/me.webp' className=''/>

  </div>
</div>
    </div>
    <div className='sm:text-3xl mt-8 sm:leading-[2.7rem] lg:leading-[3rem] lg:flex lg:justify-center Poppins  w-full lg:text-center lg:text-4xl'>
        <div className='lg:max-w-[50%]'>
        <span>Software <span className='text-[#7E74F1]'>developer</span>, founder, and rust dev.</span>
        </div>

        {/* OMAR<span className='text-[#7E74F1]'> YOUSEF</span> */}
    </div>
    <div className='mt-5 leading-[1.7rem] lg:flex lg:justify-center w-full lg:text-center Poppins sm:px-2 md:px-0  text-[1.09rem] inter text-[#A1A1AA]'>
        <div className='lg:max-w-[40vw]'>
        <article>
    I'm omar, a software developer and entrepreneur based in Jordan. I'm the founder and CEO of <a href='https://mindix.xyz' className='text-[#7E74F1] underline underline-offset-2' target='_blank'>mindix</a>, where we develop technologies that empower regular people to explore space on their own terms.
    {/* Full stack developer with expertise in React, Node.js, and Databases. Proficient in web design and cyber security. Dedicated to creating scalable and efficient solutions for complex problems.         */}
    </article>
        </div>

    </div>
    <div className='mt-6 ml-4 lg:text-center lg:justify-center w-full  flex inter text-[#F1F1F1]'>
   <a href='https://www.instagram.com/o0mrs/' target='_blank'> <i  className="fa-brands sm:text-3xl md:text-3xl mr-4 cursor-pointer fa-instagram"></i></a>
   <a href='https://github.com/o0mrs' target='_blank'>  <i  className="fa-brands sm:text-3xl md:text-3xl mr-4 cursor-pointer fa-github"></i></a>
   <a href='https://twitter.com/o6mrs' target='_blank'>  <i  className="fa-brands sm:text-3xl md:text-3xl mr-4 cursor-pointer fa-twitter"></i></a>
   <a href="mailto:omar@mindix.xyz"> <i class="fa-regular fa-envelope  sm:text-3xl md:text-3xl mr-4"></i></a>

    </div>
{/* trusted by */}
    {/* <div class=" py-24 sm:py-32">
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
{/* Specialized in */}
</div>
{/* <div id='Specialized' className='pt-52   inter font-bold text-3xl text-center'>
Specialized in
</div> */}
<div  id='Specialized' className=" pt-52 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Specialized in
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center text-xl justify-center rounded-lg bg-indigo-600">
                    {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                    <i className={feature.icon}></i>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
{/* <div className='grid place-items-center sm:px-7 mt-20 border-blue-300  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
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

</div> */}
<div className='mt-32 sm:px-10   md:px-20 inter'>
<div className='flex'>
    <div className="w-[1rem]  h-[0.1rem] bg-white"></div>
    <div className='-mt-3 ml-4 text-[#656D72] text-base'>
    MY WORK
    </div>
    </div>
    <div className='text-3xl font-bold pt-4 ' id='Portfolio'>
Featured <span className='text-[#7E74F1]'>Portfolios</span>
    
</div>
<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {work.map((post) => (
            <div key={post.title}>
              <img className='pb-6 w-full rounded-xl' src={post.image}></img>

              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
                
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold ">{post.title}</p>
                <p className="mt-3 text-base text-gray-400">{post.description}</p>
              </a>
            </div>
          ))}
        </div>
</div>




{/* wrok */}
{/* <div className='mt-32  sm:px-10 md:px-20 inter'>
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

</div> */}
<section class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
  {/* <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div> */}
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    {/* <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
    <figure class="mt-10">
      <blockquote class="text-center text-xl font-semibold leading-8 text- sm:text-2xl sm:leading-9">
        <p>“Programmers aren't just techies; they're creators and problem-solvers who translate ideas into working solutions”</p>
      </blockquote>
      <figcaption class="mt-10">
        <img class="mx-auto h-10 w-10 rounded-full" src="/as/me.webp" alt="" />
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-white">Omar Yousef</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-white">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-300">CEO of Mindix</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>
{/* blog posts */}
{/* <div className=" px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">From My plog</h2>
     
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold ">{post.title}</p>
                <p className="mt-3 text-base text-gray-400">{post.description}</p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium ">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-400">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
<footer className="footer p-10  mt-52 text-neutral-content">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>Copyright © 2022 - All right reserved<br />Created by omar yousef</p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
   <a href='https://github.com/o0mrs' target='_blank'>  <i  className="fa-brands sm:text-2xl md:text-2xl mr-4 cursor-pointer fa-github"></i></a>
   <a href='https://twitter.com/o6mrs' target='_blank'>  <i  className="fa-brands sm:text-2xl md:text-2xl mr-4 cursor-pointer fa-twitter"></i></a>
   <a href="mailto:omar@mindix.xyz"> <i class="fa-regular fa-envelope  sm:text-2xl md:text-2xl mr-4"></i></a>
    </div>
  </div>
</footer>
</div>
    )
}
export default Home;