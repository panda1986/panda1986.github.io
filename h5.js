// init video
var src = "http://2dhall-video.ciftis.org/video/20200814/76a35e86896249b6bf3c94752ac3f902.mp4";
video = document.getElementById('video');
video.controls = true;
// video.height = 320;
// video.width = 426;
video.onplay = function (e) {
    console.log('on play', e)
};
video.src = src;
video.onloadeddata = function (e) {
    console.log('on loaded data', e);
    var info = '<p>视频宽高:' + e.target.videoWidth + 'x' + e.target.videoHeight + '</p>';
    info += '<p>时长:' + secondsToHumanRead(e.target.duration) + '</p>';
    //$('#metadata').find('.panel-body').html(info);
    updateMsgEvent(info);

    var msg = '<p style="color: lightskyblue">onloadeddata: 数据已加载</p>';
    updateMsgEvent(msg);
    //$('#msgs').find('.panel-body').append(msg);
};
video.onloadedmetadata = function (e) {
    console.log('on loaded metadata', e);
    var msg = '<p style="color: lightskyblue">onloadedmetadata: metadata已加载</p>';
    updateMsgEvent(msg);
};
video.onloadstart = function (e) {
    console.log('on load start', e);
    var msg = '<p style="color: darkorange">onloadstart: 开始加载数据资源</p>';
    updateMsgEvent(msg);
};
video.onprogress = function (e) {
    console.log('on progress, loads resource', e.timeStamp);
};
video.onabort = function (e) {
    console.log('on abort', e)
};
video.onerror = function (e) {
    console.log('on error', e.target.error);
    var error = e.target.error;
    var msg = '<p style="color: darkred">onerror: code:' + error.code + '; msg:' + error.message + '</p>';
    updateMsgEvent(msg);
};
video.onplaying = function (e) {
    console.log('on playing', e);
    var msg = '<p style="color: lightseagreen">onplaying: 开始播放</p>';
    updateMsgEvent(msg);
    console.log("current time", video.currentTime);
};
video.onwaiting = function (e) {
    console.log('on waiting for more data', e);
    var msg = '<p style="color: darkorange">onwaiting: 缓冲等待中</p>';
    updateMsgEvent(msg);
};
video.oncanplaythrough = (e) => {
    console.log('I think I can play thru the entire ' + 'video without ever having to stop to buffer.', e);
};
var counter = 0;
video.ontimeupdate = function (e) {
    counter ++;
    if (counter % 5 === 0) {
        console.log('on time update', video.currentTime);
        var content = "当前播放时间:" + video.currentTime;
        document.getElementById("currentPlayTime").textContent = content;
        counter = 0;
    }
};
video.onpause = function (e) {
    console.log('on pause event', e);
    var msg = '<p>onpause: 已暂停</p>';
    updateMsgEvent(msg);
};

video.onemptied = function (e) {
    console.log('on emptied', e)
};

video.onstalled = function (e) {
    console.log('on stalled', e)
};

video.ondurationchange = function (e) {
    console.log('on duration change', e)
};

video.onseeked = function (e) {
    console.log('on seeked', e)
};

video.onseeking = function (e) {
    console.log('on seeking', e)
};

function updateMsgEvent(msg) {
    $('#msgs').find('.panel-body').append(msg);
    var p = $('#msgs_content');
    p.scrollTop(100000);
}
