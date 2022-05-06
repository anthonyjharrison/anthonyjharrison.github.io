// Created by iWeb 3.0.4 local-build-20121209

function createMediaStream_id1()
{return IWCreateMediaCollection("http://archive.anthonyandfelicity.com/California_09/The_Pics/The_Pics_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://archive.anthonyandfelicity.com/California_09/The_Pics',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget10'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://archive.anthonyandfelicity.com/California_09/The_Pics',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(272,204),new IWSize(272,49),new IWSize(309,268),27,27,0,new IWSize(110,92)),new IWPhotoFrame([IWCreateImage('The_Pics_files/spiralboook_ul.png'),IWCreateImage('The_Pics_files/spiralboook_top.png'),IWCreateImage('The_Pics_files/spiralboook_ur.png'),IWCreateImage('The_Pics_files/spiralboook_right.png'),IWCreateImage('The_Pics_files/spiralboook_lr.png'),IWCreateImage('The_Pics_files/spiralboook_bottom.png'),IWCreateImage('The_Pics_files/spiralboook_ll.png'),IWCreateImage('The_Pics_files/spiralboook_left.png')],null,1,1.000000,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget10',null,'widget11',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('The_Pics_files/The_PicsMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id2');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
