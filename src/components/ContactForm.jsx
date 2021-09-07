import React from "react"
import FormInput from "../components/FormInput"
import Ripples from "react-ripples"
import { useForm, ValidationError } from "@formspree/react"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgrravk")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form
      className="flex flex-col items-center mt-6 space-y-4 text-gray-300"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
        <FormInput label="Name" type="text" name="name" />
        <FormInput label="Email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <FormInput label="Subject" type="text" name="subject" />
      <div className="relative w-full textInput textInputArea">
        <textarea
          className="w-full p-4 placeholder-gray-400 rounded focus:border-b-2 focus:border-primary bg-formDark focus:outline-none"
          name="message"
          rows="5"
          placeholder="Message"
        ></textarea>
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Ripples>
        <button
          type="submit"
          className="btn bg-primary hover:bg-primaryDark"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </Ripples>
    </form>
  )
}

export default ContactForm
