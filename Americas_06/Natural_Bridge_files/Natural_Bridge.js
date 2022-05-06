// Created by iWeb 3.0.4 local-build-20121209

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 132px; width: 320px; z-index: 1; "><param name="src" value="Media/MVI_3529.AVI" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 132px; width: 320px; z-index: 1; "><param name="src" value="Natural_Bridge_files/MVI_3529.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/MVI_3529.AVI"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" data="Media/MVI_3529.AVI" style="height: 256px; left: 190px; position: absolute; top: 132px; width: 320px; z-index: 1; "><param name="src" value="Media/MVI_3529.AVI"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-1.4863,1.3383),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Natural_Bridge_files/Natural_BridgeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
