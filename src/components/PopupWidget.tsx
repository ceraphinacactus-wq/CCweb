"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";

type FormValues = {
  apikey: string;
  subject: string;
  from_name: string;
  botcheck?: boolean;
  name: string;
  email: string;
  message: string;
};

export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [messageText, setMessageText] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  const onSubmit = async (data: FormValues, e?: React.BaseSyntheticEvent) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      const json = await response.json();

      if (json.success) {
        setIsSuccess(true);
        setMessageText(json.message || "Your message was sent.");
        e?.target?.reset?.();
        reset();
      } else {
        setIsSuccess(false);
        setMessageText(json.message || "Something went wrong.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessageText("Client error. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ceraphina-purple text-white shadow-lg transition duration-300 ease hover:bg-ceraphina-cactus focus:outline-none focus:ring-2 focus:ring-ceraphina-accentGreen focus:ring-offset-2">
              <span className="sr-only">Open contact form widget</span>

              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute h-6 w-6"
                as="div"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </Transition>
            </DisclosureButton>

            <Transition
              className="fixed bottom-[100px] left-0 right-0 top-0 z-50 sm:left-auto sm:right-5 sm:top-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className="flex h-full w-full min-h-[250px] flex-col overflow-hidden rounded-none border border-ceraphina-border bg-white shadow-2xl sm:h-[600px] sm:max-h-[calc(100vh-120px)] sm:w-[350px] sm:rounded-2xl">
                <div className="flex h-32 flex-col items-center justify-center bg-ceraphina-purple p-5 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    How can we help?
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    Questions about plants, soil blends, or local pickup
                  </p>
                </div>

                <div className="h-full flex-grow overflow-auto bg-ceraphina-surface p-6">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <input
                        type="hidden"
                        value="YOUR_ACCESS_KEY_HERE"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} sent a message from Ceraphina Cactus`}
                        {...register("subject")}
                      />
                      <input
                        type="hidden"
                        value="Ceraphina Cactus Website"
                        {...register("from_name")}
                      />
                      <input
                        type="checkbox"
                        className="hidden"
                        style={{ display: "none" }}
                        {...register("botcheck")}
                      />

                      <div className="mb-4">
                        <label
                          htmlFor="full_name"
                          className="mb-2 block text-sm font-medium text-ceraphina-cactus"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          placeholder="John Doe"
                          {...register("name", {
                            required: "Full name is required",
                            maxLength: 80,
                          })}
                          className={`w-full rounded-xl border bg-white px-4 py-3 text-ceraphina-text placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                            errors.name
                              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                              : "border-ceraphina-border focus:border-ceraphina-cactus focus:ring-ceraphina-accentGreen"
                          }`}
                        />
                        {errors.name && (
                          <div className="mt-1 text-sm text-red-500">
                            {errors.name.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-ceraphina-cactus"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="you@example.com"
                          {...register("email", {
                            required: "Enter your email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                          className={`w-full rounded-xl border bg-white px-4 py-3 text-ceraphina-text placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                            errors.email
                              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                              : "border-ceraphina-border focus:border-ceraphina-cactus focus:ring-ceraphina-accentGreen"
                          }`}
                        />
                        {errors.email && (
                          <div className="mt-1 text-sm text-red-500">
                            {errors.email.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-ceraphina-cactus"
                        >
                          Your Message
                        </label>
                        <textarea
                          rows={4}
                          id="message"
                          placeholder="Tell us what you need help with"
                          {...register("message", {
                            required: "Enter your message",
                          })}
                          className={`h-28 w-full rounded-xl border bg-white px-4 py-3 text-ceraphina-text placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                            errors.message
                              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                              : "border-ceraphina-border focus:border-ceraphina-cactus focus:ring-ceraphina-accentGreen"
                          }`}
                        />
                        {errors.message && (
                          <div className="mt-1 text-sm text-red-500">
                            {errors.message.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <button type="submit" className="btn-primary w-full">
                          {isSubmitting ? (
                            <svg
                              className="mx-auto h-5 w-5 animate-spin text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>

                      <p className="text-center text-xs text-ceraphina-muted">
                        Powered by{" "}
                        <a
                          href="https://Web3Forms.com"
                          className="text-ceraphina-cactus hover:text-ceraphina-purple"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Web3Forms
                        </a>
                      </p>
                    </form>
                  )}

                  {isSubmitSuccessful && isSuccess && (
                    <div className="flex h-full flex-col items-center justify-center rounded-md text-center">
                      <svg
                        width="60"
                        height="60"
                        className="text-green-500"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                      </svg>
                      <h3 className="py-5 text-xl font-semibold text-green-600">
                        Message sent successfully
                      </h3>
                      <p className="px-3 text-ceraphina-muted">{messageText}</p>
                      <button
                        className="mt-6 text-ceraphina-purple hover:text-ceraphina-cactus focus:outline-none"
                        onClick={() => reset()}
                      >
                        Go back
                      </button>
                    </div>
                  )}

                  {isSubmitSuccessful && !isSuccess && (
                    <div className="flex h-full flex-col items-center justify-center rounded-md text-center">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 97 97"
                        className="text-red-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                      </svg>

                      <h3 className="py-7 text-xl font-semibold text-red-500">
                        Oops, something went wrong
                      </h3>
                      <p className="px-3 text-ceraphina-muted">{messageText}</p>
                      <button
                        className="mt-6 text-ceraphina-purple hover:text-ceraphina-cactus focus:outline-none"
                        onClick={() => reset()}
                      >
                        Go back
                      </button>
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}