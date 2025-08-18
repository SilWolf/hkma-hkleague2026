import type { Metadata, Viewport } from "next";
import Menu from "./menu";
import "./public-layout.css";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-[1920px] mx-auto relative">
        <Menu />

        {children}

        <section
          className="bg-[url('/images/bg-2.jpg')] text-neutral-900 bg-cover bg-center py-6"
          style={{ backgroundColor: "#3ae0a1" }}
        >
          <div className="container px-2 mx-auto flex flex-col lg:flex-row items-center sm:items-stretch gap-y-4">
            <div className="flex-1">
              <p className="text-center sm:text-left text-xl mb-2">
                想搵人打日麻，或者想學日麻，但唔知可以去邊？
              </p>
              <p className="text-center sm:text-left text-3xl mb-6">
                嚟<strong>Mah-JesTic</strong>啦！
              </p>
              <div className="flex gap-x-4 mb-4">
                <div className="w-48">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/mahjestic_hk/"
                  >
                    <img
                      className="size-full hover:scale-110 transition-transform"
                      src="/images/logo-mahjestic.webp"
                      alt="Mah-JesTic"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/tmzyhb1h1w372G8Y8"
                        className="text-lg underline"
                      >
                        <i className="bi bi-geo-alt"></i>{" "}
                        香港旺角塘尾道18號嘉禮大廈21樓全層
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://wa.me/85251818161"
                        className="text-lg underline"
                      >
                        <i className="bi bi-whatsapp"></i> +852 5181 8161
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/mahjestic_hk/"
                        className="text-lg underline"
                      >
                        <i className="bi bi-instagram"></i> @mahjestic_hk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center sm:text-left space-x-2 [&_img]:inline-block [&_img]:w-28 [&_img]:h-28 sm:[&_img]:w-48 sm:[&_img]:h-48 lg:[&_img]:w-36 lg:[&_img]:h-36 xl:[&_img]:w-48 xl:[&_img]:h-48">
                <a
                  href="https://www.instagram.com/mahjestic_hk/"
                  target="_blank"
                  aria-label="週一至四立直麻雀聚會"
                >
                  <img src="/images/promo-1.jpg" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/mahjestic_hk/"
                  target="_blank"
                  aria-label="週二四日麻新人教學"
                >
                  <img src="/images/promo-2.jpg" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/mahjestic_hk/"
                  target="_blank"
                  aria-label="週五立直麻雀聚會"
                >
                  <img src="/images/promo-3.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.7336313807649!2d114.16533707565988!3d22.318315836095692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400b86690d98d%3A0x7da8ebce8215db82!2z6aaZ5riv5pe66KeS5aGY5bC-6YGTMTjomZ_lmInnpq7lpKflu4g!5e0!3m2!1szh-TW!2suk!4v1755517317860!5m2!1szh-TW!2suk"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mah-JesTic"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-neutral-300 hover:[&_a]:text-neutral-100 text-sm pt-16 pb-12">
        <div className="container px-2 mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <div className="space-y-4 text-left">
            <div className="space-x-4">
              <span>主辦機構</span>
              <span>
                <a href="https://www.hkmahjong.org/" target="_blank">
                  <img
                    className="h-12 sm:h-16 inline-block"
                    src="/images/logo-hkma.webp"
                    alt="香港麻雀協會 Hong Kong Mahjong Association"
                  />
                </a>
              </span>
            </div>
            <div className="space-x-4">
              <span>場地提供</span>
              <span>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mahjestic_hk/"
                >
                  <img
                    className="h-12 sm:h-16 inline-block"
                    src="/images/logo-mahjestic.webp"
                    alt="Mah-JesTic"
                  />
                </a>
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-x-4 text-center md:text-right pr-1 text-2xl">
              <a
                href="https://www.youtube.com/@HKMAHJONG/streams"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://twitter.com/HK_League_MJ"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.facebook.com/hkmjassn/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/hkmjassn/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="space-x-6 text-center md:text-right pr-1">
              {/* <a href="#">聯賽章程</a> */}
              <a href="mailto:info@hkmahjong.org">聯絡我們</a>
            </div>
            <p className="text-center md:text-right">
              ©2025 by 香港麻雀協會 Hong Kong Mahjong Association.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
