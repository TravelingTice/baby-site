const iso = d => d.toLocaleDateString('sv');
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

const START = new Date(2026, 10, 13, 12);
const END = new Date(2027, 0, 30, 12);
const TRAVEL = '2026-11-25';
const ARRIVE = '2026-11-26';
const DUE = '2027-01-30';

const ALARM = [
  ['Get up, lights low, pick up the teddy', ''], ['Change the diaper', '3 min'],
  ['"Feed": hold it upright, then burp', '10 min'], ['Log it in the tracker', ''], ['Teddy back in the cot, you back in bed', ''],
];

const TASKS = {
  '2026-11-13': {
    kind: 'talk', title: 'Kick-off, the two of you', mins: 20,
    blocks: [
      { name: 'Tonight, phones away', items: [['Each name your 3 biggest worries about the baby', '10 min'], ['Each name what you look forward to most', '5 min'], ['Show her this plan. She can veto or add anything', '']] },
      { name: 'Then', items: [['Get The Expectant Father (Armin Brott) as an e-book', '5 min']] },
    ],
    note: 'E-book, so it costs no suitcase space.',
  },
  '2026-11-14': {
    kind: 'read', title: "What's happening right now", mins: 45,
    blocks: [{ name: 'Read and ask', items: [['The Expectant Father: the chapter for month 7', '30 min'], ['Write down 3 questions for the next check-up', '5 min'], ['Ask her how this week felt, physically', '10 min']] }],
    note: 'One chapter per week from here keeps you a step ahead of the pregnancy.',
  },
  '2026-11-17': {
    kind: 'arrange', title: 'Sort your leave', mins: 20,
    blocks: [{ name: 'Tonight', items: [['Message HR: baby due 30 Jan, what leave do I get?', '10 min'], ['Dutch contract? Ask about geboorteverlof (1 week, full pay) and aanvullend geboorteverlof (up to 5 weeks, 70% via UWV)', ''], ['Pencil the weeks into your calendar', '5 min']] }],
    note: 'Babies ignore due dates. Ask how it works if the baby comes two weeks early or late.',
  },
  '2026-11-19': {
    kind: 'arrange', title: 'Paperwork you can only get in the Netherlands', mins: 30,
    blocks: [{ name: 'Before the 25th', items: [['Her pregnancy records: ask the midwife or hospital for a copy, digital and paper', ''], ['Fit-to-fly letter for the flight: most airlines want one after 28 weeks', ''], ['Originals to pack: passports, both birth certificates, marriage certificate', ''], ['Ask the Dutch embassy in Jakarta what a baby born there needs for a Dutch passport', '10 min'], ['Health insurance: does it cover the birth and the newborn in Indonesia? Get it in writing', '10 min']] }],
    note: 'Anything that needs a stamp or an international version from a Dutch gemeente is far easier before you fly.',
  },
  '2026-11-21': {
    kind: 'buy', title: 'Make the list (buy nothing yet)', mins: 45,
    blocks: [{ name: 'One shared sheet', items: [['Columns: item, needed by birth?, where to buy, bought', '10 min'], ['Sleep: bassinet or cot, firm flat mattress, fitted sheets, swaddles', ''], ['Out and about: car seat, stroller or carrier', ''], ['Changing: diapers, wipes, mat, cream', ''], ['Clothes, bath, feeding, health kit', ''], ['Mark what family or friends could hand down or gift', '5 min']] }],
    note: 'All shopping happens in Jakarta. Today is only the list, so the first shop there is fast.',
  },
  '2026-11-22': {
    kind: 'talk', title: 'How does she want you there?', mins: 30,
    blocks: [{ name: 'Ask, then write it down', items: [['What do you want from me during labour?', ''], ['Who is in the room, who waits outside, who hears first?', ''], ['Visitors in week one: who, when, how long?', ''], ['Feeding: breast, bottle, both. What do you want to try?', '']] }],
    note: 'Listen more than you talk. These answers become the birth preferences you give the hospital.',
  },
  [TRAVEL]: { kind: 'free', title: 'Travel day', note: 'Pregnancy records and the fit-to-fly letter go in hand luggage. Aisle seat for her, lots of water, a walk every hour or two.' },
  [ARRIVE]: { kind: 'free', title: 'Landed', note: 'Sleep off the jet lag. Shopping can start from this weekend.' },
  '2026-11-27': {
    kind: 'arrange', title: 'Book the doctor', mins: 15,
    blocks: [{ name: 'Three calls', items: [['Book her first check-up with the OB in Jakarta', ''], ['Hand over the Dutch pregnancy records', ''], ['Put every check-up from now on in your calendar, and go along', '']] }],
    note: 'No hospital picked yet? Shortlist two within a short drive from home.',
  },
  '2026-11-28': {
    kind: 'arrange', title: 'See the hospital', mins: 120,
    blocks: [{ name: 'Tour and ask', items: [['Walk the maternity ward and a delivery room', ''], ['Delivery packages: what is included, what does it cost, is there a deposit?', ''], ['Can you stay in the room, also overnight?', ''], ['Is there a NICU and a paediatrician on site day and night?', ''], ['Which entrance at night? Where do you park?', ''], ['Do they run antenatal and newborn-care classes?', '']] }],
    note: 'Not convinced? See a second hospital next weekend. Check the drive time from home, Jakarta traffic counts.',
  },
  '2026-12-01': {
    kind: 'arrange', title: 'Book the classes', mins: 20,
    blocks: [{ name: 'Tonight', items: [['Antenatal / newborn-care class for the two of you, on or before Sat 2 Jan', ''], ['Infant CPR and choking class, in person or online', ''], ['Save the hospital in Maps, check the drive at rush hour and at night', '']] }],
    note: 'Class lands on another date? Do it then and tick Jan 2 off.',
  },
  '2026-12-03': {
    kind: 'read', title: 'How labour works', mins: 25,
    blocks: [{ name: 'Read', items: [['The stages: early, active, transition, pushing, placenta', '15 min'], ['What a birth partner does in each stage', '10 min'], ['Write down the signs that mean: call the hospital', '']] }],
    note: 'The Expectant Father has a labour chapter. The Birth Partner (Penny Simkin) goes deeper if you want more.',
  },
  '2026-12-05': {
    kind: 'buy', title: 'Big shop 1: sleep and transport', mins: 180,
    blocks: [{ name: 'Get', items: [['Bassinet or cot with a firm, flat mattress', ''], ['3 fitted sheets, 4 swaddles or muslins', ''], ['Infant car seat, rear-facing', ''], ['Stroller, or a carrier that is safe for newborns', ''], ['In the shop: fold the stroller with one hand', '']] }],
    note: 'Go to a real baby store so you can touch things. The small stuff can come from Tokopedia or Shopee.',
  },
  '2026-12-06': {
    kind: 'practice', title: 'Build it', mins: 45,
    blocks: [{ name: 'Hands on', items: [['Assemble the cot or bassinet in your bedroom', ''], ['Fit the car seat, buckle a teddy in and out', ''], ['Fold and unfold the stroller 5 times', '']] }],
    note: 'Safe sleep in one line: on the back, own flat surface, nothing else in the cot.',
  },
  '2026-12-08': {
    kind: 'practice', title: 'Set up the baby tracker', mins: 20,
    blocks: [{ name: 'Both phones', items: [['Pick one app: Huckleberry or Nara Baby', ''], ['Install on both phones, one shared baby profile', ''], ['Log a fake day: 8 feeds, 6 wet diapers, 3 poops, the naps', '10 min'], ['Put the widget or shortcut on your home screen', '']] }],
    note: 'You will use this half asleep, so it has to be two taps. Night drill 1 tests it.',
  },
  '2026-12-10': {
    kind: 'read', title: 'Sleep and soothing', mins: 25,
    blocks: [{ name: 'Read and watch', items: [['Safe sleep: back, flat, firm, empty cot, in your room', '10 min'], ["Video on the 5 S's (Harvey Karp): swaddle, side, shush, swing, suck", '10 min'], ['What a normal newborn night looks like: short chunks, lots of feeds', '5 min']] }],
  },
  '2026-12-12': {
    kind: 'buy', title: 'Big shop 2: the daily stuff', mins: 150,
    blocks: [{ name: 'Get', items: [['Diapers: one pack newborn size, two of the next size up', ''], ['Wipes, changing mat, diaper cream, a bin with a lid', ''], ['Clothes: 6–8 bodysuits, 4 sleepsuits, 2 hats, socks. Light cotton', ''], ['Bath: small tub, 2 hooded towels, mild baby wash', ''], ['Health kit: digital thermometer, nail file, nasal aspirator', ''], ['Feeding kit for her plan: bottles, steriliser, pump, nursing pillow', ''], ['Baby laundry detergent', '']] }],
    note: "Don't overbuy the newborn size. They are out of it in weeks.",
  },
  '2026-12-13': {
    kind: 'practice', title: 'Changing station and first wash', mins: 40,
    blocks: [{ name: 'Set up', items: [["Changing spot: mat, diapers, wipes, cream, bin, all within arm's reach", ''], ['Wash all baby clothes and sheets', ''], ['Sort clothes by size, cut the tags off', '']] }],
  },
  '2026-12-15': {
    kind: 'practice', title: 'Diaper and swaddle drills', mins: 20,
    blocks: [{ name: 'On a teddy', items: [['Diaper it 10 times. Time the last one', ''], ['Swaddle it 5 times along with a video', ''], ['Pick up, hold and put down with head support', '']] }],
    note: 'Feels silly. Works anyway.',
  },
  '2026-12-17': {
    kind: 'arrange', title: "Baby's doctor and the phone list", mins: 25,
    blocks: [{ name: 'Tonight', items: [['Pick a paediatrician: ask the hospital and people you know in Jakarta', ''], ['Ask which checks and vaccines happen in the first weeks', ''], ['Save in both phones: maternity ward, OB, paediatrician, taxi or driver, insurance', '']] }],
    note: 'Ask your own doctor whether you should get a whooping cough booster or flu shot before the birth.',
  },
  '2026-12-19': {
    kind: 'night', title: 'Night drill 1', mins: 80,
    why: 'Feel what broken sleep does to you once, before it counts.',
    blocks: [
      { name: 'Before bed', items: [['Teddy in the cot, diapers and tracker ready', ''], ['Alarms at 00:00, 02:00, 04:00 and 06:00', '']] },
      { name: 'Every alarm · 20 min out of bed', items: ALARM },
    ],
    note: 'No scrolling while you are up, that is cheating. She sleeps through, this one is yours.',
  },
  '2026-12-20': {
    kind: 'talk', title: 'Debrief and sleep in', mins: 15,
    blocks: [{ name: 'After the drill', items: [['Nap. Seriously', ''], ['What was hardest: getting up, staying up, or falling asleep again?', ''], ['Fix one thing in the setup: the light, where stuff is, the app', '']] }],
  },
  '2026-12-22': {
    kind: 'arrange', title: 'Baby paperwork', mins: 30,
    blocks: [{ name: 'Find out and write down', items: [['Indonesian birth certificate: who files it, which documents, what deadline', ''], ['Dutch side: registering the birth and the first passport via the embassy', ''], ['Does the baby need a visa or stay permit, and by when?', ''], ['Insurance: how and when to add the baby', ''], ['Put every deadline in your calendar', '']] }],
    note: 'Agree on the exact spelling of the name before any form gets filled in.',
  },
  '2026-12-24': {
    kind: 'read', title: 'The first two weeks', mins: 25,
    blocks: [{ name: 'Read', items: [['Feeding: how often, hunger cues, enough wet diapers', ''], ['How you help with feeds: water, pillow, burping, the night changes', ''], ['Normal but scary: weight dip, cluster feeding, odd poop colours', ''], ['Call the doctor: fever, not feeding, very hard to wake, yellow skin', '']] }],
    note: 'Ask the paediatrician for their own "call us when" list. Theirs wins over any book.',
  },
  '2026-12-26': {
    kind: 'buy', title: 'Stock the house', mins: 120,
    blocks: [{ name: 'So nobody has to shop in week one', items: [['Two weeks of basics: toilet paper, detergent, snacks, drinking water', ''], ['For her recovery: maternity pads, comfy clothes, whatever the OB recommends', ''], ['Cook and freeze 6 meals, or line up a delivery plan', ''], ['Spare chargers by the bed and by the feeding chair', '']] }],
  },
  '2026-12-27': {
    kind: 'practice', title: 'Pack the hospital bags', mins: 45,
    blocks: [
      { name: 'Her bag', items: [['ID, insurance card, hospital booking, pregnancy records', ''], ['Clothes, toiletries, charger with a long cable', '']] },
      { name: 'Baby bag', items: [['2 outfits, hat, swaddle, diapers', ''], ['Car seat ready to go', '']] },
      { name: 'Your bag', items: [['Change of clothes, snacks, power bank, cash', ''], ['All bags by the front door', '']] },
    ],
    note: 'Ask the hospital what they provide, so you do not pack it twice.',
  },
  '2026-12-29': {
    kind: 'talk', title: 'Your heads', mins: 25,
    blocks: [{ name: 'Together', items: [['Read up: baby blues versus postnatal depression, in mums and in dads', '10 min'], ['Tell each other your own early warning signs under stress', ''], ['Agree on a no-questions "I need 20 minutes" signal', ''], ['Each pick one friend you can text at 3am', '']] }],
    note: 'Baby blues in the first two weeks is common. Low mood that lasts longer, in either of you: tell the doctor.',
  },
  '2027-01-02': {
    kind: 'practice', title: 'The class', mins: 180,
    blocks: [{ name: 'Together', items: [['Do the antenatal / newborn-care class', ''], ['Do, or schedule, infant CPR and choking', ''], ['Ask everything on your question list', '']] }],
  },
  '2027-01-03': {
    kind: 'practice', title: 'Dress rehearsal drive', mins: 60,
    blocks: [{ name: 'With the bags', items: [['Drive to the hospital, time it', ''], ['Find the night entrance and the maternity desk', ''], ['Plan B: Grab or Bluebird, and who you call', ''], ['Ask the OB at the next check-up: when exactly do we come in?', '']] }],
  },
  '2027-01-05': {
    kind: 'arrange', title: 'Help, visitors, money', mins: 30,
    blocks: [{ name: 'Decide together', items: [['Who helps in week one: family, a helper, a nanny? Ask them now', ''], ['Visitor rules you both agree on. You are the bouncer', ''], ['Hospital bill: deposit paid, card limit high enough?', ''], ['Rough monthly baby budget', '']] }],
  },
  '2027-01-07': {
    kind: 'arrange', title: 'Work hand-over', mins: 25,
    blocks: [{ name: 'Before you vanish', items: [['Hand-over doc: what runs, who decides while you are out', ''], ['Draft your out-of-office', ''], ['Tell the team you may disappear on short notice from now', ''], ['Phone on loud at night from today', '']] }],
  },
  '2027-01-09': {
    kind: 'practice', title: 'Bath, bottle, burp', mins: 25,
    why: '37 weeks today. From here the baby can come any time, so everything essential should be done.',
    blocks: [{ name: 'Hands on', items: [['Watch a newborn bath video, set the tub up once', ''], ['Make one bottle start to finish, even if the plan is breast', ''], ['Practise 2 burping holds on the teddy', '']] }],
  },
  '2027-01-12': {
    kind: 'practice', title: 'Labour support practice', mins: 25,
    blocks: [{ name: 'With her', items: [['Install a contraction timer, time 5 pretend ones', ''], ['Practise 3 comfort moves: lower-back pressure, slow breathing together, hip squeeze', ''], ['Say the plan out loud: when to call, when to leave, what to grab', '']] }],
    note: 'Your job in labour: stay calm, keep her drinking, speak up for what she wants.',
  },
  '2027-01-13': {
    kind: 'night', title: 'Night drill 2: on a work night', mins: 80,
    why: 'A work night on purpose. Tomorrow you find out what a normal day feels like on broken sleep.',
    blocks: [
      { name: 'Before bed', items: [['Agree the shifts with her: who takes which hours once the baby is here', ''], ['Alarms every 2 hours, four times', ''], ['Keep tomorrow morning free of important meetings', '']] },
      { name: 'Every alarm · 20 min out of bed', items: [['Up, diaper change, hold and burp, log it', ''], ['One alarm: make a bottle, or bring her water and a snack', ''], ["One alarm: soothe for the full 20 min with the 5 S's", '']] },
    ],
    note: 'Run it the way you would run a real night.',
  },
  '2027-01-14': {
    kind: 'talk', title: 'Debrief and the night plan', mins: 20,
    blocks: [{ name: 'After the drill', items: [['How was work on that sleep? What got you through?', ''], ['Easier than drill 1? What changed?', ''], ['Write the night-shift plan on one page', ''], ['Early night', '']] }],
  },
  '2027-01-16': {
    kind: 'talk', title: 'Last date as two', mins: 180,
    blocks: [{ name: 'Out', items: [['Go somewhere nice, just the two of you', ''], ['No baby logistics at the table', ''], ['Take a photo of the bump', '']] }],
  },
  '2027-01-17': {
    kind: 'arrange', title: 'Final check', mins: 30,
    blocks: [{ name: 'Everything green?', items: [['Gear sheet: every must-have bought', ''], ['Bags by the door, car seat fitted, tracker on both phones', ''], ['Phone list saved, paperwork folder ready', ''], ['Fuel in the car, cash in the bag', '']] }],
  },
  '2027-01-19': {
    kind: 'talk', title: 'Letter to your kid', mins: 20,
    blocks: [{ name: 'Alone', items: [['Write one page: who you want to be as a dad', ''], ['Put it where you will find it in a year', '']] }],
  },
  '2027-01-21': {
    kind: 'arrange', title: 'Announcement plan', mins: 15,
    blocks: [{ name: 'Together', items: [['Who hears first, who tells the rest', ''], ['Photo rules: what goes online, what stays private', ''], ['Draft the message, leave name, weight and time blank', '']] }],
  },
  '2027-01-26': {
    kind: 'read', title: 'Cheat sheet re-read', mins: 15,
    blocks: [{ name: 'Quick', items: [['Signs of labour and the call-the-hospital list', ''], ['Route, plan B, where the bags are', ''], ['Charge the power bank', '']] }],
  },
  [DUE]: { kind: 'free', title: 'Due date', note: 'Few babies arrive on the day itself. You are ready. Rest, stay close, phone on loud.' },
};

const FREE = { kind: 'free', title: 'Free day', note: 'Nothing planned. Rest, move, or catch up on something still open.' };

const PLAN = [];
for (let d = new Date(START); d <= END; d = addDays(d, 1)) {
  const k = iso(d);
  const place = k === TRAVEL ? 'In transit' : k < ARRIVE ? 'Netherlands' : 'Jakarta';
  PLAN.push({ date: k, d: new Date(d), place, mins: 0, blocks: [], ...(TASKS[k] || FREE) });
}
