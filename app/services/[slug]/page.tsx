import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { AnimatedSection } from "@/components/ui/animated-section"

// Mock service data - in a real app, this would come from a database or API
const services = [
  {
    slug: "logistics-management",
    title: "LOGISTICS MANAGEMENT",
    subtitle: "STREAMLINING SUPPLY CHAINS FOR EFFICIENT & TIMELY OPERATIONS",
    description:
      "Our logistics management service focuses on optimizing your supply chain processes to ensure efficient and timely operations. We provide comprehensive solutions for transportation, warehousing, inventory management, and distribution to help your business run smoothly.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "Logistics management is the backbone of any successful operation. At Creating Opportunities International, we understand the critical nature of a well-functioning supply chain. Our logistics management services are designed to streamline your operations, reduce costs, and improve overall efficiency.",
      "We take a holistic approach to logistics, analyzing your entire supply chain from end to end. This comprehensive assessment allows us to identify bottlenecks, inefficiencies, and opportunities for improvement. Our team of logistics experts then develops and implements customized solutions tailored to your specific needs.",
      "Our logistics management services include:",
    ],
    features: [
      {
        title: "Supply Chain Optimization",
        description:
          "We analyze your current supply chain structure and identify opportunities for optimization, ensuring smooth and efficient flow of goods and services.",
      },
      {
        title: "Transportation Management",
        description:
          "We help you select the most cost-effective and efficient transportation methods, routes, and carriers to meet your delivery requirements.",
      },
      {
        title: "Warehouse Management",
        description:
          "Our experts optimize your warehouse layout, inventory placement, and picking processes to maximize space utilization and efficiency.",
      },
      {
        title: "Inventory Control",
        description:
          "We implement systems and processes to maintain optimal inventory levels, reducing carrying costs while ensuring product availability.",
      },
      {
        title: "Distribution Network Design",
        description:
          "We design and optimize your distribution network to ensure products reach customers quickly and cost-effectively.",
      },
      {
        title: "Performance Metrics & Analytics",
        description:
          "We establish key performance indicators and reporting systems to continuously monitor and improve logistics operations.",
      },
    ],
    benefits: [
      "Reduced operational costs through optimized processes",
      "Improved customer satisfaction through timely deliveries",
      "Enhanced visibility and control over your supply chain",
      "Increased adaptability to market changes and disruptions",
      "Streamlined operations leading to higher productivity",
      "Data-driven decision making for continuous improvement",
    ],
  },
  {
    slug: "vendor-management",
    title: "VENDOR MANAGEMENT",
    subtitle: "OPTIMIZING PROCUREMENT FOR QUALITY SUPPLY CHAIN PARTNERSHIPS",
    description:
      "Our vendor management service helps you build and maintain quality partnerships throughout your supply chain. We assist with vendor selection, contract negotiation, performance evaluation, and relationship management to ensure you get the best value from your suppliers.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "Effective vendor management is crucial for maintaining quality, controlling costs, and building strong supply chain partnerships. At Creating Opportunities International, we help you transform your vendor relationships from transactional interactions to strategic partnerships.",
      "Our comprehensive vendor management approach encompasses the entire vendor lifecycle, from selection and onboarding to performance evaluation and relationship development. We work closely with you to understand your business requirements and develop vendor management strategies that align with your organizational goals.",
      "Our vendor management services include:",
    ],
    features: [
      {
        title: "Vendor Selection & Qualification",
        description:
          "We help you identify, evaluate, and select vendors that meet your quality, cost, and reliability requirements.",
      },
      {
        title: "Contract Negotiation & Management",
        description:
          "Our experts assist in negotiating favorable terms and managing contracts to ensure compliance and maximize value.",
      },
      {
        title: "Vendor Performance Monitoring",
        description:
          "We establish metrics and systems to track vendor performance and ensure they meet your requirements and expectations.",
      },
      {
        title: "Relationship Management",
        description:
          "We help you build and maintain positive, productive relationships with key vendors to foster collaboration and continuous improvement.",
      },
      {
        title: "Risk Management",
        description:
          "We identify potential risks in your vendor network and develop mitigation strategies to ensure supply chain resilience.",
      },
      {
        title: "Vendor Development",
        description:
          "We work with your vendors to improve their capabilities and performance, creating mutual benefits and stronger partnerships.",
      },
    ],
    benefits: [
      "Reduced procurement costs through strategic sourcing and negotiation",
      "Improved product and service quality from vendors",
      "Enhanced supply chain reliability and resilience",
      "Stronger vendor relationships leading to better collaboration",
      "Reduced supply chain risks and disruptions",
      "Streamlined procurement processes and reduced administrative burden",
    ],
  },
  {
    slug: "event-management",
    title: "EVENT MANAGEMENT",
    subtitle: "CREATING MEMORABLE EXPERIENCES WITH FLAWLESS EXECUTION",
    description:
      "Our event management service covers everything from concept development to on-site execution. We handle planning, coordination, logistics, and promotion to ensure your events are successful, impactful, and memorable for all attendees.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "Events are powerful opportunities to connect, engage, and inspire. At Creating Opportunities International, we specialize in creating memorable experiences through meticulous planning and flawless execution.",
      "Whether you're organizing a corporate conference, community gathering, or special celebration, our event management team handles every detail from concept to completion. We combine creativity with practical expertise to deliver events that exceed expectations and achieve your objectives.",
      "Our event management services include:",
    ],
    features: [
      {
        title: "Event Strategy & Concept Development",
        description:
          "We help you define your event objectives and develop creative concepts that align with your goals and resonate with your audience.",
      },
      {
        title: "Venue Selection & Management",
        description:
          "Our team identifies and secures the perfect venue for your event, managing all aspects of venue logistics and requirements.",
      },
      {
        title: "Budget Planning & Management",
        description:
          "We develop comprehensive event budgets and manage all financial aspects to ensure your event delivers maximum value within your budget constraints.",
      },
      {
        title: "Vendor Coordination",
        description:
          "We select and coordinate with all necessary vendors, from catering and audiovisual to entertainment and decor, ensuring seamless integration.",
      },
      {
        title: "Event Promotion & Marketing",
        description:
          "Our marketing experts develop and implement strategies to promote your event and maximize attendance and engagement.",
      },
      {
        title: "On-Site Management & Execution",
        description:
          "Our experienced team provides comprehensive on-site management, handling all details and addressing any issues that arise during your event.",
      },
    ],
    benefits: [
      "Professional execution that reflects positively on your organization",
      "Reduced stress and workload for your team",
      "Creative solutions that make your event stand out",
      "Efficient use of resources through expert planning and management",
      "Seamless experience for attendees from start to finish",
      "Achievement of your event objectives, whether networking, education, or celebration",
    ],
  },
  {
    slug: "career-development",
    title: "CAREER DEVELOPMENT",
    subtitle: "EMPOWERING INDIVIDUALS TO ACHIEVE PROFESSIONAL EXCELLENCE",
    description:
      "Our career development service provides guidance and resources to help individuals advance in their professional journey. We offer career counseling, skills assessment, resume building, interview preparation, and personalized action plans for career growth.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "In today's rapidly evolving job market, strategic career development is essential for professional success. At Creating Opportunities International, we empower individuals to navigate their career paths with confidence and purpose.",
      "Our comprehensive career development services are designed to help you identify your strengths, clarify your goals, and develop the skills and strategies needed to achieve your professional aspirations. We provide personalized guidance and practical tools to support your career journey at every stage.",
      "Our career development services include:",
    ],
    features: [
      {
        title: "Career Assessment & Planning",
        description:
          "We help you assess your skills, interests, and values to develop a clear understanding of your career options and create a strategic career plan.",
      },
      {
        title: "Resume & Cover Letter Development",
        description:
          "Our experts help you create compelling resumes and cover letters that highlight your qualifications and capture the attention of potential employers.",
      },
      {
        title: "Interview Preparation",
        description:
          "We provide coaching and practice sessions to help you develop strong interviewing skills and confidence for job interviews.",
      },
      {
        title: "Job Search Strategies",
        description:
          "We teach you effective job search techniques, including networking, online job searches, and direct employer outreach.",
      },
      {
        title: "Professional Branding",
        description:
          "We help you develop a strong professional brand, including LinkedIn profile optimization and online presence management.",
      },
      {
        title: "Skill Development Planning",
        description:
          "We identify skill gaps and create personalized development plans to enhance your marketability and advancement opportunities.",
      },
    ],
    benefits: [
      "Clarity about your career direction and goals",
      "Increased confidence in your job search and professional interactions",
      "Enhanced marketability through a strong professional brand",
      "Improved job search effectiveness and efficiency",
      "Higher success rate in securing interviews and job offers",
      "Accelerated career advancement and professional growth",
    ],
  },
  {
    slug: "digital-marketing",
    title: "DIGITAL MARKETING",
    subtitle: "ENHANCING YOUR ONLINE PRESENCE FOR MAXIMUM IMPACT",
    description:
      "Our digital marketing service helps you establish and grow your online presence. We provide strategies for social media management, content creation, SEO optimization, email marketing, and analytics to increase your visibility and engagement with your target audience.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "In the digital age, a strong online presence is essential for business success. At Creating Opportunities International, we help organizations navigate the complex digital landscape and leverage online channels to achieve their marketing objectives.",
      "Our digital marketing services are designed to increase your visibility, engage your target audience, and drive measurable results. We develop comprehensive strategies tailored to your specific goals and implement them using the latest tools and techniques.",
      "Our digital marketing services include:",
    ],
    features: [
      {
        title: "Digital Strategy Development",
        description:
          "We create comprehensive digital marketing strategies aligned with your business objectives and target audience.",
      },
      {
        title: "Social Media Management",
        description:
          "Our team develops and implements effective social media strategies to build your brand, engage your audience, and drive conversions.",
      },
      {
        title: "Content Marketing",
        description:
          "We create compelling content that resonates with your audience, establishes your authority, and supports your marketing goals.",
      },
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "We optimize your online presence to improve your visibility in search engine results and drive organic traffic to your website.",
      },
      {
        title: "Email Marketing",
        description:
          "We develop effective email campaigns to nurture leads, build relationships, and drive conversions.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "We track and analyze your digital marketing performance, providing actionable insights for continuous improvement.",
      },
    ],
    benefits: [
      "Increased brand awareness and online visibility",
      "Higher engagement with your target audience",
      "Improved conversion rates and return on investment",
      "Data-driven insights for marketing optimization",
      "Consistent and cohesive brand messaging across channels",
      "Competitive advantage in the digital marketplace",
    ],
  },
  {
    slug: "consulting-services",
    title: "CONSULTING SERVICES",
    subtitle: "EXPERT GUIDANCE FOR ORGANIZATIONAL GROWTH AND TRANSFORMATION",
    description:
      "Our consulting services offer expert advice and solutions for various business challenges. We provide strategic planning, process improvement, change management, and performance optimization to help your organization achieve its goals and overcome obstacles.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "In today's complex and rapidly changing business environment, organizations face numerous challenges that require expert guidance and innovative solutions. At Creating Opportunities International, our consulting services provide the strategic insight and practical expertise needed to navigate these challenges and achieve sustainable success.",
      "We work collaboratively with our clients, taking the time to understand their unique situations, objectives, and constraints. Our consultants bring diverse industry experience and specialized knowledge to develop customized solutions that address your specific needs and drive tangible results.",
      "Our consulting services include:",
    ],
    features: [
      {
        title: "Strategic Planning",
        description:
          "We help you develop clear, actionable strategic plans that align with your vision and position your organization for long-term success.",
      },
      {
        title: "Organizational Development",
        description:
          "Our experts assess your organizational structure and culture, recommending improvements to enhance efficiency, effectiveness, and employee engagement.",
      },
      {
        title: "Process Improvement",
        description:
          "We identify inefficiencies in your business processes and implement improvements to increase productivity and quality while reducing costs.",
      },
      {
        title: "Change Management",
        description:
          "We help you plan and implement organizational changes in a way that minimizes disruption and maximizes adoption and success.",
      },
      {
        title: "Performance Optimization",
        description:
          "We analyze your operations and develop strategies to optimize performance, enhance quality, and improve customer satisfaction.",
      },
      {
        title: "Project Management",
        description:
          "Our project management experts help you plan, execute, and control projects to ensure they are completed on time, within budget, and to specification.",
      },
    ],
    benefits: [
      "Objective, expert perspective on your business challenges",
      "Customized solutions based on proven methodologies and best practices",
      "Improved operational efficiency and effectiveness",
      "Enhanced organizational capability and resilience",
      "Accelerated achievement of business objectives",
      "Knowledge transfer that builds internal capacity",
    ],
  },
  {
    slug: "community-development",
    title: "COMMUNITY DEVELOPMENT",
    subtitle: "BUILDING STRONGER, MORE RESILIENT COMMUNITIES",
    description:
      "Our community development services focus on empowering local communities through sustainable initiatives, capacity building, and collaborative projects. We work with community leaders, organizations, and stakeholders to identify needs and implement effective solutions.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "At Creating Opportunities International, we believe that strong communities are the foundation of a thriving society. Our community development services are designed to empower local communities, foster sustainable growth, and build resilience through collaborative approaches and innovative solutions.",
      "We work closely with community leaders, local organizations, and stakeholders to understand the unique challenges and opportunities within each community. Our team then develops and implements tailored strategies that leverage local assets and address specific needs to create lasting positive change.",
      "Our community development services include:",
    ],
    features: [
      {
        title: "Community Needs Assessment",
        description:
          "We conduct comprehensive assessments to identify community strengths, challenges, and priorities, ensuring our interventions address real needs.",
      },
      {
        title: "Capacity Building",
        description:
          "We provide training, resources, and support to strengthen the capabilities of community organizations and leaders to drive their own development.",
      },
      {
        title: "Program Design & Implementation",
        description:
          "We design and implement community-based programs that address specific needs in areas such as education, health, economic development, and social inclusion.",
      },
      {
        title: "Partnership Development",
        description:
          "We facilitate partnerships between communities, government agencies, businesses, and nonprofit organizations to leverage resources and expertise.",
      },
      {
        title: "Resource Mobilization",
        description:
          "We help communities identify and access funding, technical assistance, and other resources needed to implement development initiatives.",
      },
      {
        title: "Monitoring & Evaluation",
        description:
          "We establish systems to track progress, measure impact, and ensure accountability, enabling continuous learning and improvement.",
      },
    ],
    benefits: [
      "Increased community self-reliance and resilience",
      "Stronger local leadership and organizational capacity",
      "Improved access to essential services and opportunities",
      "Enhanced social cohesion and community engagement",
      "Sustainable economic development and job creation",
      "Long-term positive impact on community well-being",
    ],
  },
  {
    slug: "youth-empowerment",
    title: "YOUTH EMPOWERMENT",
    subtitle: "INSPIRING AND EQUIPPING THE NEXT GENERATION OF LEADERS",
    description:
      "Our youth empowerment programs focus on developing the skills, confidence, and opportunities young people need to thrive. We provide mentorship, leadership training, educational support, and platforms for youth to make a positive impact in their communities.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "At Creating Opportunities International, we believe that young people are not just the leaders of tomorrow—they are powerful agents of change today. Our youth empowerment programs are designed to nurture the potential of young people, providing them with the skills, confidence, and opportunities they need to thrive in a rapidly changing world.",
      "We take a holistic approach to youth development, addressing the diverse needs and aspirations of young people while creating supportive environments where they can grow, learn, and lead. Our programs combine practical skills development with mentorship, leadership opportunities, and platforms for youth-led initiatives.",
      "Our youth empowerment services include:",
    ],
    features: [
      {
        title: "Leadership Development",
        description:
          "We provide comprehensive leadership training that helps young people develop essential skills such as critical thinking, communication, teamwork, and ethical decision-making.",
      },
      {
        title: "Mentorship Programs",
        description:
          "We connect youth with experienced mentors who provide guidance, support, and inspiration, helping them navigate challenges and pursue their goals.",
      },
      {
        title: "Educational Support",
        description:
          "We offer academic assistance, scholarship opportunities, and educational resources to help young people succeed in their studies and prepare for higher education.",
      },
      {
        title: "Career Readiness",
        description:
          "We equip youth with the skills, knowledge, and experiences they need to prepare for the workforce, including resume building, interview skills, and internship opportunities.",
      },
      {
        title: "Youth-Led Initiatives",
        description:
          "We provide platforms, resources, and support for young people to design and implement their own community projects, fostering creativity, initiative, and civic engagement.",
      },
      {
        title: "Life Skills Development",
        description:
          "We help young people develop essential life skills such as financial literacy, healthy decision-making, conflict resolution, and emotional intelligence.",
      },
    ],
    benefits: [
      "Increased confidence and self-efficacy among youth participants",
      "Enhanced leadership capabilities and civic engagement",
      "Improved academic performance and educational outcomes",
      "Better preparation for career success and economic independence",
      "Stronger peer networks and supportive relationships",
      "Positive youth contribution to community development and social change",
    ],
  },
  {
    slug: "extended-services",
    title: "EXTENDED SERVICES",
    subtitle: "SPECIALIZED SOLUTIONS TO MEET YOUR UNIQUE NEEDS AND CHALLENGES",
    description:
      "Our extended services offer specialized solutions including event management & conferences, academic ECA calendar, event management toolkit, professional development workshops, and educational consulting to address your specific challenges and requirements.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "At Creating Opportunities International, we understand that organizations and individuals often face unique challenges that require specialized solutions. Our extended services are designed to address these specific needs with tailored approaches and expert guidance.",
      "From comprehensive event management to educational consulting, our extended services leverage our team's diverse expertise and extensive experience to provide high-quality solutions that drive meaningful results.",
      "Our extended services include:",
    ],
    features: [
      {
        title: "Event Management & Conferences",
        description:
          "We provide comprehensive event management services for conferences, workshops, and professional gatherings, handling everything from venue selection to attendee engagement.",
      },
      {
        title: "Academic ECA Calendar",
        description:
          "Our Academic Extra-Curricular Activities Calendar is a comprehensive resource for educational institutions, students, and parents, highlighting important competitions and enrichment opportunities.",
      },
      {
        title: "Event Management Toolkit",
        description:
          "Our toolkit provides organizations with resources and templates needed to plan and execute successful events, including planning checklists, budget templates, and evaluation tools.",
      },
      {
        title: "Professional Development Workshops",
        description:
          "Our specialized workshops enhance professional skills and knowledge in various fields, led by industry experts providing practical insights and hands-on experience.",
      },
      {
        title: "Educational Consulting",
        description:
          "We offer expert guidance to schools, universities, and educational organizations, providing strategic planning, curriculum development, and program evaluation solutions.",
      },
    ],
    benefits: [
      "Specialized expertise tailored to your specific needs",
      "Comprehensive solutions that address complex challenges",
      "Professional execution that ensures quality outcomes",
      "Time and resource savings through expert assistance",
      "Access to best practices and innovative approaches",
      "Ongoing support and guidance throughout implementation",
    ],
  },
  {
    slug: "merchandise",
    title: "MERCHANDISE",
    subtitle: "HIGH-QUALITY PRODUCTS THAT REPRESENT OUR MISSION AND VALUES",
    description:
      "Our merchandise collection features high-quality products including apparel, accessories, books, and gift sets that represent our mission and values. Each purchase supports our mission to create opportunities for individuals and communities worldwide.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "At Creating Opportunities International, we believe that our merchandise is more than just products—it's a way to spread our message and support our mission. Our carefully curated collection of high-quality items allows supporters to show their commitment to creating opportunities while enjoying well-designed, practical products.",
      "From comfortable apparel to useful accessories and inspiring books, our merchandise collection embodies our values of quality, sustainability, and positive impact. Each purchase directly contributes to our programs and initiatives, helping us create more opportunities for individuals and communities around the world.",
      "Our merchandise collection includes:",
    ],
    features: [
      {
        title: "Apparel",
        description:
          "Our clothing line features comfortable, stylish items made with quality materials and ethical manufacturing practices, including t-shirts, hoodies, and caps.",
      },
      {
        title: "Accessories",
        description:
          "Our accessories collection includes practical items like eco-friendly tote bags, water bottles, and notebooks that help you carry our message wherever you go.",
      },
      {
        title: "Books & Resources",
        description:
          "Our publications offer valuable insights, inspiration, and practical guidance on personal development, leadership, and creating positive change.",
      },
      {
        title: "Gift Sets",
        description:
          "Our curated gift boxes combine our most popular items into thoughtful packages perfect for showing appreciation or inspiring someone special.",
      },
      {
        title: "Custom Bulk Orders",
        description:
          "We offer customization options for organizations looking to create branded merchandise for events, teams, or promotional purposes.",
      },
    ],
    benefits: [
      "Support our mission with every purchase",
      "Enjoy high-quality, ethically produced products",
      "Spread awareness about creating opportunities",
      "Access practical items that inspire positive change",
      "Give meaningful gifts that make a difference",
      "Join a community of like-minded supporters",
    ],
  },
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Check if we're trying to access the merchandise page
  if (params.slug === "merchandise") {
    // Redirect to the specific merchandise page
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Redirecting to Merchandise Page...</h2>
          <p>
            If you are not redirected automatically, please{" "}
            <Link href="/services/merchandise" className="text-blue-600 underline">
              click here
            </Link>
            .
          </p>

          {/* Client-side redirect script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.location.href = "/services/merchandise";
              `,
            }}
          />
        </div>
      </div>
    )
  }

  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div>
      {/* Hero Section with Service Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Service Title and Subtitle */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e6e8c] mb-3">{service.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">{service.subtitle}</p>

            {/* Service Description */}
            <div className="prose prose-lg max-w-none mb-12">
              {service.detailedDescription.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#0e6e8c] mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-[#f7f9fa] p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-[#0e6e8c] mb-6">Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#0e9aa7] mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mb-6">
                Ready to get started with our {service.title.toLowerCase()} services?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                    CONTACT US
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="px-8 py-6 rounded font-bold text-lg">
                    EXPLORE OTHER SERVICES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
