import AllBlogs from '@/components/blog/AllBlogs'
import ServiceDetailsBanner from '@/components/serviceDetails/ServiceDetailsBanner'
import React from 'react'

const page = () => {
    return (
        <>
            <ServiceDetailsBanner pageName={"Our Blogs"} title={"Our Blogs"} bannerImg='ourBlog' />
            <AllBlogs />
        </>
    )
}

export default page