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
    <div className="overflow-scroll">
      <section className="flex w-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="mb-3 mt-20 w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8  backdrop-blur-xl transition-all duration-500  hover:border-white/40 hover:bg-white/20 hover:shadow-md dark:bg-zinc-900/40 dark:shadow-black/50 hover:dark:bg-zinc-900/20 hover:dark:shadow-black/40 ">
          <h2 className="mb-6 bg-gradient-to-r bg-clip-text text-center text-5xl tracking-tight text-white">
            {t("page.contact.title")}
          </h2>
          <p className="mb-10 text-center text-lg font-light  text-white/60 sm:text-xl">
            {t("page.contact.sub-title")}
          </p>
          <form onSubmit={submitContactForm} className="space-y-8">
            <div>
              <label
                className="mb-3 block text-sm font-semibold text-white/90"
                htmlFor="email"
              >
                {t("page.contact.email")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-base text-white shadow-inner backdrop-blur-sm transition-all duration-300 placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder={t("page.contact.email-placeholder")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-3 block text-sm font-semibold text-white/90"
              >
                {t("page.contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-base text-white shadow-inner backdrop-blur-sm transition-all duration-300 placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder={t("page.contact.subject-placeholder")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-semibold text-white/90"
              >
                {t("page.contact.your-message")}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-base text-white shadow-inner backdrop-blur-sm transition-all duration-300 placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder={t("page.contact.your-message-placeholder")}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-lg font-semibold  text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/50 hover:bg-white/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30 active:scale-[0.98]"
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
