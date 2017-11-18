import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//コンストラクタと考えていい
Template.upload.onCreated(function (){
	this.count = new ReactiveVar(0);	//変数定義
});

//イベント発生時
// click,change等のイベントの種類の書き方は、Javascript標準
//　ただし、click buttonという書き方はmeteor固有
Template.upload.events({
  'click button'(event, instance) {
	Meteor.call('file.upload',instance.count.get());
  },

  'change input'(event, instance){
  	instance.count.set($(event.target).val());	//input boxから、入力された値を取得して、count変数に入れる
  },
});

