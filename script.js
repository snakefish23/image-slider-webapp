

let data1 = {
      photo: 'images/iceland.jpg',
      title: 'Black Sand Beach',
      description: 'Reynisfjara is a world-famous black-sand beach found on the South Coast of Iceland, just beside the small fishing village of Vík í Mýrdal.'
   };

let data2 = {
      photo: 'images/germany.jpg',
      titles: 'Blizzard',
      description: 'Herzberg is situated on the southwestern rim of the Harz mountain range and the Harz National Park in Germany.'
   };

let data3 = {
      photo: 'images/italy.jpg',
      titles: 'Dolomites',
      description: 'The Dolomites are a mountain, range located in northeastern Italy. Marmolada is the highest mountain of the Dolomites, it is 3334 metres.'
   };

let data4 = {
      photo: 'images/switzerland.jpg',
      titles: 'Neuchâtel',
      description: 'Lake Neuchâtel is the largest lake wholly in Switzerland. Its area of 218 square kilometres, and its greatest depth is 502 feet (153 m).'
   };

let data5 = {
      photo: 'images/norway.jpg',
      titles: 'Langøya',
      description: 'Langøya is the third largest island of Norway. Langøya, Vesterålens central island, are the historic, little-visited fishing villages at its northern tip. Unappealing Sortland is the islands gateway town'
   };

let data6 = {
      photo: 'images/scotland.jpg',
      titles: 'Fog surronding',
      description: 'Salisbury Crags are a series of 46-metre cliffs at the top of a subsidiary spur of Arthurs Seat which rise on the west of Holyrood Park in Scotland.'
   };

let data7 = {
      photo: 'images/italy2.jpg',
      titles: 'Temple of Segesta',
      description: 'At the top of a hill overlooking the Gulf of Castellammare, just outside the ruins of the ancient city of Segesta, is a wonderfully well preserved Doric temple in Sicily Italy.'
   };

let data8 = {
      photo: 'images/poland.jpg',
      titles:  'River',
      description: 'Wrocław is a city in western Poland and the largest city in the historical region of Silesia. It lies on the banks of the River Oder in the Silesian Lowlands of Central Europe, roughly 350 kilometres from the Baltic Sea.'
   };

let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8];
let loadPhoto = (photoNumber) => {
   $('#photo').attr('src', imagesData[photoNumber].photo);
   $('#photo-title').attr('src', imagesData[photoNumber].titles);
   $('#photo-description').attr('src', imagesData[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
   if (currentPhoto < imagesData.length) {
      currentPhoto++;
      loadPhoto(currentPhoto);
   } 
});

$('#left-arrow').click(() => {
   if (currentPhoto >= 0) {
      currentPhoto--;
      loadPhoto(currentPhoto);
   }
});







