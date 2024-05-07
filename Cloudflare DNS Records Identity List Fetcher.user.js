// ==UserScript==
// @name               Cloudflare DNS Records Identity List Fetcher
// @name:ar            Cloudflare DNS Records Identity List Fetcher
// @name:bg            Cloudflare DNS Records Identity List Fetcher
// @name:cs            Cloudflare DNS Records Identity List Fetcher
// @name:da            Cloudflare DNS Records Identity List Fetcher
// @name:de            Cloudflare DNS Records Identity List Fetcher
// @name:el            Cloudflare DNS Records Identity List Fetcher
// @name:en            Cloudflare DNS Records Identity List Fetcher
// @name:eo            Cloudflare DNS Records Identity List Fetcher
// @name:es            Cloudflare DNS Records Identity List Fetcher
// @name:fi            Cloudflare DNS Records Identity List Fetcher
// @name:fr            Cloudflare DNS Records Identity List Fetcher
// @name:fr-CA         Cloudflare DNS Records Identity List Fetcher
// @name:he            Cloudflare DNS Records Identity List Fetcher
// @name:hu            Cloudflare DNS Records Identity List Fetcher
// @name:id            Cloudflare DNS Records Identity List Fetcher
// @name:it            Cloudflare DNS Records Identity List Fetcher
// @name:ko            Cloudflare DNS Records Identity List Fetcher
// @name:ja            Cloudflare DNS Records Identity List Fetcher
// @name:nb            Cloudflare DNS Records Identity List Fetcher
// @name:nl            Cloudflare DNS Records Identity List Fetcher
// @name:pl            Cloudflare DNS Records Identity List Fetcher
// @name:pt-BR         Cloudflare DNS Records Identity List Fetcher
// @name:ro            Cloudflare DNS Records Identity List Fetcher
// @name:ru            Cloudflare DNS Records Identity List Fetcher
// @name:sk            Cloudflare DNS Records Identity List Fetcher
// @name:sr            Cloudflare DNS Records Identity List Fetcher
// @name:sv            Cloudflare DNS Records Identity List Fetcher
// @name:th            Cloudflare DNS Records Identity List Fetcher
// @name:tr            Cloudflare DNS Records Identity List Fetcher
// @name:uk            Cloudflare DNS Records Identity List Fetcher
// @name:ug            Cloudflare DNS Records Identity List Fetcher
// @name:vi            Cloudflare DNS Records Identity List Fetcher
// @name:zh-CN         Cloudflare DNS Records Identity List Fetcher
// @name:zh-TW         Cloudflare DNS Records Identity List Fetcher
// @description        See your Cloudflare DNS records identity list
// @description:ar     See your Cloudflare DNS records identity list
// @description:bg     See your Cloudflare DNS records identity list
// @description:cs     See your Cloudflare DNS records identity list
// @description:da     See your Cloudflare DNS records identity list
// @description:de     See your Cloudflare DNS records identity list
// @description:el     See your Cloudflare DNS records identity list
// @description:en     See your Cloudflare DNS records identity list
// @description:eo     See your Cloudflare DNS records identity list
// @description:es     See your Cloudflare DNS records identity list
// @description:fi     See your Cloudflare DNS records identity list
// @description:fr     See your Cloudflare DNS records identity list
// @description:fr-CA  See your Cloudflare DNS records identity list
// @description:he     See your Cloudflare DNS records identity list
// @description:hu     See your Cloudflare DNS records identity list
// @description:id     See your Cloudflare DNS records identity list
// @description:it     See your Cloudflare DNS records identity list
// @description:ja     See your Cloudflare DNS records identity list
// @description:ko     See your Cloudflare DNS records identity list
// @description:nb     See your Cloudflare DNS records identity list
// @description:nl     See your Cloudflare DNS records identity list
// @description:pl     See your Cloudflare DNS records identity list
// @description:pt-BR  See your Cloudflare DNS records identity list
// @description:ro     See your Cloudflare DNS records identity list
// @description:ru     See your Cloudflare DNS records identity list
// @description:sk     See your Cloudflare DNS records identity list
// @description:sr     See your Cloudflare DNS records identity list
// @description:sv     See your Cloudflare DNS records identity list
// @description:th     See your Cloudflare DNS records identity list
// @description:tr     See your Cloudflare DNS records identity list
// @description:uk     See your Cloudflare DNS records identity list
// @description:ug     See your Cloudflare DNS records identity list
// @description:vi     See your Cloudflare DNS records identity list
// @description:zh-CN  See your Cloudflare DNS records identity list
// @description:zh-TW  See your Cloudflare DNS records identity list
// @author             fir4tozden
// @version            1.3
// @license            MIT
// @namespace          https://greasyfork.org/users/821317
// @match              *://dash.cloudflare.com/*/*/dns/records
// @icon               https://www.google.com/s2/favicons?domain=cloudflare.com
// @require            https://code.jquery.com/jquery-3.6.0.min.js
// @downloadURL https://update.greasyfork.org/scripts/437718/Cloudflare%20DNS%20Records%20Identity%20List%20Fetcher.user.js
// @updateURL https://update.greasyfork.org/scripts/437718/Cloudflare%20DNS%20Records%20Identity%20List%20Fetcher.meta.js
// ==/UserScript==

$(function () {
    let s = !0;
    $.ajax({
        method: "GET"
        , url: "/api/v4/system/bootstrap"
        , headers: {
            "x-cross-site-security": "dash"
        }
        , success: e => {
            $.ajax({
                method: "GET"
                , url: "/api/v4/zones?name=" + location.pathname.split("/")[2] + "&account.id=" + location.pathname.split("/")[1]
                , headers: {
                    "x-cross-site-security": "dash"
                    , "x-atok": e.result.data.atok
                }
                , success: a => {
                    $.ajax({
                        method: "GET"
                        , url: "/api/v4/zones/" + a.result[0].id + "/dns_records"
                        , headers: {
                            "x-cross-site-security": "dash"
                            , "x-atok": e.result.data.atok
                        }
                        , success: e => {
                            !0 === confirm("Do you want see DNS records identities?") && e.result.forEach(e => {
                                if (!0 === s) {
                                    null === prompt(e.name, e.id) && (s = !1)
                                }
                            })
                        }
                    })
                }
            })
        }
    })
});