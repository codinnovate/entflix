import React from 'react'

const Footer = () => {
    const footer_data = [
        {
            title: 'FAQ',
            link: '/faq'
        },
        {
            title: 'About Us',
            link : '/about'
        },
        {
            title: 'Blog & Media Center',
            link: '/blog'
        },
        {
            title: 'Terms & Conditions',
            link: 'terms'
        },
        {
            title: 'Privacy',
            link:'privacy'

        },
        {
            title: 'Referral',
            link:'referral'
        }
    ]
    return (
        <div className='flex bg-black '>
            <div className='p-5 w-full'>
                <div className='border-t-[1px] py-5 border-white/20' />
                 <div className='pt-5 px3'>
                    <ul>
                        {
                            footer_data.map((item) => (
                                <li className='py-2 hover:underline'>
                                    <a
                                    className='text-white '
                                    href={item.link}>{item.title}</a></li>
                            ))
                        }
                    </ul>
                    <h1 className='text-white/50 text-xl my-2'>©Havcot. All right reserved.</h1>
            </div>
            </div>
           
            
        </div>
    )
}

export default Footer
