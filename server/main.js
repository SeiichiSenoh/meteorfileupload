import { Meteor } from 'meteor/meteor';
import '../common.js';
import '../imports/api/api.js';

Meteor.startup(() => {
	//console.log('PWD',process.env.PWD)	//現在のフォルダのパスを環境変数から取得する
	Meteor.call('file.upload',1000);		//1000個のファイルをアップロードする。
	console.log(Images.find({}).count())
	// console.log(Images.findOne('uoJLHMKRLNinFjaDo').url());
});
