import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const libraydata = [
        {
            title: "Recent",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-hour-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
   <path d="M12 12l3 2"></path>
   <path d="M12 7v5"></path>
</svg>,
            path:"/Home",
        },
        {
            title: "Downloaded",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
   <path d="M7 11l5 5l5 -5"></path>
   <path d="M12 4l0 12"></path>
</svg>,
            path:'/downloads'
        },
        {
            title:''
        }
    ]
    const configdata = [
        {
            title: "Settings",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
   <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
</svg>,
            path:'/settings'
        },
        {
            title: 'Help',
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help-octagon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9.103 2h5.794a3 3 0 0 1 2.122 .879l4.101 4.1a3 3 0 0 1 .88 2.125v5.794a3 3 0 0 1 -.879 2.122l-4.1 4.101a3 3 0 0 1 -2.123 .88h-5.795a3 3 0 0 1 -2.122 -.88l-4.101 -4.1a3 3 0 0 1 -.88 -2.124v-5.794a3 3 0 0 1 .879 -2.122l4.1 -4.101a3 3 0 0 1 2.125 -.88z"></path>
   <path d="M12 16v.01"></path>
   <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
</svg>,
            path:'/'
        }
    ]
    const userdata = [
        {
            title: 'Logout',
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
   <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
</svg>,
            path:'/logout'
        },
        {
            title: 'Go Premium',
            icon:<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-premium-rights" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
   <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
   <path d="M12 7v2"></path>
   <path d="M12 15v2"></path>
</svg>,
            path:'/premium'
        }
    ]
    const navdata = [
        {
            title: "Home",
            icon:<svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-smart-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
   <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
</svg>
        ,
            path: "/home",
        },{
            title: "Discovery",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 16l2 -6l6 -2l-2 6l-6 2"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
   <path d="M12 3l0 2"></path>
   <path d="M12 19l0 2"></path>
   <path d="M3 12l2 0"></path>
   <path d="M19 12l2 0"></path>
</svg>,
            path: "/Discovery",
        },{
            title: "Music",
            icon:
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-disc" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
   <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M7 12a5 5 0 0 1 5 -5"></path>
   <path d="M12 17a5 5 0 0 0 5 -5"></path>
                </svg>,
            path: "/Music",
        },{
            title: "Coming Soon",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alarm" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
   <path d="M12 10l0 3l2 0"></path>
   <path d="M7 4l-2.75 2"></path>
   <path d="M17 4l2.75 2"></path>
</svg>,
            path: "/Trailers",
        },{
            title: "Earn",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-cashapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z"></path>
</svg>,
            path: "/earn",
        },
        {
            title: "My TV",
            icon:<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tv-old" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
   <path d="M16 3l-4 4l-4 -4"></path>
   <path d="M15 7v13"></path>
   <path d="M18 15v.01"></path>
   <path d="M18 12v.01"></path>
            </svg>,
            path:"/tv"
    },
    ]
     const activeLink = `${'flex md:justify-start border-b-[.2em] md:border-b-[0] font-bold md:border-r-[0] rounded-b-[.2em] md:rounded-b-[0] md:rounded-t-[0] border-blue-300 items-center text-red-600  no-underline'}`;
     const normalLink = `${'flex text-[#605f65]  md:justify-start  items-center   my-2 no-underline'}`;
     
  return (
      <div className='flex md:flex-col fixed  z-10 shadow-3xl md:static bottom-0  overflow-hidden scrollbar-thin scrollbar-thumb-red-100 scrollbar-track-red-600 scrollbar-rounded-full bg-[#19161f] md:border-[#2c2b31] w-full  md:w-auto  place-content-between md:border-r-[1px] px-2  md:pl-5 '>
          <h1 className='text-[#605f65] m-2  hidden md:block'>Menu</h1>
          {
              navdata.map((item, index) => {
              return(
          <NavLink to={item.path} key={index} className={({ isActive }) =>(
              isActive ? activeLink : normalLink
              )}>
            <div  className='rounded-full  flex justify-center items-center   p-1'>
             {item.icon}
            </div>
            <span  className='hidden md:flex font-medium text-[1em]  ml-2 text-[#605f65] hover:text-white'>{item.title}</span>

          </NavLink>
              )
             })
          }
          
          <div className='hidden md:flex flex-col border-t-2 border-[#2c2b31] my-2'>
              <h1 className='text-[#605f65] m-2  hidden md:block'>Library</h1>
          {
              libraydata.map((item, index) => {
              return(
          <NavLink to={item.path} key={index} className={({ isActive }) =>(
              isActive ? activeLink : normalLink
              )}>
            <div  className='rounded-full flex justify-center items-center hover:text-[#e3e6e7]  p-1'>
             {item.icon}
            </div>
            <span  className='hidden md:flex font-medium text-[1em]  ml-2 text-[#605f65] hover:text-white '>{item.title}</span>

          </NavLink>
              )
             })
          }
          </div>
          <div className='hidden md:flex flex-col border-t-2 border-[#2c2b31] my-2'>
              
          {
              configdata.map((item, index) => {
              return(
          <NavLink to={item.path} key={index} className={({ isActive }) =>(
              isActive ? activeLink : normalLink
              )}>
            <div  className='rounded-full flex justify-center items-center  p-1'>
             {item.icon}
            </div>
            <span  className='hidden md:flex font-medium text-[1em]  ml-2 text-[#605f65] hover:text-white '>{item.title}</span>

          </NavLink>
              )
             })
          }
          </div>
          <div className='hidden md:flex flex-col border-t-2 border-[#2c2b31] my-2'>
          {
              userdata.map((item, index) => {
              return(
          <NavLink to={item.path} key={index} className={({ isActive }) =>(
              isActive ? activeLink : normalLink
              )}>
            <div  className='rounded-full flex justify-center items-center   p-1'>
             {item.icon}
            </div>
            <span  className='hidden md:flex font-medium text-[1em]  ml-2 text-[#605f65] hover:text-white '>{item.title}</span>

          </NavLink>
              )
             })
          }
          </div>
      </div>
  )
}

export default Navbar