import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../../common.js';

Meteor.methods({
    'file.upload' (param) {
        // if (Meteor.isServer) {
        //     console.log('Server');
        // } else {
        //     console.log('Client');
        // }
        // console.log('param =', param);

        //３回、画像を保存している
        var msec = 200;
        var i = 1;
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