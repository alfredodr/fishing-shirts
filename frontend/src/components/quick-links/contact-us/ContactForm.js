import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";

const schema = yup.object().shape({
  fullName: yup.string().required("The field is required."),
  email: yup.string().email().required("The field is required."),
  subject: yup.string().required("The field is required."),
  message: yup.string().required("The field is required."),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMsg, setSuccessMsg] = useState();

  const submitForm = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mail`,
        {
          data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      reset();
      const { status } = response.data;
      if (status === "Ok") {
        setSuccessMsg(true);
      } else if (status !== "Ok") {
        setSuccessMsg(false);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <section className="bg-white px-5">
      <div className="flex items-center justify-center container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 ">
          {/* Who We Are */}
          <div>
            <div className="flex flex-col">
              <h2 className="sm:text-4xl md:text-7xl lg:text-7xl font-semibold mb-6">
                NEED US?
              </h2>
            </div>
          </div>
          {/* Image*/}
          <div className="relative overflow-hidden">
            <h3 id="contact" className="font-bold">
              QUESTIONS, CONCERNS, COMMENTS? YOU TELL US. WE LISTEN.
            </h3>
            <form
              onSubmit={handleSubmit(submitForm)}
              className="flex flex-col "
            >
              <label className="font-semibold mt-5">Your Name(Required)</label>
              <input
                type="text"
                name="fullName"
                {...register("fullName")}
                className="border border-solid pl-3 bg-contactFormGray focus:bg-white focus-visible:bg-white outline-none"
              />
              <p className="text-errorRed"> {errors.fullName?.message} </p>

              <label className="font-semibold mt-5">Your Email(Required)</label>
              <input
                type="text"
                name="email"
                {...register("email")}
                className="border border-solid pl-3 bg-contactFormGray focus:bg-white focus-visible:bg-white outline-none"
              />
              <p className="text-errorRed"> {errors.email?.message} </p>

              <label className="font-semibold mt-5">Subject(Required)</label>
              <input
                type="text"
                name="subject"
                {...register("subject")}
                className="border border-solid pl-3 bg-contactFormGray focus:bg-white focus-visible:bg-white outline-none"
              />
              <p className="text-errorRed"> {errors.subject?.message} </p>

              <label className="font-semibold mt-5">
                Your Message(Required)
              </label>
              <textarea
                id="message"
                name="message"
                cols="40"
                rows="10"
                {...register("message")}
                className="border border-solid pl-3 bg-contactFormGray focus:bg-white focus-visible:bg-white outline-none"
              />
              <p className="text-errorRed"> {errors.message?.message} </p>

              <p
                className={
                  successMsg === true
                    ? "text-successGreen"
                    : successMsg === false
                    ? "text-errorRed"
                    : null
                }
              >
                {successMsg === true
                  ? "Thank you! your message was submitted successfully"
                  : successMsg === false
                  ? "There has been an error; please try again"
                  : successMsg === ""
                  ? ""
                  : null}
              </p>

              <div className="flex flex-row space-x-10">
                <button
                  type="submit"
                  className="flex flex-row items-center justify-center space-x-2 mt-5 bg-lightBlue px-5 py-2"
                >
                  {/* <MdDoneOutline /> */}
                  <span className="text-white">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
