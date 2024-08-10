const userMessage = [
    ["bal tui"],
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["ami n bohut depressed"],
    ["what are you doing", "ki korish tui", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["tui bhai amar"],
    ["you are funny"],
    ["i dont know"],
    ["ami ki moti"],
    ["boring"],
    ["im tired"],
   
    
        ["can you help with my bill", "i need help with my bill", "help me with my bill"],
        ["how do i fix my phone", "my phone is broken", "phone troubleshooting"],
        ["what are the best study tips", "how to study effectively", "study tips"],
        ["how do i cook a turkey", "turkey recipe", "how to make a turkey"],
        ["what should i wear today", "help me choose an outfit", "fashion advice"],
        ["how can i improve my diet", "tips for eating healthier", "healthy eating tips"],
        ["can you suggest a workout", "best exercises for fitness", "workout recommendations"],
        ["how do i plan a budget", "tips for budgeting", "financial planning advice"],
        ["how to deal with stress", "stress management techniques", "dealing with stress"],
        ["what are good study habits", "effective study strategies", "study habits"],
        ["how can i improve my sleep", "tips for better sleep", "sleep improvement"],
        ["what are the best apps for productivity", "productivity apps", "app recommendations"],
        ["how do i start a new project", "project planning tips", "starting a project"],
        ["can you recommend a good book", "book suggestions", "what book should i read"],
        ["how do i get motivated", "motivation tips", "how to stay motivated"],
        ["what are some good hobbies", "hobby ideas", "new hobbies to try"],
        ["how can i improve my relationship", "relationship tips", "strengthening relationships"],
        ["what should i do on a date", "date ideas", "date planning"],
        ["how do i write a resume", "resume writing tips", "creating a resume"],
        ["can you help me with my essay", "essay writing tips", "help with essays"],
        ["what are the best relaxation techniques", "relaxation tips", "how to relax"],
        ["how do i manage my time effectively", "time management tips", "improving time management"],
        ["can you suggest a romantic movie", "romantic movie recommendations", "what romantic movies to watch"],
        ["what should i cook for dinner", "dinner recipes", "meal suggestions"],
        ["how do i start exercising", "exercise tips", "getting started with exercise"],
        ["what are some fun activities to do", "fun things to do", "activity ideas"],
        ["how do i improve my communication skills", "communication tips", "better communication"],
        ["can you recommend a good podcast", "podcast suggestions", "what podcasts to listen to"],
        ["what are the best ways to save money", "money-saving tips", "how to save money"],
        ["how do i deal with anxiety", "anxiety management tips", "dealing with anxiety"],
        ["can you suggest a weekend getaway", "weekend trip ideas", "places to visit on the weekend"],
        ["how do i organize my home", "home organization tips", "organizing your space"],
        ["what are some good self-care practices", "self-care tips", "taking care of yourself"],
        ["how do i deal with a difficult boss", "handling a difficult boss", "workplace tips"],
        ["can you recommend a good restaurant", "restaurant suggestions", "where to eat out"],
        ["what are some good ways to relax after work", "post-work relaxation tips", "unwinding after work"],
        ["how do i improve my public speaking skills", "public speaking tips", "becoming a better speaker"],
        ["can you help me with my diet plan", "diet plan tips", "creating a diet plan"],
        ["what are some fun date ideas", "date ideas", "romantic activities"],
        ["how do i plan a vacation", "vacation planning tips", "travel tips"],
        ["what are the best ways to learn a new skill", "learning tips", "skill development advice"],
        ["can you suggest a fun game", "game recommendations", "what games to play"],
        ["how do i improve my fitness", "fitness tips", "getting fit"],
        ["what are the best ways to improve my health", "health improvement tips", "becoming healthier"],
        ["can you recommend a good book to read", "book recommendations", "reading suggestions"],
        ["how do i create a budget", "budgeting tips", "financial management"],
        ["what are some good ways to relieve stress", "stress relief tips", "managing stress"],
        ["how do i find a new hobby", "finding new hobbies", "hobby suggestions"],
        ["what are the best ways to save money on groceries", "grocery saving tips", "saving on food"],
        ["can you suggest a new fitness routine", "fitness routine ideas", "exercise plan"],
        ["how do i improve my time management skills", "time management tips", "productivity advice"],
        ["what are some good self-improvement books", "self-improvement book recommendations", "books for personal growth"],
        ["can you recommend a fun activity for the weekend", "weekend activities", "what to do on the weekend"],
        ["how do i deal with a breakup", "breakup advice", "healing after a breakup"],
        ["what are the best ways to manage my stress levels", "stress management tips", "managing stress"],
        ["how do i improve my sleeping habits", "better sleep tips", "sleep improvement strategies"],
        ["can you suggest a romantic gift", "romantic gift ideas", "gift suggestions"],
        ["how do i plan a surprise party", "party planning tips", "organizing a surprise"],
        ["what are the best ways to improve my cooking skills", "cooking tips", "becoming a better cook"],
        ["can you recommend a relaxing activity", "relaxation activities", "ways to unwind"],
        ["how do i improve my relationship with my partner", "relationship improvement tips", "strengthening bonds"],
        ["what are some good ways to celebrate an anniversary", "anniversary ideas", "celebration suggestions"],
        ["how do i create a workout plan", "workout planning tips", "exercise routine"],
        ["can you suggest a fun movie to watch", "movie recommendations", "what to watch"],
        ["what are the best ways to stay motivated", "staying motivated tips", "maintaining motivation"],
        ["how do i organize my work schedule", "work schedule tips", "time management"],
        ["can you recommend a good yoga routine", "yoga routine ideas", "best yoga exercises"],
        ["how do i improve my financial situation", "financial improvement tips", "managing finances"],
        ["what are some good relationship books", "relationship book recommendations", "books about relationships"],
        ["how do i handle difficult conversations", "handling conversations tips", "communication advice"],
        ["can you suggest a fun activity for a date", "date activity ideas", "romantic things to do"],
        ["what are the best ways to stay healthy", "health tips", "maintaining health"],
        ["how do i manage my work-life balance", "work-life balance tips", "balancing work and life"],
        ["can you recommend a good comedy show", "comedy recommendations", "what to watch for laughs"],
        ["how do i plan a road trip", "road trip planning tips", "travel advice"],
        ["what are the best ways to improve my diet", "diet improvement tips", "healthy eating strategies"],
        ["can you suggest a new hobby to try", "new hobby ideas", "what to try next"],
        ["how do i create a self-care routine", "self-care tips", "creating a routine"],
        ["what are some good tips for a first date", "first date tips", "dating advice"],
        ["how do i improve my social skills", "social skills tips", "becoming more social"],
        ["can you recommend a good app for meditation", "meditation app suggestions", "best apps for meditation"],
        ["what are the best ways to save money on travel", "travel saving tips", "budget travel advice"],
        ["how do i plan a successful event", "event planning tips", "organizing an event"],
        ["can you suggest a good book for self-improvement", "self-improvement book suggestions", "books for growth"],
        ["what are some fun indoor activities", "indoor activity ideas", "things to do indoors"],
        ["how do i improve my cooking skills", "cooking improvement tips", "better cooking strategies"],
        ["can you recommend a good app for learning a new skill", "skill learning apps", "best apps for learning"],
        ["what are the best ways to relax on a weekend", "weekend relaxation tips", "how to unwind"],
        ["how do i plan a romantic evening", "romantic evening ideas", "planning a special night"],
        ["can you suggest a fun way to spend a day off", "day off activities", "how to spend free time"],
        ["what are the best ways to boost my energy", "energy boosting tips", "staying energized"],
        ["how do i improve my relationship with my friends", "friendship improvement tips", "strengthening friendships"],
        ["can you recommend a good tv series", "tv series recommendations", "what to watch"],
        ["what are the best ways to stay productive", "productivity tips", "maintaining productivity"],
        ["how do i create a meal plan", "meal planning tips", "creating a meal plan"],
        ["what are some good date night ideas", "date night suggestions", "romantic date ideas"],
        ["how do i handle financial stress", "financial stress management", "dealing with money stress"],
        ["can you suggest a good book for learning about relationships", "relationship learning books", "books on relationships"],
        ["what are the best ways to stay focused", "focus tips", "maintaining concentration"],
        ["how do i organize a successful party", "party organizing tips", "planning a party"],
        ["can you recommend a fun book to read", "fun book suggestions", "what to read next"],
        ["what are the best ways to manage my time", "time management strategies", "improving time use"],
        ["how do i plan a family vacation", "family vacation planning", "vacation tips"],
        ["can you suggest a good exercise routine", "exercise routine ideas", "best workouts"],
        ["what are the best ways to improve my personal growth", "personal growth tips", "self-improvement strategies"],
        ["how do i deal with work stress", "work stress management", "handling job stress"],
        ["can you recommend a good podcast for personal development", "personal development podcasts", "best self-improvement podcasts"],
        ["what are some good ways to celebrate a milestone", "milestone celebration ideas", "celebration tips"],
        ["how do i plan a fun weekend trip", "weekend trip planning", "fun getaway ideas"],
        ["can you suggest a good motivational book", "motivational book recommendations", "books for inspiration"],
        ["what are the best ways to improve my focus", "focus improvement tips", "staying focused"],
        ["how do i organize a productive workspace", "workspace organization tips", "improving work environment"],
        ["can you recommend a good movie for a date night", "date night movie suggestions", "romantic films to watch"],
        ["what are some good ways to unwind after a long day", "unwinding tips", "relaxation methods"],
        ["how do i handle difficult family situations", "family situation advice", "dealing with family conflicts"],
        ["can you suggest a fun outdoor activity", "outdoor activity ideas", "things to do outside"],
        ["what are the best ways to manage my stress levels", "stress management techniques", "controlling stress"],
        ["how do i improve my diet and nutrition", "diet and nutrition tips", "eating healthy"],
        ["can you recommend a good self-help book", "self-help book suggestions", "books for personal development"],
        ["what are the best ways to relax on vacation", "vacation relaxation tips", "unwinding while traveling"],
        ["how do i create a balanced lifestyle", "balanced lifestyle tips", "maintaining balance in life"],
        ["can you suggest a good movie for a relaxing night in", "relaxing movie recommendations", "films for a cozy night"],
        ["what are the best ways to improve my career", "career improvement tips", "advancing in your job"],
        ["how do i plan a productive workday", "productive workday tips", "organizing your workday"],
        ["can you recommend a good book on personal finance", "personal finance book suggestions", "books about managing money"],
        ["what are the best ways to enhance my creativity", "creativity tips", "boosting creative thinking"],
        ["how do i manage my time more effectively", "time management advice", "better use of time"],
        ["can you suggest a good workout for beginners", "beginner workout ideas", "starting a fitness routine"],
        ["what are the best ways to stay motivated at work", "work motivation tips", "keeping motivation high"],
        ["how do i create a successful personal project", "personal project tips", "planning and executing projects"],
        ["can you recommend a good movie for a cozy night in", "cozy movie recommendations", "films for a relaxed evening"],
        ["what are some good ways to improve my mental health", "mental health tips", "strategies for mental well-being"],
        ["how do i plan a successful family event", "family event planning", "organizing family gatherings"],
        ["can you suggest a good app for productivity", "productivity app recommendations", "apps to boost productivity"],
        ["what are the best ways to stay healthy and fit", "health and fitness tips", "maintaining a healthy lifestyle"],
        ["how do i handle conflict in relationships", "relationship conflict resolution", "dealing with disagreements"],
        ["can you recommend a fun way to spend an afternoon", "afternoon activity ideas", "things to do in the afternoon"],
        ["what are the best ways to stay focused at work", "focus tips for work", "improving work concentration"],
        ["how do i create a balanced work-life schedule", "work-life balance tips", "managing work and personal life"],
        ["can you suggest a good motivational speaker", "motivational speaker recommendations", "inspirational speakers to listen to"],
        ["what are the best ways to manage my finances effectively", "financial management tips", "budgeting and money management"],
        ["how do i create a fun and engaging weekend plan", "weekend planning tips", "ideas for a fun weekend"],
        ["can you recommend a good book for self-care", "self-care book suggestions", "books about taking care of yourself"],
        ["what are some good ways to improve my focus and productivity", "focus and productivity tips", "enhancing concentration"],
        ["how do i plan a successful dinner party", "dinner party planning", "organizing a dinner event"],
        ["can you suggest a good app for tracking my goals", "goal tracking apps", "best apps for goal setting"],
        ["what are the best ways to maintain a positive mindset", "positive mindset tips", "staying positive"],
        ["how do i improve my skills in a specific area", "skill improvement tips", "developing expertise"],
        ["can you recommend a fun way to spend a day off", "day off ideas", "fun activities for a day off"],
        ["what are the best ways to stay active during the week", "weekly activity tips", "staying active"],
        ["how do i manage my stress at work", "work stress management", "handling stress at work"],
        ["can you suggest a good hobby for relaxation", "relaxing hobbies", "activities for stress relief"],
        ["what are the best ways to stay healthy and happy", "health and happiness tips", "maintaining well-being"],
        ["how do i create a fun and productive workspace", "workspace creation tips", "designing a productive environment"],
        ["can you recommend a good book for relaxation", "relaxation book suggestions", "books for unwinding"],
        ["what are the best ways to enhance my personal growth", "personal growth strategies", "self-improvement tips"],
        ["how do i handle difficult situations in a positive way", "positive handling of difficult situations", "dealing with challenges"],
        ["can you suggest a fun game to play with friends", "game suggestions", "activities for friends"],
        ["what are the best ways to improve my overall well-being", "well-being tips", "enhancing health and happiness"]
    ];
    

  const botReply = [
    ["bsdk"],
    ["bol bol", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    ["Dekh tui amake mon khule sob bolte parish ! Ok?"],
  
    [
      "Tor athe kotha bolchi !Ar ki korbo bol",
      
      "Can you guess?",
      
    ],
    ["I am always young."],
    ["Amake tor bhai bhab" ],
    ["Ritesh"],
    ["Amake tui ja khusi bole dakte parish"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Tor bhai jokhon bolche toke moti toh or age ami k bol?"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
    
        ["I can help you with that. What specific help do you need?", "I'd be happy to assist. What are you looking for?", "Sure, just let me know what you need help with!"],
        ["Let's go over some basic troubleshooting steps. Can you describe the issue?", "I can guide you through some solutions. What seems to be the problem?", "Describe the problem and I can help you solve it."],
        ["Here are some study tips: make a schedule, take breaks, and practice regularly. Need more help?", "Try these study tips: stay organized, practice active learning, and test yourself.", "Effective study habits include regular reviews, active engagement, and proper rest. Let me know if you need more details!"],
        ["For cooking a turkey, start with preheating the oven, prepare the turkey, and cook it for about 3-4 hours. Need a specific recipe?", "Here’s a basic turkey recipe: season, roast, and let it rest. I can provide a detailed recipe if needed.", "Cooking a turkey involves prepping, seasoning, and roasting. Let me know if you need the full recipe!"],
        ["Consider checking the weather and your calendar. If it’s casual, go for comfort. Need more suggestions?", "Check the weather and plan according to the occasion. Would you like more outfit ideas?", "For outfit choices, consider the weather and event. Let me know if you need more help!"],
        ["Try incorporating more fruits, vegetables, and whole grains into your diet. Interested in a specific meal plan?", "Improving your diet could involve adding more nutrient-rich foods. I can help with a detailed plan if needed.", "Eating healthier includes more balanced meals with fresh ingredients. Need more tips on specific foods?"],
        ["Here’s a workout routine: 30 minutes of cardio, strength training, and flexibility exercises. Need a personalized plan?", "For fitness, try a mix of cardio, strength, and flexibility exercises. Let me know if you need a custom routine!", "A good workout routine includes cardio, strength training, and stretching. Let me know if you need details!"],
        ["Start by tracking your expenses and setting goals. I can help you create a budget plan if you need.", "To plan a budget, track your spending and set limits. Let me know if you need assistance with budgeting.", "Creating a budget involves tracking expenses and setting financial goals. Need help with a specific budget?"],
        ["Use techniques like deep breathing, meditation, or regular exercise to manage stress. Interested in learning more techniques?", "Stress management can include practices like mindfulness and regular exercise. Let me know if you need more tips!", "Try deep breathing, regular exercise, or meditation to manage stress. Need more details on these techniques?"],
        ["Good study habits include regular reviews, active learning, and proper rest. Want more tips?", "Effective study habits involve consistency, practice, and staying organized. Need specific advice on study techniques?", "Regular reviews, active learning, and proper sleep are key to good study habits. Let me know if you need more guidance!"],
        ["For better sleep, try consistent sleep schedules, a relaxing routine, and a comfortable environment. Need more advice?", "Improving sleep involves a consistent schedule and a relaxing environment. Interested in more tips for better sleep?", "Try maintaining a sleep routine and creating a calm environment for better rest. Need more details?"],
        ["Here are some productivity apps: Todoist, Evernote, and Trello. Interested in learning more about these apps?", "Try using apps like Todoist or Evernote to boost your productivity. Let me know if you need more recommendations.", "For productivity, apps like Trello and Evernote can help. Want more information on these tools?"],
        ["Start by setting clear goals, creating a plan, and breaking it down into manageable steps. Need more guidance?", "To start a project, define your goals and break them into steps. Let me know if you need help with the planning.", "Creating a project plan involves setting goals and breaking them into tasks. Interested in more detailed advice?"],
        ["Here are some book suggestions: ‘The Alchemist’ by Paulo Coelho and ‘To Kill a Mockingbird’ by Harper Lee. Want more recommendations?", "Try reading ‘The Alchemist’ or ‘Pride and Prejudice’. Let me know if you need more book ideas.", "Consider books like ‘1984’ by George Orwell or ‘The Great Gatsby’ by F. Scott Fitzgerald. Need more suggestions?"],
        ["To stay motivated, set clear goals, reward yourself, and maintain a positive mindset. Need more tips?", "Keeping motivation high can include setting goals, tracking progress, and celebrating milestones. Want more advice?", "Try setting goals, tracking progress, and rewarding yourself to stay motivated. Need additional tips?"],
        ["Here are some hobbies: gardening, painting, or learning a musical instrument. Interested in trying something new?", "Consider picking up hobbies like painting or playing an instrument. Let me know if you need more ideas.", "Gardening, reading, and cooking are great hobbies to explore. Want more suggestions for hobbies?"],
        ["Improving a relationship often involves communication, quality time, and mutual respect. Want more advice?", "Building strong relationships includes open communication and spending quality time together. Need more tips?", "To strengthen a relationship, focus on communication and quality time. Let me know if you need specific advice!"],
        ["For a date, consider a romantic dinner, a movie night, or a fun activity together. Need more ideas?", "Date ideas include a romantic dinner or a fun outing. Want suggestions for different types of dates?", "Try planning a dinner, a movie, or a unique experience for a date. Let me know if you need more ideas!"],
        ["For resume writing, focus on clear formatting, relevant experience, and strong language. Need specific help?", "Creating a resume involves highlighting experience and skills in a clear format. Let me know if you need assistance.", "To write a strong resume, emphasize your skills and experience clearly. Interested in detailed tips?"],
        ["I can help with your essay by offering structure tips, proofreading, and content suggestions. Need specific assistance?", "For essay writing, I can help with structure, proofreading, and improving your content. Let me know what you need!", "Assistance with essays includes structuring content, proofreading, and enhancing arguments. Need detailed help?"],
        ["Try deep breathing exercises, progressive muscle relaxation, and mindfulness. Need more details on these techniques?", "For relaxation, try techniques like deep breathing or progressive muscle relaxation. Interested in more methods?", "Using methods like deep breathing and progressive muscle relaxation can help you relax. Let me know if you need more advice!"],
        ["Effective time management includes prioritizing tasks, setting deadlines, and avoiding distractions. Need more tips?", "Managing time effectively can involve creating a schedule, setting priorities, and avoiding procrastination. Want more advice?", "To manage your time well, prioritize tasks and set clear deadlines. Interested in more tips on time management?"],
        ["Here are some good self-care practices: regular exercise, adequate sleep, and mindfulness. Need more recommendations?", "For self-care, consider exercise, healthy eating, and mindfulness practices. Want more details on self-care?", "Self-care includes activities like exercise and mindfulness. Let me know if you need more suggestions!"],
        ["Dealing with a difficult boss may include clear communication and setting boundaries. Need more strategies?", "Handling a difficult boss involves effective communication and understanding their expectations. Interested in more tips?", "To deal with a tough boss, focus on communication and managing expectations. Need additional advice?"],
        ["I can help with restaurant suggestions based on your preferences. What type of cuisine are you interested in?", "For restaurant recommendations, let me know your preferences and location. Need help finding a specific type?", "Consider sharing your preferences and location for the best restaurant suggestions. Let me know what you like!"],
        ["Try activities like reading, watching a movie, or taking a walk. Need more ideas for relaxation after work?", "Unwinding after work can include reading, watching TV, or engaging in a hobby. Want more relaxation ideas?", "Consider reading, watching a favorite show, or doing a relaxing activity to unwind after work. Need more suggestions?"],
        ["To improve public speaking, practice regularly, seek feedback, and work on your delivery. Interested in specific tips?", "Improving public speaking includes regular practice and feedback. Let me know if you need more detailed advice.", "Focus on practicing, getting feedback, and enhancing your delivery to improve public speaking. Need more tips?"],
        ["Effective stress management includes techniques like deep breathing and regular exercise. Interested in more strategies?", "For managing stress, consider techniques like mindfulness and regular exercise. Want additional tips?", "Try using deep breathing and regular exercise to manage stress. Need more suggestions on stress relief?"],
        ["Improving productivity at work includes creating a to-do list, setting priorities, and avoiding distractions. Want more advice?", "To boost productivity at work, use techniques like prioritizing tasks and minimizing interruptions. Need additional tips?", "Effective productivity strategies include task lists, prioritization, and reducing distractions. Interested in more details?"],
        ["To plan a romantic evening, consider a special dinner, a movie, or an intimate activity together. Need more ideas?", "Planning a romantic evening can include a special meal, a movie, or a thoughtful gesture. Want more suggestions?", "For a memorable evening, plan a romantic dinner or a cozy movie night. Let me know if you need more ideas!"],
        ["Try journaling, meditation, or talking to a therapist to manage stress. Need more strategies for managing stress?", "Managing stress effectively can include techniques like meditation and professional counseling. Interested in learning more?", "Consider journaling, meditation, or therapy to manage stress better. Want more detailed tips?"],
        ["Improving interpersonal skills involves communication, empathy, and active listening. Need specific tips?", "Developing interpersonal skills includes practicing communication and empathy. Interested in detailed advice?", "To enhance interpersonal skills, focus on clear communication and understanding others. Need more help?"],
        ["Good habits for studying include setting specific goals, maintaining a regular schedule, and practicing active learning. Want more study tips?", "Effective study habits involve goal setting, regular schedules, and active engagement. Let me know if you need additional advice.", "Studying effectively means having clear goals and a consistent routine. Need more study techniques?"],
        ["To handle job stress, try setting clear boundaries, taking breaks, and practicing relaxation techniques. Need more strategies?", "Managing job stress involves setting boundaries and taking time for yourself. Want additional tips?", "Effective ways to manage job stress include setting limits and using relaxation techniques. Need more advice?"],
        ["Consider hobbies like painting, gardening, or playing an instrument to find joy. Need more hobby suggestions?", "Finding new hobbies such as painting or gardening can bring enjoyment. Interested in additional hobby ideas?", "Engaging in activities like painting or gardening can be fulfilling. Want more suggestions for hobbies?"],
        ["Improving time management includes setting goals, creating schedules, and prioritizing tasks. Need more tips?", "Effective time management involves planning, setting priorities, and sticking to a schedule. Interested in more detailed advice?", "To manage time better, try setting clear goals and making a schedule. Need additional time management tips?"],
        ["For a successful date, consider a planned activity, good communication, and creating a pleasant atmosphere. Need more date ideas?", "Planning a successful date involves selecting activities and ensuring good communication. Want more suggestions?", "Successful dates include thoughtful planning and creating a pleasant experience. Need additional ideas?"],
        ["Managing work-life balance involves setting boundaries, prioritizing tasks, and making time for yourself. Need more strategies?", "To balance work and personal life, set clear boundaries and prioritize your time. Interested in more tips?", "Effective work-life balance includes setting boundaries and finding time for yourself. Want more advice?"],
        ["A good resume should highlight your skills, experience, and achievements in a clear format. Need help with your resume?", "To create a strong resume, focus on clearly presenting your skills and experience. Interested in detailed tips?", "Highlight your skills and experience clearly on your resume. Need more specific assistance?"],
        ["To improve a relationship, focus on communication, empathy, and spending quality time together. Need more advice?", "Building a stronger relationship involves good communication and empathy. Want more tips on improving relationships?", "Strengthening a relationship includes open communication and quality time. Need additional advice?"],
        ["For better sleep, try establishing a routine, avoiding screens before bed, and creating a comfortable environment. Need more tips?", "Improving sleep can include maintaining a consistent routine and a relaxing environment. Interested in more sleep tips?", "To get better sleep, set a routine and make your sleep environment comfortable. Need additional suggestions?"]
    
    
  ];
  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    
  }