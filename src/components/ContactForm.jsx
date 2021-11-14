import React from "react"
import FormInput from "../components/FormInput"
import Ripples from "react-ripples"
import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const formVariant = {
  initial: { opacity: 0 },
  final: { opacity: 1, transition: { staggerChildren: 0.3 } },
}

const nameInuputVariants = {
  initial: { opacity: 0, x: -100 },
  final: { opacity: 1, x: 0 },
}

const emailInuputVariants = {
  initial: { opacity: 0, x: 100 },
  final: { opacity: 1, x: 0 },
}

const buttonVariants = {
  initial: { opacity: 0, y: 100 },
  final: { opacity: 1, y: 0 },
}

const ContactForm = () => {
  const notify = () => toast.success("Message sent!")
  // const notifyError = () => toast.success("Error sent!")
  const [state, handleSubmit] = useForm("xrgrravk")
  if (state.succeeded) {
    return (
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    )
  }
  return (
    <motion.form
      className="flex flex-col items-center mt-6 space-y-4 text-gray-300"
      onSubmit={handleSubmit}
      variants={formVariant}
    >
      <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
        <FormInput
          label="Name"
          type="text"
          name="name"
          variants={nameInuputVariants}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          variants={emailInuputVariants}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <FormInput
        label="Subject"
        type="text"
        name="subject"
        variants={nameInuputVariants}
      />
      <motion.div
        className="relative w-full textInput textInputArea"
        variants={nameInuputVariants}
      >
        <textarea
          className="w-full p-4 placeholder-gray-400 rounded focus:border-b-2 focus:border-primary bg-formDark focus:outline-none"
          name="message"
          rows="5"
          placeholder="Message"
        ></textarea>
      </motion.div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <motion.div variants={buttonVariants}>
        <Ripples>
          <button
            type="submit"
            className="btn bg-primary hover:bg-primaryDark"
            disabled={state.submitting}
            onClick={ notify}
          >
            Send Message
          </button>
        </Ripples>
      </motion.div>
    </motion.form>
  )
}

export default ContactForm
