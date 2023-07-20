import React from 'react'
import Accordion from './Accordion';

const Faqs = () => {
 
    const faqs_data = [

        {
            id: 1,
            title: 'What is Havcot?',
            text: "Havcot is a website that provides information, recommendations, and discussions related to Netflix movies, TV shows, and original content.,"
        },
        {
            id:2,
            title: 'Do I need a Netflix account to use Havcot?',
            text: "Yes, to access Netflix content through Havcot, you will need an active Netflix account. Havcot is a platform that complements and enhances your Netflix streaming experience.,"
        },
        {
            id:3,
            title: 'How does Havcot work?',
            text: "Havcot analyzes your Netflix viewing history and preferences to offer personalized recommendations and curated lists. It also provides user-generated reviews, ratings, and discussions about Netflix titles. Additionally, Havcot offers news, updates, and information about upcoming releases on Netflix.,"
        },

        {
            id:4,
            title: 'Can I watch movies or TV shows directly on Havcot?',
            text: "No, Havcot is not a streaming platform. It does not provide direct access to Netflix content. It serves as a companion website that enhances your Netflix experience by providing information, recommendations, and discussions.,"
        },

        {
            id:5,
            title: 'Is Havcot affiliated with Netflix?',
            text: "No, Havcot is an independent website and is not affiliated with Netflix. It is a third-party platform created by Netflix enthusiasts to provide additional features and community-driven content related to Netflix.,"
        },

        {
            id:6,
            title: 'Is Havcot free to use?',
            text: "Yes, Havcot is free to use. There are no charges or subscription fees associated with accessing the features and information provided on the website.,"
        },

        {
            id:7,
            title: 'Can I contribute to Havcot?',
            text: "Yes, Havcot encourages user contributions such as reviews, ratings, and participating in discussions. Users can share their insights, recommendations, and thoughts on Netflix content to enrich the community experience.,"
        },


        {
            id:8,
            title: 'How can I contact Havcot for support or inquiries?',
            text: "For any support or inquiries related to Havcot, you can reach out to our support team through the contact form provided on the website. We strive to respond to your queries promptly and assist you with any issues you may encounter",
      },
    ]
    return (
        <div className='flex  max-w-4xl w-4xl items-center justify-center  mx-auto  mt-7 rounded-full '>
            <div className='flex flex-col justify-center ring-white/10 ring-1 bg-black p-7'>
                <div className='space-y-2 px-5'>
                    <h1 className='text-3xl font-bold text-red-600'>General FAQS</h1>
                    <h1 className='text-white'>Everything you need to know about havcot and how it works. Can't find the answer <span className='underline cursor-pointer'>Chat to our team </span></h1>
                </div>
                <div className='p-5' >
                    {
                        faqs_data.map((item) => {
                            const { id } = item;
                            return (
                                <Accordion
                                    title={item.title}
                                    text={item.text}
                                    key={id}
                                    />
                        )
                    })
                    }

                </div>
            </div>
            
        </div>
    )
}

export default Faqs
