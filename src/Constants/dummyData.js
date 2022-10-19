// Constans
import COLORS from "./colors";
import icons from "../Constants/icons";

// Onboarding Slides
import onboard1 from "../../assets/Images/Onboard/onboard_1.png";
import onboard2 from "../../assets/Images/Onboard/onboard_2.png";
import onboard3 from "../../assets/Images/Onboard/onboard_3.png";

// Feature Images
// Service
import service1 from "../../assets/Images/Features/Service/service_1.png";
import service2 from "../../assets/Images/Features/Service/service_2.png";
import service3 from "../../assets/Images/Features/Service/service_3.png";

// Daily
import daily1 from "../../assets/Images/Features/Daily/daily_1.png";
import daily2 from "../../assets/Images/Features/Daily/daily_2.png";
import daily3 from "../../assets/Images/Features/Daily/daily_3.png";

// Care
import care1 from "../../assets/Images/Features/Care/care_1.png";
import care2 from "../../assets/Images/Features/Care/care_2.png";
import care3 from "../../assets/Images/Features/Care/care_3.png";

// Chill
import chill1 from "../../assets/Images/Features/Chill/chill_1.png";
import chill2 from "../../assets/Images/Features/Chill/chill_2.png";
import chill3 from "../../assets/Images/Features/Chill/chill_3.png";

// Note
import note1 from "../../assets/Images/Features/Note/note_1.png";
import note2 from "../../assets/Images/Features/Note/note_2.png";
import note3 from "../../assets/Images/Features/Note/note_3.png";

// Coupons
import coupons1 from "../../assets/Images/Features/Coupons/coupons_1.png";
import coupons2 from "../../assets/Images/Features/Coupons/coupons_2.png";
import coupons3 from "../../assets/Images/Features/Coupons/coupons_3.png";

// Expenses
import expenses1 from "../../assets/Images/Features/Expenses/expenses_1.png";
import expenses2 from "../../assets/Images/Features/Expenses/expenses_2.png";
import expenses3 from "../../assets/Images/Features/Expenses/expenses_3.png";

// Connect
import connect1 from "../../assets/Images/Features/Connect/connect_1.png";
import connect2 from "../../assets/Images/Features/Connect/connect_2.png";
import connect3 from "../../assets/Images/Features/Connect/connect_3.png";

// Offers Images
import offer1 from "../../assets/Images/Home/offer1.jpg";
import offer2 from "../../assets/Images/Home/offer2.jpg";
import offer3 from "../../assets/Images/Home/offer3.jpg";
import offer4 from "../../assets/Images/Home/offer4.jpg";

const slides = [
  {
    id: 1,
    title: "Payments",
    description:
      "We Don't Make Payments. We Make Payments Better. Online payments is Mightier than the Sword.",
    image: onboard1,
  },
  {
    id: 2,
    title: "Food Safety",
    description:
      "Leave the Food to Us! Because So Much Is Riding On Your Food safety. Let's Face The Music and Food.",
    image: onboard2,
  },
  {
    id: 3,
    title: "Growth",
    description:
      "It's fast, it's furious, it's Lets grow together. Where Grow together is a Pleasure. Do You Have The Teamwork Inside?",
    image: onboard3,
  },
];

const foodTypes = [
  {
    id: 1,
    name: "Meals",
    icon: icons.burger,
    color: COLORS.white,
  },
  {
    id: 2,
    name: "Healthy",
    icon: icons.fruit,
    color: COLORS.white,
  },
  {
    id: 3,
    name: "Deserts",
    icon: icons.dairy,
    color: COLORS.white,
  },
];

const categories = [
  {
    id: 1,
    name: "Featured",
  },
  {
    id: 2,
    name: "Nearby you",
  },
  {
    id: 3,
    name: "Popular",
  },
  {
    id: 4,
    name: "Newest",
  },
  {
    id: 5,
    name: "Trending",
  },
  {
    id: 6,
    name: "Recommended",
  },
];

const deliveryTime = [
  { id: 1, label: "30 Mins" },
  { id: 2, label: "40 Mins" },
  { id: 3, label: "1 hr" },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: "Burger",
  },
  {
    id: 2,
    label: "Fast Food",
  },
  {
    id: 3,
    label: "Pizza",
  },
  {
    id: 4,
    label: "Asian",
  },
  {
    id: 5,
    label: "Dessert",
  },
  {
    id: 6,
    label: "Breakfast",
  },
  {
    id: 7,
    label: "Vegetable",
  },
  {
    id: 8,
    label: "Taccos",
  },
];

const ourFeatures = [
  {
    id: 1,
    icon: "customerservice",
    color: COLORS.skyblue,
    backgroundColor: COLORS.white,
    description: "Service",
    featureInfo: {
      title: "Service",
      subTitle: "Service that makes a difference",
      images: [service1, service2, service3],
      description: [
        "We are trusted by major manufacturers and many other clients due to our track record of contracting in the food products field for more than 60 years.",
        "We can conduct all contract work in production processes, from operations such as product preparation and packaging to equipment inspection.",
        "Entrusted with safety and quality in food production for over 60 years",
      ],
    },
  },
  {
    id: 2,
    icon: "notification",
    color: COLORS.purple,
    backgroundColor: COLORS.white,
    description: "Daily",
    featureInfo: {
      title: "Daily",
      subTitle: "For the times we live in.",
      images: [daily1, daily2, daily3],
      description: [
        "From a recent report, 75% of millennials are interested in utilizing offers from a food delivery service. Everyone loves an offer from their favorite restaurant. An offer not only attracts users but also promotes the restaurant.",
        "Online food delivery service delivers you with a wide range of cuisines like Italian, Thai, Chinese and different varieties of dishes like pizzas, pasta, burritos, burger, and so on. These options help you try new food or select from various types of cuisine.",
        "People admire online food delivery service because of its simplicity and transparency. People decide what they order, where they order, how they pay, and when to deliver. There is no need to remember ingredients or to rush for last-minute grocery shopping.",
      ],
    },
  },
  {
    id: 3,
    icon: "heart",
    color: COLORS.lightred,
    backgroundColor: COLORS.white,
    description: "Care",
    featureInfo: {
      title: "Care",
      subTitle: "Because Your Life Matters.",
      images: [care1, care2, care3],
      description: [
        "A healthy diet typically includes nutrient-dense foods from all of the major food groups, including lean proteins, whole grains, healthy fats, and fruits and vegetables of many colors.",
        "“Bad” calories tend to score low in the nutrient department and eating too much of them can negatively affect health.",
        "Together with exercise, eating a healthy diet in the right proportions can also help you lose weight, lower your cholesterol levels and blood pressure and decrease your risk of type 2 diabetes.",
      ],
    },
  },
  {
    id: 4,
    icon: "rest",
    color: COLORS.lightpink,
    backgroundColor: COLORS.white,
    description: "Chill",
    featureInfo: {
      title: "Chill",
      subTitle: "Sometimes the most productive thing you can do is relax.",
      images: [chill1, chill2, chill3],
      description: [
        "Despite what psychologists say, it’s totally okay to replace love with food.",
        "You know the feeling: You’ve ached for vacation for weeks, imagining cocktails on the deck of that great beach rental you scored by being on the ball eight months ago. You and some friends all got the time off and arranged to meet for, say, a week of summery bliss.",
        "You’re not the first person to notice that vacation is often more work for the cook. But hear us: There’s a way out. It doesn’t mean that you don’t enter the kitchen, or that you and your family don’t eat. It means that with a little strategic thinking, you’ll spend less time cooking, do dishes fewer times a day, and maybe even feel like you’re on vacation. Here are 20 tips (from both pros and home cooks) to get you started.",
      ],
    },
  },
  {
    id: 5,
    icon: "edit",
    color: COLORS.darkpink,
    backgroundColor: COLORS.white,
    description: "Note",
    featureInfo: {
      title: "Note",
      subTitle: "Safety isn’t expensive, it is priceless.",
      images: [note1, note2, note3],
      description: [
        "Customers are increasingly concerned about the security of their personal data and whether brand they buy from actually protect their private information.",
        "Keeping consumer and employee information private is on the news almost daily with internet breaches happening at the world's biggest organizations. People want to work and do business with companies protecting their data. It is also important to protect the company proprietary data to remain competitive in the marketplace. Not securing computers or sharing passwords put company data at risk of stealing information, cyber hacks and malware. These issues cost companies millions each year. Simply following the security protocols can prevent the majority of problems.",
        "Privacy – like eating and breathing – is one of life’s basic requirements.",
      ],
    },
  },
  {
    id: 6,
    icon: "gift",
    color: COLORS.lightpurple,
    backgroundColor: COLORS.white,
    description: "Coupons",
    featureInfo: {
      title: "Coupons",
      subTitle: "Make your everyday special with coupons",
      images: [coupons1, coupons2, coupons3],
      description: [
        "This is one of the important reasons for clipping coupons. Customers always look forward to save their money and coupons can help them do that. People who clip coupons diligently are the ones who save the most. Coupons can sometimes add up to more than 50% of your bill and most of the coupons offer more than a percentage off for each item. In addition, to these coupons are meant to have two fold purposes. Stores offer coupons both as an incentive to return and as a reward for coming.",
        "Most of the stores advertise special prices for bulk items and would have coupons with buy two get one extra free. Coupons are the main reason to stock up the items you use the most at time when you can save your hard earned money doing it. This encourages customers to save money on each item bought and to buy more and more items from the store.",
        "Buy your favorite things at heavy Discounts using our Coupons. Shop more, Save More !",
      ],
    },
  },
  {
    id: 7,
    icon: "calculator",
    color: COLORS.orange,
    backgroundColor: COLORS.white,
    description: "Expenses",
    featureInfo: {
      title: "Expenses",
      subTitle:
        "When you know the impact of little expenses, you will realise that there is nothing little in this world.",
      images: [expenses1, expenses2, expenses3],
      description: [
        "Some good choices I can make every day to decrease spending on food would be eating less junk food and more full, healthy meals, that way I won't have to spend money buying something to eat every few hours.",
        "Most people are geared towards quantity and cheap, accessible food. But according to Michael Pollan, the author of In Defense of Food, we shouldn’t be too frugal when it comes to spending money on food. In general, more expensive food (especially, food of natural origin) is better for you because of a lack of toxins and improved nutritional quality.",
        "More expensive food is often so because it has required more care and energy to produce, rather than being mass-produced in factories, stockyards, or single-crop farms. These foods are better for you because of a lack of toxins or improved nutritional quality. Also, you’re more likely to eat less food when it costs more.",
        `T-shirts create a sense of "We". Food says, "We don't mind spending money on you."`,
      ],
    },
  },
  {
    id: 8,
    icon: "mail",
    color: COLORS.lightblue,
    backgroundColor: COLORS.white,
    description: "Connect",
    featureInfo: {
      title: "Connect",
      subTitle: "Making every call count",
      images: [connect1, connect2, connect3],
      description: [
        "A lot of people have fancy things to say about customer service, but it’s just a day-in, day-out, ongoing, never-ending, persevering, compassionate kind of activity.",
        "Engaging more, Refreshing result",
        "Get in touch will solve all of your troubles.",
      ],
    },
  },
];

const weOffer = [
  {
    id: 1,
    img: offer1,
    title: "Cheese Burst Pizza",
    description: "Get 2 Veg Cheesy Pizzas Save upto $5 on combo",
  },
  {
    id: 2,
    img: offer2,
    title: "Chicken Burger",
    description: "Get Free Delivery On Your First Order",
  },
  {
    id: 3,
    img: offer3,
    title: "Chicken Tandoori",
    description: "Get 20% off on Special Chicken Tandoori",
  },
  {
    id: 4,
    img: offer4,
    title: "Chocolate Festival",
    description: "10%+ discount on Chocolate Products",
  },
];

const foodItemFeatures = [
  {
    id: 1,
    label: "Coupon",
    icon: "gift",
  },
  {
    id: 2,
    label: "Trusted",
    icon: "Safety",
  },

  {
    id: 3,
    label: "30 min",
    icon: "dashboard",
  },
];

const sizes = [
  { id: 1, label: `12"` },
  { id: 2, label: `14"` },
  { id: 3, label: `16"` },
  { id: 4, label: `18"` },
];

export default {
  slides,
  categories,
  foodTypes,
  deliveryTime,
  ratings,
  tags,
  ourFeatures,
  weOffer,
  foodItemFeatures,
  sizes,
};
