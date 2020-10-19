var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BPHDqkoVnnnvs91dAuqZBSqw9jlvNeLQuO8-WhIgTruJfNRrIrdnsBtNvdqT6ACh-1ZHmNuGpYVElMhD3HlGAGg",
    "privateKey": "pxRyv8jOcKwUF7DIbsxKi5DY_nCJi-fWMaNxfyQ-EFA"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": " https://fcm.googleapis.com/fcm/send/dlR1-8McTcw:APA91bGjLC1x2gjHKEbkaQBYRAqLJ97fRuIUmUcy-3W21q24g-t1ZPBzXrDClQ3BtG0_ow2C69I4ViOiE2bOUox5Ntq_VJTFKCYE7UXbeVwPo2rcVuJLqkSAmApmaKMhs1o5FP4KA80W",
    "keys": {
        "p256dh": "BOebed+WmNDOF2rXcEzh9dDDKAe/5fcclLBlvhIe6rLuct69GIBbCGMlhymdmS2MlSB229jB7ybD1ID/JiP+D24=",
        "auth": "uGvAnvvDpzW2xLihiFuf9g=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '842439279291',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);