import React from "react"
import Lottie from "react-lottie"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as animationData from "../json/animation.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
}

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" desc="This is the error page" />
    <div
      className="flex flex-col items-center justify-center lg:flex-row"
      style={{ minHeight: "83vh" }}
    >
      <div className="w-full tracking-widest text-center lg:text-left lg:w-4/12">
        <h4 className="text-6xl font-bold leading-loose text-primary">
          Oops...
        </h4>
        <h5 className="text-base">This page does not exit</h5>
      </div>
      <div className="w-full mt-8 lg:w-8/12 lg:mt-0">
        <Lottie
          options={defaultOptions}
          ariaRole="div"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
