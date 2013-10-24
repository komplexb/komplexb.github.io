for(var i = 0; i < 25; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u10','hidden','none',500);

}

});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u12'] = 'center';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelStatePrevious('u3',true,'swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u17'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelVisibility('u10','toggle','fade',500);

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u1'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelStateNext('u3',true,'swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	SetPanelVisibility('u10','toggle','fade',500);

}
});
u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	SetPanelVisibility('u10','hidden','none',500);

	SetPanelState('u3', 'pd2u3','none','',500,'none','',500);

}
});
u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelVisibility('u10','hidden','none',500);

	SetPanelState('u3', 'pd1u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u7'] = 'center';