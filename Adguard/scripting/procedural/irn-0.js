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

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"section#left-side > aside > h4\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".block > header > h2\",\"tasks\":[[\"has-text\",\"/وبگردی|نیازمندی|رپرتاژ/\"],[\"upward\",\".block\"]]}","{\"selector\":\".carousel-inner > .item > .row > .col-md-4 > article:has(a[href*=\\\"aftabir.com/reportages\\\"])\",\"tasks\":[[\"upward\",\".col-md-4\"]]}"],["{\"selector\":\".yn-bnr\",\"tasks\":[[\"upward\",\".custom\"]]}"],["{\"selector\":\".sidebar.col-4 > ul > li > h4\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".post-sticky\",\"tasks\":[[\"upward\",\".row\"]]}"],["{\"selector\":\"div.video-list\",\"tasks\":[[\"has\",{\"selector\":\"> div > div\",\"tasks\":[[\"has\",{\"selector\":\"span.ad\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}]]}"],["{\"selector\":\"#yektanet-pos-2\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_left-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_right-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}"],["{\"selector\":\".widget-asan > span > a\",\"tasks\":[[\"upward\",\".widget-asan\"]]}"],["{\"selector\":\".col-sm-12 span\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".col-sm-12\"]]}"],["{\"selector\":\"#yt_spotlight3 .klatest-items-div > .modtitle\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".klatest-items-div\"]]}"],["{\"selector\":\".mpbb_ads img\",\"tasks\":[[\"upward\",\".mp_box_x1\"]]}"],["{\"selector\":\".benawa_contentarea .benawa_treeads\",\"tasks\":[[\"upward\",\".benawa_contentarea\"]]}"],["{\"selector\":\"#macy-container > article > .articlebox > a[href*=\\\"/blogsazan.com/mag/reportage\\\"]\",\"tasks\":[[\"upward\",\"article\"]]}","{\"selector\":\".blog_center_bar > .main_title\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"],[\"spath\",\" + .main_content_free\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"]]}","{\"selector\":\".main_content[style=\\\"border-radius:10px;\\\"] > div[style=\\\"padding: 10px; text-align:center; font-size:13px;\\\"] > a\",\"tasks\":[[\"upward\",\".main_content\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"/پیشنهاد|مفید/\"]]}]]}"],["{\"selector\":\".linkbox\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".bd-sidebar > div > .widget > .block-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"#primary\",\"tasks\":[[\"not\",{\"selector\":\"> .categoriesPageHead\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}],[\"spath\",\".rowList > li:has(a[href*=\\\"/promoted/\\\"])\"]]}"],["{\"selector\":\"[class*=\\\"VerticalProductCard\\\"]:has(.mr-auto.text-caption.ai-center)\",\"tasks\":[[\"upward\",\"[class^=\\\"product-list\\\"]\"]]}"],["{\"selector\":\"form#captch_form > input[name=\\\"_wp_http_referer\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"header.recent_news_wrapper > ul.news_text > li\",\"tasks\":[[\"has-text\",\"تبلیغ :\"]]}"],["{\"selector\":\".general-box\",\"tasks\":[[\"has\",{\"selector\":\".box-header\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\".latestContents\",\"tasks\":[[\"has\",{\"selector\":\".bTitle\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"#carousel\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div#sidebar300 > div.mywidget > div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div.titline\"]]}","{\"selector\":\"div#sidebar300 > div.mywidget > div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}","{\"selector\":\"div.mywidget\",\"tasks\":[[\"has\",{\"selector\":\"> div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\".footer-content .tag-cloud\",\"tasks\":[[\"upward\",\".foot-col\"]]}"],["{\"selector\":\"div#macy-container > article\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div.articlebox > div.icons\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"div.main_title\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی از سراسر وب\"]]}]]}"],["{\"selector\":\".p-single.blog-post\",\"action\":[\"style\",\"width: 100% !important;\"],\"tasks\":[[\"upward\",1]]}","{\"selector\":\".sidebar > *\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/post/\"]]}],[\"spath\",\" #posts-body > .posts > .box > .d-block > .border-bottom .row .image > span.text-white\"],[\"has-text\",\"رپرتاژ آگهی\"],[\"upward\",\".d-block\"]]}"],["{\"selector\":\"table > tbody > tr > td > .dagh > strong\",\"tasks\":[[\"has-text\",\"اخبار تبلیغاتی\"]]}"],["{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div[id$=\\\"col-body\\\"]\"]]}","{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4998\"]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4662\"]]}"],["{\"selector\":\".m-ads\",\"tasks\":[[\"upward\",\".sidebar-left-item.content\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\".rbox .rbox-h\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".rbox\"]]}"],["{\"selector\":\".bahavadaran-news > .header-section\",\"tasks\":[[\"has-text\",\"دیگر رسانه ها\"]]}"],["{\"selector\":\"[onclick^=\\\"sendBannerDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendCardDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendViewMoreDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"],[\"spath\",\" + div\"]]}","{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"]]}"],["{\"selector\":\".footer_column > div > ul > li > a\",\"tasks\":[[\"has-text\",\"طراحی سایت\"]]}","{\"selector\":\".lnk > center > a > img[alt=\\\"ADS\\\"]\",\"tasks\":[[\"upward\",\"center\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"aside > div > div > span\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}]]}"],["{\"selector\":\".sidebar_item > .sidebar_item__inner > .sidebar_item__title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".sidebar_item\"]]}"],["{\"selector\":\"aside#left > .box > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".box\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"pa_vc_url\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"لینک های پیشنهادی\"]]}]]}"],["{\"selector\":\".right-sidebar > aside > .tit-side\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".dinu\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"مفید\"]]}]]}"],["{\"selector\":\".widget > h3\",\"tasks\":[[\"has-text\",\"مطالب مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".GSBlock > div > .title > h3\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\".GSBlock\"]]}","{\"selector\":\".GSLiveTab > .tab_container1 > #tab3 > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".GSLiveTab\"]]}","{\"selector\":\".OpenTable > div > center > a[rel=\\\"nofollow\\\"] > .img-responsive\",\"tasks\":[[\"upward\",\".OpenTable\"]]}","{\"selector\":\".OpenTable > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".OpenTable\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/fa/news/pr\"]]}],[\"spath\",\" .items-row\"],[\"has\",{\"selector\":\".sazitem_imgcat\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget_title\",\"tasks\":[[\"has-text\",\"پیوند\"]]}]]}"],["{\"selector\":\"input.filter\",\"action\":[\"remove-attr\",\"disabled\"]}","{\"selector\":\"input.filter\",\"action\":[\"remove-class\",\"filter\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"wccp\"]]}"],["{\"selector\":\"div.col-md-3 > .box.style-1 > .box-header\",\"tasks\":[[\"has-text\",\"/تبلیغات رپورتاژ|لوگو اسپانسر/\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".column-side > .block > .block-title\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/website/reportage/\"]]}],[\"spath\",\" .box\"],[\"has-text\",\"رپورتاژ آگهی\"]]}"],["{\"selector\":\".sidebar > .d-flex > aside > section > figure:has(a[href*=\\\"ad.technews-iran.com/\\\"])\",\"tasks\":[[\"upward\",\".sidebar\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/رپورتاژ-آگهی/\"]]}],[\"spath\",\" .posts-list > article.tag-8164 > .clearfix > a[class=\\\"title\\\"][href$=\\\"reportage/\\\"]\"],[\"upward\",\"article\"]]}","{\"selector\":\".widget > p > #KajAds_Panel\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.buy_box > a.cheapest-seller-wrapper > div.online_seller div.online_badge\",\"tasks\":[[\"has-text\",\"آگهی\"],[\"upward\",\"div.buy_box\"]]}"],["{\"selector\":\"input[type=\\\"hidden\\\"]:is(input[name=\\\"usr_login\\\"], input[name=\\\"referer\\\"], input#usr_resolution, input#usr_os, input#usr_browser)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div.main > div.mainx1 > div\",\"tasks\":[[\"has\",{\"selector\":\"> span.side-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"aside > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".LeftSide > .TableOfContent > div[style=\\\"text-align:center;\\\"]\",\"tasks\":[[\"has-text\",\"صفحات مرتبط\"],[\"upward\",\".TableOfContent\"]]}"],["{\"selector\":\".part-content-wordpres > .title-section\",\"tasks\":[[\"has-text\",\"پست تبلیغاتی\"],[\"upward\",\".part-content-wordpres\"]]}","{\"selector\":\".small-tab-news > .sidebar-news > ul\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".small-tab-news\"]]}","{\"selector\":\"section.tabliqat-text > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"section.tabliqat-text\"]]}"],["{\"selector\":\".content-column\",\"tasks\":[[\"not\",{\"selector\":\"> .archive-title\",\"tasks\":[[\"has-text\",\"رپرتاژ تبلیغاتی\"]]}],[\"spath\",\" .item-inner:has(a[href*=\\\"/pr/\\\"])\"]]}"],["{\"selector\":\"aside[class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://l.vrgl.ir/r?l=http\\\"][target=\\\"_blank\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"input[type=\\\"hidden\\\"]:is(input#log_id, input#log_code)\",\"action\":[\"remove-attr\",\"value\"]}"],["{\"selector\":\".herald-sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}],[\"spath\",\" p:not(:has(a[href*=\\\"kurdsoft\\\"])):not(:has(a[href*=\\\"7ganj.ir\\\"]))\"]]}"],["{\"selector\":\"input[id=\\\"PreparePrint\\\"]\",\"action\":[\"remove-attr\",\"disabled\"],\"tasks\":[[\"watch-attr\",[\"disabled\"]]]}"],["{\"selector\":\".widget > .widget-top\",\"tasks\":[[\"has-text\",\"آگهی متنی\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"vc_url\"]]}"],["{\"selector\":\"#sidebar .widget a[href*=\\\"faradars.org\\\"] > img[alt*=\\\"فرادرس\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"#sidebar .widget div[id^=\\\"kaprila_linktable\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ/\"]]}],[\"spath\",\" article > footer > span.post-meta-cat\"],[\"has-text\",\"رپرتاژ\"],[\"upward\",\"article\"]]}","{\"selector\":\"aside > div > span > a.ani[target=\\\"_blank\\\"][title]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\".apktops-slider-section ul > li:not(:has(a[href=\\\"https://t.me/+UgVXT9YqXOs0MQTy\\\"]))\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".post-article > .content > .row .entry-content\",\"tasks\":[[\"has-text\",\"اسپاتیفای پرمیوم از APKTOPS\"],[\"upward\",\".post-article\"]]}","{\"selector\":\".spcontent\",\"tasks\":[[\"upward\",\".post\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ-آگهی\"]]}],[\"spath\",\" .archive-blog > article > figure > .entry-category\"],[\"has-text\",\"رپرتاژ آگهی\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".page-body > .post:not(article) > .yn-bnr:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".page-body > .post:not(article) > [id^=\\\"pos-article-\\\"]:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".sidebar-right > .box > .title\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\".box\"]]}"],["{\"selector\":\"section.text_type_holder\",\"tasks\":[[\"has\",{\"selector\":\"> header.header_section > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"#sidebar > .block > h5\",\"tasks\":[[\"has-text\",\"لینک های متنی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"a.dl-btn\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"ads\"]]}]]}"],["{\"selector\":\".slider-tab-ring\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> *\",\"tasks\":[[\"has-text\",\"دیدگاه\"]]}]]}]]}"],["{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .featured > .term-badges\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".type-post\"]]}","{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .post-meta > .post-author-a > .author\",\"tasks\":[[\"has-text\",\"واحد تبلیغات\"],[\"upward\",\".type-post\"]]}"],["{\"selector\":\".linkbox > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".linkbox\"]]}"],["{\"selector\":\".parsi-ads\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"aside > .widget .textwidget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"#kaprila_downloadly_ir_side-2\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_static-post\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_top-side\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_linktable\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\".postfixedafterpost\",\"tasks\":[[\"upward\",\".g-cols\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/رپورتاژ\"]]}],[\"spath\",\" .art-post > .head-post > .cat-post\"],[\"has-text\",\"رپورتاژ\"],[\"upward\",\".art-post\"]]}"],["{\"selector\":\".attention > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".attention\"]]}"],["{\"selector\":\".aside-inner > .widget-sidebar > .title\",\"tasks\":[[\"has-text\",\"/بنر شماره|تبلیغات متنی/\"],[\"upward\",\".widget-sidebar\"]]}"],["{\"selector\":\"div#player-container svg[width=\\\"48\\\"][height=\\\"48\\\"][viewBox=\\\"0 0 64 64\\\"] > g[opacity=\\\"0.6\\\"]\",\"tasks\":[[\"upward\",\"svg\"]]}"],["{\"selector\":\".widget > .widget_title\",\"tasks\":[[\"has-text\",\"پیوندهای مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".sidebar > .box > .behtarinbacklink\",\"tasks\":[[\"upward\",\".box\"]]}"],["{\"selector\":\"#ads-container > .box > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div#column3 > table.sidea > tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > div.mybox > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div.sidebar > div.box\",\"tasks\":[[\"has\",{\"selector\":\"div.row\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".aside_boxs > .title_nt_box\",\"tasks\":[[\"has-text\",\"تبلیغ\"],[\"upward\",\".aside_boxs\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu=\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"display:none\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"tasks\":[[\"has-text\",\"display:none\"]]}"],["{\"selector\":\".side_left > .side > .title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".side_left\"]]}"],["{\"selector\":\".entry\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.location=\"]]}"],["{\"selector\":\"div.side_left > div.side > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.side\"]]}"],["{\"selector\":\".post > .post__content > .post__category\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".sidbar > p > strong\",\"tasks\":[[\"has-text\",\"پیوندها\"],[\"upward\",\".sidbar\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu =\"]]}"],["{\"selector\":\"div.left-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.left-title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"نیازمندیها\"]]}]]}","{\"selector\":\".film_box\",\"tasks\":[[\"has-text\",\"مدرسه آنلاین\"]]}","{\"selector\":\".stitle_box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"section#RightPanel > div.RBC > div.CCTS\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.RBC\"]]}"],["{\"selector\":\"#mostvisited\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"aside.widget_text > div.aside_box_title\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\"aside.widget_text\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/d-reportages\"]]}],[\"spath\",\" ul#posts-container > li.post-item > .post-details > .post-meta > .author-meta\"],[\"has-text\",\"دپارتمان تبلیغات\"],[\"upward\",\"li.post-item\"]]}","{\"selector\":\".widget > .widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"bannersAsJson\"]]}"],["{\"selector\":\".form-inline\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\"form[action^=\\\"link/topPageSubmit/\\\"], div#linkStr\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\".col-md-12 > .title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}"],["{\"selector\":\"div.sidebar-home\",\"tasks\":[[\"has\",{\"selector\":\"> div.wbox > strong\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".box-doc > .documentary-news-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".box-doc\"]]}","{\"selector\":\".news-col-1 #rssbank\",\"tasks\":[[\"upward\",\".container\"]]}","{\"selector\":\".various-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".various-cnt\"]]}"],["{\"selector\":\"#webgardi_list\",\"tasks\":[[\"upward\",\".section_cnt\"]]}"],["{\"selector\":\"li[id^=\\\"ad\\\"]\",\"tasks\":[[\"upward\",\"section.box\"]]}","{\"selector\":\"section.box ul > li.bklnk\",\"tasks\":[[\"upward\",\"section.box\"]]}"],["{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}","{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"protoUrl\"]]}"],["{\"selector\":\".widget > .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"لینکستون\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ad.setAttribute\"]]}"],["{\"selector\":\"a[name^=\\\"Advertisement\\\"]\",\"tasks\":[[\"upward\",\".wb_element\"]]}"],["{\"selector\":\"aside.left > div.box > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"div.box\"]]}"],["{\"selector\":\".cside1 > .hside2\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".cside1\"]]}"]];

const hostnamesMap = new Map([["aftabir.com",1],["akharinnews.com",2],["alamto.com",3],["androidgozar.com",4],["aparat.com",5],["arga-mag.com",6],["asandl.com",7],["asriran.com",8],["bazimag.com",9],["behmusic.com",10],["benawa.com",11],["blogsazan.com",12],["charbzaban.com",13],["chetor.com",14],["deltapayam.com",15],["digiato.com",16],["digikala.com",17],["dlfox.com",18],["donya-e-eqtesad.com",19],["ecoiran.com",20],["eghtesadonline.com",21],["elmefarda.com",22],["elmevarzesh.com",23],["eramblog.com",24],["farachart.com",25],["gamefa.com",26],["ghatreh.com",27],["graphiran.com",28],["idehalmag.com",29],["idehaltech.com",30],["iranidata.com",31],["jafekri.com",32],["coffeeapps.ir",[32,75]],["sclinic.ir",[32,100]],["khabarpu.com",33],["khanefootball.com",34],["khanoumi.com",35],["khodrotak.com",36],["lordroid.com",37],["marzfun.com",38],["moderndl.com",39],["mybia4music.com",40],["p30konkor.com",41],["par30media.com",42],["sakhtafzarmag.com",43],["salameno.com",44],["sariasan.com",45],["sarzamindownload.com",46],["shahrsakhtafzar.com",47],["shereno.com",48],["takhfifan.com",49],["takmili.com",[50,51]],["kihanb.ir",[50,93]],["takskin.com",52],["tarafdari.com",53],["techfars.com",54],["technews-iran.com",55],["techrato.com",56],["torob.com",57],["uploadboy.com",58],["vazeh.com",59],["vipofilm.com",60],["zibamoon.com",61],["konkur.in",62],["farnet.io",63],["virgool.io",64],["7ganj.ir",65],["ac.ir",66],["amazing.ir",67],["androidparsi.ir",68],["dailymobile.ir",68],["tarfandha.org",68],["androidzoom.ir",69],["anzalweb.ir",70],["apktops.ir",71],["appreview.ir",72],["avaz-kurd.ir",73],["bartarinha.ir",74],["darkroid.ir",76],["digiboy.ir",77],["digiro.ir",78],["dlrozaneh.ir",79],["download.ir",80],["downloadly.ir",81],["downloadsoftware.ir",82],["entekhab.ir",83],["farsifilm.ir",84],["filmnet.ir",85],["filmsky.ir",86],["gamesetup.ir",87],["hamshahrionline.ir",88],["imna.ir",89],["iranjib.ir",90],["kalakamuz.ir",91],["khodropluss.ir",92],["listen2music.ir",94],["mihand.ir",95],["najiremix.ir",96],["nex11music.ir",97],["show-music.ir",97],["plaza.ir",98],["power-music.ir",99],["skinak.ir",101],["tabnak.ir",102],["taknaz.ir",103],["toranji.ir",104],["uptrack.ir",105],["youc.ir",106],["zoomg.ir",107],["xip.li",108],["opizo.me",109],["androidina.net",110],["par30dl.net",111],["pichak.net",112],["rokna.net",113],["55online.news",114],["saat24.news",115],["techna.news",116],["bandmoviez.one",117],["bazdeh.org",118],["tgju.org",119],["takvim.tj",120],["artmusics.top",121],["harmonydl.us",122]]);

const entitiesMap = new Map([["hamtamovie",0]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
