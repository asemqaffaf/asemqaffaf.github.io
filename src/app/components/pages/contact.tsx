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
    <div className="h-full w-screen bg-white pt-24 dark:bg-gray-900 overflow-scroll">
      <h1 className="hidden">Asem Qaffaf</h1>
      <h1 className="hidden">Full stack software engineer</h1>
      <section className="bg-white dark:bg-gray-900 h-full w-full overflow-scroll">
        <div className="px-[20%] pb-4 ">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t("page.contact.title")}
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400">
            {t("page.contact.sub-title")}
          </p>
          <form onSubmit={submitContactForm} className="space-y-8">
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="email"
              >
                {t("page.contact.email")}
              </label>
              <input
                type="email"
                id="email"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder={t("page.contact.email-placeholder")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {t("page.contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder={t("page.contact.subject-placeholder")}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                {t("page.contact.your-message")}
              </label>
              <textarea
                id="message"
                rows={6}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                placeholder={t("page.contact.your-message-placeholder")}
              />
            </div>
            <button
              type="submit"
              className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                {t("page.contact.send-message")}
              </span>
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
