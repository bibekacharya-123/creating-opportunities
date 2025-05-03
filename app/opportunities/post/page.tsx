import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PostOpportunityPage() {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Post an Opportunity</h1>
          <p className="text-lg mb-8 max-w-3xl">
            Connect with talented individuals by posting your job or internship opportunities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold text-[#121d3e]">Post Opportunity Details</CardTitle>
                <CardDescription className="text-gray-600">Fill in the details of the opportunity you want to advertise.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                      type="text" 
                      id="title" 
                      name="title" 
                      placeholder="Enter the opportunity title" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200" 
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization Name</label>
                    <input 
                      type="text" 
                      id="organization" 
                      name="organization" 
                      placeholder="Enter the organization name" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200" 
                    />
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                    <input 
                      type="date" 
                      id="deadline" 
                      name="deadline" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200" 
                    />
                  </div>
                  <div>
                    <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">Benefits</label>
                    <textarea 
                      id="benefits" 
                      name="benefits" 
                      rows={3} 
                      placeholder="List the benefits of this opportunity" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700">Eligibility</label>
                    <textarea 
                      id="eligibility" 
                      name="eligibility" 
                      rows={3} 
                      placeholder="Specify eligibility criteria" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Full Description</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      rows={5} 
                      placeholder="Provide a detailed description of the opportunity" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input 
                      type="text" 
                      id="country" 
                      name="country" 
                      placeholder="Enter the country" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200" 
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region</label>
                    <input 
                      type="text" 
                      id="region" 
                      name="region" 
                      placeholder="Enter the region" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200" 
                    />
                  </div>
                  <div>
                    <label htmlFor="applicationList" className="block text-sm font-medium text-gray-700">Application List</label>
                    <textarea 
                      id="applicationList" 
                      name="applicationList" 
                      rows={3} 
                      placeholder="Provide application instructions or links" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input 
                      type="text" 
                      id="category" 
                      name="category" 
                      placeholder="Enter the category of the opportunity" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200" 
                    />
                  </div>
                  <div>
                    <label htmlFor="chooseCategory" className="block text-sm font-medium text-gray-700">Choose a Category</label>
                    <select 
                      id="chooseCategory" 
                      name="chooseCategory" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200"
                    >
                      <option value="">Select a category</option>
                      <option value="job">Job</option>
                      <option value="internship">Internship</option>
                      <option value="fellowship">Fellowship</option>
                      <option value="scholarship">Scholarship</option>
                      <option value="competition">Competition</option>
                      <option value="workshop">Workshop</option>
                      <option value="miscellaneous">Miscellaneous</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                    <input 
                      type="file" 
                      id="image" 
                      name="image" 
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1e3a8a] focus:border-[#1e3a8a] transition duration-200" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-2 px-4 rounded-md hover:opacity-90 transition duration-200"
                  >
                    Submit
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
