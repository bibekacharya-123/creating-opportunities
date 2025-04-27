export async function getFeaturedEvents() {
  // Fetch or import featured events from respective pages
  return [
    {
      id: 1,
      title: "Youth Leadership Summit 2025",
      date: "June 15-17, 2025",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A three-day summit bringing together young leaders from across Nepal to discuss pressing issues and develop leadership skills.",
      category: "Collaborative Event",
    },
    // ...other featured events...
  ]
}

export async function getUpcomingEvents() {
  // Fetch or import upcoming events
  return [
    {
      id: 4,
      title: "Entrepreneurship Bootcamp",
      date: "April 25-27, 2025",
      location: "Pokhara, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      category: "Our Initiative",
    },
    // ...other upcoming events...
  ]
}

export async function getOngoingProjects() {
  // Fetch or import ongoing projects
  return [
    {
      id: 7,
      title: "Youth Empowerment Program",
      duration: "2023-2025",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "A comprehensive program designed to empower youth through education, skill development, and mentorship.",
      category: "Our Project",
    },
    // ...other ongoing projects...
  ]
}

export async function getInitiatives() {
  // Mock or actual implementation for fetching initiatives
  return [
    {
      id: "initiative-1",
      title: "Community Health Initiative",
      description: "Improving healthcare access in rural areas.",
      date: "2023-11-15",
      location: "Remote",
      category: "Our Initiatives",
      image: "/images/initiative-1.jpg",
    },
    // Add more initiatives as needed
  ];
}

export async function getProjects() {
  // Mock or actual implementation for fetching projects
  return [
    {
      id: "project-1",
      title: "Clean Water Project",
      description: "Providing clean water to underserved communities.",
      date: "2023-12-01",
      location: "Local",
      category: "Our Projects",
      image: "/images/project-1.jpg",
    },
    // Add more projects as needed
  ];
}

export async function getCollaborativeEvents() {
  // Mock or actual implementation for fetching collaborative events
  return [
    {
      id: "event-1",
      title: "Tech for Good Summit",
      description: "Exploring technology's role in social impact.",
      date: "2023-10-20",
      location: "City Center",
      category: "Collaborative Events",
      image: "/images/event-1.jpg",
    },
    // Add more events as needed
  ];
}
