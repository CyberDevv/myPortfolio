import React from "react"
import HeaderTitles from "../components/HeaderTitles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as animationData from "../json/contact.json"
import ContactForm from "../components/ContactForm"
import Lottie from "react-lottie"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  className: "wow"
}

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" desc="This is the contact page" />
      <HeaderTitles title="Get In Touch" className="contactTitle" />

      <div
        className="flex justify-center items-center"
        style={{ "min-height": "83vh" }}
      >
        <div className="flex flex-col items-center justify-center space-x-0 lg:flex-row lg:space-x-8">
          <div className="w-full py-8 lg:py-0 lg:w-1/2">
            <i className= "IWithSVG">
              <Lottie
                options={defaultOptions}
                ariaRole="div"
                style={{ pointerEvents: "none" }}
              />
            </i>
          </div>
          <div className="w-full py-8 lg:w-1/2 lg:py-0">
            <h6 className="px-4 text-xs tracking-widest text-gray-300 capitalize border-l-4 sm:text-sm border-primary">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </h6>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
