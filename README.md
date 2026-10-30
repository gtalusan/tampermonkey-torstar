# The Toronto Star Paywall Remover

A single userscript that un-hides subscriber-only article content and removes
paywall offers on [thestar.com](https://www.thestar.com).

The site currently runs on BLOX CMS with Google GEA metering. Premium
paragraphs are served to everyone but hidden from anonymous readers with an
inline `display: none` on `.subscriber-only` divs; offer prompts are injected
as `.subscriber-offers` / `.access-offers-modal` blocks. This script removes
the hiding and the offers as they appear, using a `MutationObserver` (no
jQuery, no polling).

## Install

[Userscripts](https://github.com/quoid/userscripts) for Safari (or
Tampermonkey on other browsers): add `torstar.user.js` to your userscripts
directory. It runs at `document-start` so content is unhidden as soon as it
appears, with no flash of the paywall.
