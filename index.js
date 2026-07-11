/* DON'T LOOK TOO CLOSELY UNLESS YOU WANT THE GAME TO BE SPOILED FOR FUTURE DAYS! */

const words = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','similar','pedal','diaper','rattle','scatter','siren','referee','wizard','rocket','erase','frog','build','problem','crash','take','clown','question','crease','angry','ugly','remove','waddle','mumble','fairy','asylum','need','long','none','napkin','waffle','danger','tummy','midway','begin','hammock','want','emergency','taste','treasure','ding','cocoon','dragon','excellent','anyone','sock','slug','discredit','double','puppy','around','science','black','bully','valley','fang','cost','underwear','vicious','salt','brush','garage','eagle','walk','divergent','lick','steady','scary','decide','goggles','kangaroo','crumble','hamburger','safety','vegetable','touch','hiss','blue','boat','grease','recover','diminish','constitution','foot','baseball','juggle','soon','size','bleach','play','aesthetic','curtain','measure','mile','church','life','headache','flight','chapter','electricity','notable','title','soap','counteract','circus','amazing','fantastic','lizard','comb','knight','heard','garden','along','belly','lift','model','ankle','slice','dentist','shave','elephant','spring','safe','universal','stay','chalk','hint','pavement','buddy','farm','daisy','obsolete','mind','glitter','share','stomach','baby','side','wham','shrug','reptile','beep','lung','rabbit','spinach','cabinet','park','hippo','cement','corn','bush','five','understand','student','whatever','thick','ball','sink','lion','easy','extra','light','grass','start','statue','king','road','window','sand','wedding','blank','quiet','target','stadium','nope','cake','feel','police','drawer','cheap','search','phone','swallow','sleep','chair','bell','squiggle','inundate','maternity','zone','toddler','extreme','cabbage','ridiculous','genetic','house','reef','hypothetical','jealous','tall','wrong','anchor','coat','wheel','found','spicy','rumble','special','hold','mail','bribe','hypocrite','keep','quesadilla','shade','forest','complement','butter','record','near','pollen','bring','pastry','picture','chocolate','firm','stick','starve','cuddle','like','great','restaurant','feather','hoop','hunt','parade','ferocious','hard','boot','stark','trumpet','snow','spark','alphabet','noodle','fight','toes','compromise','funnel','bath','airplane','satellite','chew','broccoli','lobster','animal','burp','illegal','action','bang','recycle','succulent','trust','laser','dispatch','dead','move','battery','date','kiss','break','month','century','unicycle','away','crunch','blind','growl','canoe','clothes','provocative','dark','turkey','city','trouble','cliff','random','lock','fault','burrito','guess','girl','return','choke','bacon','teaspoon','capital','fraternity','shelf','fifth','minute','viper','gorgeous','yourself','objective','cold','doodle','kite','joke','bite','learn','water','outside','tiny','synchronous','toast','loud','town','gate','nothing','fart','stolen','author','cheese','middle','midnight','tedious','dollar','lost','block','talk','convoluted','bruise','sneak','easel','lunch','meat','camera','cherry','time','traffic','burnt','fluctuate','frame','relax','bottle','cheer','wipe','unfair','shin','parachute','support','alert','crater','sprain','allow','pizza','roll','knee','bear','demonstrate','attention','tractor','street','space','creak','wrist','doll','dish','surreal','regret','sandal','tissue','flamingo','pull','yellow','insect','taxi','online','fluff','carpet','independent','crisp','whole','dance','breathe','wing','next','metal','battlement','spontaneous','station','catapult','ready','focus','buzz','against','macaroni','room','attic','tropical','smart','laminate','ride','root','tantrum','fifty','gone','niece','abstain','emulate','shape','pretty','onion','wire','original','controversial','useful','queen','ribbon','pressure','fizzy','hospital','scrap','kick','other','allergy','brunch','love','twig','throw','bank','spend','plane','poodle','superfluous','stuck','pencil','narrow','harassment','warn','spider','region','basket','plug','mountain','shuffle','truck','swoop','droop','enumerate','video','useless','team','ambiguous','cartoon','snack','roof','balance','mistake','suspicious','anticipate','reason','jumbo','fraudulent','pragmatic','maybe','cucumber','cupboard','contemplate','tower','scale','trombone','drive','gunk','costume','right','tight','zero','superb','malleable','fossil','thin','worst','teacher','succeed','stuff','circle','morning','mosquito','computer','blush','apology','echo','matter','doctor','hero','tutu','elbow','escape','come','pancake','energy','saddle','chore','pretentious','crowd','puddle','wiggle','busy','combine','more','stairs','back','wild','speak','nine','hour','shovel','trophy','pass','cemetery','nuclear','undermine','serious','quarter','person','address','tweet','though','enter','whine','plate','pudding','longevity','ceiling','swing','alive','nature','arch','group','survival','nice','patch','click','flip','quell','band','osmosis','blog','lemon','reconciliation','glue','laugh','moon','envelope','heavy','print','thigh','organ','beach','mundane','exercise','sound','remedial','icky','dust','nation','grade','hollow','foster','igloo','check','each','exhilarating','slurp','putty','flower','since','picnic','proxy','castle','resilient','copy','across','fries','unveil','asleep','chase','river','message','fancy','slam','booth','kinetic','super','awake','culmination','read','planet','bake','cinnamon','hide','below','class','rose','erratic','choir','kitchen','dopamine','ocean','hotel','leaf','clock','renounce','spoon','reply','hundred','friends','lake','sick','help','dress','snooze','chatter','opulent','remember','orange','setup','weigh','delirious','match','always','snip','continue','hall','devil','test','lamp','bling','poop','yeah','knot','refute','couple','sparkle','ooze','palace','toolbox','rubber','stiff','ranch','luck','anomaly','protect','celery','country','rope','forget','drink','rough','sugar','imagination','thought','rule','cellphone','roar','goldfish','cheat','spike','under','book','canny','uncle','cash','pelican','sandwich','tell','chunk','pasta','diligent','string','juice','cousin','floss','polite','koala','expect','crayon','prohibit','procrastinate','broke','mouth','sorry','olive','step','blur','dozen','young','beauty','straw','regurgitate','land','buckle','cause','line','shock','setting','fork','mould','dude','catch','donut','adversity','lavender','cramp','explain','made','pipe','spin','ambulance','blood','count','guitar','trip','theoretical','smear','worthwhile','teach','squeak','dream','smile','path','petal','save','perish','squeeze','negligence','partner','cheek','saucer','project','relief','fence','withstand','underscore','cloud','snail','vein','join','secret','invade','snot','materialistic','spread','lower','shake','cotton','lying','headphones','story','aunt','bonk','peculiar','loathe','medal','adorable','crocodile','raise','hurry','corner','journey','face','grape','jungle','tonight','scarf','skin','scream','inconsequential','caterpillar','magic','four','crouch','nail','splash','least','work','website','lime','excel','gurgle','raspberry','tattle','mine','scooter','clump','howl','tennis','altogether','front','call','should','quirk','drum','bread','jelly','hungry','gift','child','dolphin','football','fast','laundry','warm','wrench','adventure','fill','turn','alligator','behind','inside','shampoo','frown','zoom','diversify','steep','firefighter','already','launch','subsequent','doing','close','normal','vitamin','argue','news','proof','sled','ubiquitous','tire','paper','earth','half','squirrel','recess','taco','equal','green','purse','temporary','redact','release','part','door','exactly','syndicate','seed','predecessor','guacamole','restoration','coast','legend','tomato','sunrise','milk','neat','pack','tail','popcorn','tent','true','store','iron','caught','convergence','stand','gold','done','hiccup','rectangle','teeth','unhappy','rest','switch','coordinate','airport','sheet','sour','sufficient','comfortable','syrup','retry','umbrella','lollipop','engine','backward','nifty','public','rice','popular','somebody','last','whisper','unusual','replace','jubilation','speed','ticket','tangle','wheat','drool','toilet','berry','turtle','cavity','game','thanks','cricket','above','stack','stripe','attitude','guts','arrow','weird','button','compassion','wrestle','gentle','music','sword','queasy','word','snake','giant','surface','borrow','squalor','ketchup','fortitude','pool','afraid','muscle','attach','tuba','jump','pounce','shirt','fidget','apple','captain','everyone','giggle','split','prudent','cook','correct','head','people','hear','world','island','early','gravy','blast','candle','annoy','ring','keyboard','push','receipt','asymmetrical','buffalo','fierce','place','flourish','bravo','awesome','deal','wish','smell','later','restructure','almost','list','rich','sunset','wall','letter','surprise','sleeves','care','report','adequate','laptop','board','whose','hate','mess','hostile','beetle','silly','said','after','ignore','truce','subway','waggle','eject','tofu','flag','flute','strong','label','cage','pouch','cool','panic','deep','cave','soup','heart','twist','important','reverence','train','junk','upstairs','rainbow','excuse','library','fresh','furry','active','first','trade','home','visit','benevolent','disdain','party','mushroom','shallow','lazy','present','empathy','warranty','curve','agitate','smash','secret','plausible','subtract','anger','dimple','pile','karate','rebuttal','balloon','monster','shrink','shred','hazardous','pearl','ship','mushy','shadow','scoot','gutter','sweat','mouse','gremlin','obstacle','flour','dodge','flow','winter','slip','fair','facilitate','exit','past','sharp','piano','invent','what','watch','valentine','note','nervous','whale','turd','imagine','lunatic','internet','night','knife','agree','large','abysmal','momentous','quick','pants','bobble','finger','spill','bait','local','collaborate','sell','brake','guest','challenge','knock','goose','better','card','contest','bucket','something','naked','jewel','risky','rain','burn','clean','inch','keen','fixed','braid','most','wary','desk','rock','funny','magnet','potato','force','gargoyle','noise','weekend','glove','lesson','nurse','bicycle','before','slow','hang','globe','amicable','groove','storm','angle','boost','core','daughter','bound','yuck','wood','reconsider','crawl','trash','crush','club','sniff','scratch','turbo','drizzle','fungus','melon','helmet','because','attack','flew','private','nose','honest','skeleton','robot','barrel','heat','radio','channel','handle','school','elevator','hobby','raffle','together','wind','dumb','quality','biscuit','paid','straight','bamboo','calamity','coarse','conditional','rise','area','same','officer','establish','worm','garment','hope','tortilla','empty','chemical','every','pretend','condescending','tape','zebra','stir','flash','crazy','lobbyist','delegate','hose','coconut','diamond','parched','volcano','discover','mattress','octagon','monkey','season','inevitable','respect','dough','compound','yell','community','meet','shoulder','oatmeal','business','conventional','cushion','year','cheddar','wasp','sack','knob','weather','boom','marshmallow','eight','page','glow','wand','brawl','table','fruit','drip','song','improve','alone','square','avocado','expert','skull','nominee','ephemeral','judge','marble','indifferent','fear','horrible','recently','duck','ruler','clap','apron','army','comet','helicopter','frugal','fireworks','high','think','bathroom','jiggle','nutrition','octopus','sunny','regular','round','oven','loop','shark','tackle','spot','lava','blanket','brick','remote','yogurt','deficient','cancel','teapot','widget','worry','necessity','gorge','gigantic','machine','wide','another','food','stupid','thing','curious','fraught','wrinkle','pyramid','course','hair','sprint','lobby','look','dizzy','neighbor','skateboard','plan','steam','promise','muddy','swap','sausage','jingle','number','quack','quilt','nest','mall','bagel','pick','calendar','pair','success','quit','affluent','chomp','fuzzy','cereal','idea','snorkel','mean','tomorrow','health','condemn','owner','voice','short','real','unicorn','flex','sure','loose','bunch','renovation','install','universe','chimney','tactful','race','rush','pole','spank','shout','today','chug','hand','gulp','prosperity','sister','leader','panda','sparrow','accident','pocket','shield','accept','email','recipe','until','best','arid','mask','carry','delicious','supposed','draw','full','feet','instant','happy','control','instead','grump','scribble','reclaim','scandal','cable','blob','connect','sunlight','meteor','spit','defend','drag','pillow','princess','broom','tool','reinforce','bench','rustic','peace','burger','summer','okay','wagon','melodramatic','sneeze','some','alien','confide','homework','shiny','hurt','yolk','event','horn','intrepid','late','please','dinosaur','noon','disappear','bone','clack','lucky','impartial','here','conformist','chain','shut','winner','stale','triangle','bass','never','body','know','level','future','pandemic','truth','snug','prosecute','photo','sing','puke','microphone','yoga','screen','squid','drop','vindicate','period','bright','mother','sweet','twice','wonderful','chicken','point','cactus','field','send','soft','wash','tablet','blink','wear','language','practice','without','neck','undo','reach','swamp','tooth','prison','penguin','make','congregate','president','celebrate','magazine','swim','scissors','verb','fray','upward','open','crud','strawberry','superficial','jackpot','left','hypothesis','power','hill','crab','precedent','bird','tank','plush','nonchalant','different','perfect','multiply','upset','miss','gargle','jacket','gross','between','squint','seven','provincial','fountain','movie','giraffe','branch','find','village','dilemma','belt','pantry','nobody','velcro','hole','create','edge','discovery','little','hike','goat','good','fish','reclusive','coach','glass','either','bomb','three','yummy','bridge','dinner','restrained','comfy','salad','clout','subtle','polish','hello','woman','candid','typical','waist','breeze','capture','scrub','condone','anyway','oldest','weed','snuggle','pinch','abdicate','family','couch','angel','show','rescue','hidden','garlic','change','mutter','basic','myself','plant','whistle','write','bean','ahead','less','paint','cookie','impossible','probably','again','stop','desert','vaccine','horse','info','bubble','gobble','justify','bias','puzzle','troll','curb','live','bunny','lament','study','white','tree','parent','fire','hawk','beard','wait','skip','accessory','office','breakfast','sweep','material','mark','vampire','gravity','free','submissive','squish','entrenched','sewer','garbage','floor','over','belong','human','package','trick','grumble','kazoo','alley','mirror','beautiful','grow','incite','cough','skinny','ground','hook','wave','fridge','chance','finish','cone','scroll','terrible','spine','gallon','dignity','devise','banana','money','daddy','pilot','week','bottom','happen','welcome','orphan','famous','enough','serve','skunk','rubbish','brother','menu','bike','closet','bingo','visitor','climb','boring','unlock','star','answer','avid','ladder','innovate','stare','father','deer','birthday','sheep','moss','chip','critter','tiger','grab','shower','replay','stream','flick','name','score','malicious','poke','honk','give','pumpkin','validate','there','listen','mission','sign','itself','freeze','tornado','honey','wallet','diary','fall','skirt','second','bulb','huge','spaghetti','carrot','scoop','tongue','jersey','friend','thumb','yawn','grumpy','someone','children'
];

// Additional daily answers appended to extend gameplay from 2028-05-11
// through ~2038-05-10 (frequency-ordered common English words, all valid guesses).
words.push(
    'smith', 'seeker', 'duties', 'implied', 'attempt', 'rally', 'breath', 'filename', 'gratis', 'lifetime',
    'licence', 'clip', 'then', 'sources', 'submitted', 'players', 'glossary', 'example', 'expanding',
    'provide', 'computers', 'evaluate', 'codes', 'receptor', 'triple', 'peeing', 'banks', 'required', 'ways',
    'follow', 'shore', 'matching', 'royal', 'perfectly', 'based', 'samples', 'hopes', 'syndrome', 'among',
    'becoming', 'orleans', 'holidays', 'eligible', 'electric', 'load', 'majority', 'licensed', 'variable',
    'familiar', 'dirty', 'monitor', 'hosted', 'feeds', 'tags', 'shopper', 'county', 'commerce', 'holes',
    'couples', 'judgment', 'prompt', 'comedy', 'standard', 'telling', 'appointed', 'lady', 'member',
    'lesbian', 'indexed', 'highest', 'brands', 'despite', 'consent', 'measuring', 'entered', 'stated',
    'optimal', 'choose', 'chile', 'dependent', 'imposed', 'temp', 'magnetic', 'collector', 'spoke',
    'payments', 'networks', 'juvenile', 'small', 'vary', 'essay', 'pointer', 'supported', 'connector',
    'parameter', 'charter', 'overall', 'alliance', 'longer', 'civic', 'secure', 'starting', 'coastal',
    'earlier', 'horror', 'actor', 'received', 'site', 'industry', 'haven', 'strip', 'vegas', 'cams',
    'receive', 'creation', 'google', 'chinese', 'payment', 'lenses', 'printable', 'deliver', 'joint',
    'producer', 'hiking', 'directive', 'proposed', 'hood', 'suite', 'savings', 'climbing', 'makes',
    'efficient', 'employee', 'everyday', 'modules', 'publisher', 'position', 'approval', 'strongly', 'demo',
    'managed', 'expand', 'james', 'cleaning', 'collected', 'onto', 'hairy', 'possible', 'murphy', 'derived',
    'precious', 'strength', 'buying', 'artists', 'movements', 'counties', 'sitting', 'crew', 'aims',
    'trading', 'quotes', 'reality', 'pattern', 'theme', 'modeling', 'medium', 'math', 'specs', 'buffer',
    'grades', 'jean', 'prayer', 'mart', 'colored', 'applies', 'qualify', 'investing', 'favor', 'carrying',
    'panama', 'overseas', 'deputy', 'detailed', 'clearance', 'dealers', 'killing', 'toll', 'relation',
    'florists', 'tones', 'debug', 'clay', 'talking', 'midi', 'starts', 'pays', 'runs', 'provides',
    'parallel', 'diseases', 'mounting', 'version', 'naturally', 'exterior', 'contained', 'provision',
    'authority', 'east', 'swimming', 'arrived', 'trademark', 'vehicles', 'teachers', 'trim', 'feature',
    'produces', 'projects', 'financial', 'overnight', 'united', 'recent', 'ringtones', 'spent', 'former',
    'reserve', 'solo', 'authentic', 'builder', 'indicated', 'roulette', 'diet', 'suitable', 'freedom',
    'user', 'visa', 'hosts', 'identify', 'requests', 'plays', 'denied', 'trend', 'grove', 'induced',
    'negative', 'leading', 'them', 'targets', 'inches', 'purpose', 'channels', 'assist', 'providers',
    'peter', 'sailing', 'honor', 'debate', 'entirely', 'advice', 'demand', 'default', 'previous', 'specific',
    'consider', 'once', 'modern', 'expected', 'nursing', 'peak', 'court', 'infant', 'vast', 'film', 'blend',
    'forced', 'cleaner', 'funded', 'sexual', 'shipped', 'animated', 'sigma', 'arranged', 'driven', 'login',
    'scanner', 'caused', 'rugby', 'operators', 'battle', 'allocated', 'nights', 'strange', 'reference',
    'omega', 'tips', 'years', 'custom', 'destroy', 'volumes', 'seems', 'married', 'visits', 'optical',
    'composite', 'advance', 'formed', 'cross', 'ideas', 'virtually', 'colleges', 'pump', 'asked', 'attorney',
    'tutorials', 'results', 'province', 'duty', 'stem', 'economic', 'upcoming', 'driving', 'evil', 'worker',
    'tales', 'modem', 'marriage', 'superior', 'evolution', 'programs', 'coding', 'swiss', 'function', 'ties',
    'known', 'pleasant', 'attempts', 'heading', 'promotion', 'committee', 'stylish', 'bedrooms', 'dollars',
    'turned', 'offset', 'turns', 'timely', 'stayed', 'digital', 'prevent', 'weak', 'tons', 'boxes',
    'sending', 'null', 'upon', 'bedroom', 'college', 'republic', 'sale', 'august', 'searches', 'frames',
    'appearing', 'fail', 'removing', 'license', 'reaction', 'staff', 'entities', 'graduate', 'exceed',
    'threads', 'browser', 'tone', 'council', 'spray', 'animals', 'translate', 'extract', 'brooks',
    'catalogue', 'larger', 'distance', 'printer', 'adjacent', 'drawing', 'newspaper', 'orders', 'exposed',
    'words', 'tuition', 'elegant', 'felt', 'single', 'nova', 'enhanced', 'simply', 'putting', 'harbor',
    'patterns', 'worth', 'carrier', 'quarterly', 'silk', 'transport', 'during', 'alumni', 'wars', 'entering',
    'ownership', 'contests', 'teens', 'gloves', 'bodies', 'smoke', 'feeding', 'decor', 'jesus', 'proven',
    'boys', 'existence', 'aware', 'drug', 'eating', 'discounts', 'emission', 'coaching', 'observer',
    'teaching', 'mental', 'frequent', 'scores', 'filled', 'journals', 'type', 'pills', 'monitors', 'loaded',
    'mason', 'gets', 'training', 'analysis', 'polls', 'usual', 'terry', 'reception', 'obviously', 'restore',
    'critics', 'auctions', 'concern', 'scenario', 'wright', 'loves', 'involving', 'affect', 'coupon',
    'criteria', 'disabled', 'heads', 'finder', 'award', 'worked', 'reform', 'moral', 'totals', 'abuse',
    'floral', 'temple', 'yield', 'meals', 'candy', 'seasons', 'awarded', 'proper', 'jeff', 'insert',
    'average', 'frank', 'deadline', 'portions', 'spec', 'files', 'amenities', 'firms', 'treat', 'moments',
    'rocks', 'footwear', 'decided', 'amount', 'podcast', 'ringtone', 'gadgets', 'enemy', 'platform',
    'approach', 'plants', 'indicate', 'platforms', 'phase', 'notebook', 'expansion', 'devel', 'term',
    'dreams', 'missing', 'draft', 'colorado', 'variables', 'editor', 'streets', 'displays', 'fact',
    'interface', 'achieve', 'delivers', 'division', 'forgot', 'permits', 'become', 'judges', 'holiday',
    'adopt', 'pollution', 'morgan', 'thesis', 'common', 'beer', 'owned', 'profit', 'dean', 'quickly',
    'recipes', 'choosing', 'told', 'rear', 'closed', 'birds', 'fees', 'possibly', 'soul', 'meeting',
    'ability', 'credit', 'loan', 'portfolio', 'host', 'trainer', 'heights', 'atom', 'watched', 'southwest',
    'changing', 'taxes', 'pricing', 'seller', 'digest', 'centre', 'paying', 'older', 'concept', 'martin',
    'diabetes', 'could', 'customers', 'oliver', 'poverty', 'election', 'doubt', 'analog', 'sport', 'injury',
    'thank', 'viewer', 'doors', 'berlin', 'amounts', 'confirm', 'generally', 'boards', 'article', 'memorial',
    'grant', 'domain', 'tune', 'classics', 'spanking', 'cycle', 'rate', 'indicator', 'influence', 'lens',
    'desktops', 'minimum', 'visited', 'content', 'whenever', 'subscribe', 'cloth', 'sequence', 'circuit',
    'collect', 'observed', 'emotional', 'adobe', 'toward', 'estate', 'soil', 'plot', 'opposed', 'blocks',
    'spatial', 'diff', 'situation', 'faced', 'morocco', 'sizes', 'shared', 'steven', 'shorts', 'encourage',
    'amber', 'finally', 'voltage', 'entitled', 'turning', 'territory', 'register', 'tears', 'waiting',
    'remain', 'outlet', 'junior', 'even', 'signs', 'object', 'seek', 'antiques', 'literacy', 'follows',
    'medical', 'review', 'equation', 'scheme', 'gang', 'toner', 'reduce', 'chart', 'holders', 'twin',
    'addressed', 'outcomes', 'virtual', 'lack', 'dining', 'promoting', 'coin', 'contrast', 'founded',
    'crossing', 'keyword', 'questions', 'sciences', 'minimal', 'archived', 'cafe', 'protocol', 'activity',
    'device', 'symbol', 'semi', 'carried', 'classes', 'fine', 'component', 'roses', 'sites', 'measured',
    'interval', 'existing', 'pantyhose', 'trying', 'stored', 'anytime', 'examine', 'blogging', 'holland',
    'appendix', 'sampling', 'passage', 'bedding', 'conflict', 'finds', 'legacy', 'lyrics', 'wins', 'spoken',
    'query', 'submit', 'secured', 'greece', 'exposure', 'added', 'therapy', 'metro', 'practical', 'drugs',
    'cars', 'galleries', 'somewhere', 'assault', 'natural', 'saying', 'marshall', 'fourth', 'gray', 'louis',
    'columns', 'refine', 'chad', 'service', 'stable', 'closer', 'retailer', 'rent', 'macro', 'granted',
    'adds', 'effects', 'linear', 'relating', 'latest', 'registry', 'academic', 'retention', 'gulf', 'pickup',
    'third', 'outlook', 'damages', 'fitness', 'hats', 'opinion', 'seats', 'waste', 'valuable', 'extend',
    'hong', 'cache', 'dental', 'figures', 'basics', 'functions', 'autos', 'situated', 'rural', 'corporate',
    'both', 'portable', 'antenna', 'permanent', 'ending', 'percent', 'funeral', 'likely', 'inform',
    'addiction', 'trucks', 'hundreds', 'pictures', 'aging', 'genetics', 'pink', 'appear', 'designs', 'chief',
    'williams', 'caps', 'lists', 'delayed', 'console', 'streaming', 'becomes', 'increases', 'barry',
    'clearly', 'herald', 'gene', 'purchased', 'thru', 'videos', 'items', 'apart', 'prize', 'lowest',
    'covers', 'appeals', 'keeps', 'copyright', 'wheels', 'labor', 'diesel', 'pound', 'offering', 'notify',
    'solely', 'remains', 'defence', 'annual', 'paperback', 'numerous', 'witness', 'exciting', 'doctors',
    'tube', 'taking', 'matrix', 'sense', 'sensor', 'maximum', 'mobility', 'screening', 'models', 'analyzes',
    'biology', 'learning', 'travel', 'asking', 'canada', 'pharmacy', 'ever', 'crisis', 'warehouse', 'stroke',
    'wolf', 'signals', 'belief', 'shall', 'ecology', 'stone', 'transit', 'knowledge', 'lets', 'identical',
    'vintage', 'inclusion', 'which', 'corps', 'merchants', 'fields', 'shaved', 'safari', 'various', 'clips',
    'updated', 'fuel', 'jeans', 'advertise', 'johnson', 'proteins', 'sections', 'favorites', 'vocal',
    'cover', 'slave', 'virginia', 'messages', 'hills', 'fellow', 'blogger', 'betting', 'facts', 'input',
    'lord', 'benjamin', 'cole', 'financing', 'explorer', 'began', 'inner', 'florist', 'stories', 'moreover',
    'describe', 'ordinary', 'dutch', 'societies', 'coupons', 'customer', 'minutes', 'bonus', 'thumbs',
    'officers', 'detection', 'testimony', 'meters', 'targeted', 'products', 'killer', 'liked', 'venues',
    'while', 'dear', 'luke', 'loans', 'formal', 'mystery', 'behalf', 'hosting', 'interests', 'stars',
    'declared', 'singer', 'valve', 'technical', 'carefully', 'ethnic', 'billion', 'victor', 'entry',
    'reader', 'specified', 'main', 'featured', 'freeware', 'fantasy', 'press', 'guinea', 'paintings',
    'boundary', 'german', 'destroyed', 'switching', 'forces', 'producing', 'realty', 'refinance', 'allowed',
    'context', 'recovery', 'technique', 'whilst', 'cape', 'documents', 'interview', 'linked', 'computing',
    'jordan', 'vendors', 'breaking', 'workshop', 'medicine', 'strategic', 'links', 'antivirus', 'excess',
    'apache', 'chef', 'hurricane', 'legal', 'suddenly', 'arena', 'cluster', 'surveys', 'associate', 'volume',
    'moves', 'murray', 'offensive', 'zones', 'pill', 'passion', 'ford', 'attended', 'severe', 'errors',
    'seeds', 'cities', 'contacts', 'watches', 'given', 'mega', 'theaters', 'orchestra', 'adult', 'respond',
    'dates', 'editions', 'admin', 'flights', 'rank', 'redeem', 'cure', 'crown', 'amateur', 'conducted',
    'governing', 'self', 'nancy', 'texts', 'labels', 'flags', 'cedar', 'passenger', 'those', 'evening',
    'applicant', 'grand', 'comply', 'status', 'scanners', 'session', 'indicates', 'whether', 'cheats',
    'reviewed', 'pages', 'toolbar', 'specials', 'burden', 'memory', 'tricks', 'guilty', 'stage', 'quiz',
    'versions', 'managers', 'affiliate', 'tony', 'repeat', 'torture', 'casino', 'inter', 'focuses',
    'licensing', 'needs', 'mass', 'occur', 'silent', 'threat', 'debt', 'says', 'upgrade', 'implement',
    'image', 'authors', 'armed', 'cyber', 'edition', 'adverse', 'migration', 'starter', 'hire', 'postal',
    'included', 'damage', 'source', 'henry', 'cooling', 'mining', 'warning', 'tired', 'experts', 'variation',
    'mill', 'guns', 'scene', 'formation', 'wife', 'rings', 'ladies', 'wells', 'classical', 'studios',
    'wallpaper', 'infection', 'acres', 'link', 'bible', 'will', 'connected', 'their', 'expanded', 'tracker',
    'stamps', 'advised', 'wooden', 'higher', 'sees', 'trained', 'titles', 'walking', 'manner', 'teams',
    'campus', 'loved', 'guys', 'exists', 'minor', 'achieved', 'sponsor', 'array', 'forum', 'herein',
    'lecture', 'faster', 'provider', 'building', 'available', 'clerk', 'cloudy', 'schemes', 'entrance',
    'emerging', 'bargain', 'centres', 'ebony', 'climate', 'stands', 'entries', 'atomic', 'vote', 'thread',
    'thereof', 'resource', 'plain', 'queries', 'assigned', 'pleased', 'whom', 'distinct', 'easily', 'waves',
    'pics', 'span', 'running', 'jewelry', 'wanna', 'norman', 'nelson', 'statutory', 'thou', 'mobile',
    'vista', 'holdings', 'would', 'anything', 'municipal', 'flying', 'gauge', 'eric', 'concert', 'phones',
    'automated', 'producers', 'civil', 'fisher', 'update', 'bearing', 'realize', 'tours', 'fits', 'junction',
    'satisfied', 'generic', 'recall', 'weapons', 'from', 'outcome', 'committed', 'mary', 'forms', 'icon',
    'beta', 'nations', 'criticism', 'reduction', 'bowl', 'actual', 'principal', 'sucking', 'rogers', 'rick',
    'patches', 'renewal', 'exist', 'prefer', 'tour', 'master', 'tests', 'genre', 'strike', 'findings',
    'profile', 'binding', 'nodes', 'remaining', 'changes', 'resume', 'port', 'behavior', 'fold', 'refers',
    'brand', 'looks', 'hotels', 'diving', 'extensive', 'following', 'database', 'alexander', 'inventory',
    'dropped', 'selected', 'herself', 'fiber', 'about', 'task', 'might', 'languages', 'agreement', 'widely',
    'opposite', 'nick', 'families', 'installed', 'burns', 'dancing', 'babe', 'broadway', 'printing',
    'sectors', 'policies', 'trail', 'tagged', 'chemicals', 'mode', 'bonds', 'happened', 'named', 'states',
    'logic', 'lawn', 'struggle', 'dynamic', 'ranging', 'degree', 'worldwide', 'wanted', 'attorneys', 'shoes',
    'counsel', 'uses', 'formerly', 'templates', 'sealed', 'cycling', 'depot', 'crystal', 'posters',
    'casinos', 'enjoyed', 'enable', 'detected', 'gaming', 'controls', 'suggests', 'view', 'issued',
    'largest', 'citizen', 'although', 'reed', 'weekly', 'intro', 'aircraft', 'refund', 'stopped', 'drinking',
    'reducing', 'highway', 'massive', 'module', 'potential', 'unions', 'chains', 'plus', 'biography',
    'organic', 'keeping', 'offered', 'premium', 'dell', 'resources', 'amendment', 'total', 'ships',
    'volunteer', 'speaking', 'macintosh', 'fraud', 'teenage', 'alternate', 'wisdom', 'chat', 'sept',
    'rights', 'invite', 'packing', 'saint', 'chips', 'ecommerce', 'returned', 'marc', 'desire', 'career',
    'impact', 'parker', 'numbers', 'john', 'kent', 'carriers', 'lookup', 'drives', 'portion', 'seen',
    'regional', 'tracking', 'greater', 'ruby', 'english', 'disorder', 'routes', 'ghost', 'switches',
    'pipeline', 'masters', 'pond', 'paradise', 'adopted', 'express', 'pride', 'novel', 'exercises', 'holy',
    'seconds', 'include', 'operator', 'manual', 'ends', 'springs', 'leaders', 'getting', 'months', 'josh',
    'wellness', 'hospitals', 'smooth', 'navigate', 'annually', 'comic', 'avoid', 'founder', 'liquid',
    'spain', 'athletics', 'democrats', 'wonder', 'solid', 'vice', 'player', 'enjoy', 'toxic', 'services',
    'handling', 'introduce', 'isolated', 'vinyl', 'advisor', 'books', 'divine', 'utility', 'enhance',
    'platinum', 'practices', 'ordered', 'drama', 'genuine', 'velocity', 'showed', 'priced', 'classic',
    'recorded', 'greek', 'totally', 'unless', 'mini', 'museum', 'overview', 'measures', 'explains', 'very',
    'robin', 'grants', 'issue', 'drawings', 'forums', 'receiver', 'bears', 'bold', 'talent', 'however',
    'desktop', 'farmer', 'twelve', 'hacker', 'finance', 'animation', 'positions', 'graph', 'discussed',
    'crafts', 'crucial', 'certified', 'dual', 'merely', 'effective', 'reflect', 'designed', 'kids',
    'steering', 'favorite', 'terms', 'lived', 'liberal', 'engage', 'cruise', 'races', 'engineer', 'parking',
    'falling', 'finding', 'flood', 'rules', 'bargains', 'python', 'romance', 'just', 'riding', 'plans',
    'reserved', 'ages', 'maps', 'payday', 'canyon', 'announced', 'written', 'national', 'homes', 'concerns',
    'native', 'resorts', 'exact', 'detail', 'than', 'strategy', 'contents', 'mothers', 'lingerie', 'somehow',
    'prepared', 'courts', 'thoughts', 'clone', 'siemens', 'visual', 'northeast', 'dealer', 'valid', 'origin',
    'palm', 'ministry', 'portrait', 'machines', 'placing', 'kind', 'poetry', 'statute', 'comp', 'cell',
    'exotic', 'illness', 'code', 'frozen', 'going', 'identity', 'humans', 'leather', 'songs', 'reaching',
    'displayed', 'uniform', 'rocky', 'suicide', 'research', 'came', 'false', 'insurance', 'reduced',
    'bought', 'reports', 'processes', 'regime', 'mechanism', 'access', 'editing', 'topics', 'they', 'crimes',
    'inclusive', 'instance', 'reached', 'stereo', 'blackjack', 'cord', 'cosmetic', 'structure', 'hits',
    'carter', 'prior', 'designer', 'sons', 'with', 'really', 'symptoms', 'priority', 'product', 'contact',
    'helps', 'pointed', 'statement', 'premises', 'pain', 'options', 'property', 'died', 'checked', 'born',
    'vacations', 'designing', 'pace', 'assumed', 'base', 'tables', 'combat', 'solution', 'regularly',
    'gamma', 'giving', 'routing', 'disease', 'contains', 'tale', 'centers', 'surgery', 'versus', 'sauce',
    'winning', 'apparent', 'farms', 'immediate', 'wise', 'believed', 'beam', 'pine', 'lighting', 'testing',
    'gourmet', 'verify', 'euro', 'general', 'domains', 'nearest', 'dealing', 'racing', 'writes', 'generator',
    'living', 'sessions', 'laptops', 'improving', 'length', 'represent', 'bags', 'tracks', 'membrane',
    'factors', 'shoe', 'hearts', 'spectrum', 'helpful', 'sandy', 'clicking', 'that', 'operating', 'electron',
    'chapel', 'thinks', 'leads', 'explained', 'powered', 'working', 'brings', 'signal', 'liable', 'heather',
    'visitors', 'reading', 'increased', 'loving', 'referred', 'oriented', 'oracle', 'reviews', 'cyprus',
    'decline', 'clubs', 'governor', 'notices', 'budget', 'stainless', 'software', 'tommy', 'meaning',
    'salmon', 'seat', 'outdoors', 'upgrades', 'athletic', 'intensive', 'sharon', 'beds', 'stronger', 'been',
    'sterling', 'neither', 'relative', 'intel', 'covering', 'herbal', 'lambda', 'basically', 'alaska',
    'camcorder', 'solving', 'node', 'deposit', 'sight', 'thousand', 'ongoing', 'scope', 'acts', 'initially',
    'worship', 'rivers', 'christian', 'contract', 'poll', 'efforts', 'stones', 'height', 'largely',
    'trailer', 'flat', 'reliable', 'beat', 'virus', 'opera', 'buyers', 'cooper', 'wishes', 'filter', 'rated',
    'terrorist', 'babies', 'persons', 'featuring', 'changed', 'icons', 'resident', 'formats', 'checkout',
    'permit', 'charge', 'countries', 'headset', 'container', 'district', 'justice', 'trends', 'buildings',
    'advocacy', 'lease', 'shift', 'causes', 'brazil', 'violence', 'pregnant', 'investors', 'kings',
    'calling', 'must', 'shots', 'noble', 'voters', 'executive', 'edited', 'clinic', 'consumers', 'counts',
    'balanced', 'deck', 'formula', 'dangerous', 'framed', 'guarantee', 'intended', 'days', 'upper', 'strain',
    'engines', 'humor', 'fairly', 'abstract', 'diversity', 'systems', 'acrobat', 'revealed', 'pursuant',
    'miles', 'planner', 'mirrors', 'devices', 'diagram', 'locally', 'greeting', 'display', 'shopping',
    'chronic', 'fails', 'format', 'agencies', 'arcade', 'returning', 'carl', 'used', 'loss', 'railway',
    'highly', 'jury', 'neutral', 'rail', 'hands', 'winners', 'shoot', 'indeed', 'correctly', 'locate',
    'values', 'facility', 'york', 'events', 'personal', 'points', 'cent', 'releases', 'roots', 'item',
    'toys', 'education', 'agency', 'modes', 'cats', 'realized', 'portland', 'graphic', 'landscape', 'limits',
    'motel', 'design', 'lies', 'removed', 'graham', 'types', 'showing', 'aimed', 'proud', 'matters',
    'advisory', 'schedule', 'joined', 'announces', 'madonna', 'suppose', 'lane', 'bits', 'criminal', 'wales',
    'pioneer', 'supplier', 'nearly', 'converter', 'quoted', 'opening', 'commit', 'resulting', 'homepage',
    'voices', 'banking', 'patent', 'unlimited', 'cards', 'harry', 'episode', 'theatre', 'modify', 'passing',
    'cartridge', 'franklin', 'result', 'shop', 'till', 'newly', 'comment', 'danish', 'beyond', 'assistant',
    'oxygen', 'faces', 'filling', 'verified', 'saving', 'recipient', 'messaging', 'lang', 'rates', 'speech',
    'bandwidth', 'awards', 'claim', 'films', 'logged', 'anymore', 'brochure', 'effort', 'central', 'cuts',
    'powder', 'ferry', 'color', 'residence', 'shipping', 'simple', 'bytes', 'companies', 'west', 'engaged',
    'ports', 'league', 'threaded', 'citation', 'often', 'academy', 'sorted', 'ceremony', 'military', 'minds',
    'except', 'benefit', 'fingers', 'delay', 'wildlife', 'includes', 'spots', 'legs', 'handbook', 'ripe',
    'manhattan', 'fusion', 'passes', 'studying', 'requiring', 'brain', 'harm', 'talks', 'bikes', 'craig',
    'loads', 'fund', 'petroleum', 'planning', 'unknown', 'such', 'threshold', 'copies', 'diagnosis',
    'director', 'informed', 'composed', 'bracelet', 'locations', 'sisters', 'factory', 'cultural',
    'generated', 'excited', 'substance', 'southeast', 'void', 'knowing', 'treated', 'cutting', 'rely',
    'jobs', 'dedicated', 'albums', 'transfer', 'bristol', 'index', 'order', 'coverage', 'buyer', 'receiving',
    'eyes', 'gains', 'personals', 'into', 'cast', 'produce', 'intent', 'vendor', 'everybody', 'faith',
    'demands', 'capacity', 'slowly', 'when', 'shooting', 'response', 'followed', 'phoenix', 'slim', 'gospel',
    'crop', 'within', 'likes', 'mapping', 'trees', 'treasury', 'hanging', 'scored', 'royalty', 'policy',
    'machinery', 'hardware', 'announce', 'describes', 'bringing', 'chest', 'lamps', 'comfort', 'assets',
    'delivery', 'micro', 'bars', 'capable', 'groups', 'integrity', 'beginning', 'retailers', 'movement',
    'cases', 'letters', 'wrestling', 'spirit', 'mounted', 'singles', 'oxford', 'needed', 'thumbnail',
    'defense', 'citizens', 'frequency', 'problems', 'forward', 'arts', 'exception', 'extension', 'addition',
    'gained', 'portal', 'wearing', 'data', 'holds', 'repair', 'ralph', 'coal', 'regarding', 'meal',
    'placement', 'picks', 'southern', 'listing', 'compiled', 'drawn', 'creek', 'currently', 'colors',
    'regions', 'angels', 'darkness', 'condition', 'kept', 'jones', 'bids', 'leisure', 'baker', 'separated',
    'rooms', 'assume', 'quest', 'writers', 'disc', 'sequences', 'habitat', 'ranges', 'owners', 'qualified',
    'standing', 'blues', 'makers', 'earned', 'probe', 'seem', 'congo', 'extent', 'manage', 'accounts',
    'appeal', 'global', 'anywhere', 'houses', 'closing', 'column', 'exam', 'usage', 'exchanges', 'tourist',
    'applying', 'atlas', 'catering', 'newest', 'surgical', 'comes', 'bulk', 'trial', 'economy', 'thinking',
    'biggest', 'periods', 'combined', 'instantly', 'booty', 'boots', 'lots', 'compare', 'failure',
    'equations', 'alpha', 'steps', 'resulted', 'lakes', 'china', 'penalty', 'women', 'flowers', 'grey',
    'perhaps', 'candles', 'replies', 'recommend', 'indoor', 'spyware', 'trans', 'filters', 'parks', 'choice',
    'sample', 'spotlight', 'physician', 'tradition', 'mentioned', 'offer', 'generate', 'error', 'anonymous',
    'odds', 'signed', 'produced', 'lodge', 'projector', 'seating', 'eastern', 'supplied', 'slide',
    'residents', 'currency', 'commonly', 'calculate', 'programme', 'standards', 'estimate', 'including',
    'villa', 'facing', 'vector', 'threats', 'clients', 'religion', 'heritage', 'income', 'median', 'linking',
    'customize', 'concrete', 'mate', 'paragraph', 'gardens', 'occasion', 'discuss', 'refused', 'forth',
    'forecast', 'poems', 'western', 'calendars', 'arrival', 'dawn', 'gear', 'track', 'wondering', 'premier',
    'aids', 'tourism', 'cellular', 'themes', 'afford', 'perry', 'diameter', 'michigan', 'catalog', 'diverse',
    'canon', 'preferred', 'thus', 'morris', 'continues', 'assess', 'beads', 'employees', 'tapes', 'stretch',
    'musicians', 'promote', 'camping', 'slots', 'downloads', 'discharge', 'islands', 'exchange', 'smaller',
    'arms', 'texas', 'offshore', 'databases', 'drivers', 'opened', 'prices', 'viewed', 'contain', 'secrets',
    'inquiry', 'treatment', 'sets', 'victory', 'process', 'insight', 'locked', 'seeks', 'journal',
    'explicit', 'seminar', 'chairman', 'taken', 'poor', 'joseph', 'charlotte', 'calls', 'attached', 'chose',
    'noticed', 'logical', 'attribute', 'concepts', 'docs', 'aviation', 'branches', 'brown', 'radiation',
    'millions', 'healthy', 'genes', 'tend', 'billing', 'suggest', 'element', 'extras', 'amazon', 'hours',
    'awareness', 'licenses', 'text', 'agents', 'unique', 'trailers', 'grain', 'abroad', 'laws', 'monthly',
    'venue', 'marked', 'winds', 'packages', 'photos', 'injection', 'layer', 'advanced', 'tried', 'argument',
    'prints', 'trials', 'client', 'essays', 'offices', 'state', 'method', 'oasis', 'death', 'entire',
    'actions', 'begins', 'having', 'packaging', 'silence', 'injuries', 'cute', 'helped', 'rapid',
    'candidate', 'spending', 'newton', 'fort', 'gallery', 'released', 'seasonal', 'painting', 'strings',
    'whereas', 'served', 'causing', 'tells', 'autumn', 'friendly', 'proceed', 'goal', 'things', 'traveler',
    'stages', 'does', 'bugs', 'chapters', 'chamber', 'luxury', 'voted', 'forgotten', 'lovely', 'empire',
    'reporter', 'bookstore', 'yahoo', 'physics', 'meter', 'emphasis', 'ideal', 'ethics', 'drew', 'grounds',
    'compact', 'collins', 'housing', 'skill', 'aside', 'purple', 'revenues', 'have', 'oral', 'employers',
    'believe', 'tops', 'remarks', 'launched', 'parish', 'output', 'donations', 'pension', 'pumps',
    'champion', 'specify', 'march', 'johnny', 'ordering', 'reasons', 'bands', 'lights', 'starring',
    'personnel', 'camp', 'occasions', 'creates', 'websites', 'engineers', 'filing', 'poster', 'panel',
    'retail', 'slot', 'gain', 'roger', 'unable', 'eliminate', 'yours', 'charger', 'supplies', 'repairs',
    'updates', 'sacred', 'william', 'packed', 'flows', 'ward', 'sellers', 'senior', 'bikini', 'female',
    'cookies', 'archives', 'assurance', 'losing', 'wireless', 'examined', 'estimates', 'hearing', 'babes',
    'catholic', 'jewellery', 'tied', 'veterans', 'farmers', 'units', 'bull', 'cooking', 'charged', 'pour',
    'passport', 'goods', 'petition', 'mention', 'grew', 'shoppers', 'held', 'recorder', 'boss', 'purposes',
    'paul', 'radar', 'roads', 'yesterday', 'dose', 'worse', 'sixth', 'converted', 'normally', 'cream',
    'students', 'acting', 'somewhat', 'delete', 'suppliers', 'details', 'compared', 'expenses', 'violent',
    'aspect', 'assessed', 'buttons', 'defendant', 'nuts', 'complaint', 'role', 'diamonds', 'laid', 'making',
    'excluding', 'mesh', 'tested', 'satisfy', 'synthesis', 'symbols', 'blogs', 'charts', 'insider',
    'lifestyle', 'spam', 'bookmark', 'welfare', 'villas', 'suites', 'terrorism', 'meetings', 'materials',
    'direction', 'employer', 'import', 'marks', 'votes', 'actually', 'command', 'value', 'operated', 'motor',
    'wholesale', 'youth', 'width', 'furniture', 'heaven', 'obtain', 'ourselves', 'birth', 'weeks',
    'extremely', 'historic', 'system', 'analyst', 'luggage', 'antique', 'adjust', 'theft', 'nurses',
    'styles', 'difficult', 'anybody', 'consists', 'concerned', 'ebooks', 'partly', 'glance', 'dialog',
    'maria', 'keywords', 'sierra', 'transfers', 'seminars', 'pepper', 'patient', 'feelings', 'evaluated',
    'determine', 'primary', 'critical', 'defined', 'gonna', 'browse', 'operate', 'cameras', 'opens',
    'wealth', 'vacation', 'reverse', 'allows', 'woods', 'afternoon', 'charlie', 'assumes', 'funding',
    'affected', 'where', 'skills', 'guides', 'profits', 'explore', 'trek', 'utilities', 'fonts', 'necessary',
    'spiritual', 'tutorial', 'decades', 'honda', 'stress', 'kelly', 'coalition', 'outline', 'crime',
    'summit', 'soldiers', 'studied', 'gates', 'intensity', 'ultimate', 'scan', 'payable', 'presented',
    'taught', 'stock', 'picked', 'kerry', 'grown', 'isle', 'jazz', 'timing', 'articles', 'fighting',
    'expense', 'moms', 'major', 'resolved', 'courtesy', 'sought', 'excerpt', 'compete', 'screens', 'trips',
    'ebook', 'described', 'facial', 'shops', 'confirmed', 'lodging', 'desired', 'assembly', 'disaster',
    'prove', 'airline', 'notice', 'oils', 'nylon', 'mills', 'seeking', 'disposal', 'husband', 'wants',
    'windows', 'folks', 'pets', 'strap', 'brought', 'router', 'knew', 'congress', 'browsing', 'musical',
    'donate', 'murder', 'depth', 'location', 'ridge', 'enabling', 'file', 'wrote', 'official', 'holding',
    'estimated', 'objects', 'recording', 'agenda', 'yards', 'massage', 'delivered', 'processor', 'exports',
    'grid', 'developer', 'highlight', 'presence', 'focused', 'solve', 'sounds', 'brothers', 'acoustic',
    'losses', 'audience', 'suit', 'built', 'equipped', 'program', 'gives', 'deemed', 'editors', 'tools',
    'parties', 'recycling', 'social', 'marketing', 'customs', 'cultures', 'horses', 'pulse', 'directly',
    'stud', 'case', 'species', 'household', 'flashing', 'features', 'hockey', 'handheld', 'request', 'brief',
    'tech', 'headlines', 'requires', 'series', 'attend', 'happening', 'broker', 'further', 'teen', 'dolls',
    'tough', 'font', 'nearby', 'disk', 'japan', 'post', 'skiing', 'border', 'these', 'franchise', 'believes',
    'hence', 'server', 'fluid', 'kits', 'benefits', 'segment', 'daily', 'glad', 'elected', 'anime',
    'mortgage', 'titans', 'turner', 'peoples', 'alarm', 'russia', 'elite', 'hobbies', 'answers', 'moderator',
    'procedure', 'terror', 'burning', 'lite', 'booking', 'claims', 'creative', 'willing', 'patrick',
    'finished', 'apply', 'learned', 'kill', 'operation', 'gifts', 'occurs', 'routine', 'lives', 'roles',
    'deviant', 'pieces', 'fishing', 'falls', 'township', 'accepted', 'complete', 'lovers', 'elsewhere',
    'coffee', 'wake', 'directed', 'baseline', 'addresses', 'deleted', 'modified', 'cottage', 'lessons',
    'lawyer', 'professor', 'publish', 'politics', 'laura', 'gambling', 'bidder', 'broadcast', 'anna',
    'reviewer', 'bidding', 'typically', 'pregnancy', 'ceramic', 'careful', 'vitamins', 'byte', 'spare',
    'duration', 'decisions', 'contracts', 'ended', 'tiffany', 'troops', 'chosen', 'sort', 'receives',
    'postage', 'also', 'framework', 'secretary', 'economics', 'himself', 'involves', 'astronomy', 'golf',
    'treaty', 'theater', 'mike', 'guide', 'depending', 'advances', 'sender', 'notes', 'culture', 'coins',
    'motors', 'walker', 'boats', 'enables', 'hist', 'bowling', 'evidence', 'parents', 'proposals', 'define',
    'archive', 'shows', 'else', 'crack', 'necklace', 'movies', 'pending', 'delays', 'views', 'fetish',
    'progress', 'museums', 'retired', 'entity', 'fabric', 'ones', 'listening', 'careers', 'vehicle',
    'integer', 'madison', 'many', 'filtering', 'workers', 'charm', 'genealogy', 'stockings', 'traveling',
    'sides', 'grace', 'proposal', 'seriously', 'account', 'moving', 'tobacco', 'northwest', 'shareware',
    'anti', 'peer', 'graphics', 'offers', 'appears', 'navy', 'degrees', 'soviet', 'shown', 'require',
    'leaving', 'waters', 'filed', 'lesbians', 'happens', 'younger', 'invest', 'ethical', 'expensive', 'fans',
    'patients', 'fortune', 'margin', 'moment', 'essential', 'algorithm', 'select', 'risks', 'basis',
    'warrant', 'spouse', 'speakers', 'sunshine', 'motion', 'emails', 'lose', 'throat', 'repeated', 'auto',
    'quantum', 'started', 'soldier', 'cached', 'venture', 'document', 'dimension', 'billy', 'agent',
    'workforce', 'celebrity', 'decade', 'churches', 'variety', 'download', 'lawyers', 'feeling', 'tickets',
    'officials', 'covered', 'maintain', 'areas', 'subjects', 'called', 'camel', 'certainly', 'cart',
    'related', 'audio', 'counters', 'deals', 'foods', 'casual', 'convert', 'foreign', 'pixels', 'wings',
    'principle', 'interest', 'choices', 'religious', 'much', 'were', 'notebooks', 'looking', 'investor',
    'shirts', 'answered', 'remained', 'multiple', 'jane', 'ratio', 'shot', 'senate', 'geography', 'reads',
    'serial', 'alerts', 'logistics', 'missed', 'quote', 'only', 'summary', 'warner', 'plates', 'lotus',
    'took', 'folk', 'arrive', 'imperial', 'helping', 'alan', 'driver', 'writing', 'blade', 'eggs', 'bend',
    'logos', 'develop', 'paris', 'drunk', 'accuracy', 'goes', 'ranked', 'plenty', 'mostly', 'writer', 'glen',
    'separate', 'batteries', 'keys', 'aluminum', 'stability', 'violation', 'maker', 'bronze', 'victoria',
    'tabs', 'canvas', 'roman', 'workshops', 'undefined', 'returns', 'means', 'listed', 'institute', 'cents',
    'lottery', 'able', 'virgin', 'sold', 'ratings', 'permitted', 'linux', 'stamp', 'schools', 'literary',
    'otherwise', 'sales', 'inspired', 'harvest', 'sentence', 'designers', 'provided', 'shelter', 'acute',
    'mercury', 'rating', 'jackets', 'mandatory', 'listings', 'quite', 'watching', 'stocks', 'libraries',
    'damaged', 'perform', 'manuals', 'lover', 'hybrid', 'configure', 'mars', 'thousands', 'dispute',
    'center', 'requested', 'memories', 'processed', 'greatly', 'external', 'decrease', 'coming', 'hopefully',
    'additions', 'judicial', 'liver', 'cargo', 'sleeping', 'shaped', 'glasses', 'apartment', 'knows', 'gave',
    'medicare', 'forever', 'lips', 'sean', 'axis', 'boston', 'tasks', 'faculty', 'punk', 'execution',
    'attacks', 'scheduled', 'form', 'bishop', 'protected', 'final', 'feedback', 'broken', 'sports',
    'internal', 'differ', 'actors', 'edit', 'fleet', 'domestic', 'regard', 'similarly', 'posting', 'chuck',
    'partners', 'duke', 'cells', 'seeing', 'shell', 'south', 'selecting', 'leave', 'manager', 'steel',
    'enlarge', 'posts', 'lands', 'occurred', 'limited', 'scoring', 'voluntary', 'mature', 'cables',
    'managing', 'saved', 'advantage', 'selection', 'acid', 'directory', 'symposium', 'sleeve', 'matches',
    'classroom', 'breast', 'arabic', 'arrested', 'saver', 'suspect', 'dynamics', 'federal', 'sector',
    'expertise', 'wage', 'claimed', 'rapidly', 'jack', 'fully', 'binary', 'aspects', 'fashion', 'costs',
    'times', 'seemed', 'puzzles', 'copper', 'growing', 'albert', 'absence', 'unit', 'plastic', 'incident',
    'kingdom', 'export', 'ensure', 'beast', 'stats', 'pure', 'glory', 'outer', 'guardian', 'closely',
    'earrings', 'surf', 'deaths', 'upload', 'weekends', 'according', 'papers', 'thongs', 'style', 'settings',
    'divided', 'continued', 'moderate', 'calcium', 'liability', 'logo', 'fame', 'democracy', 'fewer',
    'supply', 'adding', 'regards', 'mortgages', 'hunter', 'markets', 'suffering', 'voting', 'figure', 'earn',
    'bachelor', 'talked', 'meta', 'media', 'secondary', 'carbon', 'fiscal', 'jimmy', 'adapters', 'telecom',
    'dial', 'lines', 'political', 'panels', 'checking', 'company', 'equipment', 'powers', 'down', 'artwork',
    'obtained', 'impacts', 'meant', 'admission', 'cruises', 'salon', 'bureau', 'games', 'untitled',
    'section', 'leaves', 'craft', 'decision', 'commons', 'unto', 'exclude', 'therefore', 'elements',
    'pupils', 'survey', 'desperate', 'trusted', 'heroes', 'opinions', 'equally', 'banner', 'rolling',
    'responses', 'created', 'aged', 'preparing', 'packs', 'consult', 'gardening', 'parenting', 'scenes',
    'properly', 'campaign', 'courses', 'webmaster', 'cited', 'offline', 'adults', 'thirty', 'weight', 'this',
    'referral', 'anxiety', 'option', 'records', 'thermal', 'jews', 'plaza', 'weddings', 'blonde', 'locator',
    'hardcover', 'published', 'districts', 'quantity', 'besides', 'limit', 'adjusted', 'static', 'username',
    'mayor', 'florence', 'camps', 'french', 'moved', 'automatic', 'occupied', 'several', 'lewis', 'dialogue',
    'network', 'ancient', 'broadband', 'seal', 'lounge', 'specialty', 'price', 'truly', 'exclusive',
    'mainly', 'privacy', 'reporting', 'trunk', 'fell', 'north', 'reported', 'sublime', 'walls', 'counter',
    'weblog', 'comments', 'previews', 'gateway', 'depend', 'clear', 'matt', 'serves', 'bills', 'mint',
    'broad', 'gathering', 'pairs', 'kinds', 'profiles', 'tracked', 'route', 'cisco', 'levels', 'rental',
    'fiction', 'worlds', 'played', 'yard', 'abortion', 'phrase', 'located', 'revision', 'rising', 'proved',
    'being', 'visiting', 'applied', 'mutual', 'maple', 'methods', 'census', 'relevant', 'feed', 'walked',
    'guests', 'deluxe', 'society', 'mineral', 'approved', 'adapter', 'prime', 'sporting', 'basin',
    'commander', 'stations', 'mountains', 'salary', 'schedules', 'studies', 'current', 'baskets', 'places',
    'marine', 'merchant', 'performed', 'others', 'downtown', 'avatar', 'comics', 'brass', 'purchase',
    'sponsors', 'assisted', 'purchases', 'posted', 'vacuum', 'rankings', 'risk', 'carol', 'images',
    'clinical', 'romantic', 'semester', 'puts', 'supreme', 'northern', 'apparel', 'flexible', 'effect',
    'combo', 'amended', 'examples', 'minority', 'departure', 'takes', 'bulletin', 'signature', 'extended',
    'equity', 'commands', 'avenue', 'sheets', 'credits', 'packet', 'printed', 'chairs', 'rejected',
    'visible', 'silver', 'planned', 'spears', 'strictly', 'stood', 'initial', 'ultra', 'brokers', 'pleasure',
    'market', 'mount', 'adoption', 'earnings', 'labs', 'range', 'greatest', 'guard', 'obvious', 'discs',
    'studio', 'enabled', 'raising', 'serving', 'still', 'relay', 'solar', 'terminal', 'members', 'works',
    'solutions', 'guidance', 'dogs', 'loading', 'editorial', 'suggested', 'protein', 'holder', 'sole',
    'rolls', 'creating', 'donation', 'placed', 'header', 'senator', 'brilliant', 'went', 'messenger',
    'imports', 'checks', 'drinks', 'artist', 'showtimes', 'password', 'grill', 'involve', 'trails',
    'emissions', 'template', 'history', 'noted', 'powerful', 'jokes', 'relations', 'union', 'viewing',
    'festival', 'pacific', 'singing', 'kernel', 'using', 'ensuring', 'poker', 'brad', 'chrome', 'scales',
    'concluded', 'plasma', 'clothing', 'layout', 'supports', 'issues', 'refer', 'textbooks', 'dying',
    'optional', 'backup', 'bill', 'resort', 'soccer', 'acquired', 'interim', 'rentals', 'hunting',
    'childhood', 'searching', 'creator', 'heating', 'direct', 'topic', 'consumer', 'latex', 'playing',
    'mice', 'absolute', 'failed', 'density', 'speaker', 'character', 'finest', 'sponsored', 'headed',
    'weapon', 'constant', 'vision', 'warren', 'million', 'unlike', 'silicon', 'charity', 'perfume',
    'subject', 'revised', 'mixed', 'presents', 'magazines', 'disorders', 'para', 'outdoor', 'asset',
    'resolve', 'arguments', 'usually', 'healing', 'joining', 'servers', 'became', 'scripts', 'pitch', 'char',
    'victim', 'category', 'trace', 'breaks', 'beef', 'affairs', 'minister', 'factor', 'airlines', 'discount',
    'recognize', 'replaced', 'through', 'stores', 'approve', 'passed', 'jerry', 'audit', 'certain',
    'victims', 'precision', 'names', 'raised', 'expressed', 'preview', 'sized', 'workplace', 'telephone',
    'seniors', 'golden', 'pounds', 'completed', 'molecular', 'providing', 'encoding', 'reserves', 'smoking',
    'conduct', 'miller', 'invited', 'folder', 'clause', 'allowing', 'embedded', 'easier', 'killed', 'dated',
    'theory', 'gender', 'organized', 'attending', 'rather', 'improved', 'towns', 'blow', 'latter', 'ease',
    'arising', 'java', 'potter', 'agreed', 'painted', 'interior', 'male', 'inkjet', 'accurate', 'pulled',
    'cinema', 'complex', 'webcam', 'firewall', 'stops', 'positive', 'twenty', 'costa', 'fake', 'appeared',
    'cartoons', 'resistant', 'prince', 'storage', 'wine', 'wrap', 'ranking', 'delta', 'increase', 'your',
    'vertical', 'sharing', 'album', 'looked', 'protocols', 'latinas', 'well', 'outreach', 'involved',
    'selling', 'dating', 'bigger', 'manga', 'gnome', 'socket', 'vital', 'liberty', 'piece', 'security',
    'pottery', 'sent', 'elections', 'rack', 'auction', 'spaces', 'builders', 'urban', 'grocery', 'depends',
    'sensitive', 'users', 'divorce', 'mood', 'meets', 'directors', 'readers', 'rare', 'syntax', 'partial',
    'mailing', 'feels', 'cancer', 'exhibit', 'surprised', 'latina', 'charges', 'cassette', 'goals',
    'towards', 'girls', 'physical', 'bond', 'revenue', 'reset', 'prepare', 'removal', 'slightly', 'parts',
    'primarily', 'dale', 'shares', 'employed', 'chemistry', 'sometimes', 'developed', 'lead', 'printers',
    'growth', 'script', 'alcohol', 'funds', 'imaging'
);

const WIN = 'win';
const BEFORE = 'before';
const AFTER = 'after';
let vueApp;

document.addEventListener('DOMContentLoaded', () => {
    if (!getElement('container')) return;

    const app = Vue.createApp({
        data() {
            return {
                word: undefined,
                guessValue: '',
                startTime: null,
                guesses: [],
                afterGuesses: [], // derived from guesses and word
                beforeGuesses: [], // derived from guesses and word
                winTime: null,
                isReplay: false, // if we've loaded a game that's already been played (always today's game)
                guessError: '',
                gaveUpTime: null,

                isLocalStorageAvailable: IS_LOCAL_STORAGE_AVAILABLE, // FIXME don't need this on state

                // Date picker state
                playDate: null, // if unset playdate is for "today"

                // View-only header state (puzzle number + live countdown)
                currentTime: now(),
            };
        },
        computed: {
            puzzleNumber() {
                const date = this.playDate || this.currentTime;
                const days = Math.floor(
                    (datesToMidnight(date) - datesToMidnight(FIRST_DATE)) / MILLISECONDS_IN_DAY,
                );
                return days + 1;
            },
            timeUntilNextGame() {
                const n = this.currentTime;
                const nextMidnight = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1);
                let seconds = Math.max(0, Math.floor((nextMidnight - n) / 1000));
                const hours = Math.floor(seconds / 3600);
                seconds %= 3600;
                const minutes = Math.floor(seconds / 60);
                seconds %= 60;
                return [hours, minutes, seconds]
                    .map((part) => leftPad(String(part), 2))
                    .join(':');
            },
            puzzleAvailable() {
                const date = this.playDate || this.currentTime;
                const candidate = getWord(date);
                return typeof candidate === 'string' && candidate.trim().length > 0;
            },
        },
        methods: {
            reset,
            setGuess,
            getInvalidReason,
            makeGuess,
            getComparisonToTargetWord,
            recordGuess,
            getFormattedTime,
            giveUp,
            setWordAndDate,

            // Date picker methods
            getShortDayString,
            randomDay,
        },
        mounted() {
            this.reset({ stealFocus: true });
            setInterval(() => {
                this.currentTime = now();
            }, 1000);
        },
    });

    app.directive('focus', {
        mounted: (el) => {
            el.focus();
        },
    });

    vueApp = app.mount('#container');
});


function reset(options) {
    this.word = undefined;

    this.guessValue = '';

    resetStats(this);
    // reset stats

    if (!options || !options.stealFocus) return;
    setFocusInGuesserInput();
}

function setFocusInGuesserInput() {
    Vue.nextTick(() => {
        getElement('new-guess').focus();
    });
}

function resetStats(app) {
    if (!app.isLocalStorageAvailable) {
        setEmptyStats(app);
        return;
    }
    const savedGame = getSavedGame();
    setStatsFromExistingGame(app, savedGame);
}

function setEmptyStats(app) {
    app.guesses = [];
    app.afterGuesses = [];
    app.beforeGuesses = [];
    app.startTime = null;
    app.winTime = null;
    app.gaveUpTime = null;
    app.isReplay = false;
}

function setStatsFromExistingGame(app, savedGame) {
    if (!savedGame || !savedGame.startTime) {
        setEmptyStats(app);
        return;
    }
    const startTime = new Date(savedGame.startTime);
    if (!isPlayDateToday(app.playDate)) {
        setEmptyStats(app);
        return;
    }
    const savedGameForToday = getDOY(startTime) === getDOY(now());
    if (!savedGameForToday) {
        resetSavedGames();
        setEmptyStats(app);
        return;
    }
    const {
        winTime,
        gaveUpTime,
        guesses,
    } = savedGame;
    app.startTime = startTime;
    app.winTime = (winTime && new Date(winTime)) || null;
    app.gaveUpTime = (gaveUpTime && new Date(gaveUpTime)) || null;
    app.guesses = guesses || [];
    app.word = getWord(startTime);
    app.beforeGuesses = generateGuessList(BEFORE, guesses, app.word);
    app.afterGuesses = generateGuessList(AFTER, guesses, app.word);
    if (app.gaveUpTime || app.winTime) {
        app.word = getWord(app.startTime);
        app.guessValue = app.word;
    }
}

function isPlayDateToday(playDate) {
    if (playDate == null) return true; // by definition if playdate isn't set it is for today
    return isToday(playDate);
}

function resetSavedGames() {
    localStorage.removeItem(SAVED_GAME_KEY);
}

function generateGuessList(beforeOrAfter, guesses, word) {
    const guessList = [];
    guesses
        .filter(getBeforeOrAfterGuesses)
        .forEach((guess) => {
            insertIntoSortedArray(guessList, guess);
        });
    return guessList;

    function getBeforeOrAfterGuesses(guess) {
        if (beforeOrAfter === BEFORE) {
            return guess > word;
        }
        return guess < word;
    }
}

function setWordAndDate() {
    this.startTime = now();
    saveGame(this);

    const dateForWord = this.playDate || this.startTime;

    this.word = getWord(dateForWord);
}

function getWord(date) {
    const index = getWordIndex(date);
    return words[index];
}

function getWordIndex(date) {
    const doy = getDOY(date);
    const thisYear = date.getFullYear();
    const yearsSince2019 = (date.getFullYear() - 2019);
    let yearOffset = yearsSince2019 * 365;
    // add in days for leap years
    for (let y = 2019; y < thisYear; y++) {
        if (isLeapYear(y)) {
            yearOffset += 1;
        }
    }

    return doy + yearOffset - 114;
}

function saveGame({
    isLocalStorageAvailable,
    startTime,
    winTime,
    gaveUpTime,
    guesses,
    playDate,
}) {
    if (!isLocalStorageAvailable || !isPlayDateToday(playDate)) {
        return;
    }
    localStorage.setItem(SAVED_GAME_KEY, JSON.stringify({
        startTime,
        winTime,
        gaveUpTime,
        guesses,
    }));
}

function setGuess(event) {
    this.guessValue = event.target.value;
    if (this.guessError) { // only re-evaluate form validity on-the-fly if it was invalid
        this.guessError = this.getInvalidReason(sanitizeGuess(this.guessValue));
    }
}

function makeGuess() {
    if (!this.puzzleAvailable) {
        return;
    }
    const guess = sanitizeGuess(this.guessValue);
    this.guessError = this.getInvalidReason(guess);

    if (this.guessError) {
        return;
    }

    this.guesses.push(guess);

    if (!this.word) {
        this.setWordAndDate();
    }

    const comparison = this.getComparisonToTargetWord(guess);
    if (comparison === WIN) {
        this.winTime = now();
        saveGame(this);
        return;
    }
    saveGame(this);
    this.guessValue = ''; // clear input to get ready for next guess

    this.recordGuess(guess, comparison);

    setFocusInGuesserInput();
}

function sanitizeGuess(guess) {
    return guess.toLowerCase().trim().replace(/[^a-z]/g, '');
}

function getInvalidReason(guess) {
    if (!guess) {
        return "Guesses can't be empty";
    }
    if (!isAValidWord(guess)) {
        return 'Guesses must be Scrabble-acceptable English words';
    }
    if (this.guesses && this.guesses.includes(guess)) {
        return "You've already guessed that word";
    }
    return '';
}

function isAValidWord(guess) {
    let level = validWordTrie;
    for (const letter of guess) {
        level = level[letter];
        if (!level) return false;
    }
    return '' in level;
}

function getComparisonToTargetWord(guess) {
    if (guess === this.word) {
        return WIN;
    }
    return guess > this.word ? BEFORE : AFTER;
}

function recordGuess(guess, comparison) {
    const previousGuesses = comparison === AFTER ? this.afterGuesses : this.beforeGuesses;
    insertIntoSortedArray(previousGuesses, guess);
}

function insertIntoSortedArray(array, newElement) {
    for (let i = 0; i <= array.length; i += 1) {
        const thisElement = array[i];
        if (newElement < thisElement) {
            array.splice(i, 0, newElement);
            return;
        }
    }
    array.push(newElement);
}

function giveUp(e) {
    if (!confirm('Really give up?')) {
        return;
    }
    e.preventDefault(); // don't actually perform any navigation on a tag
    this.guessValue = this.word;
    this.gaveUpTime = now();
    saveGame(this);
}

// Utilities

function getElement(id) {
    return document.getElementById(id);
}

function isDuringLeapYear(date) {
    var year = date.getFullYear();
    return isLeapYear(year);
}

function isLeapYear(year) {
    if ((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
}

function getDOY(date) {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = date.getMonth();
    var dn = date.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && isDuringLeapYear(date)) dayOfYear++;
    return dayOfYear;
};

const SHORT_WEEK_DAY_BY_INDEX = [
    'Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun',
];
const SHORT_MONTH_BY_INDEX = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',
];
const MILLISECONDS_IN_DAY = 86400000;
const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY * 7;

function setNewPlayDate(app, dateNumberOrString) {
    const clampedDate = clampDate(new Date(dateNumberOrString));
    app.playDate = isPlayDateToday(clampedDate) ? null : clampedDate;
    app.reset();
}

const FIRST_DATE = new Date(2023, 6, 25, 00);
const numberOfDaysSinceStart = Math.floor(((new Date()) - FIRST_DATE) / MILLISECONDS_IN_DAY);

function randomDay(e) {
    e.preventDefault();
    const randomDaysSinceStart = Math.floor(Math.random() * numberOfDaysSinceStart);
    setNewPlayDate(this, +FIRST_DATE + (randomDaysSinceStart * MILLISECONDS_IN_DAY));
}

function clampDate(date) {
    if (date > now()) {
        return now();
    }
    if (date < FIRST_DATE) {
        return new Date(FIRST_DATE);
    }
    return date;
}

function getShortDayString() {
    const specialDateString = getSpecialDateString(this.playDate);
    if (specialDateString) {
        return specialDateString;
    }
    const dayOfWeekIndex = this.playDate.getDay();
    const monthIndex = this.playDate.getMonth();
    return [
        SHORT_MONTH_BY_INDEX[monthIndex],
        `${this.playDate.getDate()}`,
        this.playDate.getFullYear(),
    ].join(' ');
}

function getSpecialDateString(playDate) {
    if (isPlayDateToday(playDate)) {
        return 'Today';
    }
    return '';
}

// Utilities

function getTimezonelessLocalDate(date) {
    return `${date.getFullYear()}-${getMonth(date)}-${getMonthDay(date)}`;
}

function getMonth(date) {
    return leftPad((date.getMonth() + 1).toString(), 2);
}

function getMonthDay(date) {
    return leftPad(date.getDate().toString(), 2);
}

function leftPad(string, desiredLength, character = '0') {
    if (string.length === desiredLength) {
        return string;
    }
    return leftPad(character + string, desiredLength);
}

function getFormattedTime(milliseconds) {
    if (!Number.isInteger(milliseconds)) {
        return '';
    }
    let seconds = Math.round((milliseconds) / 1000);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const formattedTime = [];
    if (hours) {
        formattedTime.push(`${hours}h`);
    }
    if (minutes) {
        formattedTime.push(`${minutes}m`);
    }
    if (seconds) {
        formattedTime.push(`${seconds}s`);
    }

    return formattedTime.join(' ') || '0s';
}

function isToday(date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return datesMatch(now(), date);
}

function now() {
    return new Date();
}

function datesMatch(date1, date2) { // ignores time
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
}

function datesToMidnight(date) { // strips the time component to compare whole days
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// # Local Storage Persistence

const IS_LOCAL_STORAGE_AVAILABLE = testLocalStorage();

function testLocalStorage() {
    // stolen from https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

const SAVED_GAME_KEY = 'savedGame';

function getSavedGame() {
    if (!IS_LOCAL_STORAGE_AVAILABLE) return undefined;
    const savedGameJSON = localStorage.getItem(SAVED_GAME_KEY);
    try {
        return savedGameJSON && JSON.parse(savedGameJSON);
    } catch (e) {
        localStorage.removeItem(SAVED_GAME_KEY);
    }
    return undefined;
}
