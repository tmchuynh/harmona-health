import { ChevronDownIcon } from "@heroicons/react/16/solid";
export default function Page() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <div className="mx-auto text-center">
        <h2>Start Living with Purpose and Power</h2>
        <p>
          Take the first step toward a healthier, more energized you. Your
          transformation begins with one choice — and we’re here to support you
          every step of the way.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-6 sm:mt-12 max-w-5xl"
      >
        <div className="gap-x-8 gap-y-6 grid grid-cols-1 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block font-semibold text-sm/6"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block px-3.5 py-2 rounded-md outline-ring w-full text-base placeholder:text-muted outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block font-semibold text-sm/6"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block px-3.5 py-2 rounded-md outline-ring w-full text-base placeholder:text-muted outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block font-semibold text-sm/6">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block px-3.5 py-2 rounded-md outline-ring w-full text-base placeholder:text-muted outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block font-semibold text-sm/6">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block px-3.5 py-2 rounded-md outline-ring w-full text-base placeholder:text-muted outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block font-semibold text-sm/6"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md outline-ring outline-1 -outline-offset-1 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="focus-within:relative grid grid-cols-1 shrink-0">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 py-2 pr-7 pl-3.5 rounded-md w-full text-base text-gray-500 sm:text-sm/6 placeholder:text-muted appearance-none focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="justify-self-end col-start-1 row-start-1 mr-2 text-primary pointer-events-none size-5 self-center sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block py-1.5 pr-3 pl-1 min-w-0 text-base sm:text-sm/6 placeholder:text-muted grow focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block font-semibold text-sm/6">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block px-3.5 py-2 rounded-md outline-ring w-full text-base placeholder:text-muted outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2.5 rounded-md w-full font-semibold text-center text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
