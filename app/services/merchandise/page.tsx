"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import HeroSection from "@/components/hero-section"

export default function MerchandisePage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOrderClick = (product: any) => {
    setSelectedProduct(product)
    setIsOrderModalOpen(true)
  }

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setOrderSubmitted(true)

    // Reset after showing success message
    setTimeout(() => {
      setOrderSubmitted(false)
      setIsOrderModalOpen(false)
      setSelectedProduct(null)
    }, 3000)
  }

  return (
    <>
      <HeroSection
        title="Our Merchandise"
        subtitle="High-quality products that represent our mission and values."
        backgroundColor="#121d3e"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Shop With Purpose</h2>
              <p className="text-gray-700 mb-4">
                Our merchandise collection is designed to inspire and empower. Each purchase supports our mission to
                create opportunities for individuals and communities around the world.
              </p>
              <p className="text-gray-700">
                From apparel to accessories, our products are made with quality materials and ethical manufacturing
                practices. Show your support for Creating Opportunities International while making a statement with our
                stylish and meaningful merchandise.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Merchandise Collection"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="apparel" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="apparel">Apparel</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
              <TabsTrigger value="books">Books & Resources</TabsTrigger>
              <TabsTrigger value="gifts">Gift Sets</TabsTrigger>
            </TabsList>
            <TabsContent value="apparel" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {apparelProducts.map((product, index) => (
                  <ProductCard key={index} product={product} onOrderClick={handleOrderClick} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="accessories" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {accessoriesProducts.map((product, index) => (
                  <ProductCard key={index} product={product} onOrderClick={handleOrderClick} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="books" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {booksProducts.map((product, index) => (
                  <ProductCard key={index} product={product} onOrderClick={handleOrderClick} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="gifts" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {giftProducts.map((product, index) => (
                  <ProductCard key={index} product={product} onOrderClick={handleOrderClick} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {merchandiseFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#121d3e] text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Custom Bulk Orders</h2>
                <p className="mb-6">
                  Looking for custom merchandise for your organization or event? We offer bulk ordering with
                  customization options. Contact us to discuss your specific needs.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-[#121d3e] hover:bg-gray-100">Inquire About Bulk Orders</Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {bulkOrderFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Order Modal */}
      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {orderSubmitted
                ? "Order Submitted Successfully!"
                : `Place Order for ${selectedProduct?.name || "Product"}`}
            </DialogTitle>
          </DialogHeader>

          {orderSubmitted ? (
            <div className="text-center py-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-500 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mb-2">Thank you for your order! We will contact you shortly to confirm the details.</p>
              <p className="text-sm text-gray-500">
                Order Reference: <span className="font-bold">ORD-{Math.floor(Math.random() * 10000)}</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                <Input id="whatsapp" placeholder="Enter your WhatsApp number" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productCode">Product Code</Label>
                <Input id="productCode" value={selectedProduct?.code || ""} readOnly className="bg-gray-50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method *</Label>
                <Select required defaultValue="bank-transfer">
                  <SelectTrigger id="paymentMethod">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="mobile-money">Mobile Money</SelectItem>
                    <SelectItem value="cash-on-delivery">Cash on Delivery</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Full Delivery Address *</Label>
                <Textarea id="address" placeholder="Enter your complete delivery address" rows={3} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="size">Size *</Label>
                <RadioGroup defaultValue="m" className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="xs" id="size-xs" />
                    <Label htmlFor="size-xs">XS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="s" id="size-s" />
                    <Label htmlFor="size-s">S</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="m" id="size-m" />
                    <Label htmlFor="size-m">M</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="l" id="size-l" />
                    <Label htmlFor="size-l">L</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="xl" id="size-xl" />
                    <Label htmlFor="size-xl">XL</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="xxl" id="size-xxl" />
                    <Label htmlFor="size-xxl">XXL</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="size-na" />
                    <Label htmlFor="size-na">N/A</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priceRange">Price Range *</Label>
                <Select required defaultValue="standard">
                  <SelectTrigger id="priceRange">
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (${selectedProduct?.price?.toFixed(2) || "0.00"})</SelectItem>
                    <SelectItem value="premium">Premium (+$10.00)</SelectItem>
                    <SelectItem value="custom">Custom (To be discussed)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" placeholder="Any special instructions or requests?" rows={3} />
              </div>

              <Button type="submit" className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Submit Order"
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function ProductCard({ product, onOrderClick }: { product: any; onOrderClick: (product: any) => void }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-[#0e9aa7] text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Button
            className="bg-white text-[#121d3e] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            onClick={() => onOrderClick(product)}
          >
            View Details
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <span className="text-sm text-gray-500 font-mono">Code: {product.code}</span>
      </div>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#121d3e]">${product.price.toFixed(2)}</span>
        <Button variant="outline" size="sm" onClick={() => onOrderClick(product)}>
          Place Order
        </Button>
      </div>
    </div>
  )
}

// Mock data for apparel products
const apparelProducts = [
  {
    id: "tshirt-1",
    code: "APP-TS001",
    name: "Empowerment T-Shirt",
    category: "T-Shirts",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "hoodie-1",
    code: "APP-HD001",
    name: "Opportunity Hoodie",
    category: "Hoodies",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "hat-1",
    code: "APP-CP001",
    name: "Creating Opportunities Cap",
    category: "Headwear",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for accessories products
const accessoriesProducts = [
  {
    id: "bag-1",
    code: "ACC-BG001",
    name: "Eco-Friendly Tote Bag",
    category: "Bags",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "bottle-1",
    code: "ACC-BT001",
    name: "Stainless Steel Water Bottle",
    category: "Drinkware",
    price: 22.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "notebook-1",
    code: "ACC-NB001",
    name: "Inspirational Notebook",
    category: "Stationery",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for books products
const booksProducts = [
  {
    id: "book-1",
    code: "BK-001",
    name: "Creating Your Path: A Guide to Success",
    category: "Books",
    price: 18.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "ebook-1",
    code: "BK-EB001",
    name: "Digital Transformation Workbook",
    category: "E-Books",
    price: 9.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "journal-1",
    code: "BK-JN001",
    name: "Daily Reflection Journal",
    category: "Journals",
    price: 14.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for gift products
const giftProducts = [
  {
    id: "giftset-1",
    code: "GFT-BX001",
    name: "Empowerment Gift Box",
    category: "Gift Sets",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "giftcard-1",
    code: "GFT-GC001",
    name: "Digital Gift Card",
    category: "Gift Cards",
    price: 25.0,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "bundle-1",
    code: "GFT-BN001",
    name: "Self-Development Bundle",
    category: "Bundles",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for merchandise features
const merchandiseFeatures = [
  {
    title: "Quality Materials",
    description: "All our products are made with high-quality, durable materials designed to last.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Ethical Production",
    description: "We partner with ethical manufacturers who provide fair wages and safe working conditions.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Mission Support",
    description: "Every purchase directly supports our mission to create opportunities for communities worldwide.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

// Mock data for bulk order features
const bulkOrderFeatures = [
  {
    title: "Custom Branding",
    description: "Add your logo or custom design to any product",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "Volume Discounts",
    description: "Special pricing for large orders",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Quick Turnaround",
    description: "Efficient production and shipping for tight deadlines",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sample Options",
    description: "Request samples before placing a large order",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
]
