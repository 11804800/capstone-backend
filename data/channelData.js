//first create the account in the name of admin push the data into the database 

//create and account of name admin
//here is the data for creating account
const account = {
  username: "admin",
  fullname: "admin admin",
  email: "admin",
  channels: [
    "Sony Music India",
    "Internshala",
    "Sheriyan School",
    "T-Series",
    "Netflix India",
    "Star Bharat",
    "Neuz Boy",
    "Neon Man",
    "Aaj Tak",
    "Sushnat Sinha",
    "Apna College",
    "Kadak",
    "Hitesh Choudhary",
    "Thapa Technical",
    "Telusko",
    "MensXP",
    "BeerBiceps",
    "The LallanTop",
    "Raj Shamini",
    "Tech Burner",
    "Technical Guruji",
    "Haunting Tube",
    "Ghost Series",
    "Mark Rober",
    "Mr INDIAN HACKER",
    "Techno Gamerz",
    "Bhaarat Tv",
    "Comdey India",
    "CodingforAll",
    "Pahadi Gamer",
    "Dattrax Gaming"
  ],
  subscribed: [],
  password: "admin"
};


//you can post it via ThunderClient or you can upload it directly through mongosh
//some images might not work beacuse of update on youtube channel owner
const channeldata = [
  {
    name: "Sony Music India",
    description:
      "Welcome to Sony Music India's official YouTube channel, the ultimate destination for music enthusiasts and fans of the Indian music scene. Immerse yourself in a world of melodies, rhythms, and harmonies as we proudly present 'Sony Music India - Home To India's Biggest Music Hits.' Step into a realm where musical brilliance knows no bounds, and every beat resonates with the heartbeat of a nation. With a legacy that spans genres and generations, our channel is a testament to the power of music to unite, inspire, and captivate. From timeless classics to contemporary chart-toppers, we curate a diverse range of sounds that cater to every palate. hit that subscribe button and become a part of our musical family. Tune in daily to satiate your cravings for remarkable tunes, captivating visuals, and the sheer joy that great music brings. Subscribe: - https://www.youtube.com/@SonyMusicIndia/videos",

    //background image
    banner:
      "https://yt3.googleusercontent.com/Mw_bFfF13L00ek9OFyUyAFltxtfdOEzpLAYCFEbpxJHVmHQebRTvsSMUkez9igjNsEwrv12XTg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      //channel image
    image:
      "https://yt3.googleusercontent.com/Q3Hm_Y4J05A-VATeZ1QF89FnL0Zhq748MMXGXkZvAaqrceMTeq_cjEZI0M0E8kIZKrZ_NoJaMw=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 62400000,
    verified: true,
    videos: [
      "Ugte Sooraj Official Video - Vettaiyan The Hunter (Hindi) | Rajinikanth | Anirudh | Ritesh G Rao",
      "Hasi Ban Gaye (Lyrical Video) Male Version | Emraan Hashmi, Vidya Balan | Ami Mishra | Mohit Suri",
      "Arijit Singh | Kesariya - Full Audio | Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam | Amitabh B",
      "Diamond Ni Official Music Video | Jigar Saraiya | Aditya Gadhvi | Sukhmani Gambhir",
      "Tu Hain Toh | Mr. & Mrs. Mahi | Rajkummar Rao, Janhvi Kapoor | Hunny, Bunny, Sagar | Team Jaani",
      "Maahi Ve - Lyrical Audio | Shahrukh Khan, Preity Zinta, Saif Ali Khan, Udit Narayan | Kal Ho Naa Ho",
      "Radha - SOTY | Alia Bhatt | Sidharth Malhotra | Varun Dhawan | Udit Narayan | Shreya Ghoshal | 4K",
      "Milde Milde - Mansimran Sandhu x Hiten (Official Visualizer)",
      "Manasilaayo Video | Vettaiyan | Rajinikanth | Anirudh Ravichander | Manju Warrier | T.J. Gnanavel"
    ],
    creator: "admin"
  },
  {
    name: "Internshala",
    description:
      "Welcome to official YouTube channel of Internshala.We are your hosts - Arun & Ankita - two aam YouTubers with a very special mission - to get you (and every college student in India) THE BEST start to your career 🚀.Be it internships or fresher jobs, new skills or technologies, courses, workshops and college events, tips on making your resume, preparing for interviews or industry news - we will cover everything that shapes your career and helps you claim your place in the world 🌍!",
    banner:
      "https://yt3.googleusercontent.com/Q4MsN38sjS0xQ5IKX7sTwDT8nzivVKTcdCW1qjdOvuXaSkYW_u2dHVPR4cJ85jm4YMV-aJrLNg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/HNFsrAAIbaiUOOCuymuLCeXvJfJEkw_N_DCsl-RPMhykgwaVPgf7-Qce04IjtzqOO8O-5LYuOQ=s160-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 121000,
    verified: true,
    videos: [
      "4 Internship Email Templates | How To Ask For An Internship Through Email?",
      "Learn Business Analytics with MS Excel | Internshala",
      "Data structure and Algorithm in C | Types, Definition, Syntax",
      "Learn 3D Modelling with SOLIDWORKS! | World Education Day Fair 2022",
      "EaseMyTrip Co-Founder in Conversation with Internshala",
      "Building your dream team - The PaisaBazaar story | Internshala",
      "Naukri.com CEO in Conversation with Internshala",
      "How to Add Internship Experience in Your Resume? | ATS-Friendly Resume Samples",
      "Google Interview Questions & Answers For Freshers | HR & Technical Round",
      "Internshala Full Stack Development Course Review | Internshala Placement Guarantee Course"
    ],
    creator: "admin"
  },
  {
    name: "Sheriyan School",
    description:
      "The Sheryians Coding School is a step towards helping our Indian audience to learn modern design and coding practices.",
    banner:
      "https://yt3.googleusercontent.com/_c0WjgBOeg53X4N5MR9slH4C-D_3BMqPMybetcW67vROcNTNCU0LLOD_fZFbdn4HLhgA2WTz5A=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 412000,
    verified: true,
    videos: [
      "🚀 TypeScript Crash Course: Master the Essentials in One Video! Ignite Your Web Dev Journey Today!",
      "[AWWWARDS ] Scrolling Web Image/Frame Sequence Modern Web Design | GSAP | ScrollTrigger",
      "TypeScript Domination - Full Course",
      "Scroll Trigger Learn what matters",
      "🚀 Three.JS – Learn What Matters: Elevate Your Web Game! 🌐",
      "The Basics | MERN Stack Development | HTML CSS JS",
      "JS Logic | MERN Stack",
      "Modern Animations in Web Dev | Creative Dev",
      "[COMPLETE PROJECT 🔥] 10 LPA Job Guaranteed with This React Project!",
      "Ultimate Project That Will Get You Hired by Creative Agencies! | MERN Creative Development"
    ],
    creator: "admin"
  },
  {
    name: "T-Series",
    description:
      "'Music can change the world'.T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music. T-Series is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with T-Series.",
    banner:
      "https://yt3.googleusercontent.com/jYAuaLx-N9b7hjVp3pq-zyNLWHRMsV3Rjkbq_NHtuYQSOBYtZKX6kg5J7IerXIVdnq2RwxckCfg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 277000000,
    verified: true,
    videos: [
      "Dashanan: Theme Song l Ashutosh Rana l Kailash Kher l Aalok Shrivastav l Humare Ram-Dussehra Special",
      "Hanuman Chalisa (Lyrical Video) l Gaurav Bhhardwaj, Danish, Udbhav, Goswami Tulsidas | Humare Ram",
      "Humare Ram (Lyrical Video) l Shankar Mahadevan l Aalok Shrivastav l Udbhav Ojha | T-Series",
      "Shri Ram Chandra Kripalu🙏 | Jubin Nautiyal | Payal Dev | Manoj Muntashir | Lovesh Nagar | Bhushan K",
      "Fear Song (Full Video) | Devara Part - 1 | NTR | Koratala Siva | Anirudh Ravichander | Manoj M",
      "Bhool Bhulaiyaa 3 - Title Track | Kartik A | Pitbull, Diljit, Neeraj S, Tanishk, Pritam | Bhushan K",
      "Shyama Aan Baso (Song): Khushalii Kumar | Sachet-Parampara | Satvik | Youngveer | Bhushan Kumar",
      "Devara Thandavam (Full Video) | NTR | Saif Ali Khan | Koratala Siva | Anirudh Ravichander",
      "MILLIONAIRE SONG (Full Video):@YoYoHoneySingh | GLORY | BHUSHAN KUMAR"
    ],
    creator: "admin"
  },
  {
    name: "Netflix India",
    description:
      "Netflix is one of the world's leading entertainment services, with 283 million paid memberships in over 190 countries enjoying TV series, films, and games across a wide variety of genres and languages. Members can play, pause and resume watching, as much as they want, anytime, anywhere, and can change their plans at any time.",
    banner:
      "https://yt3.googleusercontent.com/xYClp11o6lOLmvJTBGsipPgGXNHqcW2uIm21OZ9tSGAa_x3gylbw2ZuUQEPn4pDLJi-VvjRuDA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 24900000,
    verified: true,
    videos: [
      "The MOST Awkward Interview With Shalini Passi & Aishwarya | Fabulous Lives vs Bollywood Wives",
      "Sunil Grover & Krushna's HILARIOUS SRK-Salman Mimicry 🤣 Ft. Kartik Aaryan | #TGIKS",
      "Devara | Official Trailer | Jr. NTR, Saif Ali Khan, Janhvi Kapoor | Netflix India",
      "Sunil Grover & Krushna’s ICONIC SRK-Salman Mimicry 😂 Ft. Kartik Aaryan & Tripti Dimri | #TGIKS",
      "Vijay 69 | Watch Now | Anupam Kher, Chunky Panday, Mihir Ahuja | Netflix India"
    ],
    creator: "admin"
  },
  {
    name: "Star Bharat",
    description:
      "Welcome to Star Bharat, your ultimate destination for Hindi entertainment, adored by audiences across India. Dive into our diverse range of shows that capture the essence of Bharat, blending emotions that will make you laugh, cry, and thrill. From the enchanting love story of Radha Krishn to the spine-chilling episodes of Savdhaan India, the mystical tales of Shaitani Rasmein, the gripping narratives of 10:29 Ki Aakhri Dastak, the heartwarming journey in Muskan, to the groundbreaking stories in Na Umre Ki Seema Ho, our content is crafted to resonate with every viewer. Join us in celebrating the richness of Indian culture and entertainment with Star Bharat. #starbharat #starbharatradhakrishna #starभारत #starbharatchannel #starbharatallserial  #starplus #radhakrishnastarbharat #radhakrishanstarbharat #star #bharat #radhekrishnabhajan #radhakrishnabhajan #krishnabhajan #crimeserial #starbharatserials #crimefilesisharatv #isharatvcrimefiles #starbharatoldserial #starbharattrplist ",
    banner:
      "https://yt3.googleusercontent.com/KMbxgAjNBrgpkwIjs1cqRtlR_LeNk37oAjn6yOg1nqKrjwuK2AaCOIt0HOGL_tlk1xunxKma=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/4EX6uH0vdZR_-Bp1xzfRdst3n7b3zxEKUNmfyrWEOCCqC8D7rEsCpruYHDAakCu_4RU3-Nyn=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 18800000,
    verified: true,
    videos: [
      "Star One Horror Nights | Veeran khandahar ka raaz | FULL EPISODE-03",
      "Woh Toh Hai Albeela | Sayuri aur Kanha #WohTohHaiAlbeela #StarBharat",
      "Bhakti ka adhaar prem hota hai, bhay nahin | Highlight | राधाकृष्ण | RadhaKrishn | Part-205",
      "Horror Nights | Veeran khandahar ka raaz | FULL EPISODE-04"
    ],
    creator: "admin"
  },
  {
    name: "Neuz Boy",
    description:
      "Indian YouTube News Channel For Business Enquiries- (neuzboy@jeevmedia.net)Assam, India",
    banner:
      "https://yt3.googleusercontent.com/obrpA2wXqR8-TG3EkX9I5I-VAG-ai1QC_ywu2LFXzFyhJ5LsN-btmAENGr_CkqzXnrJ7HKjxpQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ekmTQw2_hSgWfjXI5ZhgFLP2MqCFQ6sKunnH_aYzWKVLloogJGlm1b9z0rQWsaElv_oz7vV7sw=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 1330000,
    verified: true,
    videos: [
      "He Did a HUGE MISTAKE in Dhruv Rathee’s Video!😧😳, Elvish Yadav Revealed Reason, CarryMinati",
      "Samay Raina Vs Journalist Lafda!🤬, T-Series Vs Singham Again, Jaya Kishori Bag Controversy! Reacts",
      "LAFDA! Samay Raina Had to Say SORRY for this…😳🙏🏻, Payal Gaming EXPOSED!, Rajat Dalal Bigg Boss 18",
      "Samay Raina VERY ANGRY on This! - Copyright Strike😡…Ashish Chanchlani Reacts, Shivam Malik Warning",
      "You Won’t Believe What She Did!😳 Sourav Joshi’s Fan Went too Far? Samay Raina’s Huge Video Issue…"
    ],
    creator: "admin"
  },
  {
    name: "Neon Man",
    description:
      "Welcome to India's #1 YouTube News Channel! So Hey! My name is Aayush AKA Neon Man..I keep you guys updated with all the drama/events happening within the Indian/International YouTube community.I also switch up my content sometimes. IF ANY CONTENT OWNER HAS SOME ISSUES WITH MY VIDEO PLEASE CONTACT ME OVER THE MAIL GIVEN BELOW. For business purposes email me at- businessneonman@gmail.com Toh chalo yaar abh SUBSCRIBE bhi krdo... (NO! I MEAN IT...ABHI KARO) Kuch zyada hie pasand aa gaya hu toh bhai...you can connect with me on - Instagram - (@neonman01)",
    banner:
      "https://yt3.googleusercontent.com/is-020wNO0EdQtVRKE20rAzdrwK0G196qcYuGP3Lu4_jVO-CpKJbWlrmeqrCzKKinMTWIfRj4Q=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_lN5BEAuY1GJXYUh7kjwHprGBo90Y_0OsQulziksZ1e7F0=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 2330000,
    verified: true,
    videos: [
      "PR STUNT? Flying Beast BIG REVEAL! 😳| RIP Liam Payne, Honey Singh on Purav Jha, Elon Musk Vs Ambani",
      "Dhruv Rathee BADLY ROASTED Him...😡| CarryMinati, Twitter LAFDA, Triggered Insaan, Sourav Joshi |",
      "You Won't Believe What She did...💀| Ratan Tata ji, MrBeast on CarryMinati, Ranbir Alia, MS Dhoni |",
      "This is getting VERY SERIOUS Now...😱| Abhinav Arora, Elvish Yadav, Thugesh, Armaan Malik, Diljit |",
      "Samay Raina BLOCKED by Kusha Kapila - REPLY! 😳| Diljit Vs Andrew, India’s got Latent, Dhruv Rathee"
    ],
    creator: "admin"
  },
  {
    name: "Aaj Tak",
    description:
      "Watch Aaj Tak Live TV and stay tuned for all the breaking news in Hindi ! Aaj Tak is India's leading Hindi News Channel. Aaj Tak News channel covers latest news in Politics, Entertainment, Bollywood, business and sports.आज तक भारत का सर्वश्रेष्ठ हिंदी न्\u200dयूज (Hindi News) चैनल है । आज तक न्\u200dयूज चैनल राजनीति, मनोरंजन, बॉलीवुड, व्यापार और खेल में नवीनतम समाचारों (Samachar) को शामिल करता है। आजतक न्\u200dयूज चैनल की लाइव खबरें (Live News) एवं ब्रेकिंग न्यूज (Breaking News) के लिए बने रहें । Website: https://www.aajtak.in/ #hindinews #newsinhindi #hindisamachar #breakingnews #aajtak #samachar",
    banner:
      "https://yt3.googleusercontent.com/mlJuWLJQhzdVCWH3poXDwG31rKl0BOXkYVua0fMAxxXOd6q6Uy-8c778CNcnC1zzi0HILSv0qN8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_m1WLxquYeEO9VgyA7-cYFrn_hd2dSaNtmL8-NIHMCQIuPQ=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 68100000,
    verified: true,
    videos: [
      "UP By Election: यूपी के Aligarh की खैर सीट पर उपचुनाव में किसकी किस्मत का खुलेगा ताला? | Aaj Tak",
      "Punjab News: Arvind Kejriwal का पंजाब दौरा, उपचुनाव में आप ने किया जीत का दावा | AAP | Aaj Tak",
      "Black and White शो के आज के Highlights | 08 November 2024 | Sudhir Chaudhary | Aaj Tak News",
      "Black And White Full Episode: Bangladesh में Hindus के खिलाफ साज़िश हो रही? | Sudhir Chaudhary",
      "Halla Bol Full Episode: Maharashtra में PM Modi का 'चुनावी शंखनाद' | Anjana Om Kashyap"
    ],
    creator: "admin"
  },
  {
    name: "Sushnat Sinha",
    description:
      "पत्रकार हूँ। बिना लाग लपेट के बोलता हूँ इसलिए बातें कइयों को चुभती हैं। सच सुनाता हूँ, अपने मन की सुनना चाहते हैं तो किसी DJ को फॉलो करें। राष्ट्रहित सर्वोपरि। जय हिंद।",
    banner:
      "https://yt3.googleusercontent.com/kK_xgyvlPjDV0aBhdG6K1C8BZi3S-EQMMb705ATYtThHc_Hj9kPHDVkylyIfeJlcb6fv5P1em2c=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/uhjnVp1E8Nlp8QSmKKXoJVm2XMuVIaCwgGuoznNG-DhgRZ4mK6KpQVcykkrYz_nutN95LHPdOQ=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 1940000,
    verified: true,
    videos: [
      "Modi, Rahul Gandhi, Arvind Kejriwal..सबके गहरे राज़ खुल गए| Sushant Sinha | Jai Madaan | Diwali 2024",
      "BK Sister Shivani On Real Happiness, Parenting, Life Pressure, Ram Rajya | Sushant Sinha | Podcast",
      "Bageshwar Dham Sarkar ने अपने राज़ खुद खोल दिए | Sushant Sinha | Dhirendra Krishna Shastri | Podcast",
      "Shehzad Poonawalla & Tehseen Unheard story of Brothers | Podcast | Sushant Sinha | Congress & BJP"
    ],
    creator: "admin"
  },
  {
    name: "Apna College",
    description:
      "I'm Shradha, Ex-Microsoft Software Engineer, DRDO. My journey started from a small village of Haryana, in college I learned coding and got 2 internships at Microsoft, work for DRDO, invited for Google SPS and a Full Time Offer from Microsoft. I believe that skills are more important today and want to help students to learn & crack their dream companies ❤️ So, I left my Microsoft Job and started to teach students. I love my students and I love sharing my learnings. To Chalo Phodte hain! Feel free to contact Shradha Didi for Seminars, Hackathons & Collaborations at the given email id below.",
    banner:
      "https://yt3.googleusercontent.com/RUkVzE9GSKnzSpgIatFOcx2JxmdXvxYY1lCk8kLSzsfwa5BG8lLfLb5pch7XuU5fYmdCBAUL5ZU=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 6100000,
    verified: true,
    videos: [
      "Introduction to Java Language | Lecture 1 | Complete Placement Course",
      "Variables in Java | Input Output | Complete Placement Course | Lecture 2",
      "Conditional Statements | If-else, Switch Break | Complete Java Placement Course | Lecture 3",
      "Time & Space Complexity - DSA Series by Shradha Ma'am",
      "Search a 2D Matrix - Variation I & II | 2D Arrays - Part 2 | DSA Series by Shradha Ma'am",
      "Spiral Matrix | 2D Arrays - Part 3 | Leetcode 54 | DSA Series by Shradha Ma'am"
    ],
    creator: "admin"
  },
  {
    name: "Kadak",
    description:
      "KADAK is an Indian Hindi news channel which provides national, political as well as international news with detailed news coverage. KADAK also covers Local regional stories, Entertainment News, Political News, Election News, Sports News, Cricket and Lifestyle Updates.",
    banner:
      "https://yt3.googleusercontent.com/XxeBt46hPHs3Hq980kPIHlir0bTbmnwGaei1wny3PlO4GKSXhYQoPrW2-26_Uks8ErU3WUlrfYE=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/Z4vE_rPQ91exv1j4w9iVVU0Nc0LMtA7Iziie5Td1U0Cfi94YSShaD8P4xbkL4nOd-jaaTNBy=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 5140000,
    verified: true,
    videos: [
      "Semiconductor Chips: सेमीकंडक्टर चिप्स की दुनिया का नया बॉस बनेगा INDIA | PM Modi | KADAK | N18V",
      "Article 370 हटने के बाद कितनी बदली है Kashmir में युवाओं की सोच ? | Kashmiri youth | Kadak",
      "Ravi Kishan का Oath लेते वक्त दिखा जुदा अंदाज,Akhilesh Yadav भी तंज कसने पर हुए मजबूर|Sansad|UP News",
      "Jagdeep Dhankhar और Jaya Bachchan की भरी सदन में हो गई कहासुनी, विपक्ष ने किया walk out |N18v| Kadak",
      "Donald Trump US President बनते ही करेंगे 7 काम, यहां जानिए | US Election Results | America"
    ],
    creator: "admin"
  },
  {
    name: "Hitesh Choudhary",
    description:
      "Website: https://hiteshchoudhary.com Hey there everyone, Hitesh here back again with another video! This means I create a lot of videos, every single week. I cover a wide range of subjects like programming, what's latest in tech, new frameworks, open-source products etc. I keep my interest in a wide area of tech like Javascript, Python, PHP, Machine Learning, etc.For the Business purpose, Sponsorships and invitation, reach out at team@hiteshchoudhary.com NOTE: Personal questions and code-related questions are not answered at this email. Post them in the course discussion section or react me out at social platforms.#iWriteCode Instagram: https://instagram.com/hiteshchoudharyofficial Facebook: www.fb.com/HiteshChoudharyPage",
    banner:
      "https://yt3.googleusercontent.com/zO8n2TfZoDXozQeKwq7APiVXn4BIZw7Q0-5SCVw4FXY_q2ysjtmVp5WYw1_M3bn9m3WiNarZGg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/VLOvpKYxd_ZTrjrorHo5VkqaO0lM1Zs2Zbe-Nrfx7UkWnUGKNbpgEcDxhSjDWS4UONdtyKddLQ=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 956000,
    verified: true,
    videos: [
      "A Crash Course on prisma CRUD and Pagination",
      "What is Javascript and Where we can use it",
      "Handling Api Calls in frontend NextJS",
      "What is Deveops? Easy Way",
      "What is Api ?"
    ],
    creator: "admin"
  },
  {
    name: "Thapa Technical",
    description:
      "Welcome Guys, This channel is all about Website Development, Technical, Tips and Tricks, Designs Principle and Programming videos in the Hindi Language.If u Like my videos Please Like and Subscribe my channel and You can also follow me on Instagram : https://www.instagram.com/thapatechnical/ Facebook: https://www.facebook.com/vinodbahadurthapa Discord Server: https://discord.gg/wbWnQreYQD",
    banner:
      "https://yt3.googleusercontent.com/Eam2THIxxohxEEtvduLl1O_2O9gdEHpCDyG-QTQG3uyMPLpS5kQgv9SrbJhzub7MXgpl21wk-g=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_kFzvYt5kK5zhvKTRxXdB4th3a4y0b9zkedbplF6GnyOis=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 696000,
    verified: true,
    videos: [
      "Introduction to React | ReactJS Tutorial for Beginners in Hindi 2020 #1",
      "Create Animated Website Using HTML5 & CSS3 in Hindi with Free Source Code 2021",
      "Create Complete Responsive Dynamic Website in HTML, PHP & MySQL in Hindi",
      "#4: ReactJS Environment Setup | ReactJS Installation & Creating Our First React App in Hindi in 2020",
      "HTML Complete Tutorial for Beginners in Hindi🔥Free Notes + Codes",
      "Think CSS Is Easy? Try This Animation Challenge – Are You a Pro or Need to Learn More?"
    ],
    creator: "admin"
  },
  {
    name: "Telusko",
    description:
      "Hey Aliens!!! I make free programming tutorials from beginner to advanced level That includes Java for beginner, Advanced Java, Python, Android, Blockchain, JavaScript, Kotlin, Scala, Spring Framework, Hibernate, C programming, Data Structures, Networking, REST API, and many more.Sometimes I make videos on motivation and take sessions with Tech industry experts. There is something for everyone here.Business Email : teluskobusiness@gmail.com Check out Live Courses on : courses.telusko.com",
    banner:
      "https://yt3.googleusercontent.com/tbGd2GglIheDdACs4qzHXp1EYhupDf1M8wYq1AGmy4fDsAxo8l-igds9atXHS-VOYt7UquZ4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 2450000,
    verified: true,
    videos: [
      "Spring Boot and Spring Security with Jwt",
      "Java for Programmers in 2 Hours",
      "Spring Security 6 with Spring Boot and JWT Tutorial",
      "Logging in Java Using Log4J",
      "Java Fast Track Live Course"
    ],
    creator: "admin"
  },
  {
    name: "MensXP",
    description:
      "MensXP is India's first men's lifestyle channel which addresses the real-life needs of Indian men in a practical, useful & entertaining way! Manhood cannot be defined, for its codes are ever changing. We, at MensXP, explore these codes of manhood and pursue the most interesting stories of, and around, men - comedy, entertainment, relationships, technology trends, health, fashion and breaking stereotypes - we bring it all to you! It isn’t about redefining manhood. It is about giving manhood an expression. https://www.mensxp.com/",
    banner:
      "https://yt3.googleusercontent.com/bM_DpAr0HZtrEPL3tIADW_0w6t3zHvGhA0YenEXnsJi-AtCQIksVJvlmkLsgLvPGE1dDTyUX=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/h-UdnxwJKY4JLNUEI82u3ac4YWiNk_j7-Px6dcltCM-7rQPGBBsq78YoXqyFmU6JG1bwn5HD=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 1400000,
    verified: true,
    videos: [
      "Citadel: Honey Bunny Review ft. Rrajesh Yadav & Anil | Honest Review| MensXP",
      "Singham Again Review & Bhool Bhulaiyaa 3 Review ft. Rajesh Yadav & New Guy? | Honest Review",
      "Shikhar Dhawan Interview | Rohit Sharma, MS Dhoni | ​Defeating Pain, Heartbreak | @sadhikasehgal",
      "Ravi Gupta in ROAST MODE | Men, Love, Heartbreak | @raviguptacomedy Podcast | @sadhikasehgal",
      "Pretty Good Roast ft. @ashishsolanki_1 | @sadhikasehgal | Rohit Singh | Kushagra | Kaustubh"
    ],
    creator: "admin"
  },
  {
    name: "BeerBiceps",
    description:
      "BeerBiceps is the home for The Ranveer Show or TRS - Happiness Through Curiosity. A show where we host the world's greatest success stories and try digging out their secrets to success. We cover everyone from entrepreneurs to Bollywood film stars to even athletes. Every conversation on #TheRanveerShow is an EXTREME learning experience for the viewer. Over 8 years, Ranveer Allahbadia has pivoted himself from being a fitness and fashion YouTuber to an entrepreneur, with Monk-E, BigBrain Media & Level Supermind. Today, Monk-E is a successful talent management agency that caters to brands and creators. BigBrain Media is a new-age YouTube channel that creates mind-bending content every week. Level Supermind is a self-help app that helps users to make good habits and create focus. Scan through our home page to watch the playlist of your choice. There's a playlist for EVERYONE. Subscribe to our channel for more!",
    banner:
      "https://yt3.googleusercontent.com/2w89k4nMdqn_zNnS-_Th2l62rzbFbv-AQ51NIdrr9__xKBb8vgApjyTHBKyTaGFXz_nyCmCq9c4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/kunsF59HYsPPWyUfANFwx3cr4Vm4wkVRsZI3KLPzcVWHBTLR1UJ0vW9T0SxzIaTUZGndEM7Tgnc=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 8020000,
    verified: true,
    videos: [
      "World's First India-China Podcast | Chinese Celeb Mary Lee | Dating, History, Xi Jin Ping & Modi",
      "Avadhuta Baba RETURNS - Shavasana Kaali, Fake Gurus, Witchcraft, Demonic Entities & More | TRS 455",
      "Ramayan's SPIRITUAL Secrets Revealed - Ram, Sita, Lakshman, Hanuman & Dharma Ft. Yashodeep D | TRS",
      "Simple & POWERFUL : Sri Vidya For Manifestation & Spiritual Healing | Guru Sakalamaa | TRS 454",
      "The REAL Life & Times Of Krishna - Nilesh Oak Returns | Scientific Evidence Of Dwarka | TRS"
    ],
    creator: "admin"
  },
  {
    name: "The LallanTop",
    description:
      "दिनभर की ख़बरों का ठिकाना. शेर‘ओ शायरी-किताबें-फिल्में-इतिहास-स्पोर्ट्स-राजनीति. देश-दुनिया, अर्थव्यवस्था, साइंस की सब बातें और विडियोज.",
    banner:
      "https://yt3.googleusercontent.com/JCydZnwTD6c9iYNfXhSKBDEWKE8ZngNYaY7BZCg5kKaPKVAu11dA7QS717dktbFvhrNQVD9h=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/4tpv3CE1alB7ayIk-y1ktHsang1dMJkGf4f4dazy55G8j8Y0nGkEYnxNJ30JYOiPf6cCaaMARQ=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 31400000,
    verified: true,
    videos: [
      "Pankaj Tripathi ने Saurabh Dwivedi को Mumbai प्लान, बंगले, Bihari Dish पर कई राज बताए | Bihar Adda",
      "Aditya Thackeray ने बंद कमरे की बैठक, Shah, Fadnavis, Shinde, Pawar, Adani पर क्या बताया? Jamghat",
      "Yo Yo Honey Singh ने Badshah, Raftar से असल लड़ाई, Mafia Mundeer, Shahrukh, नशे पर खुलकर बताया |GITN",
      "Avadh Ojha ने PM Modi, Rahul Gandhi, Lalu और Nitish पर जो कहा, खूब रीलें कटेंगी! | Bihar Adda"
    ],
    creator: "admin"
  },
  {
    name: "Raj Shamini",
    description:
      "The next 10 years is going to be The Golden Age for India filled with infinite once-in-a-lifetime opportunities, but if you don’t prepare and grow yourself to win these opportunities then you won’t be able to achieve your ‘Indian Dream’. And we won’t let that happen, this channel is about helping you grow and win in life. Hi! I am Raj Shamani and I believe in ‘figuring out’ how to grow every day so that we can live and love better. Our Purpose for this channel is to become one of the most authoritative and informative guides to what is happening in business, relationships, politics, health, science and entertainment. Mission of our podcast “Figuring Out: The Indian Dream’: is to help every Indian achieve their ‘Indian Dream’. If you subscribe and follow us, we promise that every day we will bring top leaders and ideas from around the world to teach you to get a slight edge in your life.",
    banner:
      "https://yt3.googleusercontent.com/q-GsH_aqHaYZGOSRZtAYR2fv6UgMQO0yo4Be8KxDIgWu9W-siUltlJ6AD98_7oLC6MkOaI-nDg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/sNTXQbT-tVdQ-D92xTN4iIfRoHPeh2geQRN8QSL-It07X8Zuy4WPhuUTQm9nZ11-MoOh_qbvyg=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 4390000,
    verified: true,
    videos: [
      "Weight Loss, Dieting, Calories, Food, Exercise & Obesity - Prashant Desai | FO 276 Raj Shamani",
      "PARA SFs, Indian Army, Weapons & Dangerous Missions ft. Col. Shivender Kanwar | FO 239 Raj Shamani",
      "How To Buy The Right Car? - Used Luxury Cars & Scams - Jatin Ahuja | Big Boy Toyz| FO259 Raj Shamani",
      "Harsh Gujral On Relationships, Family, Marriage, Standup Comedy & Stardom | FO 270 Raj Shamani",
      "Hijacks, Para SF Training, NSGs & Safety of India Exposed - Col Kaushal Kashyap |FO232 Raj Shamani"
    ],
    creator: "admin"
  },
  {
    name: "Tech Burner",
    description: "Subscribe 🔥",
    banner:
      "https://yt3.googleusercontent.com/HvRR_TqOAV5SzDtKlpPaQTzVBMxcxWXucyImNZDcBpGRx4CjWz8kR9iQVggEdHT7aGX6lO19TzM=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/r09RpDUvcrXhuGYFqVujMChDqX_MTQbH6ronxmHWQuT5detla632gIkElqz-1lvKBAz7rzR50g=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 12000000,
    verified: true,
    videos: [
      "7 Indian Railways Tech You Didn't Know !",
      "World's First Triple Folding Smartphone !",
      "₹10 Lakhs Mystery Box Unboxing !",
      "OnePlus 13 Unboxing and First Impression ! *Powerful Flagship Phone*",
      "iQOO 13 Unboxing and First Impression ! *120FPS Gaming*"
    ],
    creator: "admin"
  },
  {
    name: "Technical Guruji",
    description:
      "नमस्कार दोस्तों, आपका बहुत बहुत स्वागत है हमारे चैनल 'Technical Guruji' में, मैंने यह चैनल मेरे उन सभी दोस्तों के लिए बनाया है जो टेक्नोलॉजी के बारे में अपनी भाषा में जानना चाहते है, 'Technical Guruji' चैनल में आपको रोज़ाना एक नयी वीडियो मिलेगी जहा मैं कोशिश करूँगा आपको मोबाइल और कंप्यूटर की दुनिया के बारे में कुछ जरुरी बातें बताने की|  Hello friends, Welcome to 'Technical Guruji', I created this channel on 18th October 2015, my motive behind creating this channel is to make easy to understand, Tech Videos in Hindi, and I want each and every individual whoever is interested in technology to be able to understand it in the easiest possible way. I post two videos daily, on topics that cover latest technology and tech news. Please SUBSCRIBE to Technical Guruji, Thanks. जय हिन्द, वन्दे मातरम| For Business enquiries: business@technicalguruji.in IGNORE e-mails sent to you from any non @technicalguruji.in e-mail addresses. I do not provide tech support over e-mail.",
    banner:
      "https://yt3.googleusercontent.com/l_8GN_dS9lvtANx6dNvs-RRKjUUK156DnXeO0foM0_DCwTGD3IXtMp2e1qWerphAQxb57woB7Q=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nQFOjj2baePBWQGqL0lgv7SwxZ1uXYo8pg_hViDZb6DEsX=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 23700000,
    verified: true,
    videos: [
      "What's In My Bag - 2024 Edition? 🔥🔥🔥",
      "Top Upcoming Smartphones - November 2024🔥🔥🔥",
      "My Most Expensive Samsung Smartphone - S23 Ultra Skull Limited Edition🔥🔥🔥",
      "World's Biggest iPhone 16 Collection!🔥🔥🔥",
      "iPhone 16 First Look - Apple Event on 9th Sep🔥🔥🔥",
      "My New Gold iPhone 15 Pro Max - Mahabharat Edition 🔥🔥🔥",
      "Moto Edge 50 Neo Unboxing & First Look - Ultimate Midrange King🔥🔥🔥",
      "iPad Mini 7 (2024) Unboxing & First Look - The Mini iPad with Apple Intelligence🔥🔥🔥",
      "Samsung Galaxy A16 5G Unboxing & First Look - 6X OS Upgrades🔥🔥🔥",
      "Google Pixel 9 Pro Unboxing & First Look - Best Compact Flagship?🔥🔥🔥"
    ],
    creator: "admin"
  },
  {
    name: "Haunting Tube",
    description:
      "Welcome to Haunting Tube [Hindi] This Channel is all about Horror Movie Story Explanation, Mysterious Facts and Other Haunting Kinds of Stuff. Do Subscribe to get 3 videos every week. For Business Enquiries: Email: hauntingtube@gmail.com",
    banner:
      "https://yt3.googleusercontent.com/A7E_coUNn-eRezuurMyYnz9-UJo_dAxhKKIYMaOhUdVDe7kVkYPgXAsLkHMefVQmvIXfwjsp=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_kB_N7V_Aj07go4ViByMyinuGaucR9OUtMxU4PvrLsn_WM=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 2080000,
    verified: true,
    videos: [
      "Don't Go to STRANGER'S House - Speak No Evil Explained in Hindi | Haunting Tube",
      "Apartment 7A and Rosemary's Baby Explained in Hindi - 2 Cult Classic Horror Movies | Haunting Tube",
      "Best Body-Horror of 2024 - The Substance Explained in Hindi | Haunting Tube",
      "Based on STEPHEN KING's One of The Best Novel - Salem's Lot Explained in Hindi | Haunting Tube",
      "A Twisted Tamil Thriller - Miral Explained in Hindi | Haunting Tube",
      "If You See Someone D!E, SMILE Curse is on You - SMILE 2 Explained in Hindi | Haunting Tube"
    ],
    creator: "admin"
  },
  {
    name: "Ghost Series",
    description:
      "Hello mere pyare doston aur mere channel par ane wale new subscribers..humare channel par apko paranomal activities se related jaankari aur naye naye darawne kisse sunne ko milenge..! Toh agar ap ese hi kisi cheez mein interested h to humare channel ko like,share aur subscribe zarur karein.!For BUSINESS ENQUIRY - contact me at - trueanimatedhorror@gmail.com",
    banner:
      "https://yt3.googleusercontent.com/U4iAPbll-QqnWB69sT1Ai5TDePqi5ttnjdtZ8YBlWKUdSotw4I5kOmNDb8VquGw-lX8O5-gMCGA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_n1O_9p-9xcOEqUOVhtwkT3OyEleK-2ha1Kz4PTc3o_7Ns=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 980000,
    verified: true,
    videos: [
      "Nun Universe Ki New Film - Kya Nun Ki Shuruwat Yahi Hui ? | Raven's Hollow (2022) Explained In Hindi",
      "India's Most HAUNTED Cursed Hospital - Adbhut (2024) Explained In Hindi | Adbhut Full Movie Explain",
      "Don't Come Home (2024) Full Series Explained In Hindi - 2024 Best Netflix Thai Horror | Ya Klap Ban",
      "Don't Come Home PART 2 (2024) Thai Series Explained In Hindi | Crazy THEORIES & Ending Like DARK",
      "KANTARA Se Zada Rating Wali Film - PECHI (2024) Explained In Hindi | TAMIL Urban Legend PECHI Witch"
    ],
    creator: "admin"
  },
  {
    name: "Mark Rober",
    description:
      "Former NASA engineer. Current CrunchLabs founder and friend of science. Answers to some common questions: 1) I make a monthly toy we build together on a video, that gets delivered to your house that teaches you to think like an engineer.  Check it out at- https://crunchlabs.com 2) I studied Mechanical Engineering in School.  I did my undergrad at BYU and Masters at USC. 3) I worked for NASA JPL for 9 years, 7 of which were working on the Curiosity Rover (I made a video about it you should def totes watch cause it's probably my favorite of all my videos).  Then I made some Halloween costumes.  Then I worked for Apple in their Special Projects Group doing Product Design as a Mechanical Engineer for 5 years. Then in 2022 I created CrunchLabs to deliver monthly toys that teach you to think like an engineer.",
    banner:
      "https://yt3.googleusercontent.com/lpSFN1EDJ62KOghzElJXxzU2iqNoL8hz2jgrC5bso54DNlWOM_c1sIsvUAgXsc7mVeY6JF1Lew=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_kwFxfJF-fQml8fUIvrd36ZstE2RO-C-IwDB-0qxQoc3Q=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 58900000,
    verified: true,
    videos: [
      "Playing Card Machine Gun- Card Throwing Trick Shots",
      "World's Largest Horn Shatters Glass",
      "This Ball is Impossible to Hit",
      "Mark Rober vs Dude Perfect- Ultimate Robot Battle",
      "My Rock, Paper, Scissors Robot Never Loses (+9 Other Inventions)"
    ],
    creator: "admin"
  },
  {
    name: "Mr INDIAN HACKER",
    description:
      " 'MR. INDIAN HACKER' This channel is only for you guys All Subscribers are my family also called 'TITANIUM ARMY' You can join us by subscribing  Thanks for visit  'LOVE YOU ALL' For business enquiries contact us at - team@mrindianhacker.com",
    banner:
      "https://yt3.googleusercontent.com/Cytdn0KVDjxmsmZMEd1LjBwEz3gW33HEF_BX2jmLU40AoT-LvmNDMJXd8HXusmyTujVKOCiVyQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_n6rCnXvBYGxRd-gdNXLc2pxyX7ClUTYGhEiP3g6vpWKnI=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 43000000,
    verified: true,
    videos: [
      "100 Years Old Snake Well...Investigation !",
      "We Built Secret Swimming Pool🤫...Under The Earth !",
      "Many VIP  Vs Tanki - क्या टंकी बचेगी ?",
      "Living 24 Hours In Water...लेकिन पानी में साँप है 😰 | Challenge Accepted",
      "Biggest Diwali Stash Ever 🔥 - Worth ₹10 Lakh | With Mark Rober"
    ],
    creator: "admin"
  },
  {
    name: "Techno Gamerz",
    description:
      "Hey Everyone! This is Ujjwal here! Welcome to 'Techno Gamerz' YouTube Channel! I created this channel for android games i upload daily videos about mobile related games and gaming news so if you’re interested in playing games so this channel is helpful for you. Please SUBSCRIBE to Techno Gamerz, Thanks. If you are looking for somebody to make a review of your products or product of your company, such as: phones, tablets, PC, gadgets or even apps, you can contact us so we can make a deal... For Business enquiries: technogamerzofficial@gmail.com",
    banner:
      "https://yt3.googleusercontent.com/tTHuRuPssvxzQzDWO5QKoeJlBwtaISEc-IWpnv61Lm75xxg8s8-FeRif5KMs-ZcITbBqu_AyOw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nWMMFKeTe9rh6da4SO77KIY3FTa1Kyd2gdDbZaufxVVfI=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 43000000,
    verified: true,
    videos: [
      "I HIRED WORKERS FOR MY MOTEL | MOTEL MANAGER SIMULATOR GAMEPLAY #4",
      "TECHNO GAMERZ MINECRAFT HOUNTED CASTLE PART- 2 I TECHNO GAMERZ I HORROR CASTLE I UJJWAL GAMING",
      "I BUY A MOST EXPENSIVE HOUSE OF LOS SANTOS | GTA V #156 GAMEPLAY | TECHNO GAMERZ",
      "I FINALLY ESCAPED FROM KAMLA HOUSE | KAMLA INDIAN GAME",
      "FINALLY MY LUXIROUS SHOP & HOTEL IS READY ▶MOTEL MANAGER SIMULATOR GAMEPLAY PART 5 || TECHNO GAMERZ"
    ],
    creator: "admin"
  },
  {
    name: "Bhaarat Tv",
    description:
      "आपका स्वागत है हमारे हिंदी कॉमेडी शो भारत टीवी यूट्यूब चैनल पर! यहाँ आपको मजेदार और हास्यप्रद वीडियो मिलेंगे जो आपके दिन को रंगीन बना देंगे। हमारे चैनल पर आपको नए-नए कॉमेडी स्किट्स, फनी प्रैंक्स, और हास्य वीडियो देखने को मिलेंगे। तो आइए, हमारे साथ मिलकर हंसी का रंग बिखेरें और अपने दिन को खुशियों से भर दें। धन्यवाद!",
    banner:
      "https://yt3.googleusercontent.com/Ki3I4v0XJHHI4r1iGSFdmg0FDOVkNjv73iOtEvcLWEQW0Cd-QP4swFqLXOZs7VLdqlCz-0OJlA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/2q0JX3rMNAvc_6aaKQtwbBoKizYL1v-hXp3gNqdfG3KtFG4kqP6K16ocu2PO2MLl-6ZlMvMt=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 91100,
    verified: false,
    videos: [
      "पैसा तो इतना है की अगर मैने छींक मारी दी तो हीरे निकल जाते है|The Kapil Sharma Show |Hindi TV Serial",
      "Kapil Sharma की सोसाइटी में चेयरमैन के लिए हो रहा है झगड़ा | The Kapil Sharma Show | Hindi TV Serial",
      "Dr Gulati ने Chandu को किया परेशान | The Kapil Sharma Show | Comedy | Tv Serial",
      "Kapil Sharma को मिला रोमांटिक सीन करने का मौका | The Kapil Sharma Show | Hindi TV Serial",
      "Krithik Roshann जब मिले अपने पुराने दोस्त जादू से | The Kapil Sharma Show | Hindi TV Serial"
    ],
    creator: "admin"
  },
  {
    name: "Comdey India",
    description: "Hello! Welcome To My Channel",
    banner:
      "https://yt3.googleusercontent.com/RR6SjFskSVd03KzXeo4_pyofH3iChTnKQYXpObwc2zZFRoZOlPQ5rsiUuUqyrLPPJRheLJ3P7LE=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ynJ5ittKbRLEsc3mr2Qli5TPfp-IpSgoND8klcZ2FiarPrFmbnd9ecOC9AUnqxW0PBQ8Hufv=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 280000,
    verified: false,
    videos: [
      "KAPIL ने मुड़ कर दिखाया अपना जलवा🤣🤣 || COMEDY CIRCUS",
      "जब KRUSHNA और SUDESH ने दिया सबको LAUGHTER DOSE🤣🤣 || COMEDY CIRCUS",
      "LAAL SINGH बन गया कल्लू🤣🤣 || TU MERE AGAL BAGAL HAI EP 32",
      "जब बुढ़िया ने करी ROHIT से गन्दी गन्दी बातें 🤣🤣|| COMEDY CIRCUS",
      "KAPIL ने गाया RAJEEV के लिए FULL बेज़्ज़ती भरा गाना🤣🤣 || COMEDY CIRCUS"
    ],
    creator: "admin"
  },
  {
    name: "CodingforAll",
    description:
      "Welcome to my channel! Here, I simplify backend development with a focus on Django and Python. Whether you're just starting or looking to deepen your skills, you'll find clear, practical tutorials on everything from API development to advanced topics like Celery, RabbitMQ, and Kafka. Join me for hands-on projects and tips to take your coding to the next level. Subscribe and let's build something amazing together! Follow me on Instagram - _abhijeetgupt",
    banner:
      "https://yt3.googleusercontent.com/rzom-wggLcw8030Jnu1tjHLsDotZsCyiihRk7-J0IZfQz9NyyJhyDVcOk4DfbRELF4wV7RcIzA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/1HRiEhXRirncEUs5emToyKtXkWCGUilM8g77NWRihsBJwOhbcXeqrUuP6oo5tQVqeEEzBpaeTw=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 98400,
    verified: false,
    videos: [
      "Master Linked List Operations in Minutes! - Essential DSA Guide",
      "Linked List in Python Explained from Scratch | Ultimate DSA Tutorial",
      "SOLVE ANY ARRAY PROBLEM with this Pattern !!!",
      "Master Arrays in Python: The Ultimate Guide for DSA Beginners!",
      "Billions of Users? Here's How to Find ONE in 0.1 Seconds!!! | Bloom Filter Algorithm"
    ],
    creator: "admin"
  },
  {
    name: "Pahadi Gamer",
    description: "Hello Welcome to my Channel",
    banner:
      "https://yt3.googleusercontent.com/H9k9DKDLIDoY7MYGYNuLZXnuthcRD8XFZhM5xzWIwXXoQdmNKBS27WSrIK8vpKbXQlt-QYRPg8k=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/naNeOJmZVwjG9Bp2VzrsmpdKpy0exai3K_jDHtDU0Pi-LihIClkB2cN11gLEEbJLy4Kh4v9QZ8c=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 1500000,
    verified: false,
    videos: [
      "100 BOOYAH! STREAK CHALLENGE | PAHADIGAMER LIVE",
      "QUADRA BOOYAH! STREAK IN TOURNAMENT🔥",
      "CLASSY VS PAHADIGAMER 🔥",
      "Savage Sniper Skills! Free Fire AWM Highlights",
      "FFM GIVES BACK - DIWALI EDITION"
    ],
    creator: "admin"
  },
  {
    name: "Dattrax Gaming",
    description:
      "Hey Everyone! This is Harvest here! Welcome to 'Dattrax GaminG' YouTube Channel! I created this channel for PC and Android games i upload daily videos about PC & mobile related games (basically GTA 5) and gaming news so if you’re interested in playing games so this channel is helpful for you. Please SUBSCRIBE to Dattrax GaminG, Thanks.❤️ For Business Enquiry:- dattraxgaming.contact@gmail.com",
    banner:
      "https://yt3.googleusercontent.com/y85sPQYWhwDdLGzexWPiCSsYmPbUHwqEWOoPIensDN8P4YYEYzXVGBy6WqoeNLCrJ_y2F_CVzg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    image:
      "https://yt3.googleusercontent.com/ZWkzLJFWSMa90W6jqQ7D7faN3Cqh0BugPKQ4h9ZvzmUie6S1-MN5II9kajnp6uZmwJ_yVqqYeA=s120-c-k-c0x00ffffff-no-rj",
    Subscriber_Count: 1690000,
    verified: true,
    videos: [
      "THE MYSTERIOUS SEA MONSTER IN PALWORLD! 😱 Palworld | SONY BRAVIA X82L TV",
      "THE MOST POWERFUL GOD POKEMON (999 LVL) 😱 I HAVE EVER SEEN! PALWORLD",
      "MY 7 STAR SUPER LUXURY HOTEL IS READY! 🤑 MOTEL MANAGER SIMULATOR",
      "WELCOME BACK TO CAR FOR SALE 2024!🔥 NEW MAP & NEW WORLD! BIGGEST UPDATE",
      "FINALLY SUPER CARS FOR MY SHOWROOM!🤑 CAR FOR SALE SIMULATOR 2.O"
    ],
    creator: "admin"
  },
];
