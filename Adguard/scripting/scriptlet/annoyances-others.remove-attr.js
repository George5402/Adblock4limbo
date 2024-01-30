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
/* global cloneInto */

'use strict';

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeAttr = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["style",".cnx-content-wrapper.cnx-float-transition"],["class","#videoFloat[class^=\"VideoFloat_videofloat-floating__\"]"],["style",".Body--Mobile .ContentItem .RichContent--unescapable > .RichContent-inner[style^=\"max-height:\"]"],["href",".InfoSpace[href^=\"https://360.yandex.\"][href*=\"/premium-plans?\"]"],["onCopy|onContextmenu","body"],["disabled","#captcha_container + button.btn"],["disabled","#getlink"],["oncontextmenu"],["disabled",".body-page .card-body button.btn-primary.btn-block"],["disabled","#wait1button"],["disabled","#gotolink"],["href","a[href].unlock-step-link.check"],["style",".js-dailymotion"],["disabled","#wcGetLink"],["style|oncontextmenu","body"],["autoplay","video"],["disabled","button#downloadf[disabled]"],["disabled","#downloadbtn"],["style|oncontextmenu",".body[itemprop]"],["disabled","button"],["disabled","button[onclick=\"fun2()\"]"],["disabled",".unlock-button"],["onclick",".rebrand_article_content_block > div[align=\"center\"] > a.big_img,a.resize-image"],["oncontextmenu|onselectstart|ondragstart","body"],["oncopy",".lyrics-body"],["oncontextmenu","[oncontextmenu]"],["oncontextmenu","div[oncontextmenu]"],["oncontextmenu|onselectstart",".lyricBody"],["data-contextmenu"],["oncontextmenu|onselectstart|ondragstart|onmousedown|unselectable",".noselect"],["oncontextmenu|onselectstart|ondragstart|onmousedown|unselectable",".page-content"],["onselectstart","body"],["oncontextmenu|onselectstart|ondragstart",".inner"],["oncontextmenu|onselectstart|ondragstart","#novel_inner_wrap"],["oncontextmenu|onselectstart|ondragstart","article"],["oncontextmenu|onselectstart|ondragstart","#novel_area"],["oncontextmenu|onselectstart|ondragstart",".content"],["oncontextmenu|onselectstart|ondragstart",".document_img"],["oncontextmenu","body"],["onselectstart|ondragstart|oncontextmenu","img[class=\"_images\"]"],["onselectstart|ondragstart|oncontextmenu|onpaste|oncopy","body"],["oncontextmenu|onselectstart","body"],["oncopy|oncontextmenu","body"],["oncontextmenu|onselectstart|onselect|oncopy|ondragstart|ondrag|onbeforeprint","body"],["oncontextmenu|onkeydown|onmousedown","body"],["oncontextmenu|onkeydown","body"],["oncontextmenu",".img-container > img[oncontextmenu]"],["onselectstart|ondragstart|unselectable","#rescontent"],["data-protect","body[data-protect]"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart","body"],["onmousedown|onselectstart|ondragstart","body"],["onmousedown|onselectstart|ondragstart",".post-body[ondragstart][onmousedown][onselectstart]"],["ondragstart","[ondragstart]"],["onselectstart","[onselectstart]"],["onmousedown","img[onmousedown]"],["oncopy|onselectstart","body"],["oncopy","body"]];

const hostnamesMap = new Map([["accuweather.com",0],["tuttosport.com",1],["zhihu.com",2],["disk.yandex.ru",3],["brightdays.jp",4],["bloginkz.com",5],["finsurances.co",6],["bestopbook.info",6],["tv-asahi.co.jp",7],["bstlar.com",8],["examtadka.com",9],["djxmaza.in",9],["adzz.in",10],["proappapk.com",10],["sub2unlock.com",11],["linkgenie.me",11],["xatakamovil.com",12],["teknopaid.xyz",13],["musixmatch.com",14],["bonus-tv.ru",15],["thizissam.in",16],["apkadmin.com",17],["lostfilm.download",18],["lostfilmtv5.site",18],["lostfilm.pro",18],["lostfilmtv.site",18],["lostfilm.uno",18],["lostfilm.run",18],["lostfilm.today",18],["lostfilm.tv",18],["karyawan.co.id",19],["upbbom.com",19],["uppoom.com",19],["uploadmoon.com",19],["sub4unlock.com",20],["rekonise.com",21],["www.ixbt.com",22],["a2zapk.io",23],["j-lyric.net",23],["comic.naver.com",23],["thewordcracker.com",23],["hankooki.com",23],["dbr.donga.com",23],["uwayapply.com",23],["gukjenews.com",23],["edujin.co.kr",23],["venturesquare.net",23],["spooncast.net",23],["rdsong.com",23],["slist.kr",23],["3dpchip.com",23],["lover91.net",23],["dragonball-tube.com",23],["onepiece-tube.com",23],["fairytail-tube.org",23],["baho.com.tr",23],["wholehk.com",23],["siyasetcafe.com",23],["webtv.dothome.co.kr",23],["outdoornews.co.kr",23],["novel.naver.com",23],["eskisehirekspres.net",23],["songtextemania.com",24],["detik.com",25],["runningnews.gr",[25,52,53,54]],["afrikalyrics.com",26],["utaten.com",27],["front.wemakeprice.com",28],["author.today",[29,30]],["yodu.org",31],["linovelib.com",31],["utorrentgamesps2.blogspot.com",31],["bomtoon.com",[32,33,34,35,36,37]],["seriesgratis.biz",38],["texture-packs.com",38],["liveworksheets.com",38],["tokyo-sports.co.jp",38],["news.dwango.jp",38],["hunterfansub.com",38],["webtoons.com",39],["tistory.com",40],["globaledu.jp",41],["mhwg.org",41],["biyografi.info",41],["seiya-saiga.com",41],["korona.co.jp",42],["bdb.com.pl",43],["ainamulyana.blogspot.com",44],["texte.work",45],["lectortmo.com",46],["quotev.com",47],["orangespotlight.com",48],["as-selection.net",49],["gembel9.xyz",49],["gembelcit.net",49],["poisonous-raspberry-fields.blogspot.com",[50,51]],["7lafa.com",55],["bobfilm.online",56]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeAttr(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
                }
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmattr, { timeout: 17 });
    };
    const start = ( ) => {
        rmattr();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'interactive');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( bcBuffer === undefined ) {
            return bc.postMessage({ what: 'messageToLogger', type, text });
        }
        bcBuffer.push({ type, text });
    };
    bc.onmessage = ev => {
        const msg = ev.data;
        switch ( msg ) {
        case 'iamready!':
            if ( bcBuffer === undefined ) { break; }
            bcBuffer.forEach(({ type, text }) =>
                bc.postMessage({ what: 'messageToLogger', type, text })
            );
            bcBuffer = undefined;
            break;
        case 'setScriptletLogLevelToOne':
            safe.logLevel = 1;
            break;
        case 'setScriptletLogLevelToTwo':
            safe.logLevel = 2;
            break;
        }
    };
    bc.postMessage('areyouready?');
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { removeAttr(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_removeAttr();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeAttr = cloneInto([
            [ '(', uBOL_removeAttr.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeAttr);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_removeAttr;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
