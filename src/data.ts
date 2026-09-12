export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-based)
}

export interface Story {
  id: number;
  title: string;
  paragraphs: string[];
  questions: Question[];
}

export const stories: Story[] = [
  {
    id: 1,
    title: "The Lighthouse Keeper",
    paragraphs: [
      "The old lighthouse stood on the rocky cliff, its white paint peeling from years of salt spray and harsh winds. Captain Morrison had been the keeper for thirty years, watching ships navigate safely through the treacherous waters below. Every night at sunset, he would climb the 147 steps to light the great beacon, a ritual that had become as natural as breathing. The local fishermen respected him deeply, often leaving fresh catches at his door as tokens of gratitude. Children from the nearby village would wave up at the tower during their afternoon walks along the shore. Though lonely at times, Morrison found peace in his solitary duty, knowing he protected countless lives with each rotation of the light.",
      "One stormy evening in November, the power failed just as the largest fishing fleet of the season approached the harbor. Morrison raced to the backup generator, but it sputtered and died after only minutes of operation. With darkness falling rapidly and waves crashing against the rocks, he made a desperate decision. He grabbed his emergency oil lanterns and began the arduous climb once more, this time carrying three heavy containers of fuel. His aging knees protested with each step, but he pressed on, driven by the knowledge that twelve boats depended on his light. By the time he reached the top, rain was lashing against the glass panels.",
      "The manual lighting process took nearly twenty minutes, far longer than the automated system. Morrison's hands shook from cold and exhaustion as he trimmed the wicks and adjusted the flames to maximum brightness. Through the rain-streaked windows, he could see the distant lights of the approaching vessels. One ship seemed dangerously close to the northern reef, its course unchanged despite the obvious danger. Morrison grabbed the signal horn and blew three long blasts, the traditional warning code known to every sailor in the region. The ship's lights flickered in acknowledgment as it slowly altered course away from the rocks.",
      "For six hours, Morrison tended the flames, refueling and adjusting as needed to maintain consistent brightness. His back ached terribly, and smoke stung his eyes, but he refused to leave his post. Around midnight, the storm began to subside, and the first fishing boat entered the harbor safely, its captain waving gratefully toward the tower. One by one, all twelve vessels arrived without incident, their crews unaware of how close they had come to disaster. Morrison finally allowed himself to sit down, his body trembling with relief and fatigue. The dawn revealed a calm sea and not a single damaged hull among the fleet.",
      "The next morning, the entire village gathered at the base of the lighthouse to honor their keeper. Mayor Thompson presented Morrison with a medal of valor, while the fishing cooperative donated funds for a new generator and heating system. Young Tommy Chen, whose father captained one of the saved boats, climbed partway up the stairs to deliver a handmade thank-you card. Morrison accepted the accolades with characteristic humility, insisting he had simply done his job. But inside, he felt a warmth that had nothing to do with the lantern flames. That evening, for the first time in years, he shared dinner with neighbors instead of eating alone.",
      "Years later, when Morrison finally retired, the town erected a plaque at the lighthouse base commemorating \"The Night of Twelve Ships.\" Tourists still visit to hear the story, and local children learn about courage and duty in their history classes. The automated system never failed again, but Morrison kept his oil lanterns as a reminder that technology can falter, but human determination endures. Sometimes on quiet evenings, he would walk along the shore and watch the beam sweep across the water, feeling proud of the legacy he left behind. The lighthouse continued its watch, a testament to one man's unwavering commitment to keeping others safe."
    ],
    questions: [
      {
        id: 1,
        text: "How many steps did Captain Morrison climb to reach the lighthouse beacon?",
        options: ["120", "147", "156", "134"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "What caused the primary lighting system to fail?",
        options: ["A lightning strike", "Old age of equipment", "Power failure during a storm", "Sabotage"],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "How many fishing boats were saved that night?",
        options: ["8", "10", "12", "15"],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "What traditional signal did Morrison use to warn the endangered ship?",
        options: ["Flashing the light rapidly", "Three long horn blasts", "Red flare", "Radio communication"],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "How long did Morrison tend the manual flames?",
        options: ["3 hours", "4 hours", "6 hours", "8 hours"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "What did the town erect years later to commemorate the event?",
        options: ["A statue", "A new lighthouse", "A plaque", "A museum"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "The Piano Prodigy",
    paragraphs: [
      "Seven-year-old Maya sat at the grand piano in her living room, her small fingers dancing across the ivory keys with surprising precision. Her mother watched from the kitchen doorway, amazed at how naturally music seemed to flow from her daughter. They had discovered Maya's talent accidentally when she reproduced a complex melody after hearing it just once on the radio. Within months, she was playing pieces that typically required years of practice. The family hired Mrs. Chen, a retired concert pianist, who agreed to teach Maya twice weekly despite her advanced age and arthritis.",
      "Mrs. Chen recognized immediately that Maya possessed perfect pitch and an extraordinary memory for musical patterns. However, she also noticed the child's tendency to rush through difficult passages rather than master them properly. \"Music is not a race,\" Mrs. Chen would say gently, tapping her cane on the floor for emphasis. She insisted on slow, methodical practice, breaking down each composition into manageable sections. Maya initially resisted this approach, frustrated by what she perceived as unnecessary delays. Her parents supported Mrs. Chen's methods, understanding that foundations mattered more than speed.",
      "The breakthrough came during preparation for Maya's first recital at the community center. She had chosen Chopin's Nocturne in E-flat Major, a piece far beyond typical repertoire for her age group. For weeks, she struggled with a particular transition between measures 24 and 25, repeatedly making the same error despite hundreds of attempts. Mrs. Chen suggested they stop practicing the piece entirely for three days, allowing Maya's muscle memory to reset. When they resumed, Maya played the passage perfectly on her first attempt, tears of joy streaming down her face.",
      "The recital night arrived with unexpected complications. The venue's piano tuner had fallen ill, leaving the instrument slightly out of tune. Maya panicked when she discovered this during her warm-up session, convinced she couldn't perform on an imperfect instrument. Mrs. Chen knelt beside her and whispered, \"Great musicians adapt to their circumstances. The audience wants to hear your heart, not perfection.\" Taking a deep breath, Maya walked onto the stage, her legs shaking but her resolve firm. She closed her eyes for a moment, then began to play.",
      "Her performance transcended technical excellence, becoming something deeply emotional and authentic. The audience sat in stunned silence during the piece, many wiping away tears. When the final note faded, there was a moment of complete stillness before thunderous applause erupted. Several professional musicians in attendance approached Maya afterward, offering scholarships and mentorship opportunities. A representative from the city's youth orchestra invited her to audition for their junior program. Maya's parents watched with pride mixed with concern about the pressure their daughter might face.",
      "In the following year, Maya balanced school, friendships, and her growing musical career with remarkable maturity. She learned to accept both praise and criticism gracefully, understanding that growth required vulnerability. Mrs. Chen continued teaching her, though their relationship evolved from instructor-student to something closer to grandmother-granddaughter. Maya eventually performed at Carnegie Hall at age twelve, but she always remembered that rainy community center recital as her true debut. The slightly out-of-tune piano taught her that imperfection could coexist with beauty, a lesson that served her throughout her illustrious career."
    ],
    questions: [
      {
        id: 7,
        text: "How old was Maya when she began piano lessons?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "Who became Maya's piano teacher?",
        options: ["Her mother", "Mrs. Chen", "A conservatory professor", "Her school music teacher"],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "What piece did Maya prepare for her first recital?",
        options: ["Beethoven's Moonlight Sonata", "Mozart's Sonata in C Major", "Chopin's Nocturne in E-flat Major", "Bach's Prelude in C Major"],
        correctAnswer: 2
      },
      {
        id: 10,
        text: "What problem occurred with the piano on recital night?",
        options: ["It was broken", "It was slightly out of tune", "It was the wrong size", "It had missing keys"],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "What advice did Mrs. Chen give Maya before her performance?",
        options: ["Play faster to hide mistakes", "The audience wants to hear your heart, not perfection", "Skip the difficult passages", "Apologize to the audience beforehand"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "At what age did Maya perform at Carnegie Hall?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "The Community Garden",
    paragraphs: [
      "The vacant lot on Elm Street had been an eyesore for fifteen years, filled with discarded furniture, broken bottles, and overgrown weeds. Residents avoided walking past it, especially after dark when shadows played tricks on anxious imaginations. Then Maria Rodriguez, a retired botanist, had an idea that seemed impossible to most neighbors: transform the trash-filled space into a thriving community garden. She spent three months gathering signatures for a petition, attending city council meetings, and negotiating with property owners. Finally, permission was granted with the condition that volunteers maintain the space themselves.",
      "The cleanup effort required two full weekends of hard labor from dozens of volunteers. Teenagers from the local high school joined elderly residents, creating unlikely friendships as they hauled debris and pulled invasive vines. Local businesses donated tools, soil, and seeds, while the hardware store provided lumber for raised beds at cost. Maria organized work teams based on skills and physical ability, ensuring everyone could contribute meaningfully. By the end of the second weekend, the lot was unrecognizable—cleared, leveled, and ready for planting. Children drew chalk murals on the remaining concrete patches, adding splashes of color to the transformed space.",
      "Planting day brought together people who had lived on the same street for decades without ever speaking. Mrs. Patterson, who had moved to Elm Street in 1978, taught young Jake Martinez how to properly space tomato seedlings. Mr. O'Brien shared his secret recipe for organic pest control using garlic and neem oil. The garden included plots for vegetables, herbs, flowers, and even a small section dedicated to native wildflowers to support local pollinators. Maria designed a composting system that turned kitchen scraps into rich soil, completing the sustainable cycle. A rainwater collection barrel system reduced dependence on municipal water.",
      "The first harvest exceeded everyone's expectations. Tomatoes grew so abundantly that families shared extras with neighbors who didn't garden. Herbs flourished, providing fresh ingredients for community potluck dinners held monthly under string lights. The flower beds attracted butterflies and bees, transforming the neighborhood's ecosystem. Local schools incorporated the garden into their science curriculum, with students conducting experiments on plant growth and soil composition. A reading corner was established under a large oak tree at the garden's edge, where grandparents read to children on Saturday mornings.",
      "Challenges inevitably arose. A drought threatened the crops until volunteers organized a watering schedule. Vandalism destroyed several raised beds, but rather than giving up, the community rebuilt them stronger and installed solar-powered security cameras funded by a small grant. Disagreements about plot assignments were resolved through a fair lottery system reviewed annually. Maria stepped back from leadership after five years, confident the garden had developed its own momentum. Young leaders emerged, bringing fresh ideas while respecting established traditions. The garden committee met monthly, making decisions democratically.",
      "Ten years after its creation, the Elm Street Garden became a model for urban agriculture initiatives across the city. Researchers studied its social impact, documenting improved mental health, increased neighbor interaction, and reduced crime rates in the surrounding blocks. Families who had planned to move stayed because of the community bonds formed through gardening. The original volunteers still gathered for annual celebrations, watching new generations take ownership of the space. What began as one woman's vision had become proof that collective action could transform not just land, but lives. The garden remained a testament to what happens when people choose collaboration over indifference."
    ],
    questions: [
      {
        id: 13,
        text: "How long had the vacant lot been unused before the garden project?",
        options: ["10 years", "12 years", "15 years", "20 years"],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "Who initiated the community garden project?",
        options: ["The city council", "Maria Rodriguez", "The local high school", "A group of teenagers"],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "How long did the cleanup effort take?",
        options: ["One weekend", "Two weekends", "Three weekends", "One month"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "What did Mr. O'Brien share with other gardeners?",
        options: ["His tomato varieties", "His secret recipe for organic pest control", "His gardening tools", "His irrigation system design"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "How was the vandalism problem addressed?",
        options: ["The garden was abandoned", "Beds were rebuilt and security cameras installed", "Police arrested the vandals immediately", "A fence was built around the entire garden"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "After how many years did Maria step back from leadership?",
        options: ["3 years", "5 years", "7 years", "10 years"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "The Time Capsule",
    paragraphs: [
      "Fifth-grade teacher Mr. Harrison proposed an unusual end-of-year project: each student would create a personal time capsule to be opened at their ten-year high school reunion. The class buzzed with excitement and anxiety as they considered what represented their eleven-year-old selves. Some students chose photographs and letters, while others included video game cartridges, friendship bracelets, or handwritten predictions about the future. Mr. Harrison provided sturdy metal boxes and explained proper preservation techniques for different materials. He emphasized choosing items with genuine personal meaning rather than what they thought would impress their future selves.",
      "Twelve-year-old Sophie struggled with her selection, overwhelmed by the permanence of the decision. She wanted to include her favorite stuffed bear, but feared it would seem childish in ten years. Her best friend Marcus suggested including a current playlist, arguing that music captured emotions better than objects. Sophie's younger brother donated his prized baseball card collection, insisting she would appreciate having tangible memories of their childhood home. After weeks of deliberation, Sophie filled her box with a journal entry, a pressed flower from her grandmother's garden, a USB drive with photos, and a letter to her future self asking questions she hoped to answer.",
      "The burial ceremony took place beneath the old oak tree in the school courtyard, a spot scheduled for renovation in five years. Each student placed their sealed capsule into individual compartments of a larger underground vault designed to last decades. Principal Davis gave a speech about the value of reflection and growth, noting that the act of choosing items forced students to examine their current values and interests. Parents attended, some crying as they watched their children participate in this rite of passage. The school photographer documented the event, creating images that would accompany the capsules when they were eventually retrieved.",
      "Five years passed, and the promised renovation arrived ahead of schedule due to structural concerns with the courtyard. Panic ensued when construction crews discovered the vault earlier than expected. The school board debated whether to relocate the capsules or open them prematurely. Mr. Harrison, now retired, advocated strongly for maintaining the original timeline despite the inconvenience. Engineers carefully extracted the vault and stored it in climate-controlled conditions until the reunion date. News of the incident spread through social media, with former students expressing both relief and curiosity about their buried treasures.",
      "The reunion brought together thirty-eight former classmates, now twenty-one-year-olds navigating college and early careers. The atmosphere mixed nostalgia with awkwardness as people rediscovered connections faded by time and distance. Opening the capsules created moments of laughter, tears, and surprise. Sophie read her letter aloud, amazed at how accurately her younger self had predicted certain challenges while completely missing others. Marcus's playlist seemed archaic, yet the songs triggered vivid memories of carefree summer days. Several students had included items representing dreams they had abandoned, prompting discussions about changing aspirations and unexpected journeys.",
      "Not everyone attended the reunion, but those present agreed the experience strengthened their appreciation for personal growth and the passage of time. Sophie kept her stuffed bear, realizing that sentimental value transcended age-appropriateness. The school decided to continue the time capsule tradition with each graduating class, learning from the storage mishap by installing the vault in a more secure location. Mr. Harrison received letters from former students thanking him for the meaningful project that connected their past and present selves. The experience demonstrated that while people change dramatically over a decade, core elements of identity persist. The capsules became artifacts of a specific moment in each person's development, precious precisely because they captured who they were before life shaped them differently."
    ],
    questions: [
      {
        id: 19,
        text: "What grade were the students when they created their time capsules?",
        options: ["Third grade", "Fourth grade", "Fifth grade", "Sixth grade"],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "When were the capsules scheduled to be opened?",
        options: ["At graduation", "At their ten-year high school reunion", "In five years", "At college graduation"],
        correctAnswer: 1
      },
      {
        id: 21,
        text: "Where were the capsules buried?",
        options: ["In the gymnasium", "Beneath the old oak tree in the school courtyard", "In the library", "Behind the football field"],
        correctAnswer: 1
      },
      {
        id: 22,
        text: "Why was the vault discovered earlier than expected?",
        options: ["Students dug it up", "Courtyard renovation arrived ahead of schedule", "An earthquake exposed it", "Construction workers found it accidentally during unrelated work"],
        correctAnswer: 1
      },
      {
        id: 23,
        text: "How old were the students at the reunion?",
        options: ["18", "19", "21", "25"],
        correctAnswer: 2
      },
      {
        id: 24,
        text: "What did Sophie realize about her stuffed bear?",
        options: ["It was worthless", "Sentimental value transcended age-appropriateness", "She should have included it originally", "It had deteriorated beyond recognition"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "The Bookstore Rescue",
    paragraphs: [
      "Henderson's Books had occupied the corner of Main and Third for sixty-three years, its creaky floors and towering shelves holding stories within stories. Owner Eleanor Henderson inherited the shop from her father, who had purchased it when paperback books were revolutionary. The store survived television, video games, and the internet's early years through loyal customers who valued browsing physical books and personalized recommendations. Eleanor knew every regular by name and could suggest perfect reads based on vague descriptions of mood or interest. The children's section featured a worn velvet armchair where generations had been read to, its fabric thin from decades of use.",
      "Then everything changed when a major online retailer announced same-day delivery in their city. Sales dropped forty percent within six months as convenience trumped community for many shoppers. Eleanor watched longtime customers apologize as they explained they couldn't justify paying full price when discounts existed elsewhere. Staff reductions became necessary, leaving Eleanor working seven days a week alongside one part-time employee. The bank called about refinancing options, their tone suggesting they doubted the business's viability. Sleepless nights brought calculations showing the store would close within eighteen months at current trends.",
      "Desperate but determined, Eleanor attended a small business workshop where she learned about creating experiences rather than just selling products. She launched a book club meeting twice monthly, featuring author visits via video conference. The children's story hour expanded to include puppet shows and craft activities tied to featured books. A cozy café corner opened, serving locally roasted coffee and homemade pastries prepared by a neighboring bakery. Social media presence increased, with daily posts highlighting staff picks, behind-the-scenes moments, and customer testimonials. The store's Instagram account gained thousands of followers who appreciated the authentic personality shining through.",
      "Community response exceeded expectations. Local writers began hosting readings and signing events, drawing audiences who purchased multiple books. School partnerships brought classes for literary scavenger hunts and research skill workshops. The book club grew to eighty active members, creating a devoted customer base that valued connection over convenience. Revenue stabilized within eight months and began climbing as word-of-mouth attracted visitors from neighboring towns. Eleanor hired two additional employees, restoring some work-life balance. The café corner became profitable enough to subsidize slower-selling literary titles that deserved shelf space.",
      "A national magazine featured Henderson's Books as a model for independent bookstore survival, generating publicity that boosted sales further. Eleanor used the attention to advocate for local business support policies, testifying before the city council about economic diversity's importance. Other struggling shops adopted similar experiential approaches, creating a revitalized downtown district. The velvet armchair received new upholstery while maintaining its character, symbolizing renewal without losing essence. Former employees returned, excited by the store's transformation and renewed purpose. Customer loyalty deepened as people recognized their purchases supported community vitality beyond mere transactions.",
      "Five years after facing closure, Henderson's Books thrived as both business and cultural hub. Eleanor mentored other bookstore owners facing similar challenges, sharing strategies that balanced commerce with community service. The store hosted an annual literary festival attracting authors and readers from across the state. Young people discovered that bookstores offered more than inventory—they provided curated experiences and human connection impossible to replicate online. Eleanor's father would have recognized the shop's soul despite its modern adaptations. The creaky floors still welcomed visitors, now carrying footsteps of new generations discovering the magic of physical books in digital times. Survival required evolution, but the core mission remained unchanged: connecting people with stories that matter."
    ],
    questions: [
      {
        id: 25,
        text: "How many years had Henderson's Books been in business when the story begins?",
        options: ["50 years", "55 years", "63 years", "70 years"],
        correctAnswer: 2
      },
      {
        id: 26,
        text: "By what percentage did sales drop after the online retailer announced same-day delivery?",
        options: ["20%", "30%", "40%", "50%"],
        correctAnswer: 2
      },
      {
        id: 27,
        text: "How many days per week was Eleanor working after staff reductions?",
        options: ["5 days", "6 days", "7 days", "4 days"],
        correctAnswer: 2
      },
      {
        id: 28,
        text: "How long did Eleanor estimate before the store would close at current trends?",
        options: ["6 months", "12 months", "18 months", "24 months"],
        correctAnswer: 2
      },
      {
        id: 29,
        text: "How many active members did the book club grow to?",
        options: ["50", "60", "80", "100"],
        correctAnswer: 2
      },
      {
        id: 30,
        text: "How many years after facing closure was the store thriving?",
        options: ["3 years", "4 years", "5 years", "7 years"],
        correctAnswer: 2
      }
    ]
  }
];
