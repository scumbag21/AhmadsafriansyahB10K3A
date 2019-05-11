function myBiodata(biodata) {
   let biodataObj = {
      "name": 'Ahmad Safriansyah',
      "address": 'Jalan Pengadegan Timur 2',
      "hobbies": [
         'Ngoding','Ngopi','Ngerokok','Ngegames',
      ],
      "is_married": false,
      "school": {
         "highSchool": 'SMA Nusantara',
         "university": '-'
      },
      "skill": [
         {
            "HTML5": "30 %",
            "CSS": "30 %",
            "Javascript": "10 %",
            "PHP": "0 %",
            "C++": "0 %",
            "Python": "0 %",
            "C": "0 %",
         }
      ]
   }

   return biodataObj
}
console.log(myBiodata(1));