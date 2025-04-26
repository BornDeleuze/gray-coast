function Contact() {

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-md bg-gray-90 p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Send us a message</h2>
            <form
               action="https://formsubmit.co/6cf70ccd3364c6b0fbdd1583a2d652e9"
               method="POST"
               className="space-y-5"
            >
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                required
              ></textarea>
              </div>
              <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:brightness-110 transition-shadow shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact

