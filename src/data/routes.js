export const routes = [
  {
    id: "buddhist-art-route",
    name: "Buddhist Art Route",
    theme: "Ancient Spiritual & Rock-Cut Monuments",
    description: "Trace the evolution of early Buddhist art from Mauryan stone stupas and Torana carvings to Vakataka wall murals.",
    stops: [
      { locationId: "sanchi", name: "Sanchi", state: "Madhya Pradesh", highlight: "Great Stupa & Torana Reliefs" },
      { locationId: "ajanta-ellora", name: "Ajanta & Ellora", state: "Maharashtra", highlight: "Cave 1 Mural Paintings & Kailash Temple" }
    ],
    pathCoordinates: [
      { x: 270, y: 427 },
      { x: 211, y: 516 }
    ]
  },
  {
    id: "mughal-art-route",
    name: "Mughal Art Route",
    theme: "Imperial Architecture & Court Miniatures",
    description: "Explore the majestic court art, red sandstone fortresses, white marble mausoleums, and imperial gardens of the Mughal Empire.",
    stops: [
      { locationId: "delhi", name: "Delhi", state: "NCT Delhi", highlight: "Red Fort & Humayun's Tomb" },
      { locationId: "agra", name: "Agra", state: "Uttar Pradesh", highlight: "Taj Mahal & Pietra Dura Inlay" },
      { locationId: "lucknow", name: "Lucknow", state: "Uttar Pradesh", highlight: "Bara Imambara & Nawabi Heritage" }
    ],
    pathCoordinates: [
      { x: 258, y: 296 },
      { x: 276, y: 333 },
      { x: 344, y: 341 }
    ]
  },
  {
    id: "temple-art-route",
    name: "Temple Art Route",
    theme: "Sacred Stone Architecture & Bronzes",
    description: "Journey across India's sacred architectural masterpieces—from Northern Nagara spires and Eastern Kalinga chariots to Southern Dravidian towers and Chola bronzes.",
    stops: [
      { locationId: "khajuraho", name: "Khajuraho", state: "Madhya Pradesh", highlight: "Chandela Sandstone Sculptures" },
      { locationId: "konark", name: "Konark", state: "Odisha", highlight: "13th-Century Sun Temple Stone Chariot" },
      { locationId: "hampi", name: "Hampi", state: "Karnataka", highlight: "Vijayanagara Stone Chariot & Musical Pillars" },
      { locationId: "thanjavur", name: "Thanjavur", state: "Tamil Nadu", highlight: "Brihadeeswarar Temple & Chola Bronzes" },
      { locationId: "madurai", name: "Madurai", state: "Tamil Nadu", highlight: "Meenakshi Amman Polychrome Gopurams" }
    ],
    pathCoordinates: [
      { x: 320, y: 393 },
      { x: 463, y: 519 },
      { x: 241, y: 636 },
      { x: 302, y: 752 },
      { x: 279, y: 774 }
    ]
  },
  {
    id: "modern-art-route",
    name: "Modern Indian Art Route",
    theme: "Contextual Modernism & Modern Art Centers",
    description: "Follow the 20th-century visual movement from Bengal nationalist revivalism to Mumbai's avant-garde Progressive movement and Madras linear modernism.",
    stops: [
      { locationId: "kolkata", name: "Kolkata", state: "West Bengal", highlight: "Bengal School & Abanindranath Tagore" },
      { locationId: "santiniketan", name: "Santiniketan", state: "West Bengal", highlight: "Kala Bhavana & Nandalal Bose" },
      { locationId: "mumbai", name: "Mumbai", state: "Maharashtra", highlight: "Progressive Artists' Group & M. F. Husain" },
      { locationId: "chennai", name: "Chennai", state: "Tamil Nadu", highlight: "Madras Art Movement & Cholamandal Village" }
    ],
    pathCoordinates: [
      { x: 515, y: 451 },
      { x: 499, y: 422 },
      { x: 158, y: 540 },
      { x: 329, y: 693 }
    ]
  }
];
