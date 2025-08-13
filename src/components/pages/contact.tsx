/* eslint-disable jsx-a11y/label-has-associated-control */
import { type FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const emailRef = useRef<HTMLAnchorElement>(null);

  const submitContactForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const subject = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const message = (e.currentTarget.elements[2] as HTMLInputElement).value;

    emailRef.current?.setAttribute(
      "href",
      `mailto:asem@qaffaf.com?subject=From: ${email}-${subject}&body=${message}`,
    );
    emailRef.current?.click();
    // reset values
    (e.currentTarget.elements[0] as HTMLInputElement).value = "";
    (e.currentTarget.elements[1] as HTMLInputElement).value = "";
    (e.currentTarget.elements[2] as HTMLInputElement).value = "";
  };
  return (
    <div className="h-full w-screen overflow-scroll bg-gradient-to-b from-gray-50 to-gray-100 pt-24 dark:from-gray-900 dark:to-gray-800">
      <h1 className="hidden">Asem Qaffaf</h1>
      <h1 className="hidden">Full stack software engineer</h1>
      <section className="flex w-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
          <h2 className="mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent">
            {t("page.contact.title")}
          </h2>
          <p className="mb-10 text-center text-lg font-light text-gray-600 sm:text-xl dark:text-gray-300">
            {t("page.contact.sub-title")}
          </p>
          <form onSubmit={submitContactForm} className="space-y-8">
            <div>
              <label
                className="mb-3 block text-sm font-semibold text-gray-900 dark:text-gray-300"
                htmlFor="email"
              >
                {t("page.contact.email")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 text-base text-gray-900 shadow-sm transition duration-300 focus:border-green-400 focus:ring-4 focus:ring-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-green-600"
                placeholder={t("page.contact.email-placeholder")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-3 block text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                {t("page.contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 text-base text-gray-900 shadow-sm transition duration-300 focus:border-green-400 focus:ring-4 focus:ring-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-green-600"
                placeholder={t("page.contact.subject-placeholder")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                {t("page.contact.your-message")}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 text-base text-gray-900 shadow-sm transition duration-300 focus:border-green-400 focus:ring-4 focus:ring-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-green-600"
                placeholder={t("page.contact.your-message-placeholder")}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-400 to-green-600 px-6 py-4 text-lg font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700"
            >
              {t("page.contact.send-message")}
            </button>
          </form>
          <a
            ref={emailRef}
            href="mailto:asem@qaffaf.com?subject=Mail from My Site"
            className="hidden"
          >
            mail to
          </a>
        </div>
      </section>
    </div>
  );
}
