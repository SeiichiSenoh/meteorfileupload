import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../../common.js';

Meteor.methods({
    //ファイルアップロード関数
    'file.upload' (param) {
        // if (Meteor.isServer) {
        //     console.log('Server');
        // } else {
        //     console.log('Client');
        // }
        // console.log('param =', param);

        //指定回数、画像を保存している
        var msec = 200; //msec単位で設定
        var i = 1;
        //指定の時間間隔で指定数、指定画像（今の所２種類）を保存する
        var timer_id = Meteor.setInterval(function () {
            console.log("Uploadeding..." + i + "/" + param);
            Images.insert(process.env.PWD + '/sample' + i % 2 + '.jpg', function(err, fileObj) {
                console.log("Uploaded " + err);
            });
            if (++i > param) {
                console.log("Clear Timer")
                clearInterval(timer_id);
            }
        }, msec);
        // for (var i = 0; i < param; i++) {
        //     console.log("Uploadeding..." + (i + 1) + "/" + param);
        //     Images.insert(process.env.PWD + '/sample' + i % 2 + '.jpg', function(err, fileObj) {
        //         console.log("Uploaded " + err);
        //     });
        // }
    }
})