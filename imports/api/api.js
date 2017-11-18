import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../../common.js';

Meteor.methods({
	'file.upload'(param){
		if(Meteor.isServer){
			console.log('Server');
		}else{
			console.log('Client');
		}
		console.log('param =',param);

		console.log('HogeHoge!!');
  //３回、画像を保存している
	  for (var i = 0; i < param; i++) {
 	 	  Images.insert(process.env.PWD + '/sample.jpeg', function (err, fileObj) {
 	       console.log("Uploaded");
 	       //console.log(fileObj);
	      });
  }
	}
})