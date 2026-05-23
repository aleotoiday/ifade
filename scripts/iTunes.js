(function () {
let body = $response.body;
let aleo = null, data = null, anchor = false;
function tryParse(raw) {
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}
aleo = tryParse(body);
if (!aleo) {
  let start = body.indexOf("{");
  let end = body.lastIndexOf("}");
  if (start !== -1 && end !== -1) {
    aleo = tryParse(body.substring(start, end + 1));
  }
}
if (!aleo) {
  let match = body.match(/\{[\s\S]*\}/);
  if (match) {
    aleo = tryParse(match[0]);
  }
}
if (!aleo) {
  $done({});
  return;
}
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const bundle_id = aleo.receipt["bundle_id"] || aleo.receipt["Bundle_Id"];

const list = {
  'AdBlocker': { tp: 'timeb', hx: 'hxpda', id: "com.va.adBlocker.lifeTimefree" },
  'Again': { tp: 'timeb', hx: 'hxpda', id: "com.owen.again.profession" },
  'AIAssistant': { tp: 'timea', hx: 'hxpda', id: "AIchat_1w_7.99_trial" },
  'AllMyBatteries': { tp: 'timeb', hx: 'hxpda', id: "AllMyBatteries_Ultimate" },
  'AnyDown': { tp: 'timeb', hx: 'hxpda', id: "com.xiaoqi.down.forever" },
  'AppAlarmIOS': { tp: 'timea', hx: 'hxpda', id: "alarm.me.vip.year.tier1" },
  'BeatStation': { tp: 'timea', hx: 'hxpda', id: "BS_Pro_Yearly" },
  'BestColor': { tp: 'timea', hx: 'hxpda', id: "com.bestColor.tool.month" },
  'BingQiTools': { tp: 'timea', hx: 'hxpda', id: "bingqi_e2" },
  'BodyTune': { tp: 'timea', hx: 'hxpda', id: "Bodypro1" },
  'Boom': { tp: 'timeb', hx: 'hxpda', id: "com.globaldelight.iBoom.LifetimeDiscountPack" },
  'BookReader': { tp: 'timea', hx: 'hxpda', id: "com.reader.1year" },
  'BuBuSZ': { tp: 'timea', hx: 'hxpda', id: "quaVersion" },
  'ChickAlarmClock': { tp: 'timeb', hx: 'hxpda', id: "Lifetime_Promotion" },
  'ChmReader': { tp: 'timeb', hx: 'hxpda', id: "EpubReader_ProVersion" },
  'ChordMaster': { tp: 'timeb', hx: 'hxpda', id: "com.chordMaster.once" },
  'CodeSnippet': { tp: 'timea', hx: 'hxpda', id: "it.beatcode.codesnippetpro.annualSubscription" },
  'ColorCapture': { tp: 'timeb', hx: 'hxpda', id: "10001" },
  'CongZhenBaZi': { tp: 'timeb', hx: 'hxpda', id: "vip_forever_78" },
  'CongZhenQiMen': { tp: 'timea', hx: 'hxpda', id: "cn.congzhen.CongZhenQiMen.yearlyplan" },
  'ContractMaster': { tp: 'timea', hx: 'hxpda', id: "com.qingxiu.contracts.monthly" },
  'DHWaterMarkManager': { tp: 'timea', hx: 'hxpda', id: "lifetimeVIP_001" },
  'Dial': { tp: 'timea', hx: 'hxpda', id: "2104" },
  'Digital%20Planner': { tp: 'timea', hx: 'hxpda', id: "com.softwings.DigitalPlanner.1year" },
  'DrumPads': { tp: 'timeb', hx: 'hxpda', id: "com.gismart.drumpads.pro_lifetime_30" },
  'DuChuangZhe': { tp: 'timea', hx: 'hxpda', id: "org.zrey.du.main" },
  'ECGANALYZER': { tp: 'timea', hx: 'hxpda', id: "com.wms.hrv.yearlyfamilysharing" },
  'ECGPlus': { tp: 'timeb', hx: 'hxpda', id: "com.wms.hrv.pro" },
  'EWA': { tp: 'timea', hx: 'hxpda', id: "com.ewa.renewable.subscription.year8" },
  'EnglishTalent': { tp: 'timea', hx: 'hxpda', id: "com.mango.newYearVip", strict: "auto" },
  'ExcelSpreadSheetsWPS': { tp: 'timea', hx: 'hxpda', id: "com.turbocms.SimpleSpreadSheet.viponeyear" },
  'FETreeVideoChange': { tp: 'timeb', hx: 'hxpda', id: "com.dj.videototext.forever" },
  'FancyCamPlus': { tp: 'timea', hx: 'hxpda', id: "com.alphaplus.fancycam.year.198" },
  'FastPlayer': { tp: 'timea', hx: 'hxpda', id: "VideoPlayer_ProVersion" },
  'FileArtifact': { tp: 'timeb', hx: 'hxpda', id: "com.shengzhou.fileartifact.permanent" },
  'FileMaster': { tp: 'timeb', hx: 'hxpda', id: "FileMaster_ProVersion" },
  'Filterra': { tp: 'timeb', hx: 'hxpda', id: "com.filterra.wtonetimepurchase" },
  'FlashTransportMaster': { tp: 'timea', hx: 'hxpda', id: "com.flashtransport.fightenegery.yearly.base" },
  'Focos': { tp: 'timea', hx: 'hxpda', id: "com.focos.1w_t4_1w" },
  'FoodIdentificationTool': { tp: 'timeb', hx: 'hxpda', id: "20002" },
  'Fotoz': { tp: 'timeb', hx: 'hxpda', id: "com.kiddy.fotoz.ipa.pro" },
  'FourthPPT': { tp: 'timeb', hx: 'hxpda', id: "com.FourthPPT.Mobile.Forever" },
  'GPSMaker': { tp: 'timea', hx: 'hxpda', id: "theodolite_vip_year" },
  'GenerateAllOrdersTool': { tp: 'timea', hx: 'hxpda', id: "Order_Vip_010" },
  'GoodTask': { tp: 'timeb', hx: 'hxpda', id: "com.hahainteractive.goodtask3.pro" },
  'Graphionica': { tp: 'timea', hx: 'hxpda', id: "premium_year" },
  'GreetingScanner': { tp: 'timea', hx: 'hxpda', id: "com.alphaplus.greetingscaner.w.b" },
  'Guitar%20Gravitas': { tp: 'timea', hx: 'hxpda', id: "GuitarGravitasChordsScalesArpeggiosLessons" },
  'Guitar%20Notation': { tp: 'timea', hx: 'hxpda', id: "gn_access_weekly" },
  'HRV': { hx: 'hxpdc', id: "com.stress.test.record.yearly" },
  'Habbit': { tp: 'timea', hx: 'hxpda', id: "HabitUpYearly" },
  'HandNote': { tp: 'timeb', hx: 'hxpda', id: "permanent_membership" },
  'HashPhotos': { tp: 'timeb', hx: 'hxpda', id: "com.kobaltlab.HashPhotos.iap.proLifetime" },
  'HiddenBox': { tp: 'timec', hx: 'hxpdb', version: "1" },
  'ICalculator': { tp: 'timea', hx: 'hxpda', id: "co.airapps.calculator.year" },
  'IPTV%20Flixana': { tp: 'timeb', hx: 'hxpda', id: "iptv_flixana_lifetime_sub" },
  'IconChange': { tp: 'timea', hx: 'hxpda', id: "iconeryearvip" },
  'Idea': { tp: 'timea', hx: 'hxpda', id: "top.ideaapp.ideaiOS.membership.oneyear" },
  'JCCalendar': { tp: 'timeb', hx: 'hxpda', id: "com.sjc.calendar.vip.lifelong" },
  'Kilonotes': { tp: 'timea', hx: 'hxpda', id: "kipa_kilonotes_quarter_subscription" },
  'LifeTracker': { tp: 'timea', hx: 'hxpda', id: "com.dk.lifetracker.yearplan" },
  'LingLongShouZ': { tp: 'timea', hx: 'hxpda', id: "zhenwushouzhangQuarterlyPlus" },
  'LogInput': { tp: 'timea', hx: 'hxpda', id: "com.logcg.loginput" },
  'Luminous': { tp: 'timea', hx: 'hxpda', id: "com.spacemushrooms.weekly" },
  'MGhostLens': { tp: 'timea', hx: 'hxpda', id: "com.ghostlens.premium1month" },
  'MOLDIV': { tp: 'timeb', hx: 'hxpda', id: "com.jellybus.Moldiv.IAP.PRO7999" },
  'MWeb%20iOS': { tp: 'timeb', hx: 'hxpda', id: "10001" },
  'MagicWidget': { tp: 'timeb', hx: 'hxpda', id: "cf__forever_0_4.7.1" },
  'MaiqiSun': { tp: 'timeb', hx: 'hxpda', id: "life_cn_68" },
  'Mango6Minute': { tp: 'timea', hx: 'hxpda', id: "576170870" },
  'MeasurementTools': { tp: 'timea', hx: 'hxpda', id: "mesurementyearvip" },
  'MediaConvert': { tp: 'timeb', hx: 'hxpda', id: "MediaConverter_ProVersion" },
  'MediaEditor': { tp: 'timeb', hx: 'hxpda', id: "alwaysowner" },
  'MeowTalk': { tp: 'timea', hx: 'hxpda', id: "meowtalk.month.basic.autorenewable.subscription" },
  'MessageHold': { tp: 'timea', hx: 'hxpda', id: "com.messagehold.forever" },
  'Miary': { tp: 'timeb', hx: 'hxpda', id: "lifetime_sub" },
  'Mindkit': { tp: 'timeb', hx: 'hxpda', id: "mindkit_permanently" },
  'MiniMouse': { tp: 'timea', hx: 'hxpda', id: "minimouse_vip_1year" },
  'MoMoShouZhang': { tp: 'timea', hx: 'hxpda', id: "shunchangshouzhangQuarterlyPlus" },
  'MoneyWiz': { tp: 'timea', hx: 'hxpda', id: "com.moneywiz.personalfinance.1year" },
  'MonitorPlus': { tp: 'timeb', hx: 'hxpda', id: "com.unhonin.MonitorPlus.proversion" },
  'MoodTracker': { tp: 'timeb', hx: 'hxpda', id: "co.vulcanlabs.moodtracker.lifetime2" },
  'Motivation': { tp: 'timea', hx: 'hxpda', id: "com.monkeytaps.motivation.premium.year3" },
  'Muza': { tp: 'timea', hx: 'hxpda', id: "com.appmuza.premium_year" },
  'MyAlbum': { tp: 'timeb', hx: 'hxpda', id: "com.colin.myalbum.isUpgradeVip" },
  'MyDiary': { tp: 'timea', hx: 'hxpda', id: "diary.yearly.vip.1029" },
  'NYMF': { tp: 'timea', hx: 'hxpda', id: "com.nymf.app.premium_year" },
  'NoteKeys': { tp: 'timea', hx: 'hxpda', id: "notekeys_access_weekly" },
  'Notation%20Pad': { tp: 'timea', hx: 'hxpda', id: "np_access_weekly" },
  'Nutrilio': { tp: 'timea', hx: 'hxpda', id: "net.nutrilio.one_year_plus" },
  'One%20Markdown': { tp: 'timeb', hx: 'hxpda', id: "10012" },
  'OneExtractor': { tp: 'timeb', hx: 'hxpda', id: "com.OneExtractor.Video.Forever" },
  'OrderGenerator': { tp: 'timeb', hx: 'hxpda', id: "oder_pay_forever" },
  'Overdrop': { tp: 'timeb', hx: 'hxpda', id: "com.weather.overdrop.forever" },
  'PDFReaderPro%20Free': { tp: 'timeb', hx: 'hxpda', id: "com.pdfreaderpro.free.member.all_access_pack_permanent_license.001" },
  'PICSPLAY': { tp: 'timea', hx: 'hxpda', id: "com.jellybus.PicsPlay2.IAP.PRO5999" },
  'Packet': { tp: 'timeb', hx: 'hxpda', id: "com.aaaalab.nepacket.iap.full" },
  'Paste%20Keyboard': { tp: 'timea', hx: 'hxpda', id: "com.keyboard.1yetr" },
  'Period': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.time.pro" },
  'PerfectImage': { tp: 'timea', hx: 'hxpda', id: "Perfect_Image_VIP_Yearly" },
  'Photo%20Cutout': { tp: 'timea', hx: 'hxpda', id: "com.icepine.allyear" },
  'PhotoCollagePro': { tp: 'timeb', hx: 'hxpda', id: "PHOTABLE_PREMIUM" },
  'PhotoWhite': { tp: 'timeb', hx: 'hxpda', id: "org.zrey.photowhite.flash_lifetime" },
  'PhotosSorter': { tp: 'timeb', hx: 'hxpda', id: "sorter.pro.ipa" },
  'Piano%20Fantasy': { tp: 'timea', hx: 'hxpda', id: "com.lotuz.PianoFantasy.weekwithtrail" },
  'Piano%20Plus': { tp: 'timea', hx: 'hxpda', id: "kn_access_weekly" },
  'Piano%20Rush': { tp: 'timea', hx: 'hxpda', id: "com.lotuz.PianoPro.weekwithtrail" },
  'PicCompress': { tp: 'timea', hx: 'hxpda', id: "pc_vip_new_1y" },
  'Picsew': { tp: 'timeb', hx: 'hxpdb', id: "com.sugarmo.ScrollClip.pro" },
  'Pollykann': { tp: 'timeb', hx: 'hxpda', id: "vip.forever.pollykann" },
  'PolyGit': { tp: 'timea', hx: 'hxpda', id: "com.polygitapp.polygit.pro.yearly" },
  'Presets': { tp: 'timea', hx: 'hxpda', id: "com.chromatech.chroma.yearlyAutoRenewable" },
  'ProREC': { tp: 'timea', hx: 'hxpda', id: "ProAudioCamera_Annual" },
  'ProFit': { tp: 'timea', hx: 'hxpda', id: "com.maxty.gofitness.yearlyplan" },
  'ProKnockOut': { tp: 'timed', hx: 'hxpda', id: "com.knockout.SVIP.50off", ids: "com.knockout.1year.AIVIP" },
  'Prookie': { tp: 'timea', hx: 'hxpda', id: "prookie.month.withtrial.0615" },
  'ProtractorEdge': { tp: 'timea', hx: 'hxpda', id: "ProtracatorEdge.PremiumAccess" },
  'PulseWatch': { tp: 'timeb', hx: 'hxpda', id: "relaxlife_ebp" },
  'Pure%20Tuber%20Pro': { tp: 'timeb', hx: 'hxpda', id: "lifetime" },
  'RBrowser': { tp: 'timea', hx: 'hxpda', id: "com.mm.RBroswer.product11" },
  'RawPlus': { tp: 'timea', hx: 'hxpda', id: "com.dynamicappdesign.rawplus.yearlysubscription" },
  'Reader': { tp: 'timeb', hx: 'hxpda', id: "com.xiaoqi.reader.forever" },
  'Rookie': { tp: 'timea', hx: 'hxpda', id: "com.jellybus.Rookie.IAP.PRO5999" },
  'SHScan': { tp: 'timea', hx: 'hxpda', id: "com.ws.SHScanFree.Year" },
  'ServerKit': { tp: 'timea', hx: 'hxpda', id: "com.serverkit.subscription.year.a" },
  'SheetMusicPro': { tp: 'timea', hx: 'hxpda', id: "sheetmusicpro.yearwithtrial" },
  'ShotOn': { tp: 'timeb', hx: 'hxpda', id: "com.colin.shoton.forevervip" },
  'SilProject': { tp: 'timea', hx: 'hxpda', id: "com.sm.Alina.Pro" },
  'SimpleNotation': { tp: 'timeb', hx: 'hxpda', id: "com.xinlin.notation.once" },
  'SmartGym': { tp: 'timea', hx: 'hxpda', id: "com.smartgymapp.smartgym.premiumuserworkoutsyearly" },
  'Smoke': { tp: 'timea', hx: 'hxpda', id: "smoke19870727" },
  'SnakeReader': { tp: 'timea', hx: 'hxpda', id: "com.lyran.snakescanner.premium18" },
  'SoundLab': { tp: 'timeb', hx: 'hxpda', id: "8001" },
  'StandbyWidget': { tp: 'timed', hx: 'hxpda', id: "com.standby.idream.year.68", ids: "standbyus.nonconsume.missingyou" },
  'Storybeat': { tp: 'timea', hx: 'hxpda', id: "yearly_1" },
  'Straw': { tp: 'timea', hx: 'hxpda', id: "com.1year.eyedropper" },
  'SuperDriving': { tp: 'timeb', hx: 'hxpda', id: "jiakao_vip_forever" },
  'SuperElves': { tp: 'timeb', hx: 'hxpda', id: "com.SuperElves.Answer.Forever" },
  'SuperMandarin': { tp: 'timea', hx: 'hxpda', id: "pth_vip_year" },
  'SuperPointer': { tp: 'timeb', hx: 'hxpda', id: "com.SuperPointer.Location.Forever" },
  'SuperQuestion': { tp: 'timea', hx: 'hxpda', id: "qtzs_vip_year" },
  'SuperWidget': { tp: 'timea', hx: 'hxpda', id: "com.focoslive" },
  'SurveyorPro': { tp: 'timea', hx: 'hxpda', id: "com.celiangyuan.SurveyorPro.OneYear" },
  'SymbolKeyboard': { tp: 'timeb', hx: 'hxpda', id: "fronts.keyboard.singingfish.one" },
  'Synthesizer': { tp: 'timea', hx: 'hxpda', id: "com.qingxiu.synthesizer.mon" },
  'TT': { tp: 'timea', hx: 'hxpda', id: "com.55panda.hicalculator.year_sub" },
  'TheLastFilm': { tp: 'timea', hx: 'hxpda', id: "Filmroll_Pro_1Year" },
  'TimeCut': { tp: 'timea', hx: 'hxpda', id: "com.floatcamellia.hfrslowmotion.forevervip" },
  'Tinglee': { tp: 'timea', hx: 'hxpdb', id: "vip.forever.tinglee" },
  'TinyPNGTool': { tp: 'timea', hx: 'hxpda', id: "com.tinypngtool.tool.weekvip" },
  'Translator': { tp: 'timea', hx: 'hxpda', id: "trans_sub_week" },
  'Tuesday': { tp: 'timeb', hx: 'hxpda', id: "PIGLET_VIP_Forever" },
  'TypeOn%20Keyboard': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.book.vip" },
  'Utsuki': { tp: 'timea', hx: 'hxpda', id: "KameePro" },
  'VDIT': { tp: 'timeb', hx: 'hxpda', id: "me.imgbase.videoday.profeaturesLifetime" },
  'VideoEditor': { tp: 'timeb', hx: 'hxpda', id: "com.god.videohand.alwaysowner" },
  'VideoHelper': { tp: 'timeb', hx: 'hxpda', id: "vip_service" },
  'WallpaperWidget': { tp: 'timea', hx: 'hxpda', id: "com.widget.theme.yearly.3dayfree" },
  'Wallpapers': { tp: 'timea', hx: 'hxpda', id: "wallpaperworld.subscription.yearly.12.notrial" },
  'WasteCat': { tp: 'timeb', hx: 'hxpda', id: "dev.sanjin.WasteCat.PermanentVip" },
  'WatchWallpaper': { tp: 'timea', hx: 'hxpda', id: "indie.davidwang.WatchWallpaper.yearsubscriptegold" },
  'WaterMinder': { tp: 'timea', hx: 'hxpda', id: "waterminder.premiumYearly" },
  'WaterMaskCamera': { tp: 'timea', hx: 'hxpda', id: "com.camera.watermark.yearly.3dayfree" },
  'Wext': { tp: 'timeb', hx: 'hxpda', id: "com.lmf.wext.life" },
  'WidgetBox': { tp: 'timeb', hx: 'hxpda', id: "widgetlab001" },
  'XIAOTangHomeParadise': { tp: 'timea', hx: 'hxpda', id: "com.yuee.mo2" },
  'Xfuse': { tp: 'timeb', hx: 'hxpda', id: "com.xfuse.ProVision" },
  'XiangCePhoto': { tp: 'timeb', hx: 'hxpda', id: "ql128" },
  'XinQingRiJi': { tp: 'timea', hx: 'hxpda', id: "zhiwenshouzhangQuarterlyPlus" },
  'YSBrowser': { tp: 'timeb', hx: 'hxpda', id: "com.ys.pro" },
  'YiJianKouTu': { tp: 'timea', hx: 'hxpda', id: "XiChaoYiJianKouTuPlus" },
  'YinzhangMaster': { tp: 'timeb', hx: 'hxpda', id: "com.xiaoqi.seal.forever" },
  'ZHUBEN': { tp: 'timea', hx: 'hxpda', id: "com.xiaoyu.yue" },
  'ZJTBiaoGe': { tp: 'timea', hx: 'hxpda', id: "zhangjt.biaoge.monthvip" },
  'ZenJournal': { tp: 'timea', hx: 'hxpda', id: "zen_pro" },
  'ZeroTuImg': { tp: 'timea', hx: 'hxpda', id: "ZeroTuImgPlus" },
  'art.yueyin.ebook-convert': { tp: 'timea', hx: 'hxpda', id: "art.yueyin.ebook.year" },
  'bazaart': { tp: 'timea', hx: 'hxpda', id: "Bazaart_Super_Three_Months_v4" },
  'com.RuoG.Pixiu': { tp: 'timea', hx: 'hxpda', id: "com.RuoG.Pixiu.VIPYear" },
  'com.beauty.MeiTui': { tp: 'timea', hx: 'hxpda', id: "vip_member_v3_365day" },
  'com.damon.dubbing': { tp: 'timea', hx: 'hxpda', id: "com.damon.dubbing.vip12" },
  'com.dandelion.Routine': { tp: 'timeb', hx: 'hxpda', id: "membership" },
  'com.decibel.tool': { tp: 'timea', hx: 'hxpda', id: "decibel98free3" },
  'com.floatcamellia.motionninja': { tp: 'timea', hx: 'hxpda', id: "com.floatcamellia.motionninja.yearlyvip" },
  'com.floatcamellia.motiok': { tp: 'timea', hx: 'hxpda', id: "com.floatcamellia.motiok.vipforever" },
  'com.floatcamellia.prettyup': { tp: 'timeb', hx: 'hxpda', id: "com.floatcamellia.prettyup.onetimepurchase" },
  'com.hanchongzan.book': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.book.vip" },
  'com.hanchongzan.loverlist': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.loverlist.01" },
  'com.hanchongzan.period': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.period.girl" },
  'com.ideack.ASR': { tp: 'timeb', hx: 'hxpda', id: "ASR_Permanent_Plan" },
  'com.ideack.BusinessCard': { tp: 'timeb', hx: 'hxpda', id: "BusinessCardVipPerpetual" },
  'com.ideack.MagicAudio': { tp: 'timeb', hx: 'hxpdb', id: "MagicAudioPermanent" },
  'com.idealityapp.VideoEditing': { tp: 'timeb', hx: 'hxpda', id: "MagicVideo_Vip_Permanent" },
  'com.iuuapp.audiomaker': { tp: 'timed', hx: 'hxpda', id: "com.iuuapp.audiomaker.cloud.year", ids: "com.iuuapp.audiomaker.removeads" },
  'com.kuaijiezhilingdashi.appname': { tp: 'timea', hx: 'hxpda', id: "com.othermaster.yearlyvip" },
  'com.lockwidt.cn': { tp: 'timea', hx: 'hxpda', id: "com.lockwidt.cn.member" },
  'com.maine.aifill': { tp: 'timeb', hx: 'hxpda', id: "com.maine.aifill.unlimited" },
  'com.richads.saucyart': { tp: 'timea', hx: 'hxpda', id: "com.richads.saucyart.sub.quarterly_29.99" },
  'com.sixiaobo.MusCut': { tp: 'timeb', hx: 'hxpdb', id: "com.purecollage.pro" },
  'com.skysoft.removalfree': { tp: 'timea', hx: 'hxpda', id: "com.skysoft.removalfree.discount.unlimitedaccess" },
  'com.teadoku.flashnote': { tp: 'timea', hx: 'hxpda', id: "pro_ios_ipad_mac" },
  'com.traveltao.ExchangeAssistant': { tp: 'timea', hx: 'hxpda', id: "lxbyplus" },
  'com.visualmidi.app.perfectpiano.Perfect-Piano': { tp: 'timea', hx: 'hxpda', id: "auto_renew_monthly_subscription" },
  'com.ydatong.dingdone': { tp: 'timeb', hx: 'hxpda', id: "com.ydatong.dingdone.vip.forever" },
  'com.zijayrate.analogcam': { tp: 'timea', hx: 'hxpda', id: "com.zijayrate.analogcam.vipforever10" },
  'com.ziheng.OneBox': { tp: 'timeb', hx: 'hxpda', id: "com.ziheng.OneBox" },
  'darkWeb': { tp: 'timea', hx: 'hxpda', id: "dforce_unlock_all_functions" },
  'film': { tp: 'timea', hx: 'hxpda', id: "pro_auto_subscribe_year_ovs" },
  'habitdot': { tp: 'timeb', hx: 'hxpda', id: "habitdots_pro_forever" },
  'imgplay': { tp: 'timea', hx: 'hxpda', id: "me.imgbase.imgplay.subscriptionYearly" },
  'intolive': { tp: 'timea', hx: 'hxpda', id: "me.imgbase.intolive.proSubYearly" },
  'iVCam': { tp: 'timeb', hx: 'hxpda', id: "ivcam.full" },
  'killer.sudoku.free.brain.puzzle': { tp: 'timea', hx: 'hxpda', id: "ks.i.iap.premium" },
  'moment': { tp: 'timea', hx: 'hxpda', id: "PYJMoment2" },
  'one%20sec': { tp: 'timea', hx: 'hxpda', id: "wtf.riedel.one_sec.pro.annual.individual" },
  'org.zrey.metion': { tp: 'timed', hx: 'hxpda', id: "org.zrey.metion.pro", ids: "org.zrey.metion.main" },
  'qxwp copy': { tp: 'timed', hx: 'hxpda', id: "com.chowjoe.wp2free.year.pro", ids: "com.chowjoe.wp2free.coin.70" },
  'qxzs': { tp: 'timeb', hx: 'hxpda', id: "yongjiu" },
  'stretchworkout': { tp: 'timea', hx: 'hxpda', id: "com.abishkking.premiumYearStretch" },
  'sudoku.puzzle.free.game.brain': { tp: 'timea', hx: 'hxpda', id: "sudoku.i.sub.vvip.p1y" },
  'vibee': { tp: 'timea', hx: 'hxpda', id: "com.vibee.year.bigchampagne" },
  'vpn': { tp: 'timea', hx: 'hxpda', id: "yearautorenew" },
  'xTerminal': { tp: 'timea', hx: 'hxpda', id: "xterminal.pro2" }
};

const autoMap = {
  year: [
    'com.internet-rocks',
    'co.airapps'
  ],
  yearly: [
    'com.pocket'
  ],
  yearlysubscription: [
    'solutions.wzp'
  ],
  lifetime: [
    'co.vulcanlabs'
  ],
  forever: []
};

const nullExpireApps = [];

const purchase = "2026-01-01T00:00:00Z";
const expiration = "2099-01-01T00:00:00Z";

const AutoID = {
  year: (bid) => `${bid}.year`,
  yearly: (bid) => `${bid}.yearly`,
  yearlysubscription: (bid) => `${bid}.yearlysubscription`,
  lifetime: (bid) => `${bid}.lifetime`,
  forever: (bid) => `${bid}.Forever`
};

for (const type in autoMap) {
  autoMap[type].forEach(key => {
    if (!list[key]) {
      const isForever = ['lifetime', 'forever'].includes(type);
      list[key] = {
        tp: isForever ? 'timeb' : 'timea',
        hx: 'hxpda',
        auto: true,
        autoType: type
      };
    }
  });
}

function rand(len) {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(Math.random() * 10);
  return s;
}

function format(time) {
  return time.toISOString().replace(/\.\d{3}Z$/, 'Z').replace('T', ' ').replace('Z', ' Etc/GMT');
}

function formatPST(time) {
  let pst = new Date(time.getTime() - 7 * 3600 * 1000);
  return pst.toISOString().replace(/\.\d{3}Z$/, 'Z').replace('T', ' ').replace('Z', ' America/Los_Angeles');
}

let now = new Date(purchase);
let start = new Date(now.getTime() - 60 * 1000);
let expire = new Date(now.getTime() + 3650 * 86400000);
let fixedExpire = new Date(expiration);

let transactionid = "49000" + rand(10);

for (const i in list) {
  const regex = new RegExp('^' + i, 'i');
  if (regex.test(ua) || regex.test(bundle_id)) {
    let {tp, hx, id, ids, version, strict, auto, autoType} = list[i];
    if (auto && autoType && AutoID[autoType]) {
      id = AutoID[autoType](bundle_id);
    }
    const forceNull = nullExpireApps.includes(i);
    let history = buildHistory(id, tp, strict, forceNull);
    let latest = history[history.length - 1];
    switch (tp) {
      case 'timea':
        data = [latest];
        break;
      case 'timeb':
        data = [latest];
        break;
      case 'timec':
        data = [];
        break;
      case 'timed':
        data = [build(ids, new Date(latest.purchase_date), expire, 'timeb', strict, forceNull), latest];
        break;
    }
    if (hx === 'hxpda') {
      aleo.receipt.in_app = data;
      aleo.latest_receipt_info = strict ? history : data;
      aleo.pending_renewal_info = [{
        product_id: id,
        original_transaction_id: transactionid,
        auto_renew_product_id: id,
        auto_renew_status: '1'
      }];
      aleo.latest_receipt = fakeReceipt();
    } else if (hx === 'hxpdb') {
      aleo.receipt.in_app = data;
    } else if (hx === 'hxpdc') {
      const patch = {
        expires_date_formatted: format(fixedExpire),
        expires_date: String(fixedExpire.getTime()),
        expires_date_formatted_pst: formatPST(fixedExpire),
        purchase_date: format(now),
        purchase_date_ms: String(now.getTime()),
        purchase_date_pst: formatPST(now),
        original_purchase_date: format(start),
        original_purchase_date_ms: String(start.getTime()),
        original_purchase_date_pst: formatPST(start),
        transaction_id: transactionid,
        original_transaction_id: transactionid,
        web_order_line_item_id: '49000' + rand(10),
        product_id: id,
        in_app_ownership_type: 'PURCHASED',
        is_trial_period: 'false',
        is_in_intro_offer_period: 'false'
      };
      aleo.receipt = Object.assign({}, aleo.receipt, patch);
      aleo.latest_receipt_info = Object.assign({}, aleo.receipt);
      aleo.status = 0;
    }
    if (version && version !== '') {
      aleo.receipt.bundle_id = version;
    }
    anchor = true;
    break;
  }
}

function build(productId, purchaseDate, expireDate, tpType, isStrict, forceNullExpire) {
  if (!(purchaseDate instanceof Date) || isNaN(purchaseDate)) purchaseDate = new Date();
  if (!(expireDate instanceof Date) || isNaN(expireDate)) expireDate = new Date(purchaseDate.getTime() + 31536000000);
  let bd7db0 = isStrict ? expireDate : fixedExpire;
  let a5a5466 = new Date(purchaseDate.getTime() - 1000);
  let obj = {
    quantity: '1',
    transaction_id: transactionid,
    original_transaction_id: transactionid,
    purchase_date: format(purchaseDate),
    purchase_date_ms: String(purchaseDate.getTime()),
    purchase_date_pst: formatPST(purchaseDate),
    product_id: productId,
    is_trial_period: 'false',
    is_in_intro_offer_period: 'false',
    in_app_ownership_type: 'PURCHASED',
    web_order_line_item_id: '49000' + rand(10),
    original_purchase_date: format(a5a5466),
    original_purchase_date_ms: String(a5a5466.getTime()),
    original_purchase_date_pst: formatPST(a5a5466)
  };
  if (tpType === 'timea' || tpType === 'timed') {
    obj.expires_date = format(bd7db0);
    obj.expires_date_ms = String(bd7db0.getTime());
    obj.expires_date_pst = formatPST(bd7db0);
  }
  if (tpType === 'timeb' && forceNullExpire) {
    obj.expires_date = null;
    obj.expires_date_ms = null;
    obj.expires_date_pst = null;
  }
  return obj;
}

function buildHistory(productId, tpType, strictMode, forceNullExpire) {
  let currentNow = now;
  let currentStart = start;
  if (strictMode === 'auto') {
    currentNow = new Date();
    currentStart = new Date(currentNow.getTime() - 60 * 1000);
  }
  if (!strictMode) {
    return [build(productId, currentNow, expire, tpType, false, forceNullExpire)];
  }
  let oneYearMs = 365 * 86400000;
  let lastYear = new Date(currentNow.getTime() - oneYearMs);
  let twoYearsAgo = new Date(lastYear.getTime() - oneYearMs);
  let subscriptionType = (tpType === 'timeb') ? 'timeb' : tpType;
  return [
    build(productId, lastYear, twoYearsAgo, subscriptionType, true, forceNullExpire),
    build(productId, currentNow, expire, subscriptionType, true, forceNullExpire)
  ];
}

function fakeReceipt() {
  let str = 'receipt_' + Date.now() + '_' + Math.random();
  return btoa(str + str);
}

if (!anchor) {
  const inApp = aleo.receipt.in_app || [];
  if (inApp.length > 0) {
    let updated = false;
    for (const item of inApp) {
      if (item.product_id) {
        if (!item.expires_date) {
          $done({});
          return;
        }
        const expireTime = item.expires_date_ms ? Number(item.expires_date_ms) : 0;
        if (expireTime < Date.now()) {
          item.expires_date = format(fixedExpire);
          item.expires_date_ms = String(fixedExpire.getTime());
          item.expires_date_pst = formatPST(fixedExpire);
          updated = true;
        }
      }
    }
  } else {
    let fallbackId = AutoID.yearly(bundle_id);
    let history = buildHistory(fallbackId, 'timea', false, false);
    let latest = history[0];
    latest.expires_date = format(fixedExpire);
    latest.expires_date_ms = String(fixedExpire.getTime());
    latest.expires_date_pst = formatPST(fixedExpire);
    aleo.receipt.in_app = [latest];
    aleo.latest_receipt_info = [latest];
    aleo.pending_renewal_info = [{
      product_id: fallbackId,
      original_transaction_id: transactionid,
      auto_renew_product_id: fallbackId,
      auto_renew_status: "1"
    }];
  }
}

$done({ body: JSON.stringify(aleo || {}) });
})();
