import React from 'react'
import Layout from './Layout'

const Contact = () => {
    return (
        
        <Layout
        title="Liên hệ"
        description="Liên hệ với chúng tôi"
        className="container-fluid"
        >
            <iframe style ={{width: "100%", height: "700px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3678.0141923553406!2d89.551518!3d22.801938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8ff8ef7ea2b7%3A0x1f1e9fc1cf4bd626!2sPranon+Pvt.+Limited!5e0!3m2!1sen!2s!4v1407828576904" ></iframe>
        </Layout>
    )
}

export default Contact