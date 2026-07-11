/* DON'T LOOK TOO CLOSELY UNLESS YOU WANT THE GAME TO BE SPOILED FOR FUTURE DAYS! */

const possibleWords = {
    normal: [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','similar','pedal','diaper','rattle','scatter','siren','referee','wizard','rocket','erase','frog','build','problem','crash','take','clown','question','crease','angry','ugly','remove','waddle','mumble','fairy','asylum','need','long','none','napkin','waffle','danger','tummy','midway','begin','hammock','want','emergency','taste','treasure','ding','cocoon','dragon','excellent','anyone','sock','slug','discredit','double','puppy','around','science','black','bully','valley','fang','cost','underwear','vicious','salt','brush','garage','eagle','walk','divergent','lick','steady','scary','decide','goggles','kangaroo','crumble','hamburger','safety','vegetable','touch','hiss','blue','boat','grease','recover','diminish','constitution','foot','baseball','juggle','soon','size','bleach','play','aesthetic','curtain','measure','mile','church','life','headache','flight','chapter','electricity','notable','title','soap','counteract','circus','amazing','fantastic','lizard','comb','knight','heard','garden','along','belly','lift','model','ankle','slice','dentist','shave','elephant','spring','safe','universal','stay','chalk','hint','pavement','buddy','farm','daisy','obsolete','mind','glitter','share','stomach','baby','side','wham','shrug','reptile','beep','lung','rabbit','spinach','cabinet','park','hippo','cement','corn','bush','five','understand','student','whatever','thick','ball','sink','lion','easy','extra','light','grass','start','statue','king','road','window','sand','wedding','blank','quiet','target','stadium','nope','cake','feel','police','drawer','cheap','search','phone','swallow','sleep','chair','bell','squiggle','inundate','maternity','zone','toddler','extreme','cabbage','ridiculous','genetic','house','reef','hypothetical','jealous','tall','wrong','anchor','coat','wheel','found','spicy','rumble','special','hold','mail','bribe','hypocrite','keep','quesadilla','shade','forest','complement','butter','record','near','pollen','bring','pastry','picture','chocolate','firm','stick','starve','cuddle','like','great','restaurant','feather','hoop','hunt','parade','ferocious','hard','boot','stark','trumpet','snow','spark','alphabet','noodle','fight','toes','compromise','funnel','bath','airplane','satellite','chew','broccoli','lobster','animal','burp','illegal','action','bang','recycle','succulent','trust','laser','dispatch','dead','move','battery','date','kiss','break','month','century','unicycle','away','crunch','blind','growl','canoe','clothes','provocative','dark','turkey','city','trouble','cliff','random','lock','fault','burrito','guess','girl','return','choke','bacon','teaspoon','capital','fraternity','shelf','fifth','minute','viper','gorgeous','yourself','objective','cold','doodle','kite','joke','bite','learn','water','outside','tiny','synchronous','toast','loud','town','gate','nothing','fart','stolen','author','cheese','middle','midnight','tedious','dollar','lost','block','talk','convoluted','bruise','sneak','easel','lunch','meat','camera','cherry','time','traffic','burnt','fluctuate','frame','relax','bottle','cheer','wipe','unfair','shin','parachute','support','alert','crater','sprain','allow','pizza','roll','knee','bear','demonstrate','attention','tractor','street','space','creak','wrist','doll','dish','surreal','regret','sandal','tissue','flamingo','pull','yellow','insect','taxi','online','fluff','carpet','independent','crisp','whole','dance','breathe','wing','next','metal','battlement','spontaneous','station','catapult','ready','focus','buzz','against','macaroni','room','attic','tropical','smart','laminate','ride','root','tantrum','fifty','gone','niece','abstain','emulate','shape','pretty','onion','wire','original','controversial','useful','queen','ribbon','pressure','fizzy','hospital','scrap','kick','other','allergy','brunch','love','twig','throw','bank','spend','plane','poodle','superfluous','stuck','pencil','narrow','harassment','warn','spider','region','basket','plug','mountain','shuffle','truck','swoop','droop','enumerate','video','useless','team','ambiguous','cartoon','snack','roof','balance','mistake','suspicious','anticipate','reason','jumbo','fraudulent','pragmatic','maybe','cucumber','cupboard','contemplate','tower','scale','trombone','drive','gunk','costume','right','tight','zero','superb','malleable','fossil','thin','worst','teacher','succeed','stuff','circle','morning','mosquito','computer','blush','apology','echo','matter','doctor','hero','tutu','elbow','escape','come','pancake','energy','saddle','chore','pretentious','crowd','puddle','wiggle','busy','combine','more','stairs','back','wild','speak','nine','hour','shovel','trophy','pass','cemetery','nuclear','undermine','serious','quarter','person','address','tweet','though','enter','whine','plate','pudding','longevity','ceiling','swing','alive','nature','arch','group','survival','nice','patch','click','flip','quell','band','osmosis','blog','lemon','reconciliation','glue','laugh','moon','envelope','heavy','print','thigh','organ','beach','mundane','exercise','sound','remedial','icky','dust','nation','grade','hollow','foster','igloo','check','each','exhilarating','slurp','putty','flower','since','picnic','proxy','castle','resilient','copy','across','fries','unveil','asleep','chase','river','message','fancy','slam','booth','kinetic','super','awake','culmination','read','planet','bake','cinnamon','hide','below','class','rose','erratic','choir','kitchen','dopamine','ocean','hotel','leaf','clock','renounce','spoon','reply','hundred','friends','lake','sick','help','dress','snooze','chatter','opulent','remember','orange','setup','weigh','delirious','match','always','snip','continue','hall','devil','test','lamp','bling','poop','yeah','knot','refute','couple','sparkle','ooze','palace','toolbox','rubber','stiff','ranch','luck','anomaly','protect','celery','country','rope','forget','drink','rough','sugar','imagination','thought','rule','cellphone','roar','goldfish','cheat','spike','under','book','canny','uncle','cash','pelican','sandwich','tell','chunk','pasta','diligent','string','juice','cousin','floss','polite','koala','expect','crayon','prohibit','procrastinate','broke','mouth','sorry','olive','step','blur','dozen','young','beauty','straw','regurgitate','land','buckle','cause','line','shock','setting','fork','mould','dude','catch','donut','adversity','lavender','cramp','explain','made','pipe','spin','ambulance','blood','count','guitar','trip','theoretical','smear','worthwhile','teach','squeak','dream','smile','path','petal','save','perish','squeeze','negligence','partner','cheek','saucer','project','relief','fence','withstand','underscore','cloud','snail','vein','join','secret','invade','snot','materialistic','spread','lower','shake','cotton','lying','headphones','story','aunt','bonk','peculiar','loathe','medal','adorable','crocodile','raise','hurry','corner','journey','face','grape','jungle','tonight','scarf','skin','scream','inconsequential','caterpillar','magic','four','crouch','nail','splash','least','work','website','lime','excel','gurgle','raspberry','tattle','mine','scooter','clump','howl','tennis','altogether','front','call','should','quirk','drum','bread','jelly','hungry','gift','child','dolphin','football','fast','laundry','warm','wrench','adventure','fill','turn','alligator','behind','inside','shampoo','frown','zoom','diversify','steep','firefighter','already','launch','subsequent','doing','close','normal','vitamin','argue','news','proof','sled','ubiquitous','tire','paper','earth','half','squirrel','recess','taco','equal','green','purse','temporary','redact','release','part','door','exactly','syndicate','seed','predecessor','guacamole','restoration','coast','legend','tomato','sunrise','milk','neat','pack','tail','popcorn','tent','true','store','iron','caught','convergence','stand','gold','done','hiccup','rectangle','teeth','unhappy','rest','switch','coordinate','airport','sheet','sour','sufficient','comfortable','syrup','retry','umbrella','lollipop','engine','backward','nifty','public','rice','popular','somebody','last','whisper','unusual','replace','jubilation','speed','ticket','tangle','wheat','drool','toilet','berry','turtle','cavity','game','thanks','cricket','above','stack','stripe','attitude','guts','arrow','weird','button','compassion','wrestle','gentle','music','sword','queasy','word','snake','giant','surface','borrow','squalor','ketchup','fortitude','pool','afraid','muscle','attach','tuba','jump','pounce','shirt','fidget','apple','captain','everyone','giggle','split','prudent','cook','correct','head','people','hear','world','island','early','gravy','blast','candle','annoy','ring','keyboard','push','receipt','asymmetrical','buffalo','fierce','place','flourish','bravo','awesome','deal','wish','smell','later','restructure','almost','list','rich','sunset','wall','letter','surprise','sleeves','care','report','adequate','laptop','board','whose','hate','mess','hostile','beetle','silly','said','after','ignore','truce','subway','waggle','eject','tofu','flag','flute','strong','label','cage','pouch','cool','panic','deep','cave','soup','heart','twist','important','reverence','train','junk','upstairs','rainbow','excuse','library','fresh','furry','active','first','trade','home','visit','benevolent','disdain','party','mushroom','shallow','lazy','present','empathy','warranty','curve','agitate','smash','secret','plausible','subtract','anger','dimple','pile','karate','rebuttal','balloon','monster','shrink','shred','hazardous','pearl','ship','mushy','shadow','scoot','gutter','sweat','mouse','gremlin','obstacle','flour','dodge','flow','winter','slip','fair','facilitate','exit','past','sharp','piano','invent','what','watch','valentine','note','nervous','whale','turd','imagine','lunatic','internet','night','knife','agree','large','abysmal','momentous','quick','pants','bobble','finger','spill','bait','local','collaborate','sell','brake','guest','challenge','knock','goose','better','card','contest','bucket','something','naked','jewel','risky','rain','burn','clean','inch','keen','fixed','braid','most','wary','desk','rock','funny','magnet','potato','force','gargoyle','noise','weekend','glove','lesson','nurse','bicycle','before','slow','hang','globe','amicable','groove','storm','angle','boost','core','daughter','bound','yuck','wood','reconsider','crawl','trash','crush','club','sniff','scratch','turbo','drizzle','fungus','melon','helmet','because','attack','flew','private','nose','honest','skeleton','robot','barrel','heat','radio','channel','handle','school','elevator','hobby','raffle','together','wind','dumb','quality','biscuit','paid','straight','bamboo','calamity','coarse','conditional','rise','area','same','officer','establish','worm','garment','hope','tortilla','empty','chemical','every','pretend','condescending','tape','zebra','stir','flash','crazy','lobbyist','delegate','hose','coconut','diamond','parched','volcano','discover','mattress','octagon','monkey','season','inevitable','respect','dough','compound','yell','community','meet','shoulder','oatmeal','business','conventional','cushion','year','cheddar','wasp','sack','knob','weather','boom','marshmallow','eight','page','glow','wand','brawl','table','fruit','drip','song','improve','alone','square','avocado','expert','skull','nominee','ephemeral','judge','marble','indifferent','fear','horrible','recently','duck','ruler','clap','apron','army','comet','helicopter','frugal','fireworks','high','think','bathroom','jiggle','nutrition','octopus','sunny','regular','round','oven','loop','shark','tackle','spot','lava','blanket','brick','remote','yogurt','deficient','cancel','teapot','widget','worry','necessity','gorge','gigantic','machine','wide','another','food','stupid','thing','curious','fraught','wrinkle','pyramid','course','hair','sprint','lobby','look','dizzy','neighbor','skateboard','plan','steam','promise','muddy','swap','sausage','jingle','number','quack','quilt','nest','mall','bagel','pick','calendar','pair','success','quit','affluent','chomp','fuzzy','cereal','idea','snorkel','mean','tomorrow','health','condemn','owner','voice','short','real','unicorn','flex','sure','loose','bunch','renovation','install','universe','chimney','tactful','race','rush','pole','spank','shout','today','chug','hand','gulp','prosperity','sister','leader','panda','sparrow','accident','pocket','shield','accept','email','recipe','until','best','arid','mask','carry','delicious','supposed','draw','full','feet','instant','happy','control','instead','grump','scribble','reclaim','scandal','cable','blob','connect','sunlight','meteor','spit','defend','drag','pillow','princess','broom','tool','reinforce','bench','rustic','peace','burger','summer','okay','wagon','melodramatic','sneeze','some','alien','confide','homework','shiny','hurt','yolk','event','horn','intrepid','late','please','dinosaur','noon','disappear','bone','clack','lucky','impartial','here','conformist','chain','shut','winner','stale','triangle','bass','never','body','know','level','future','pandemic','truth','snug','prosecute','photo','sing','puke','microphone','yoga','screen','squid','drop','vindicate','period','bright','mother','sweet','twice','wonderful','chicken','point','cactus','field','send','soft','wash','tablet','blink','wear','language','practice','without','neck','undo','reach','swamp','tooth','prison','penguin','make','congregate','president','celebrate','magazine','swim','scissors','verb','fray','upward','open','crud','strawberry','superficial','jackpot','left','hypothesis','power','hill','crab','precedent','bird','tank','plush','nonchalant','different','perfect','multiply','upset','miss','gargle','jacket','gross','between','squint','seven','provincial','fountain','movie','giraffe','branch','find','village','dilemma','belt','pantry','nobody','velcro','hole','create','edge','discovery','little','hike','goat','good','fish','reclusive','coach','glass','either','bomb','three','yummy','bridge','dinner','restrained','comfy','salad','clout','subtle','polish','hello','woman','candid','typical','waist','breeze','capture','scrub','condone','anyway','oldest','weed','snuggle','pinch','abdicate','family','couch','angel','show','rescue','hidden','garlic','change','mutter','basic','myself','plant','whistle','write','bean','ahead','less','paint','cookie','impossible','probably','again','stop','desert','vaccine','horse','info','bubble','gobble','justify','bias','puzzle','troll','curb','live','bunny','lament','study','white','tree','parent','fire','hawk','beard','wait','skip','accessory','office','breakfast','sweep','material','mark','vampire','gravity','free','submissive','squish','entrenched','sewer','garbage','floor','over','belong','human','package','trick','grumble','kazoo','alley','mirror','beautiful','grow','incite','cough','skinny','ground','hook','wave','fridge','chance','finish','cone','scroll','terrible','spine','gallon','dignity','devise','banana','money','daddy','pilot','week','bottom','happen','welcome','orphan','famous','enough','serve','skunk','rubbish','brother','menu','bike','closet','bingo','visitor','climb','boring','unlock','star','answer','avid','ladder','innovate','stare','father','deer','birthday','sheep','moss','chip','critter','tiger','grab','shower','replay','stream','flick','name','score','malicious','poke','honk','give','pumpkin','validate','there','listen','mission','sign','itself','freeze','tornado','honey','wallet','diary','fall','skirt','second','bulb','huge','spaghetti','carrot','scoop','tongue','jersey','friend','thumb','yawn','grumpy','someone','children'],

    hard: ['tobebuilt'],
};

const WIN = 'win';
const BEFORE = 'before';
const AFTER = 'after';
const HARD = 'hard';
const NORMAL = 'normal';
const OTHER_DIFFICULTY = {
    [NORMAL]: HARD,
    [HARD]: NORMAL,
};
let vueApp;

document.addEventListener('DOMContentLoaded', () => {
    if (!getElement('container')) return;

    const app = Vue.createApp({
        data() {
            return {
                difficulty: null,
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
            toggleDifficulty,

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

const LAST_SET_DIFFICULTY_KEY = 'lastSetDifficultyToday';
const RECENT_FIRST_PLAYED_DIFFICULTY = 'recentFirstPlayedDifficulty';

function resetStats(app) {
    if (!app.isLocalStorageAvailable) {
        setEmptyStats(app);
        return;
    }
    const difficulty = getDifficulty(app.difficulty);
    const savedGame = getSavedGameByDifficulty(difficulty);
    setStatsFromExistingGame(app, savedGame, difficulty);
}

function setEmptyStats(app, difficulty) {
    app.difficulty = difficulty || app.difficulty || NORMAL;
    app.guesses = [];
    app.afterGuesses = [];
    app.beforeGuesses = [];
    app.startTime = null;
    app.winTime = null;
    app.gaveUpTime = null;
    app.isReplay = false;
}

function getDifficulty(currentDifficulty) {
    if (currentDifficulty) return currentDifficulty;

    const lastSetDifficulty = localStorage.getItem(LAST_SET_DIFFICULTY_KEY);
    const recentFirstPlayedDifficulty = localStorage.getItem(RECENT_FIRST_PLAYED_DIFFICULTY);
    if (!isSameDay() && recentFirstPlayedDifficulty) {
        localStorage.removeItem(RECENT_FIRST_PLAYED_DIFFICULTY);
        return recentFirstPlayedDifficulty;
    }

    return lastSetDifficulty || NORMAL;
}

function isSameDay() {
    // we determine if it's the same day by looking to see if any of the
    // saved games have the same date as today
    return Object.keys(OTHER_DIFFICULTY).some((difficulty) => {
        const savedGame = getSavedGameByDifficulty(difficulty);
        if (!savedGame) return false;
        const savedStartTime = new Date(savedGame.startTime);
        return isToday(savedStartTime);
    });
}

function setStatsFromExistingGame(app, savedGame, difficulty) {
    if (!savedGame || !savedGame.startTime) {
        setEmptyStats(app, difficulty);
        return;
    }
    const startTime = new Date(savedGame.startTime);
    if (!isPlayDateToday(app.playDate)) {
        setEmptyStats(app, difficulty);
        return;
    }
    const savedGameForToday = getDOY(startTime) === getDOY(now());
    if (!savedGameForToday) {
        resetSavedGames();
        setEmptyStats(app, difficulty);
        return;
    }
    const {
        winTime,
        gaveUpTime,
        guesses,
    } = savedGame;
    app.difficulty = difficulty;
    app.startTime = startTime;
    app.winTime = (winTime && new Date(winTime)) || null;
    app.gaveUpTime = (gaveUpTime && new Date(gaveUpTime)) || null;
    app.guesses = guesses || [];
    app.word = getWord(startTime, difficulty);
    app.beforeGuesses = generateGuessList(BEFORE, guesses, app.word);
    app.afterGuesses = generateGuessList(AFTER, guesses, app.word);
    if (app.gaveUpTime || app.winTime) {
        app.word = getWord(app.startTime, app.difficulty);
        app.guessValue = app.word;
    }
}

function isPlayDateToday(playDate) {
    if (playDate == null) return true; // by definition if playdate isn't set it is for today
    return isToday(playDate);
}

function resetSavedGames() {
    Object.keys(OTHER_DIFFICULTY).forEach((difficulty) => {
        localStorage.removeItem(SAVED_GAMES_KEYS_BY_DIFFICULTY[difficulty]);
    });
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

    this.word = getWord(dateForWord, this.difficulty);
}

function getWord(date, difficulty) {
    const index = getWordIndex(date);
    return possibleWords[difficulty][index];
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

function saveLastSetDifficulty({ isLocalStorageAvailable, difficulty }) {
    if (!isLocalStorageAvailable) {
        return;
    }
    localStorage.setItem(LAST_SET_DIFFICULTY_KEY, difficulty);
}

function saveGame({
    isLocalStorageAvailable,
    difficulty,
    startTime,
    winTime,
    gaveUpTime,
    guesses,
    playDate,
}) {
    if (!isLocalStorageAvailable || !isPlayDateToday(playDate)) {
        return;
    }
    if (!localStorage.getItem(RECENT_FIRST_PLAYED_DIFFICULTY)) {
        localStorage.setItem(RECENT_FIRST_PLAYED_DIFFICULTY, difficulty);
    }
    const savedGameKey = SAVED_GAMES_KEYS_BY_DIFFICULTY[difficulty];
    localStorage.setItem(savedGameKey, JSON.stringify({
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

function toggleDifficulty() {
    const haveMadeGuesses = this.guesses.length > 0;
    const haveWonOrGivenUp = this.winTime || this.gaveUpTime;
    if (!this.difficulty) {
        this.difficulty = NORMAL;
        return;
    }
    if (haveMadeGuesses && !haveWonOrGivenUp && !this.isLocalStorageAvailable
        && !confirm('Change difficulty and lose current guesses?')) {
        this.$forceUpdate(); // need to make sure the changer dropdown is in the correct state
        return;
    }
    this.difficulty = OTHER_DIFFICULTY[this.difficulty] || NORMAL;
    this.reset({ stealFocus: true });
    saveLastSetDifficulty(this);
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

const SAVED_GAMES_KEYS_BY_DIFFICULTY = {
    normal: 'savedGame_normal',
    hard: 'savedGame_hard',
};

function getSavedGameByDifficulty(difficulty) {
    if (!IS_LOCAL_STORAGE_AVAILABLE) return undefined;
    const savedGameKey = SAVED_GAMES_KEYS_BY_DIFFICULTY[difficulty];
    const savedGameJSON = difficulty && localStorage.getItem(savedGameKey);
    try {
        return savedGameJSON && JSON.parse(savedGameJSON);
    } catch (e) {
        localStorage.removeItem(savedGameKey);
    }
    return undefined;
}
