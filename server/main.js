import { Meteor } from 'meteor/meteor';
import '../common.js';

Meteor.startup(() => {
	console.log('PWD',process.env.PWD)
  //console.log(Images);
  for (var i = 0; i < 3; i++) {
  	  Images.insert(process.env.PWD + '/sample.jpeg', function (err, fileObj) {
        console.log("Updated");
        //console.log(fileObj);
      });
  }
  // Images.insert('/Users/senoh2/Desktop/meteor/gridfs1/sample.jpeg', function (err, fileObj) {
  //       console.log("Updated");
  //       //console.log(fileObj);
  //     });

  console.log(Images.find({}).count())
  console.log(Images.findOne('uoJLHMKRLNinFjaDo').url());
});
