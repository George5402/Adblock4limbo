/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: pol-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".rllt__link\",\"tasks\":[[\"has\",{\"selector\":\"> div[class]\",\"tasks\":[[\"has-text\",\"Reklama\"]]}],[\"xpath\",\"..\"]]}"],["{\"selector\":\"[src^=\\\"https://v.wpimg.pl/\\\"]:not([alt])\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"#f13 > table\",\"tasks\":[[\"has\",{\"selector\":\"#f13 > b\",\"tasks\":[[\"has-text\",\"Artykuł Sponsorowany\"]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[@align=\\\"center\\\"]/*[@id][contains(text(),\\\"REKLAMA\\\")]\"]]}"],["{\"selector\":\".ad-banner-text\",\"tasks\":[[\"has-text\",\"Ad\"]]}"],["{\"selector\":\".elementor-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"matches-css-after\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":\"R.*E.*K.*L.*A.*M.*A\"}],[\"upward\",1]]}"],["{\"selector\":\".wpb_wrapper .td_block_template_1\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"body > .page > main > .small.pasek-gray\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".bbbb > div > div > div\",\"tasks\":[[\"has-text\",\"reklama\"]]}","{\"selector\":\".bottom:nth-of-type(1n+5):nth-of-type(-1n+6) > .bbbb\",\"tasks\":[[\"has-text\",\"reklama\"]]}","{\"selector\":\".bottom:nth-of-type(20) > .bbbb\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".sppb-addon-title\",\"tasks\":[[\"has-text\",\"reklama\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".inner\",\"tasks\":[[\"has-text\",\"/reklama/i\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\"#main > div:nth-child(2)\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".entry-content > p\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".u-text-grey-30\",\"tasks\":[[\"has-text\",\"/REKLAMA|CZYTAJ TAKŻE/\"]]}"],["{\"selector\":\".conntent > center\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"div[class] > .small\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"p.tdm-descr\",\"tasks\":[[\"has-text\",\"― reklama ―\"]]}"],["{\"selector\":\"li > div[id*=\\\"taboola\\\"]\",\"tasks\":[[\"upward\",\"li\"]]}"],["{\"selector\":\"[role=\\\"listitem\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\".part-sidebar > .widget\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"li.m-home-link-list__item\",\"tasks\":[[\"has-text\",\"/reklama/\"]]}"],["{\"selector\":\".sppb-addon-content > .sppb-addon-title\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"Patron\"]]}"],["{\"selector\":\"#sidebar > div.widget > h3\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"> h4 > span\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\".ipsComment.ipsBox.cPost\",\"tasks\":[[\"has\",{\"selector\":\".cAuthorPane_info > li\",\"tasks\":[[\"has-text\",\"/^Reklama$/\"]]}]]}"],["{\"selector\":\"div.row > .col-md-12 > .line-header > span\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//a[not(contains(@href,','))][string-length(@href)>1600]\"]]}","{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[contains(text(), 'REKLAMA')]\"]]}","{\"selector\":\"article[itemprop=\\\"review\\\"] > div[id]\",\"tasks\":[[\"matches-css-after\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":\"przy|pomocy|Asystenta|pobierania\"}]]}","{\"selector\":\"body script\",\"tasks\":[[\"has-text\",\"slotNumber\"],[\"upward\",2]]}","{\"selector\":\"div.collection\",\"tasks\":[[\"has-text\",\"Edycja wideo dla ambitnych\"]]}"],["{\"selector\":\".row > center, div.row > .col-md-4.col-sm-12 > .text-center, div.row > .col-md-4.col-sm-12 > div.pws-box-title\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".col-md-4 > div.margin-bottom-sm.margin-top-sm > div\",\"tasks\":[[\"has-text\",\"Reklama\"]]}","{\"selector\":\".margin-bottom-md.margin-top-md > div\",\"tasks\":[[\"has-text\",\"R EK L A M A\"]]}","{\"selector\":\".margin-bottom-xs.margin-top-xs > div\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"#main .col-md-8 form[action*=\\\"//\\\"][action*=\\\"m\\\"][action*=\\\".\\\"]\",\"tasks\":[[\"upward\",\".col-md-8 > div\"]]}","{\"selector\":\"a.button_open[href=\\\"/rtvforum/companyabout.php\\\"]\",\"tasks\":[[\"has-text\",\"Zamieść Reklamę\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[@align=\\\"center\\\"][contains(text(),\\\"reklama\\\")]\"]]}"],["{\"selector\":\".block-title > span\",\"tasks\":[[\"has-text\",\"/R(EKLAMA|eklama)/\"]]}"],["{\"selector\":\".title > span\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"#mainSkyBanner-pl_PL > script\",\"tasks\":[[\"has-text\",\"skyBanner\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"adblockDisplayInformation.\"],[\"has-text\",\"/[\\\\w\\\\W]{8000,50000}/\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"plusAdblock\"],[\"has-text\",\"/[\\\\w\\\\W]{4000,10000}/\"]]}"],["{\"selector\":\"li.videoblock iframe[id][src*=\\\"/www/delivery/\\\"]\",\"tasks\":[[\"upward\",\"li\"]]}","{\"selector\":\"li.videoblock script[src^=\\\"https://a.realsrv.com/\\\"]\",\"tasks\":[[\"upward\",\"li\"]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-pulldown-size\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]]}"],["{\"selector\":\"div.clear.box_tekstowy_mainpage > h3\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".contentpaneopen\",\"tasks\":[[\"has-text\",\"Reklama\"]]}","{\"selector\":\".module\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"div.moduletable\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\".et_pb_section_6\",\"tasks\":[[\"has-text\",\"Reklamy Google\"]]}","{\"selector\":\".et_pb_text_8\",\"tasks\":[[\"has-text\",\"Twoja reklama\"]]}"],["{\"selector\":\"div.widget.row > .widget-custom.text-center\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"/Reklama/i\"]]}]]}"],["{\"selector\":\"div[class^=\\\"m\\\"].module > div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"figcaption\",\"tasks\":[[\"has-text\",\"STS kod promocyjny\"]]}"],["{\"selector\":\"div#kon_2a[style*=\\\"white\\\"] > * > *:empty\",\"tasks\":[[\"upward\",\"[style*=\\\"white\\\"]\"]]}"],["{\"selector\":\".post\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".post > .entry-content > h4\",\"tasks\":[[\"has-text\",\"Reklama\"]]}","{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]]}"],["{\"selector\":\"[data-st-area=\\\"list-recommended4you-MainColumn\\\"] > div > div\",\"tasks\":[[\"has-text\",\"/REKLAMA/i\"]]}"],["{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class]:first-child\",\"tasks\":[[\"has-text\",\"REKLAMA\"],[\"spath\",\":not(:has(> *))\"]]}]]}"],["{\"selector\":\"#app > div[data-reactroot] > div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"v\\\\.wpimg\\\\.pl\\\\/MjAxOTA\"}]]}"],["{\"selector\":\"[src$=\\\"bg.png\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[class*=\\\" \\\"]:not(.LazyLoad) > img[src^=\\\"https://v.wpimg.pl/\\\"][src$=\\\"==\\\"][alt]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^absolute$\"}],[\"spath\",\" + div:last-child\"],[\"upward\",1]]}"],["{\"selector\":\"#app > div > div\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"^url\\\\(.https:\\\\/\\\\/v\\\\.wpimg\\\\.pl\"}]]}","{\"selector\":\".article__content > div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div > div > div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\".td-pulldown-size\",\"tasks\":[[\"has-text\",\"R E K L A M A\"]]}"],["{\"selector\":\".componentsArticleContent hr ~ p\",\"tasks\":[[\"has\",{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"doskonałe\"]]}]]}","{\"selector\":\".componentsArticleContent hr\",\"tasks\":[[\"has\",{\"selector\":\"~ p strong\",\"tasks\":[[\"has-text\",\"doskonałe\"]]}]]}"],["{\"selector\":\"div[style=\\\"width:300px;float:left;\\\"] ~ p:first-of-type\",\"tasks\":[[\"has-text\",\"/^$/\"]]}"],["{\"selector\":\"[src$=\\\"adPlaceholder.png\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"table > tbody > tr > td > font\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[count(*)=1][*[count(*)=1]/*[count(*)=1]/*[count(*)=1]/*[count(*)=0]]\"]]}","{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[count(*)=1][*[count(*)=1]/*[count(*)=1]/*[count(*)=1]/*[count(*)=1]/*[count(*)=0]]\"]]}","{\"selector\":\"[class$=\\\"grid__box \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]]}","{\"selector\":\"[src^=\\\"https://v.wpimg.pl/\\\"]:not([alt], [class=\\\"contentstream-cover\\\"])\",\"tasks\":[[\"upward\",3],[\"spath\",\":not(html, body)\"]]}"],["{\"selector\":\".screening\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"body > p\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"div[style*=\\\"font-size\\\"]\",\"tasks\":[[\"upward\",\"div[class*=\\\"col\\\"]\"]]}"],["{\"selector\":\".col-wrapper > div:nth-of-type(1)\",\"tasks\":[[\"has\",{\"selector\":\"> div:nth-of-type(2)\",\"tasks\":[[\"has-text\",\"Sponsorowane\"]]}]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".sidebar-panel\",\"tasks\":[[\"has\",{\"selector\":\"center:only-child script\",\"tasks\":[[\"has-text\",\"googletag.cmd.push\"]]}]]}"],["{\"selector\":\".col-lg-12 > .row > .col-lg-9\",\"tasks\":[[\"has-text\",\"r e k l a m a\"]]}","{\"selector\":\"div.row > div.col-md-6\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".thumb td\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}","{\"selector\":\"td > div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\".jeg_block_heading\",\"tasks\":[[\"has\",{\"selector\":\"> h3 > span\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]]}"],["{\"selector\":\"font\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[count(*)=3][img[@class][@src]][*[count(*)=1]/*[count(*)=1]/*[count(*)=1]/*[count(*)=1]/*[count(*)=0]]\"]]}"],["{\"selector\":\"[data-native-adv]\",\"tasks\":[[\"has\",{\"selector\":\"a > span\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}],[\"upward\",1]]}"],["{\"selector\":\"td[data-reactid] > div[class] > div[class] > div[class*=\\\" \\\"] > div[class] > span\",\"tasks\":[[\"has-text\",\"/^TWOJE OKAZJE$/\"],[\"upward\",2]]}"],["{\"selector\":\"body > div[class][id]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Nie teraz, wracam na WP\\\\.pl\\\"$\"}]]}]]}"],["{\"selector\":\"body > div[class][id]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]:not([id])\",\"tasks\":[[\"has-text\",\"Tworzenie treści to nasza pasja\"]]}]]}"],["{\"selector\":\".grid-item\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\"div[class]\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/^reklama_/\",\"value\":\"\"}]]}"],["{\"selector\":\"body > div[class][id]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]:not([id])\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Jak dodać WP do wyjątków adBlocka\\\"$\"}]]}]]}"],["{\"selector\":\".grid-right > div > div\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"data:image\\\\/png;base64,\"}]]}","{\"selector\":\".grid-right > div\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"data:image\\\\/png;base64,\"}]]}"],["{\"selector\":\"body > [class]:not([id])\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"matches-css\",{\"name\":\"top\",\"value\":\"^0px$\"}]]}","{\"selector\":\"body [class]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"matches-css\",{\"name\":\"top\",\"value\":\"^0\\\\..*px$\"}]]}"],["{\"selector\":\"div[height=\\\"auto\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[role=\\\"listitem\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a + div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[@data-st-area='Zakupy'][count(*)=2][not(header)]\"]]}","{\"selector\":\"[data-st-area] > div > div > div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"max-width\",\"value\":\"^300px$\"}],[\"matches-css\",{\"name\":\"max-height\",\"value\":\"^250px$\"}]]}","{\"selector\":\"div[class*=\\\" \\\"]:not([id], [style], [data-st-area], [data-section])\",\"tasks\":[[\"has\",{\"selector\":\"> script\",\"tasks\":[[\"has-text\",\"undefined,\"]]}]]}","{\"selector\":\"div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\":scope > img[src^=\\\"https://v.wpimg.pl/\\\"][role=\\\"presentation\\\"][class^=\\\"sc-\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^absolute$\"}]]}]]}"],["{\"selector\":\"[class^=\\\"elementor-heading-title\\\"]\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".row div[class][style*=\\\"border-bottom:\\\"][style*=\\\"max-height:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\":scope > div[style]\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\"div.pink > .box > div\",\"tasks\":[[\"has-text\",\"Adblock\"]]}"]];

const hostnamesMap = new Map([["google.com",0],["google.pl",0],["nerwica.com",1],["open.fm",[1,6]],["benchmark.pl",1],["kafeteria.pl",1],["smaczneblogi.pl",[1,6]],["dom.wp.pl",[1,76,77]],["facet.wp.pl",[1,76,77]],["film.wp.pl",[1,76,77,78]],["finanse.wp.pl",[1,76,77,78,79]],["fitness.wp.pl",[1,80]],["gry.wp.pl",[1,77]],["gwiazdy.wp.pl",[1,77]],["ksiazki.wp.pl",[1,76,77,78,79,82]],["kuchnia.wp.pl",[1,76,77]],["moto.wp.pl",[1,76,77]],["opinie.wp.pl",[1,76,77,78,79]],["pogoda.wp.pl",[1,76,83]],["teleshow.wp.pl",[1,77,78,79]],["turystyka.wp.pl",[1,76,77]],["wawalove.wp.pl",[1,76,77]],["wroclaw.wp.pl",[1,77]],["www.wp.pl",[1,87]],["stooq.com",[2,3]],["stooq.pl",[2,3]],["zomato.com",4],["cypr24.eu",5],["pytania.abczdrowie.pl",6],["ranking.abczdrowie.pl",6],["autokult.pl",[6,20]],["www.dobreprogramy.pl",[6,29]],["domodi.pl",6],["fotoblogia.pl",[6,20]],["gadzetomania.pl",[6,20]],["genialne.pl",[6,20]],["money.pl",[6,50,51,52,53,54]],["o2.pl",[6,59]],["pudelek.pl",[6,50,53]],["pysznosci.pl",[6,20]],["wp.pl",[6,51,75]],["zegocina.in",7],["bielsko.info",8],["tychy.info",8],["czecho.pl",8],["pless.pl",8],["bolec.info",9],["halogorlice.info",10],["katowice24.info",11],["lebork24.info",12],["nowy-sacz.info",13],["starosadeckie.info",14],["szczebrzeszyn.info",15],["dbpolska.net",16],["emka.news",17],["express-miejski.pl",17],["gorzow.news",18],["pl",19],["autocentrum.pl",20],["dobreprogramy.pl",20],["komorkomania.pl",20],["polygamia.pl",[20,53,62]],["tech.wp.pl",[20,77]],["badaniaprenatalne.pl",21],["www.bankier.pl",22],["bielskirynek.pl",23],["booklips.pl",24],["braclowiecka.pl",25],["wiesci.com.pl",26],["crafted.pl",27],["czaskultury.pl",28],["e-hotelarz.pl",30],["ebarlinek.pl",31],["elektroda.pl",32],["elka.pl",33],["miedziowe.pl",33],["epainfo.pl",34],["expresskaszubski.pl",35],["filmweb.pl",36],["filmy69.pl",37],["flarrow.pl",38],["gazeta-mlawska.pl",39],["glogow-info.pl",40],["glogow.info.pl",40],["gloszabrza24.pl",41],["wiesci.info.pl",42],["komputerowapasja.pl",43],["korsokolbuszowskie.pl",44],["mecze24.pl",45],["meczewinternecie.pl",46],["meteo.pl",47],["milanos.pl",48],["mobileclick.pl",49],["wideo.wp.pl",[50,53]],["moneyv.wp.pl",52],["www.money.pl",55],["naszamlawa.pl",56],["naszemiasto.pl",57],["niebezpiecznik.pl",58],["originals24.pl",60],["parenting.pl",61],["portalplock.pl",63],["przyslijprzepis.pl",64],["encyklopedia.pwn.pl",65],["sjp.pwn.pl",66],["rydzyna24.pl",67],["spidersweb.pl",68],["super-nowa.pl",69],["tygodnik.szczytno.pl",70],["tapeciarnia.pl",71],["telewizjazary.pl",72],["tkn24.pl",73],["voltahorse.pl",74],["kobieta.wp.pl",[76,77,78,79,82]],["wiadomosci.wp.pl",[76,77,78,79,82,86]],["magazyn.wp.pl",[78,79]],["sportowefakty.wp.pl",[78,79,84]],["horoskop.wp.pl",81],["tv.wp.pl",85],["zwa24.pl",88],["wylecz.to",89],["gralandia.tv",90]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["www.wp.pl",[6,75]],["poczta.o2.pl",[6]]]);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
