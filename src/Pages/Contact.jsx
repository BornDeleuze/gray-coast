function Contact() {

  return (
    <>
    <div class="flex justify-center items-center p-6">
        <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h4 class="text-xl font-semibold mb-4 text-center">Send us a message</h4>
          <form action="https://formsubmit.co/6cf70ccd3364c6b0fbdd1583a2d652e9" method="POST" class="space-y-4">
            
            <div>
              <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
              <input type="email" name="email" id="email" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700" for="message">Message</label>
              <textarea name="message" id="message" rows="4" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            
            <div>
              <button type="submit" class="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact

