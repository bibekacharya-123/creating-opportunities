import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Mail, Search } from "lucide-react"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  // Sample blog post data
  return {
    title: "Empowering Communities Through Digital Literacy",
    excerpt: "How our digital literacy programs are creating new opportunities for underserved communities.",
    content: `
      <p>In today's rapidly evolving digital landscape, access to technology and digital literacy skills has become essential for economic and social inclusion. At Creating Opportunities, we recognize this critical need and have developed comprehensive programs aimed at bridging the digital divide in underserved communities.</p>
      
      <h2>The Digital Divide Challenge</h2>
      
      <p>The digital divide refers to the gap between demographics and regions that have access to modern information and communications technology and those that don't or have restricted access. This division is not just about physical access to computers and the internet but also encompasses the skills needed to effectively utilize these technologies.</p>
      
      <p>In many underserved communities, we've observed several key barriers:</p>
      
      <ul>
        <li>Limited access to hardware and reliable internet connections</li>
        <li>Lack of basic digital literacy skills</li>
        <li>Absence of relevant content and services in local languages</li>
        <li>Financial constraints preventing technology adoption</li>
      </ul>
      
      <h2>Our Approach to Digital Empowerment</h2>
      
      <p>Our digital literacy programs are designed with a holistic approach that addresses these multiple barriers simultaneously. We believe that meaningful digital inclusion requires more than just providing equipment—it necessitates building skills, confidence, and creating relevant opportunities.</p>
      
      <p>Key components of our programs include:</p>
      
      <h3>1. Community Technology Centers</h3>
      
      <p>We've established community technology centers in strategic locations to provide free or low-cost access to computers, high-speed internet, and other digital tools. These centers serve as hubs for learning and collaboration, offering a supportive environment for individuals to develop their skills.</p>
      
      <h3>2. Tailored Training Programs</h3>
      
      <p>Recognizing that different demographics have varying needs and starting points, we've developed tiered training programs:</p>
      
      <ul>
        <li><strong>Basic Digital Literacy:</strong> Covering fundamental skills like computer operation, internet navigation, email usage, and online safety</li>
        <li><strong>Intermediate Skills:</strong> Focusing on productivity software, social media for business, and basic content creation</li>
        <li><strong>Advanced Opportunities:</strong> Introducing coding, web development, digital marketing, and other specialized skills with employment potential</li>
      </ul>
      
      <h3>3. Mentorship and Support Networks</h3>
      
      <p>We pair learners with mentors who provide ongoing support and guidance. These relationships help maintain motivation, address challenges, and connect participants with opportunities beyond the training program.</p>
      
      <h2>Success Stories and Impact</h2>
      
      <p>The impact of our digital literacy initiatives has been profound and far-reaching. Here are just a few examples of how these programs have transformed lives:</p>
      
      <p><strong>Maria's Journey:</strong> A single mother of three, Maria had never used a computer before joining our program. After completing our basic and intermediate courses, she secured a remote administrative position that allowed her to work from home while caring for her children, increasing her income by 40%.</p>
      
      <p><strong>Youth Entrepreneurship:</strong> A group of young adults from the Westside neighborhood used their newly acquired digital marketing skills to launch a community-based service business, which now employs seven local residents.</p>
      
      <p><strong>Senior Connectivity:</strong> Our specialized program for seniors has helped over 200 older adults connect with family members through video calls, access telehealth services, and reduce social isolation.</p>
      
      <h2>Looking Forward: Expanding Our Impact</h2>
      
      <p>As we look to the future, we're committed to expanding these initiatives in several ways:</p>
      
      <ul>
        <li>Developing partnerships with employers to create direct pathways to digital employment opportunities</li>
        <li>Expanding our curriculum to include emerging technologies like artificial intelligence and data analysis</li>
        <li>Creating a digital literacy train-the-trainer program to scale our impact through community ambassadors</li>
        <li>Advocating for policy changes that support digital inclusion at the municipal and state levels</li>
      </ul>
      
      <p>By continuing to evolve our approach and expand our reach, we aim to ensure that the benefits of the digital economy are accessible to all community members, regardless of their background or starting point.</p>
      
      <h2>Join Our Mission</h2>
      
      <p>Digital literacy is not just about technical skills—it's about opening doors to economic opportunity, civic participation, and personal growth. We invite you to join us in this important work, whether as a volunteer, donor, or partner organization.</p>
      
      <p>Together, we can bridge the digital divide and create a more inclusive digital future for all.</p>
    `,
    date: "March 15, 2023",
    author: {
      name: "Jane Smith",
      role: "Digital Literacy Program Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Education",
    image: "/placeholder.svg?height=800&width=1200",
    tags: ["Digital Literacy", "Community Development", "Education", "Technology Access"],
    relatedPosts: [
      {
        id: 2,
        title: "The Impact of Mentorship on Career Development",
        excerpt:
          "Exploring how mentorship programs can significantly enhance career growth and professional development.",
        date: "February 28, 2023",
        author: "John Doe",
        category: "Career",
        image: "/placeholder.svg?height=600&width=800",
        slug: "impact-mentorship-career-development",
      },
      {
        id: 5,
        title: "The Role of Technology in Creating Equal Opportunities",
        excerpt:
          "How technology is being leveraged to level the playing field and create more inclusive opportunities.",
        date: "November 5, 2022",
        author: "Lisa Chen",
        category: "Technology",
        image: "/placeholder.svg?height=600&width=800",
        slug: "role-technology-equal-opportunities",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  // Sample categories for sidebar
  const categories = [
    "Education",
    "Career",
    "Partnerships",
    "Employment",
    "Technology",
    "Success Stories",
    "Events",
    "Community",
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-[#0e9aa7] mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center justify-center text-sm">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>By {post.author.name}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

          
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{post.author.name}</h3>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
             
              </div>

              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {post.relatedPosts.map((relatedPost: any) => (
                      <div key={relatedPost.id} className="flex gap-4">
                        <div className="flex-shrink-0 w-24 h-24 relative">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/portfolio/blog/${relatedPost.slug}`}
                            className="font-medium hover:text-[#0e9aa7] line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{relatedPost.excerpt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
        

              {/* Categories */}
          

              {/* Newsletter */}
              <div className="bg-[#121d3e] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">Stay updated with our latest news and articles.</p>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
