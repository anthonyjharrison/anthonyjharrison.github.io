// Created by iWeb 3.0.4 local-build-20121209

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,152),url:'Blog_files/stroke_8.png'},{rect:new IWRect(-2,-2,4,4),url:'Blog_files/stroke_9.png'},{rect:new IWRect(2,-2,204,4),url:'Blog_files/stroke_10.png'},{rect:new IWRect(206,-2,4,4),url:'Blog_files/stroke_11.png'},{rect:new IWRect(206,2,4,152),url:'Blog_files/stroke_12.png'},{rect:new IWRect(206,154,4,4),url:'Blog_files/stroke_13.png'},{rect:new IWRect(2,154,204,4),url:'Blog_files/stroke_14.png'},{rect:new IWRect(-2,154,4,4),url:'Blog_files/stroke_15.png'}],new IWSize(208,156))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://archive.anthonyandfelicity.com/Europe_08/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
