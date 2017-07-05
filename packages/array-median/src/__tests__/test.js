import median from '..';

describe('array-median', () => {
    var data = [0.086786649333880583, 0.24402451891450949, 0.64995151944024843, 0.076057423153522485, 0.032298710761293981, 0.17563818303453949, 0.71979476998750092, 0.59543832949980946, 0.57367691313412328, 0.97312060722316862, 0.23280280350293947, 0.31576734226091785, 0.98344763000387136, 0.94443844667751398, 0.3893568402667098, 0.84940477966150074, 0.069422961357568647, 0.88114826458833195, 0.53881049941299908, 0.9585233325876894, 0.60341905482801883, 0.14197869351483594, 0.62496734278644961, 0.36835496684752933, 0.77748799828577075, 0.0043664562242310412, 0.75935289582320553, 0.3314087884541933, 0.70083462672993557, 0.23979419545592517, 0.35381217337802939, 0.42378412632499607, 0.49167203723694597, 0.96709846578090586, 0.18138585038297339, 0.81007794111057929, 0.15709191159344771, 0.13739370220105074, 0.76714895334174005, 0.4287212638744422, 0.50566486234271113, 0.086365957107510161, 0.76824498889729576, 0.26005620931235707, 0.91740517792580001, 0.92454145436123869, 0.2297866730556799, 0.88447336840597202, 0.3749046423641853, 0.92603118327955547, 0.61911047124358198, 0.42581625949196344, 0.97882119131928924, 0.36843817214426988, 0.051472300132365034, 0.71960998607346061, 0.14832211958937491, 0.050707207683279409, 0.58640895486106404, 0.61561362976435052, 0.64925624542778082, 0.78534904710087228, 0.72399319679697616, 0.61093724184137188, 0.84122028262914839, 0.78301136505702618, 0.25097694673061144, 0.35338905520017139, 0.3357927547154268, 0.15434758006333749, 0.19037883518922472, 0.77459866902426355, 0.7336433678053581, 0.92041582238726505, 0.80402157697558974, 0.52309649499683941, 0.63275830222174823, 0.46511631409279186, 0.10137802934317697, 0.31679152198438298, 0.99134673007889518, 0.011882307209237886, 0.47740018554044239, 0.41253134311093154, 0.19737801117738052, 0.5648432043571987, 0.24666424260265141, 0.54204289490795843, 0.89300388360481286, 0.51450160890800134, 0.7404487527751874, 0.14046349651492152, 0.9897857717701577, 0.52612122097683245, 0.16885964569335032, 0.72033886827244065, 0.91726992146550279, 0.17436567076163323, 0.63541135356082212, 0.6581209736512541, 0.807622380866856, 0.13654596066548652, 0.53027992505063459, 0.4622587584320883, 0.49115043743899256, 0.49774860770425544, 0.92249060435764063, 0.23639448340440261, 0.56756531932577259, 0.13062887575930271, 0.62814181157498217, 0.50499776494687421, 0.56175402316713752, 0.58811901695530933, 0.27186340966133682, 0.81950628929531411, 0.97075195068391096, 0.15393188163320681, 0.41653742889332246, 0.12416901240611655, 0.28870207500818612, 0.30172334262740041, 0.6561385818901091, 0.43416549352140776, 0.587624044486587, 0.63115912018523779, 0.12888655255551806, 0.36995834870139233, 0.28212295524515674, 0.87798772057976782, 0.58401219727796039, 0.79156044985080998, 0.51450541168726349, 0.15239550865588192, 0.061141408862701363, 0.59586744454005902, 0.55167706148242124, 0.1667476738857816, 0.69140608281511462, 0.58818882195292232, 0.73181764841554864, 0.97403259987835089, 0.15626436508856645, 0.11461652386717469, 0.2300071423909481, 0.46588004754947787, 0.5861624081307395, 0.9143265986990653, 0.76871951137677952, 0.12532680628195958, 0.55023618391060425, 0.61607776323133079, 0.50279761276758428, 0.78461974811344859, 0.25937257839687133, 0.35171877254242567, 0.43035427669363724, 0.1357123535416388, 0.63298290553368153, 0.53756064366135237, 0.2317895900485919, 0.49743753365996091, 0.075835326605031894, 0.77626231705517568, 0.16563002843816799, 0.068416228084831388, 0.6596544224170563, 0.435509506284815, 0.28385447692653032, 0.92667327951906642, 0.80546089455217074, 0.70856235567416759, 0.95010862010951203, 0.092748978408795146, 0.98355924048060994, 0.36142630848061141, 0.61808545621745559, 0.89528885279585302, 0.070455191154982111, 0.23382827612356383, 0.64890316555506045, 0.58794528841140614, 0.59902494606438628, 0.91537659865975396, 0.54334226921988593, 0.4533445659851445, 0.12466900922579172, 0.34578112363516467, 0.11447437145138128, 0.86871746801132799, 0.53653037269382886, 0.15202531005914532, 0.56377666921492697, 0.16872257317104289, 0.45680452029007323, 0.98789196759489817, 0.21995332360289221, 0.91941805320330672, 0.73240269821350346, 0.62539744607958325, 0.69967113832859218, 0.92435314409209257, 0.97186037953648063, 0.67025348585716749, 0.66642621666838409, 0.67247436646092051, 0.34495139426836452, 0.96939010331778108, 0.22197202421540141, 0.81414659648247245, 0.5626797870601371, 0.58009559975708602, 0.26414676386194369, 0.70849248479673088, 0.31849502978410471, 0.7810364096370368, 0.47751009276821921, 0.92712298743793875, 0.15603671081565984, 0.41549130613351826, 0.4754507272903512, 0.7933762457318313, 0.59639883736437038, 0.94575677640148392, 0.43473983642585035, 0.2311707960600019, 0.87502224667469586, 0.46878195725138017, 0.59516774741546719, 0.72951445019657546, 0.026962508043272049, 0.21403161402758886, 0.40998120224824186, 0.86375210325745533, 0.75246425059692834, 0.14912874905112172, 0.010365521221360807, 0.55665984957469394, 0.5972033053660748, 0.80840420733620277, 0.9267350894598676, 0.64262052011337245, 0.52912681787114002, 0.2945724015453528, 0.50626175776339777, 0.94497402928569763, 0.15646758881344436, 0.55108893659717983, 0.68360836894912769, 0.8126156948179295, 0.05941106267129781, 0.27544509085204161, 0.5995473979168352, 0.33027052490898157, 0.71069501257719236, 0.17164354850954222, 0.27086378258439159, 0.77972418551776612, 0.072754591564822335, 0.11424973414606143, 0.76910355207097292, 0.57227125028723802, 0.94635808398446297, 0.93573927775703136, 0.78201300780942729, 0.8618391479511609, 0.86584020383208238, 0.38109230907774994, 0.041146013368455026, 0.20233756603549968, 0.41669084456012129, 0.88061583109978903, 0.27448297867854787, 0.16251968279451967, 0.32368327406485375, 0.48668637358935152, 0.32183190131438422, 0.51676523990589851, 0.38043378779100667, 0.9922695420980745, 0.85003410078668729, 0.20170266361119349, 0.50418101364210621, 0.11032035494582282, 0.26144967354512749, 0.22527221950376752, 0.48929866645212416, 0.39916592987286115, 0.45976934189646068, 0.14602455575303419, 0.93466523337774687, 0.14010786107615414, 0.56197661651657482, 0.97780368576466947, 0.74708794260178912, 0.61095512408985531, 0.36674076472107597, 0.96739447489922059, 0.61996582553755797, 0.99229013205995509, 0.33949700186622456, 0.78201457105883898, 0.58847112472518148, 0.36467837283143401, 0.42016231702088225, 0.19209942156803717, 0.34424265467034898, 0.19853278737722646, 0.94836585008133334, 0.94460682893840109, 0.80500395827401938, 0.92163667639167557, 0.021232286681910018, 0.7304600246079771, 0.52534011905104594, 0.33379419650867992, 0.89652840056044614, 0.53817883493920404, 0.11160891958950858, 0.69533930228740382, 0.28416497221965464, 0.18187743986979144, 0.42354145643011876, 0.88646039881380934, 0.16030579653684562, 0.11936228760556511, 0.43448643092017447, 0.5343409886005468, 0.88980129148370646, 0.80973723123675334, 0.6242296279723818, 0.82356010878530139, 0.54636081795203806, 0.20568612028242395, 0.99691613858331851, 0.35514070212442617, 0.035456526447434134, 0.37878912555194777, 0.78236910925466074, 0.011301857419791839, 0.11353153706951935, 0.72671747900969508, 0.93430942291208219, 0.57487882697545045, 0.9030069452975592, 0.13285164331491661, 0.050982978948696522, 0.020487325451066352, 0.84056499315093391, 0.95236615077073627, 0.75881335379607784, 0.99493198988751086, 0.90563572567337958, 0.61064032976026905, 0.85602513844651662, 0.40352591595357734, 0.75839533036085638, 0.46437196504791378, 0.76872338016193797, 0.21618184062331247, 0.43397957196010151, 0.62577100803325536, 0.5325004249855857, 0.46036937444076997, 0.044607272714439872, 0.27679225357277348, 0.65530183413064613, 0.074817219810858648, 0.95793368606795082, 0.48801044113269632, 0.38089059377180456, 0.46969204414897592, 0.86875407492984591, 0.92194900698634297, 0.51116050971732541, 0.048288708351036935, 0.67624601026251485, 0.4030268493153184, 0.89208918185291708, 0.36785354816060134, 0.13386866040700984, 0.83925340695227246, 0.96504894938830321, 0.16580743479332294, 0.2346507779825211, 0.68705429361833936, 0.54023972869578385, 0.48269733709719886, 0.59022484931212327, 0.63941665007255877, 0.5420376719176111, 0.75780197277990713, 0.749329907123651, 0.0031194357298339748, 0.51342112523937622, 0.71513451771952652, 0.72293027167519486, 0.66842079479422278, 0.48005622951484295, 0.85676341612083284, 0.19661629367016908, 0.29682804533105189, 0.62819396086687107, 0.79600202227193806, 0.17632888945363656, 0.49641541061404815, 0.22278758462236758, 0.47597066481504202, 0.81258802904864524, 0.97242553506530094, 0.4205987207097871, 0.035272055421407211, 0.35527831523832643, 0.52589311679478978, 0.2277411441499827, 0.27637828773291895, 0.75292560706944645, 0.28941775005800763, 0.37699291998369044, 0.38146622736556268, 0.079705430179429548, 0.84494583684807456, 0.43131669397428873, 0.19557697340402858, 0.72581966027098654, 0.79120656085015195, 0.38985069611522161, 0.31122317267415323, 0.0088690007944292049, 0.51251368590352142, 0.84233713450994774, 0.47181839049571694, 0.36035664197745509, 0.74188204782436162, 0.6804371329761294, 0.72033552470901796, 0.20226670731755814, 0.16702177812043584, 0.28595532583463956, 0.69191262520423047, 0.48608641339321601, 0.4778109901271439, 0.81418226339710964, 0.92159979263305636, 0.23715082422688316, 0.5432533753690395, 0.23922162113645451, 0.35323979929028537, 0.42158395656030367, 0.10331948816066228, 0.88486580701283668, 0.96601419279542622, 0.78884877673531095, 0.78463721307168277, 0.30963013282183061, 0.19318073215772891, 0.32551457097089376, 0.98901150144844463, 0.40283028601323045, 0.7363379659970648, 0.38620982445797603, 0.80737781944485165, 0.97788377485745148, 0.87461987237825023, 0.20503648525747853, 0.15599476778562971, 0.996834552548719, 0.091217285160814843, 0.49007882954154147, 0.73640707243389492, 0.42705951319734115, 0.79387123754387801, 0.51972651094432787, 0.47274119395366565, 0.6763170782773229, 0.83182546450876094, 0.24401371011576556, 0.093475521955740493, 0.090702284351538931, 0.89540545865806898, 0.56041844078208347, 0.76980993927923336, 0.21403393939960302, 0.24329649905333883, 0.76841361359340721, 0.069397024074121738, 0.56935272838042439, 0.98677661462125488, 0.23061882065508088, 0.08780838451102102, 0.8055169762579063, 0.075677686244372766, 0.39258236650158007, 0.27443249212899812, 0.14983669324027615, 0.6350667471863759, 0.28034167647553487, 0.64042017363620385, 0.28730573378771573, 0.43960620203834944, 0.51894338222022929, 0.46814280166501399, 0.57091357160680889, 0.81271165465081951, 0.64437300567845968, 0.31078890512830726, 0.19132539254005843, 0.18769163884655393, 0.70126319081386601, 0.40156772627874959, 0.57277053005436529, 0.27245562338344931, 0.95541906411581556, 0.77475950151360773, 0.44327606598693159, 0.18698900093827886, 0.26427703782101941, 0.87247026979271902, 0.73157961325720655, 0.2395999276154801, 0.52949420749397114, 0.55726231866391818, 0.30975572244548444, 0.38737141533992014, 0.85118655203614524, 0.34019859803554431, 0.80755787293394132, 0.51268490095580355, 0.20024667519988093, 0.64676553721248498, 0.71474636804441338, 0.462137577462987, 0.83343208348382536, 0.74492495261185154, 0.1786700799287132, 0.93389967481902736, 0.85426772205331636, 0.79383572172816252, 0.34248354506443834, 0.94067859971238499, 0.41003190315219906, 0.5610936219860021, 0.89503638461347867, 0.071606123134377087, 0.39928385939158795, 0.58699624032627529, 0.8164426465594441, 0.18126627815824714, 0.73026626180874632, 0.90195830959603973, 0.79000509624589754, 0.95176368744337958, 0.69205327356141288, 0.70291195133825379, 0.83001532264864808, 0.51976738607569972, 0.28016141048763854, 0.094699510127961961, 0.80341239368180695, 0.16369199886593355, 0.0026218565850170128, 0.52972304023440708, 0.63656916682749776, 0.95532210076245516, 0.52051354394836058, 0.92983553869988056, 0.63691449645119591, 0.096824111232177157, 0.35417864115361286, 0.74104737934901099, 0.98147622724345007, 0.53066683306910789, 0.039477840361593963, 0.15346603036215523, 0.0075232848778599148, 0.75344572002527788, 0.28748376892625538, 0.68027192878241605, 0.7008333115964277, 0.0046543153222569078, 0.79377201003197506, 0.3172174468212513, 0.90261450712373059, 0.31027951698868494, 0.6960071552301742, 0.91543149343324304, 0.91415880951836459, 0.81816128688665724, 0.057253018776837861, 0.58091214994658202, 0.21750534517272568, 0.60758594163544655, 0.36485611033125753, 0.63409893074607937, 0.10008069678462839, 0.55154504217018963, 0.1379639886065287, 0.15786231599936373, 0.58191789883360368, 0.067976384117225952, 0.76258535098640257, 0.071846672929797628, 0.61318347089435554, 0.59494463890033167, 0.79467665583599711, 0.48831596732394966, 0.67734203147374494, 0.8269958041722969, 0.40786363260561964, 0.05920387131002447, 0.090385207233239062, 0.50007596795967024, 0.49837152502137716, 0.67924967103150435, 0.49453177943221849, 0.86373278565631451, 0.92259016419930406, 0.087029561099704278, 0.52181464074520933, 0.31485243444426292, 0.039412512893333029, 0.43279900074702493, 0.3879635723549516, 0.67963928833761122, 0.2000408062758271, 0.8379075006483, 0.25404313031499581, 0.54787371185321998, 0.38456509942722961, 0.34893687490194303, 0.77140686265755698, 0.29010716807581793, 0.44137274485689182, 0.83301964419479191, 0.27210049348971721, 0.046110643943043872, 0.93225206242710512, 0.23913791942364082, 0.31174300026871293, 0.41057463321330512, 0.062946281674236992, 0.24903106092024685, 0.37124253114219929, 0.58934794950414071, 0.097781381276058177, 0.7902832211633658, 0.7534411483236727, 0.512797071922379, 0.67881958186842606, 0.42352638761659256, 0.10375750027387609, 0.51325037099637805, 0.53589395786473915, 0.39080913497443948, 0.94897302202406919, 0.43176596551299951, 0.23720601938571562, 0.68654161172702843, 0.035183118821644932, 0.84756831027055202, 0.22696305568678188, 0.19338476376025715, 0.42085130263183645, 0.30797629679175875, 0.43943599578347725, 0.92316569398558979, 0.064675764018914839, 0.13960862097212268, 0.46767646429264165, 0.22817234960114707, 0.41495016376075999, 0.72409046022460055, 0.59216628708273755, 0.46261161440022014, 0.62854419949258633, 0.099913293067426356, 0.77699899890252877, 0.96699205907155095, 0.62828319976051572, 0.93939179937454964, 0.22210000207312386, 0.88472344442675577, 0.19964567892524299, 0.31148938148156058, 0.5387148854951721, 0.91108663818950364, 0.86546908228245711, 0.1245984638644404, 0.39260446067318477, 0.6500642394572882, 0.301766322627251, 0.13315435126182706, 0.54644220036441393, 0.38866517460548755, 0.026223399135978709, 0.68479910854296988, 0.94000877719684317, 0.58795820813586386, 0.87670156452068237, 0.89303275981135199, 0.76433302223348876, 0.19221262631188329, 0.60617979724617499, 0.40461743449949028, 0.58170096566752216, 0.46781516809388723, 0.82529809341175631, 0.63405664050393018, 0.98841792181791632, 0.79499848643120818, 0.48058651536702401, 0.62434730441268893, 0.89036067306183531, 0.94665196640233784, 0.59981457965451868, 0.18444388367452047, 0.14833763390429278, 0.27421411730166556, 0.97019813567910662, 0.56297637529422995, 0.49820682822550688, 0.80805723484475944, 0.9310930937769063, 0.37386230642764584, 0.63350944710906421, 0.51932755775621742, 0.62032808066699685, 0.71015839150264026, 0.39511779140545789, 0.13475602929623676, 0.29253284763955512, 0.76991032146490757, 0.08512789444032387, 0.38677755257804358, 0.62280801993379886, 0.77952386906460391, 0.63343643226803792, 0.50688765918733425, 0.42580340104578984, 0.70516627783229957, 0.50264568261721976, 0.16383908953218496, 0.73619111947389915, 0.36463424052922289, 0.79858476535634682, 0.79725213011250007, 0.25367936956753556, 0.98334525887394331, 0.79970252302085409, 0.43848062767859097, 0.1209026919257038, 0.5638140315367145, 0.97740682593220574, 0.71112037552842877, 0.45743308006231687, 0.22356022582309099, 0.169919629204905, 0.87119225032956948, 0.90587510876434085, 0.7703812306809098, 0.12589099884799981, 0.12227888852004076, 0.096084793116467226, 0.99903938907812717, 0.67099828935097194, 0.4733761543002013, 0.65417719321304368, 0.60415755957724804, 0.46104518372928982, 0.13443520310418522, 0.69394903588537371, 0.2508629894013219, 0.95456287142079421, 0.78313814388722436, 0.17191505479794655, 0.035508319913643338, 0.32185278352644275, 0.26143208654808103, 0.3059384372189794, 0.3319301658070567, 0.20561097329669797, 0.22437687518102312, 0.81702809861913916, 0.64809239726180456, 0.11048101770318297, 0.64684396735984828, 0.12120366059196541, 0.70262201338195573, 0.52319469396242824, 0.39277671571228301, 0.15087333636359757, 0.54684949925945292, 0.60346834857878529, 0.7902894287491361, 0.068869711143793699, 0.56037247888733166, 0.062624027863095399, 0.52395216286537349, 0.24913356507612672, 0.67705127565942635, 0.98977697047196744, 0.21068291085818946, 0.28719522985676127, 0.88848939781080949, 0.10107950824125422, 0.15301264714558682, 0.91824301218266824, 0.33255771325686923, 0.12333173162436273, 0.55427060456019073, 0.75771107578506369, 0.84420839227311051, 0.12094118913075347, 0.99763890003679956, 0.80065976743206058, 0.65575395826426852, 0.49948547225214923, 0.8575409184988253, 0.87767931486195683, 0.69401830609723603, 0.87391875655354601, 0.60217143382958882, 0.13751869395724492, 0.32619009334585469, 0.78212837742611319, 0.74606295535111267, 0.17297830483175736, 0.31032183432790794, 0.45546404776313643, 0.048588538836200623, 0.15189067688161906, 0.44695330046657966, 0.35604794079893121, 0.114339747908622, 0.15562593788158874, 0.44618022314087968, 0.72110625134597273, 0.47798546869782532, 0.9930908481577061, 0.34310660558228745, 0.5826333908359913, 0.53832271011285859, 0.88134711828696799, 0.01279047695298674, 0.57193052481419793, 0.88952321321119765, 0.24496652602947022, 0.5223700981737438, 0.70092496432427154, 0.43202255478742768, 0.79802324019663728, 0.19722316130175277, 0.33193853170467502, 0.72252079123615909, 0.14036411884743605, 0.25892145252586474, 0.17176463430124711, 0.064385828207362716, 0.1664984481030648, 0.022882370350597259, 0.95216063792337491, 0.44895812607087793, 0.5620214796333739, 0.12568673453370149, 0.03963657643900298, 0.39256045430159692, 0.67560666450089957, 0.95731104232521613, 0.10722044465297953, 0.51434574542994982, 0.60122038158470925, 0.16746950823393847, 0.22731863012044129, 0.17800543461425145, 0.21550350784528471, 0.31591510354897467, 0.42098323958499384, 0.12798697295679318, 0.50873263826484083, 0.38680890908981114, 0.31794389006592128, 0.38097840443983233, 0.49324691541891152, 0.83502582376571555, 0.59312776426453617, 0.86617813757812701, 0.39885289357436338, 0.35245257124807039, 0.2341328865360468, 0.71309917695175351, 0.85472696467976683, 0.40456180284051657, 0.87129733119472663, 0.69759664804661081, 0.16827976058968064, 0.97628673841016211, 0.040289845933898505, 0.13380555898334767, 0.38176074219756573, 0.84933534198208627, 0.51612682229709883, 0.21422129131231471, 0.37532372565242123, 0.42165567372560975, 0.72337185152349825, 0.47671585211505019, 0.29458984648579911, 0.13000277239165414, 0.43678367684271879, 0.68008262237130046, 0.061243498521461825, 0.91727720568771387, 0.91910330408223284, 0.4793630595744256, 0.6358000310791917, 0.61814384319631133, 0.77386895816625556, 0.91683799879554484, 0.9490237020200698, 0.95588394000718324, 0.59133038065807653, 0.72578407297709846, 0.02208605253473972, 0.54878201168190921, 0.67522267513778056, 0.028387351481980239, 0.10407663887312146, 0.28630068552902355, 0.69679965999293059, 0.77680675339399508, 0.92527746471223449, 0.31815300759605036, 0.79737420167778816, 0.24746560076754354, 0.17327745041717291, 0.53331699072702965, 0.56466376151998043, 0.81931656998735569, 0.31365523612434343, 0.21977054132325979, 0.89723988477440431, 0.44136864348479865, 0.72611978165704538, 0.91901901818562848, 0.22885265523786147, 0.0070996178474971305, 0.64114749833215701, 0.6969555722885703, 0.34954516475631747, 0.34012303223284635, 0.42089247855775336, 0.56874045298673548, 0.92940906451086247, 0.11156609958380204, 0.75163806351687268, 0.75545140168427538, 0.61850400752362233, 0.67026335971606177, 0.70103734519491545, 0.22164597906999284, 0.53674999615579477, 0.39951610729037768, 0.14459466931420351, 0.84990940662070436, 0.86145604993092029, 0.96452535010988427, 0.88986231336837052, 0.19921559124343324, 0.54219983075511291, 0.45364283263720695, 0.27251492422199486, 0.24928857162564688, 0.92496829398660396, 0.0090878764252503297, 0.036267399211095008, 0.28065584855518233, 0.040403840070650787, 0.69780855116566864, 0.94786900881242375, 0.72447696154215957, 0.27773827289053132, 0.038708116062799003, 0.98603325833756172, 0.12924355383885611, 0.68011168496773045, 0.051211691388274305, 0.40253361195458071, 0.24324630685145898, 0.71611240778087093, 0.106161749276099, 0.22661483859946074, 0.60734271459048006, 0.13889255099645725, 0.03898728751969327, 0.74793498768625255, 0.032637401331348515, 0.87681689240363125, 0.90307449771026616, 0.42451418105372329, 0.27399539031817566];
    it('should return the median', () => {
        expect(median([])).toEqual(undefined);
        expect(median([0])).toEqual(0);
        expect(median([1])).toEqual(1);
        expect(median([1, 2])).toEqual(1.5);
        expect(median([1, 2, 1])).toEqual(1);
        expect(median([3, 2, 1])).toEqual(2);
        expect(median(data)).toBeCloseTo(0.513, 2);
    });

    it('should throw on invalid value', () => {
        expect(() => median()).toThrow(/input must be an array/);
    });
});
