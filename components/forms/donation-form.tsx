"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Comprehensive list of countries
const countries = [
  { value: "af", label: "Afghanistan" },
  { value: "al", label: "Albania" },
  { value: "dz", label: "Algeria" },
  { value: "ad", label: "Andorra" },
  { value: "ao", label: "Angola" },
  { value: "ag", label: "Antigua and Barbuda" },
  { value: "ar", label: "Argentina" },
  { value: "am", label: "Armenia" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "az", label: "Azerbaijan" },
  { value: "bs", label: "Bahamas" },
  { value: "bh", label: "Bahrain" },
  { value: "bd", label: "Bangladesh" },
  { value: "bb", label: "Barbados" },
  { value: "by", label: "Belarus" },
  { value: "be", label: "Belgium" },
  { value: "bz", label: "Belize" },
  { value: "bj", label: "Benin" },
  { value: "bt", label: "Bhutan" },
  { value: "bo", label: "Bolivia" },
  { value: "ba", label: "Bosnia and Herzegovina" },
  { value: "bw", label: "Botswana" },
  { value: "br", label: "Brazil" },
  { value: "bn", label: "Brunei" },
  { value: "bg", label: "Bulgaria" },
  { value: "bf", label: "Burkina Faso" },
  { value: "bi", label: "Burundi" },
  { value: "cv", label: "Cabo Verde" },
  { value: "kh", label: "Cambodia" },
  { value: "cm", label: "Cameroon" },
  { value: "ca", label: "Canada" },
  { value: "cf", label: "Central African Republic" },
  { value: "td", label: "Chad" },
  { value: "cl", label: "Chile" },
  { value: "cn", label: "China" },
  { value: "co", label: "Colombia" },
  { value: "km", label: "Comoros" },
  { value: "cg", label: "Congo" },
  { value: "cd", label: "Congo (Democratic Republic)" },
  { value: "cr", label: "Costa Rica" },
  { value: "hr", label: "Croatia" },
  { value: "cu", label: "Cuba" },
  { value: "cy", label: "Cyprus" },
  { value: "cz", label: "Czech Republic" },
  { value: "dk", label: "Denmark" },
  { value: "dj", label: "Djibouti" },
  { value: "dm", label: "Dominica" },
  { value: "do", label: "Dominican Republic" },
  { value: "ec", label: "Ecuador" },
  { value: "eg", label: "Egypt" },
  { value: "sv", label: "El Salvador" },
  { value: "gq", label: "Equatorial Guinea" },
  { value: "er", label: "Eritrea" },
  { value: "ee", label: "Estonia" },
  { value: "sz", label: "Eswatini" },
  { value: "et", label: "Ethiopia" },
  { value: "fj", label: "Fiji" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "ga", label: "Gabon" },
  { value: "gm", label: "Gambia" },
  { value: "ge", label: "Georgia" },
  { value: "de", label: "Germany" },
  { value: "gh", label: "Ghana" },
  { value: "gr", label: "Greece" },
  { value: "gd", label: "Grenada" },
  { value: "gt", label: "Guatemala" },
  { value: "gn", label: "Guinea" },
  { value: "gw", label: "Guinea-Bissau" },
  { value: "gy", label: "Guyana" },
  { value: "ht", label: "Haiti" },
  { value: "hn", label: "Honduras" },
  { value: "hu", label: "Hungary" },
  { value: "is", label: "Iceland" },
  { value: "in", label: "India" },
  { value: "id", label: "Indonesia" },
  { value: "ir", label: "Iran" },
  { value: "iq", label: "Iraq" },
  { value: "ie", label: "Ireland" },
  { value: "il", label: "Israel" },
  { value: "it", label: "Italy" },
  { value: "jm", label: "Jamaica" },
  { value: "jp", label: "Japan" },
  { value: "jo", label: "Jordan" },
  { value: "kz", label: "Kazakhstan" },
  { value: "ke", label: "Kenya" },
  { value: "ki", label: "Kiribati" },
  { value: "kp", label: "Korea (North)" },
  { value: "kr", label: "Korea (South)" },
  { value: "kw", label: "Kuwait" },
  { value: "kg", label: "Kyrgyzstan" },
  { value: "la", label: "Laos" },
  { value: "lv", label: "Latvia" },
  { value: "lb", label: "Lebanon" },
  { value: "ls", label: "Lesotho" },
  { value: "lr", label: "Liberia" },
  { value: "ly", label: "Libya" },
  { value: "li", label: "Liechtenstein" },
  { value: "lt", label: "Lithuania" },
  { value: "lu", label: "Luxembourg" },
  { value: "mg", label: "Madagascar" },
  { value: "mw", label: "Malawi" },
  { value: "my", label: "Malaysia" },
  { value: "mv", label: "Maldives" },
  { value: "ml", label: "Mali" },
  { value: "mt", label: "Malta" },
  { value: "mh", label: "Marshall Islands" },
  { value: "mr", label: "Mauritania" },
  { value: "mu", label: "Mauritius" },
  { value: "mx", label: "Mexico" },
  { value: "fm", label: "Micronesia" },
  { value: "md", label: "Moldova" },
  { value: "mc", label: "Monaco" },
  { value: "mn", label: "Mongolia" },
  { value: "me", label: "Montenegro" },
  { value: "ma", label: "Morocco" },
  { value: "mz", label: "Mozambique" },
  { value: "mm", label: "Myanmar" },
  { value: "na", label: "Namibia" },
  { value: "nr", label: "Nauru" },
  { value: "np", label: "Nepal" },
  { value: "nl", label: "Netherlands" },
  { value: "nz", label: "New Zealand" },
  { value: "ni", label: "Nicaragua" },
  { value: "ne", label: "Niger" },
  { value: "ng", label: "Nigeria" },
  { value: "mk", label: "North Macedonia" },
  { value: "no", label: "Norway" },
  { value: "om", label: "Oman" },
  { value: "pk", label: "Pakistan" },
  { value: "pw", label: "Palau" },
  { value: "pa", label: "Panama" },
  { value: "pg", label: "Papua New Guinea" },
  { value: "py", label: "Paraguay" },
  { value: "pe", label: "Peru" },
  { value: "ph", label: "Philippines" },
  { value: "pl", label: "Poland" },
  { value: "pt", label: "Portugal" },
  { value: "qa", label: "Qatar" },
  { value: "ro", label: "Romania" },
  { value: "ru", label: "Russia" },
  { value: "rw", label: "Rwanda" },
  { value: "kn", label: "Saint Kitts and Nevis" },
  { value: "lc", label: "Saint Lucia" },
  { value: "vc", label: "Saint Vincent and the Grenadines" },
  { value: "ws", label: "Samoa" },
  { value: "sm", label: "San Marino" },
  { value: "st", label: "Sao Tome and Principe" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "sn", label: "Senegal" },
  { value: "rs", label: "Serbia" },
  { value: "sc", label: "Seychelles" },
  { value: "sl", label: "Sierra Leone" },
  { value: "sg", label: "Singapore" },
  { value: "sk", label: "Slovakia" },
  { value: "si", label: "Slovenia" },
  { value: "sb", label: "Solomon Islands" },
  { value: "so", label: "Somalia" },
  { value: "za", label: "South Africa" },
  { value: "ss", label: "South Sudan" },
  { value: "es", label: "Spain" },
  { value: "lk", label: "Sri Lanka" },
  { value: "sd", label: "Sudan" },
  { value: "sr", label: "Suriname" },
  { value: "se", label: "Sweden" },
  { value: "ch", label: "Switzerland" },
  { value: "sy", label: "Syria" },
  { value: "tw", label: "Taiwan" },
  { value: "tj", label: "Tajikistan" },
  { value: "tz", label: "Tanzania" },
  { value: "th", label: "Thailand" },
  { value: "tl", label: "Timor-Leste" },
  { value: "tg", label: "Togo" },
  { value: "to", label: "Tonga" },
  { value: "tt", label: "Trinidad and Tobago" },
  { value: "tn", label: "Tunisia" },
  { value: "tr", label: "Turkey" },
  { value: "tm", label: "Turkmenistan" },
  { value: "tv", label: "Tuvalu" },
  { value: "ug", label: "Uganda" },
  { value: "ua", label: "Ukraine" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "uy", label: "Uruguay" },
  { value: "uz", label: "Uzbekistan" },
  { value: "vu", label: "Vanuatu" },
  { value: "va", label: "Vatican City" },
  { value: "ve", label: "Venezuela" },
  { value: "vn", label: "Vietnam" },
  { value: "ye", label: "Yemen" },
  { value: "zm", label: "Zambia" },
  { value: "zw", label: "Zimbabwe" },
]

export default function DonationForm() {
  const [frequency, setFrequency] = useState<string>("one-time")
  const [open, setOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(countries)

  // Custom search filter function
  useEffect(() => {
    if (!searchTerm) {
      setFilteredCountries(countries)
      return
    }

    const searchTermLower = searchTerm.toLowerCase()
    const filtered = countries.filter((country) => {
      // Search in country code
      if (country.value.toLowerCase().includes(searchTermLower)) {
        return true
      }

      // Search in country name
      if (country.label.toLowerCase().includes(searchTermLower)) {
        return true
      }

      // Search by first letters of words in country name (e.g., "US" should find "United States")
      const words = country.label.split(" ")
      const acronym = words
        .map((word) => word[0])
        .join("")
        .toLowerCase()
      if (acronym.includes(searchTermLower)) {
        return true
      }

      return false
    })

    setFilteredCountries(filtered)
  }, [searchTerm])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your donation! This is a demo - no actual payment will be processed.")
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-dark-teal to-medium-teal p-6 text-white">
        <h2 className="text-2xl font-bold">Make a Donation</h2>
        <p className="mt-2 opacity-90">Your support helps us create more opportunities for those in need</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Donation Frequency */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Donation Frequency</h3>
          <RadioGroup value={frequency} onValueChange={setFrequency} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <Label htmlFor="one-time">One-time donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="quarterly" id="quarterly" />
              <Label htmlFor="quarterly">Quarterly donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="annually" id="annually" />
              <Label htmlFor="annually">Annual donation</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Your Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="full-name">Full Name *</Label>
              <Input id="full-name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="country">Country *</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between mt-1 h-10"
                  >
                    {selectedCountry
                      ? countries.find((country) => country.value === selectedCountry)?.label
                      : "Select country..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput
                      placeholder="Search country..."
                      className="h-9"
                      value={searchTerm}
                      onValueChange={setSearchTerm}
                    />
                    <CommandList>
                      <CommandEmpty>No country found. Try a different search term.</CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-y-auto">
                        {filteredCountries.map((country) => (
                          <CommandItem
                            key={country.value}
                            value={country.value}
                            onSelect={(currentValue) => {
                              setSelectedCountry(currentValue === selectedCountry ? "" : currentValue)
                              setOpen(false)
                              setSearchTerm("")
                            }}
                          >
                            {country.label}
                            <Check
                              className={cn(
                                "ml-auto h-4 w-4",
                                selectedCountry === country.value ? "opacity-100" : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full py-6 text-lg bg-dark-teal hover:bg-dark-teal/90">
          Complete Donation
        </Button>

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>Your payment information is securely processed and we never store your card details.</p>
          <p>
            Creating Opportunities is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to
            the extent allowed by law.
          </p>
        </div>
      </form>
    </div>
  )
}
