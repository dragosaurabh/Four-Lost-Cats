// Four Lost Cats — site content & assets
const B = "https://static.prod-images.emergentagent.com/jobs/46e3393d-1e7a-4612-9895-b704025510a9/images/";

export const IMAGES = {
  heroInterior: B + "107277c73965c55183245a6fe4cab486131da30867100a15dbfdbf4e50855249.jpeg",
  blueLevel: B + "d183111e9873c12c7f59c7726e82cd76c67292a573802151f3901f2b54bda7ce.jpeg",
  peachLevel: B + "7c7acab78dc3c9b337cfabac57de5ac6a9131766839d3c53197181989405d439.jpeg",
  paperLanterns: B + "c71936ef72789943a209feb75cdaf9534c727f9b0ba9fbf31f3e2088035917f6.jpeg",
  icedMatcha: B + "3b4cd8dca350c12bfb9bab7a4b06e1a63fd9344f52683ced152bac877af07cf5.jpeg",
  foodFlatlay: B + "f0ee21b5bafb74f5257e9c1b7f5243be04a9fb59240b724f8c12af1faa6ce719.jpeg",
  catMoment: B + "d716f2368452c02fb14f02bf19361f860a070e7f61dae55f9eadef794e7c548d.jpeg",
  eventSpace: B + "da567ea2d11e6b338c77683b347fa351edc5687e203a8bf3a639596e14b14059.jpeg",
  eveningVibes: B + "e3e0dc439790553c3d2923823814d52dbfa69f081cc7bca511fb3163eb1a6b2b.jpeg",
  workshop: B + "dd9884bc7fc4e2d6c2cebba982ea7a11122dd13221a99e0b8ec0a1d518d2c989.jpeg",
  affogato: B + "990f45a2ac547fe0a329d88b7c59de7a36a01e064ba185f71973c594fa31efbf.jpeg",
  croissant: B + "018c1357260ea8a29bc073bf5889e3d6fed147bc35951b21ed7d3517c767e7df.jpeg",
  pasta: B + "47e5a3645e2295748647ca25c9d2e319d3686d3e2dbd17611e4606915f1df9b9.jpeg",
  flatWhite: B + "2ec9d98eb90555f0a24234faa2afd2b0bc3522eada4f54fe3d0ce1a73900d11e.jpeg",
  brownie: B + "452ec3c7308c7dfc7954c689ebadf5a659f2a1f8b0b1f404761415186061e10a.jpeg",
  nitro: B + "4d827111f6356c7280b954a2d72c5b791cea6cfdd770babc1394bd6eebe39503.jpeg",
  club: B + "98259caf3065bd3dfb0b673a8c7fe20407f5913c66d20e30705e36f8cc2c2d57.jpeg",
  mocktail: B + "1bb5010e76a49f63f7d76b638cfc6b0bc803bfee2327418418908f4a5d72dab9.jpeg",
};

export const CONTACT = {
  phone: "+91 253 403 5695",
  phoneHref: "tel:+912534035695",
  instagram: "https://www.instagram.com/fourlostcats/",
  instagramHandle: "@fourlostcats",
  zomato: "https://www.zomato.com/nashik/four-lost-cats-college-road",
  maps: "https://www.google.com/maps/search/?api=1&query=20.0176084,73.7634571",
  mapsEmbed: "https://www.google.com/maps?q=20.0176084,73.7634571&z=16&output=embed",
  address: "Plot No. 14, Ajinkyatara Building, D.K. Nagar, Swami Vivekanand Marg, Gangapur Rd, Nashik, Maharashtra 422013",
  hours: "9:30 AM – 11:00 PM",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "The Space", href: "#design" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
];

export const MENU = {
  "Specialty Coffee": {
    icon: "☕",
    items: [
      { name: "Pour Over", desc: "Single-origin, hand-poured. Ask us about today's bean.", price: 180 },
      { name: "Flat White", desc: "Velvety microfoam, double shot. The purist's choice.", price: 165, img: "flatWhite" },
      { name: "Honey Cinnamon Latte", desc: "Sweet, spiced, and dangerously addictive.", price: 195, badge: "Staff Pick" },
      { name: "Espresso & Tonic", desc: "Bitter meets sparkling. Surprisingly refreshing.", price: 185 },
      { name: "Café Mocha", desc: "Rich espresso meets Belgian chocolate and steamed milk.", price: 205 },
    ],
  },
  "Cold Brews & Iced": {
    icon: "🧊",
    items: [
      { name: "Nitro Cold Brew", desc: "Smooth, creamy, on tap. No ice needed.", price: 220, badge: "Most Loved", img: "nitro" },
      { name: "Vietnamese Iced Coffee", desc: "Bold, sweet, and dangerously drinkable.", price: 240 },
      { name: "Iced Americano", desc: "Clean, crisp, zero nonsense.", price: 145 },
      { name: "Iced Matcha Latte", desc: "Earthy, creamy, photogenic.", price: 210, img: "icedMatcha" },
    ],
  },
  "Non-Coffee": {
    icon: "🫖",
    items: [
      { name: "Masala Chai", desc: "Spiced the way chai was meant to be.", price: 120 },
      { name: "Matcha Tea", desc: "Ceremonial grade, whisked with intention.", price: 190 },
      { name: "Ginger Lemon Tea", desc: "Soothing, tangy, perfect for rainy days.", price: 145 },
    ],
  },
  "Croissants & Sandwiches": {
    icon: "🥐",
    items: [
      { name: "Butter Croissant", desc: "Flaky, golden, French-approved.", price: 190, img: "croissant" },
      { name: "Chocolate Croissant", desc: "Because chocolate makes everything better.", price: 240 },
      { name: "Egg & Cheese Croissant", desc: "The breakfast you deserve.", price: 265, badge: "Staff Pick" },
      { name: "Roasted Chicken Croissant", desc: "Hearty, warm, and gone in minutes.", price: 275 },
      { name: "Classic Club Sandwich", desc: "Triple-stacked, loaded, legendary.", price: 250, img: "club" },
      { name: "Mushroom Cheese Melt", desc: "Earthy mushrooms, melty cheese, bliss.", price: 265 },
      { name: "Cream Cheese Sandwich", desc: "Smooth, tangy, and satisfying.", price: 275 },
      { name: "Chicken Tikka Sandwich", desc: "Indian spice meets café comfort.", price: 285 },
      { name: "American Club Sandwich", desc: "The full monty. No shortcuts.", price: 360 },
    ],
  },
  "Pasta & Mains": {
    icon: "🍝",
    items: [
      { name: "Aglio E Olio", desc: "Garlic, olive oil, chili. Simple. Perfect.", price: 300 },
      { name: "Arrabbiata", desc: "Spicy tomato sauce with a kick.", price: 310 },
      { name: "Alfredo", desc: "Creamy, indulgent, impossible to resist.", price: 325, badge: "Most Loved", img: "pasta" },
      { name: "Garden Fresh Veggie Wrap", desc: "Crunchy, fresh, guilt-free.", price: 220 },
      { name: "Spicy Chicken Wrap", desc: "Packed with flavor and heat.", price: 265 },
      { name: "Watermelon & Feta Salad", desc: "Sweet, salty, unexpectedly perfect.", price: 245 },
    ],
  },
  "Desserts": {
    icon: "🍰",
    items: [
      { name: "Choco Lava Cake", desc: "Warm center, cold ice cream. The classic.", price: 180 },
      { name: "Brownie with Ice Cream", desc: "Fudgy, gooey, no regrets.", price: 190, badge: "Most Loved", img: "brownie" },
      { name: "Affogato", desc: "Espresso poured over vanilla gelato. Italian perfection.", price: 155, img: "affogato" },
    ],
  },
  "Mocktails": {
    icon: "🍹",
    items: [
      { name: "Black Summer", desc: "Dark, mysterious, and berry-forward.", price: 195, img: "mocktail" },
      { name: "Berry Blast", desc: "A fruity explosion in every sip.", price: 185 },
    ],
  },
};

export const DESIGN_BLOCKS = [
  {
    n: "01",
    img: "blueLevel",
    heading: "Ground Floor — The Blue Hour",
    text: "Step in and exhale. The calming blue hue of our ground floor is designed to slow you down — a gentle reminder that this is your time. Grab a corner seat, order an iced americano, and let the world wait.",
  },
  {
    n: "02",
    img: "peachLevel",
    heading: "Mezzanine — The Warm Glow",
    text: "Climb upstairs and feel the temperature shift — not in degrees, but in mood. The peachy upper level is where brunches turn into conversations, and conversations turn into memories.",
  },
  {
    n: "03",
    img: "paperLanterns",
    heading: "Above It All — The Paper Sky",
    text: "Look up. The double-height ceiling is draped with dozens of delicate white paper lanterns — Nashik's most photographed café ceiling. It's the closest thing to dining under clouds.",
  },
];

export const EVENTS = [
  { icon: "🎨", title: "Creative Workshops", text: "Art, typography, pottery — we've hosted them all." },
  { icon: "🎂", title: "Private Celebrations", text: "Birthdays, anniversaries, and 'just because' parties." },
  { icon: "💼", title: "Corporate Meetups", text: "Team offsites that don't feel like work." },
  { icon: "📸", title: "Photo & Content Shoots", text: "The most photogenic café in Nashik is your canvas." },
];

export const GALLERY = [
  { img: "blueLevel", caption: "Sunday mornings are made here." },
  { img: "peachLevel", caption: "That one corner everyone fights for." },
  { img: "paperLanterns", caption: "Nashik's most photographed ceiling." },
  { img: "icedMatcha", caption: "Earthy, creamy, photogenic." },
  { img: "catMoment", caption: "The resident critic, unimpressed." },
  { img: "foodFlatlay", caption: "Flat-lays that break the internet." },
  { img: "eveningVibes", caption: "The peach level hits different after 7." },
  { img: "workshop", caption: "Where ideas spill over coffee." },
];

export const TESTIMONIALS = [
  { stars: 5, text: "The interiors are UNREAL. Feels like stepping into a Pinterest board. And the hazelnut coffee? Chef's kiss.", src: "Google Review" },
  { stars: 5, text: "Best café ambiance in Nashik, hands down. The paper lantern ceiling is magical. My cat-loving heart is full.", src: "Instagram" },
  { stars: 4, text: "Great pasta, amazing cold coffee, and the coziest vibe. The blue and peach color scheme is so calming.", src: "Zomato Review" },
  { stars: 5, text: "Hosted a small birthday here — they made it so special. The event space is underrated!", src: "Google Review" },
  { stars: 5, text: "I come here to work, stay for the coffee, and leave three hours later. No regrets.", src: "Reddit r/nashik" },
  { stars: 4, text: "The matcha latte and croissants combo is the order. Also, there's a resident cat. Need I say more?", src: "JustDial Review" },
];

export const STATS = [
  { value: 4.1, suffix: " ★", label: "on Google", decimals: 1 },
  { value: 347, suffix: "+", label: "Reviews" },
  { value: 1.7, suffix: "K+", label: "Instagram Followers", decimals: 1 },
  { value: 7, suffix: " Days", label: "Open a Week" },
];

export const INSTA = ["heroInterior", "icedMatcha", "catMoment", "foodFlatlay", "peachLevel", "brownie", "eveningVibes", "flatWhite"];

export const BADGES = [
  { icon: "🐱", label: "Cat-Friendly", text: "Feline friends wander freely." },
  { icon: "🎨", label: "ELLE DECOR Featured", text: "Award-winning interior design." },
  { icon: "🪑", label: "Two-Level Seating", text: "Blue below, peach above." },
  { icon: "🎉", label: "Event Space", text: "Private events & workshops." },
  { icon: "☕", label: "All-Day Coffee", text: "From 9:30 AM to 11 PM." },
  { icon: "💳", label: "UPI · Cards · Cash", text: "However you like to pay." },
];
