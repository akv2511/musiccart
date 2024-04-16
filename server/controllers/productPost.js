const Product = require("../models/Product.model")

const products = [
  {
    name: "JBL C50SI",
    description:
      "JBL C50HI Wired Headset with Mic. True Bass, Voice-assistant support, (Black, In the Ear)",
    features: [
      "Connector type: 3.5",
      "Extra bass: Add extra thump to your music with JBL bass sound",
      "One button universal remote allows you to answer and manage your calls effortlessly",
      "Voice assistant integration: Access your voice assistant from your earphone",
    ],
    brand: "JBL",
    price: 400,
    color: "Black",
    type: "In-Ear",
    images: [
      "https://rukminim2.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphone-refurbished/h/w/t/u-c50hiblk-jbl-original-imafhmzvhjegfbhz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphone-refurbished/h/w/t/u-c50hiblk-jbl-original-imafjjw535zd2jcg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphonerefurbished/h/w/t/u-c50hiblk-jbl-original-imafhyzxtaqkn369.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphone-refurbished/h/w/t/u-c50hiblk-jbl-original-imafhmzvdrbqxj4m.jpeg?q=70",
    ],
  },
  {
    name: "JBL Tune 510BT",
    description:
      "JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - Black",
    features: [
      "JBL Tune 510BT offers iconic Pure Bass sound.",
      "Wireless Bluetooth 5.0 for seamless streaming and device switching",
      "Up to 40 hours of wireless listening, 2-hour recharge, and 5-minute quick charge for 2 extra hours",
      "Convenient on-ear cup buttons, troubleshoot Bluetooth with a brief toggle, and activate Siri or Hey Google with the multi-function button.",
    ],
    brand: "JBL",
    price: 2000,
    color: "Blue",
    type: "On-Ear",
    images: [
      "https://m.media-amazon.com/images/I/61f6S+WtUKL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61U11HyIY0L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61l2cndm4eL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61Dyj6grt9L._AC_SX466_.jpg",
    ],
  },
  {
    name: "JBL Live Pro+",
    description:
      "JBL Live Pro+ TWS, Adaptive Noise Cancellation Earbuds with Mic, True Wireless Earbuds, up to 28 Hours Playtime, Signature Sound, 6-Mic Technology for Crystal Clear Calls, Google Fast Pair (Black)",
    features: [
      "Adaptive Noise Cancellation",
      "Up to 28 hours of playback, 7 hours on a single charge, and 21 additional hours in the case.",
      "Personalize your audio experience with the app. Adjust the Equalizer, choose your Voice Assistant, and configure Smart Ambient settings for free on Google Play Store or Apple App Store",
    ],
    brand: "JBL",
    price: 6000,
    color: "Black",
    type: "In-Ear",
    images: [
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61HelSLKofL._SX522_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71r4aaFo3mL._SX522_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71436ggjMmL._SX522_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71iMPTQQVlL._SX522_.jpg",
    ],
  },
  {
    name: "JBL Quantum 800",
    description:
      "JBL Quantum 800 - Wireless Over-Ear Performance Gaming Headset with Active Noise Cancelling and Bluetooth 5.0, USB - Black",
    features: [
      "JBL Quantum 800 enhances gaming experiences on PC, Mac, Xbox, PS4, and Switch, offering impeccable sound for competitive gaming",
      "Quantum Surround sound technology delivers accurate and immersive audio",
      "The boom microphone with echo cancelling",
      "Comfortable design with memory foam ear cushions covered in soft leather for extended gaming sessions",
      "Offers both 2.4 GHz wireless and Bluetooth 5.0 connectivityFeaturing RGB lighting effects, is compatible with PC, Mac, Xbox, PlayStation, Nintendo Switch, mobile, and VR.",
    ],
    brand: "JBL",
    price: 15000,
    color: "Black",
    type: "Over-Ear",
    images: [
      "https://m.media-amazon.com/images/I/712zz31jpaL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61W1IH-aYJL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61Dhu5lY0LL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/612--OzRG1L._AC_SX466_.jpg",
    ],
  },
  {
    name: "JBL Tune 710BT",
    description:
      "JBL Tune 710BT Wireless Over-Ear Bluetooth Headphones with Microphone, 50H Battery, Hands-Free Calls, Portable (White), Medium",
    features: [
      "JBL sound with deep and powerful bass reproduction",
      "Extended Battery Life for 50 hours, with a quick 5-minute recharge providing an extra 3 hours of playback.",
      "Manage your sound, calls, and voice assistants with earcup button",
      "Designed for portability, these headphones are lightweight and easily foldable",
    ],
    brand: "JBL",
    price: 6600,
    color: "White",
    type: "Over-Ear",
    images: [
      "https://m.media-amazon.com/images/I/51NEXWGqhwS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51iD96fdxdS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/41YeN+auv-S._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/41z+Y+7JcLS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51ASEs3Lh1S._AC_SX466_.jpg",
    ],
  },
  {
    name: "Sony MDR-ZX310",
    description:
      "Sony MDR-ZX310AP ZX Series Wired On Ear Headphones with mic, Black",
    features: [
      "Integrated microphone",
      "Powerful 30mm dome type driver units for clear sound",
      "Lightweight & adjustable housing for rugged durability",
      "Swivel folding design for compact portability",
      "Y-type cable w/4-conductor gold plated, L-shaped plug",
    ],
    brand: "Sony",
    price: 1290,
    color: "Black",
    type: "On-Ear",
    images: [
      "https://m.media-amazon.com/images/I/71HE8lJEwmL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71I42pBDBfL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/612IVhEITCL._AC_SX466_.jpg",
    ],
  },
  {
    name: "Sony WI-C200",
    description: "SONY WI-C200 Wireless Bluetooth Headphones - Black",
    features: [
      "Wireless Convenience: Enjoy wire-free connections for hassle-free listening without tangled wires and plugs.",
      "Extended Playback: Up to 15 hours of continuous playback ensures you can enjoy your favorite music and podcasts throughout the day",
      "Quick Charge Feature: A 10-minute charge provides 60 minutes of playback",
      "Dynamic Audio Performance: 9-mm driver units deliver clear, punchy sound",
      "Access Siri or Google Assistant with a simple touch of the multi-function button",
    ],
    brand: "Sony",
    price: 1300,
    color: "Black",
    type: "In-Ear",
    images: [
      "https://m.media-amazon.com/images/I/51S7JZxOTsL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/516bDrn3wyL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/51xf1iDnnTL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51Mi5Nd+CNL._AC_SY679_.jpg",
    ],
  },
  {
    name: "Sony WH-CH710N",
    description:
      "Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call, Black",
    features: [
      "Cancel out the world with smart noise cancellation",
      "Noise cancellation automatically senses your environment with dual noise sensor technology",
      "Long-lasting listening with up to 35 hours of battery and quick charging",
      "Wireless Bluetooth streaming with NFC one-touch",
      "Hear more detail with the 30 millimeter driver units",
      "Ultra-comfortable headphones design with adjustable metal sliders",
    ],
    brand: "Sony",
    price: 6000,
    color: "Blue",
    type: "Over-Ear",
    images: [
      "https://m.media-amazon.com/images/I/51TFyO-seFL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/811clMRpC4L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71E0vbxhqhL._AC_SX466_.jpg",
    ],
  },
  {
    name: "Sony MDR-Z1R",
    description:
      "Sony MDR-Z1R High-Resolution Audio Premium Over-Ear Headphones - Black",
    features: [
      "Experience massive 70 mm HD drivers and Hi-Res Audio compatibility for full-range sound up to 120Khz",
      "Resonance-free, all-metal housing, a Fibonacci-patterned grill for smooth sound across all frequencies, and an ergonomic earpad design",
      "Titanium headband, genuine leather headband, separated ground cable, and silver-coated OFC for a high-quality international version.",
    ],
    brand: "Sony",
    price: 100000,
    color: "Black",
    type: "Over-Ear",
    images: [
      "https://m.media-amazon.com/images/I/616M7zrOi1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/41+I9Bcm81L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/31Ejrd4qRUL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/91OwB-TYqtL._AC_SX466_.jpg",
    ],
  },
  {
    name: "Skullcandy Ink'd",
    description:
      "Skullcandy Ink'd Bluetooth Wireless Earbuds with Microphone, Noise Isolating Supreme Sound, 8-Hour Rechargeable Battery, Lightweight with Flexible Collar, Black",
    features: [
      "8 hours of rechargeable battery life, fully recharges in 2.5 hours.",
      "Rich audio, powerful bass, natural vocals, and precision highs.",
      "Built-in mic and remote for easy call and music management within a 30-foot range",
      "Weighs 24 grams, low-profile design, and flex collar for easy storage",
    ],
    brand: "Skullcandy",
    price: 300,
    color: "Black",
    type: "In-Ear",
    images: [
      "https://m.media-amazon.com/images/I/51PMvQehS1L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61g+L+MwIPL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61Qhtw6TUEL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51CfCYs0o+L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/513Axj1UxhL._AC_SX466_.jpg",
    ],
  },
  {
    name: "Skullcandy Grind",
    description:
      "Skullcandy Grind In-Ear Wireless Earbuds, 40 Hr Battery, Skull-iQ, Alexa Enabled, Microphone, Works with iPhone Android and Bluetooth Devices - True Black",
    features: [
      "Skull-iQ Smart Feature Technology: Access hands-free voice control or voice assistants like Alexa via the Skull-iQ App",
      "Worry-Free Wireless with Tile Finding Technology: Easily track misplaced earbuds with the Tile App's 'ring' feature for quick retrieval",
      "Loaded with Features: Grind includes Personal Sound and Adjustable Stay-Aware Mode for an enhanced listening experience",
      "40 Hours of Power: Enjoy an impressive 40 hours of total battery life, with battery status updates every time you remove the earbuds from the case.",
    ],
    brand: "Skullcandy",
    price: 3400,
    color: "Black",
    type: "In-Ear",
    images: [
      "https://m.media-amazon.com/images/I/61ETx+hCkWL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/715efUPHVGL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71r8tNhz+eL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71MYnmnHzBL._AC_SX466_.jpg",
    ],
  },
  {
    name: "Skullcandy Venue",
    description:
      "Skullcandy Venue Wireless ANC Over-Ear Headphone - White/Crimson",
    features: [
      "Bluetooth wireless technology",
      "Active noise cancellation with ambient mode",
      "24 hours of battery life with rapid charge",
      "Built in Tile tracker",
      "Microphone, call, track, volume control, and activate assistant",
    ],
    brand: "Skullcandy",
    price: 6000,
    color: "White",
    type: "On-Ear",
    images: [
      "https://m.media-amazon.com/images/I/712LFaXznmL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71Pt5ttXJYL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/7190PCiNN3L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71LBL1th-qL._AC_SX466_.jpg",
    ],
  },
  {
    name: "Skullcandy Riff",
    description:
      "Skullcandy Riff On-Ear Wired Headphones, Microphone, Works with Bluetooth Devices and Computers - Black",
    features: [
      "Refined acoustics - Riff is engineered to deliver exceptional sound quality at an affordable price",
      "Microphone with call and track control - Riff lets you manage calls and tracks with buttons on the ear cups",
      "Comfortability at its finest - Riff's light-weight, ultra durable headband and plush on-ear cushions delivers unparalleled comfort",
      "Travel-ready - A collapsible, flat-folding design makes the Riff easy to pack and use anywhere on-the-go.",
    ],
    brand: "Skullcandy",
    price: 13000,
    color: "Black",
    type: "On-Ear",
    images: [
      "https://m.media-amazon.com/images/I/71MWCCkt6VL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/714ZEsl7hSL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71bIdXASOBL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71xAlK-OivL._AC_SX466_.jpg",
    ],
  },
  {
    name: "Xiaomi Redmi AirDots S",
    description: "Xiaomi Redmi AirDots True Wireless In-Ear Earphones (Black)",
    features: [
      "Wireless Freedom: Xiaomi Redmi AirDots offer a wire-free experience, delivering high-quality audio through a 7.2mm driver and DSP technology",
      "Long Battery Life: Enjoy up to 15 hours of playback with the included charging case, providing 11 additional hours of power. The earphones alone run for up to 4 hours",
      "Intuitive Touch Controls: Manage playback or interact with your device's digital assistant effortlessly using touch controls on each earbud",
      "Automatic Pairing: The AirDots seamlessly connect to the last Bluetooth device when removed from the charging case for hassle-free operation.",
    ],
    brand: "Xiaomi",
    price: 1800,
    color: "Black",
    type: "In-Ear",
    images: [
      "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/xiaomi_xia_airdots_blk_redmi_airdots_bluetooth_earphones_1567615096_1503854.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1567614731_IMG_1247016.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1567614731_IMG_1247017.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1567614731_IMG_1247018.jpg",
    ],
  },
  {
    name: "Xiaomi Redmi Buds 4 Pro",
    description:
      "Xiaomi Redmi Buds 4 Pro Wireless Earbuds, Hi Resolution Audio, Dual Driver Speaker, Immersive Sound, Up to 43dB ANC, Dual Device Connectivity, 36h Long Battery, Fast Charging, App, IP54, White",
    features: [
      "Hi-Res Audio Wireless Support: Redmi Buds 4 Pro offers incredible sound with Hi-Res Audio Wireless certification and LDAC audio codec",
      "Dual Dynamic Drivers: Create your personal sound system with a 10mm aluminum alloy diaphragm and a 6mm titanium diaphragm for crystal-clear treble and rich bass",
      "Immersive Sound: Experience a live immersive sound with Xiaomi's proprietary HRTF sound algorithm for a truly captivating audio experience",
      "Cutting-edge Noise Cancellation: Up to 43dB of active noise cancellation with AI adaptive ANC that intelligently switches between three levels",
      "Dual Transparency Mode: Switch between regular transparency mode to hear surroundings and enhance voice mode for face-to-face conversations",
      "Ultra-long Battery Life: Enjoy up to 36 hours of use with the charging case, 9 hours on a single charge, and quick 5-minute charging for 2 hours of music playback.",
    ],
    brand: "Xiaomi",
    price: 699,
    color: "white",
    type: "Over-Ear",
    images: [
      "https://m.media-amazon.com/images/I/51Ji-bZBBXL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61wFcOxiuxL._AC_SY679_.jpg",
      "https://m.media-amazon.com/images/I/61oCANOi3ZL._AC_SY679_.jpg",
    ],
  },
  {
    name: "Zebronics Zeb-Monk ANC",
    description:
      "Zebronics Zeb Monk Wireless In-Ear Neckband Earphone Bluetooth with Magnetic Earpiece, Smart Touch Controls, Call Function, Water Resistant & Voice Assistant (Black)",
    features: [
      "The wireless neckband features Bluetooth 5.0, 12mm drive, and 32 Ohms impedance, supporting HSP, HFP, A2DP, and AVRCP profiles",
      "Boasting active noise cancellation, smart controls, a call function, magnetic earpiece, and voice assistant support, it's also splashproof",
      "Ideal for workouts, the ZEB-MONK neckband offers ANC for focus and a water-resistant design",
      "With 12-hour playback (ANC off), 10-hour playback (ANC on), 2-hour charging, and ANC-enabled talk time of 8 hours, it ensures a noise-free travel experience.",
    ],
    brand: "Zebronics",
    price: 2999,
    color: "Black",
    type: "In-Ear",
    images: [
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61pc66nQk9L._SX522_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31BAsPb+9HL._SX522_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61iXQCNi-3L._SX522_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Ufsrx7cVL._SX522_.jpg",
    ],
  },
  {
    name: "Zebronics Zeb-Thunder Pro",
    description:
      "ZEB-Thunder Pro Wireless Extra soft ear cushions 40mm driver Voice assistant 21 hours AUX and Micro SD Card.",
    features: [
      "Adjustable headband with soft and comfortable earcups 40mm Drivers",
      "Call Function, Support for AUX and Micro SD Card",
      "Voice assistant support for Android and iOS devices",
      "Deep bass",
      "21H playback",
      "Media/Volume controls",
      "Lightweight and comfortable",
    ],
    brand: "Zebronics",
    price: 1999,
    color: "Black",
    type: "Over-Ear",
    images: [
      "https://zebronics.com/cdn/shop/files/Zeb-Thunderpro-pic2.jpg?v=1702970953&width=800",
      "https://zebronics.com/cdn/shop/files/Zeb-Thunderpro-pic3.jpg?v=1702970953&width=800",
      "https://zebronics.com/cdn/shop/files/Zeb-Thunderpro-pic4.jpg?v=1702970953&width=800",
      "https://zebronics.com/cdn/shop/files/Zeb-Thunderpro-pic6.jpg?v=1702970953&width=800",
    ],
  },
  {
    name: "Zebronics Zeb-Supreme",
    description: "ZEBRONICS Zeb-Supreme USB Wired Headphone with Mic",
    features: [
      "Go retro with our USB wired headphone Zeb-Supreme that comes with an adjustable headband",
      "eb-Supreme that comes with mic and comes along with a multi-function control pod for media and more",
      "Driver size 40mm, Speaker impedance 32Ω, Frequency response 20Hz-20kHz",
      "Microphone impedance 1.2kΩ, Adjustable headband, Adjustable Mic, Multifunctional control pod, LED indicator",
      "Connector type USB, Cable length 1.8m",
    ],
    brand: "Zebronics",
    price: 899,
    color: "White",
    type: "Over-Ear",
    images: [
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81uqQqK0xbL._SX679_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81uqQqK0xbL._SX679_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81tLH8exkJL._SX679_.jpg",
    ],
  },
  {
    name: "Zebronics Jet",
    description:
      "ZEB-Jet Gaming headphone Maximum comfort Powerful audio RGB LED lights Black",
    features: [
      "Gaming Headphone with Multicolor lights",
      "Lightweight design with suspension headband",
      "Ear cup with LED Lights",
      "40mm Neodymium drivers",
      "Extra soft ear cushion for comfort",
      "Flexible Mic",
    ],
    brand: "Zebronics",
    price: 1699,
    color: "Black",
    type: "Over-Ear",
    images: [
      "https://zebronics.com/cdn/shop/products/Zeb-Jet-pic1.jpg?v=1659077952&width=800",
      "https://zebronics.com/cdn/shop/products/Zeb-Jet-pic8.jpg?v=1659079741&width=800",
      "https://zebronics.com/cdn/shop/products/Zeb-Jet-pic6.jpg?v=1659079741&width=800",
      "https://zebronics.com/cdn/shop/products/Zeb-Jet-pic3.jpg?v=1659079741&width=800",
      "https://zebronics.com/cdn/shop/products/Zeb-Jet-pic2.jpg?v=1659079741&width=800",
    ],
  },
  {
    name: "Zebronics Zeb-Duke",
    description:
      "ZEBRONICS Zeb Duke 101 Wireless Headphone with Mic, Supporting Bluetooth 5.0, AUX Input Wired Mode, mSD Card Slot, Dual Pairing, On Ear & 12 hrs Play Back time, FM, Media/Call Controls (Blue)",
    features: [
      "Wireless Headphone with BT 5.0",
      "12H Playback at 50% Volume",
      "Deep Bass / Soft Ear Cushions for long usage hours",
      "Foldable Ear Cups ,Media & Call Controls",
      "Lightweight & Sturdy Built ,Voice Assistant Support",
    ],
    brand: "Zebronics",
    price: 599,
    color: "Blue",
    type: "Over-Ear",
    images: [
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61WuZE2jqjL._SY879_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51AWVXy9jwL._SY879_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hSwHp+cFL._SX522_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41JXv2QmioL._SS40_.jpg",
    ],
  },
];

const insertProducts = async () => {
  try {
    const insertedProducts = await Product.insertMany(products);
    console.log('Products inserted successfully:', insertedProducts);
  } catch (error) {
    console.error('Error inserting products:', error);
  }
};

module.exports = { insertProducts }