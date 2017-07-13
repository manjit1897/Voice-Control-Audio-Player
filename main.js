

//**********************Songs Details***************************************************************************************
var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image' : 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image' : 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image' : 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image' : 'song4.jpg'
    }];
//**************************************************************************************************************************

//************Addind togglesong() function to play and pause the song
    function toggleSong() 
    {
      var song = document.querySelector('audio'); //***Selecting audio tag
      if(song.paused == true)   //*** if song is paused
      {    
      $('.play-icon').removeClass('fa-play').addClass('fa-pause');
      song.play();    // ***Then play the song
      }
      else 
      {
      $('.play-icon').removeClass('fa-pause').addClass('fa-play');
      song.pause();   //*** Otherwise pause the song
      }
    } 
//*******************************************************************      

/*
// ARRAY variable to store music song
var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
*/

/*
//***********************writing different code for each song to play*********************************************
$('#song1').click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;    //storing source of current song in currentSong variable
  if(currentSong.search(fileNames[0]) != -1)  //if the current song text is similar to fileNames[0] then call the toggleSong fxn
  {
    //console.log(audio.paused)
    // audio.play();
    //console.log('If statement executing');
    toggleSong();    // calling toggleSong() fxn
  }
  else    //else audio ke source main fileNmaes[0] dal dena then apply toggleSong fxn
  {
   //console.log('Else statement executing');
   audio.src= fileNames[0];
   toggleSong();
  }
});

$('#song2').click(function() {
var audio = document.querySelector('audio');
audio.src = fileNames[1];
toggleSong();
});

$('#song3').click(function() {
var audio = document.querySelector('audio');
audio.src = fileNames[2];
toggleSong();
});

$('#song4').click(function() {
var audio = document.querySelector('audio');
audio.src = fileNames[3];
toggleSong();
});
//******************************************************************************************************
*/


//**********************for loop for calling the addSongNameClickEvent(songName, position) fxn*********** 

/*for (var i = 0; i < fileNames.length ; i++)  //The first part is the initializing statement i.e. where we want to start
{                            //After running the code once, it increments the value of i by 1
                 //hen the condition is checked, if the condition is satisfied, only then the code inside the curly braces is executed
    addSongNameClickEvent(fileNames[i],i+1);  //if i=0 then i+1=1
}
*/
//*************************************************************************************************

//***********************************************************************************************
function changeCurrentSongDetails(songObj) 
{
    $('.current-song-image').attr('src','img/' + songObj.image) //1. using jQuery to select the element with class 'current-song-image'
                                                                //2. Then we are setting it's src attribute to something (.attr('src',...)
                                                                //3. The src is made of two strings added together: folder name + fileName
                                                                //4. This src attribute has a value of img/song1.jpg or whatever songObj.image's value is 
    $('.current-song-name').text(songObj.name)      
    $('.current-song-album').text(songObj.album)
}
//*****************************************************************************************************


//********************calling all the songs through a single fxn addSongNameClickEvent()************** 
function addSongNameClickEvent(songObj, position)  //addSongNameClickEvent fxn getting songName and positon as a parameter 
{                              //then the condition is checked, if the condition is satisfied, only then the code inside the curly braces is executed
  var songName = songObj.fileName; // New Variable 
  var id = '#song' + position;  //storing song id in variable id
  $(id).click(function()    //So if position = 1, the value in our 'id' variable is #song1
  {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;    //storing source of current song in currentSong variable
  if(currentSong.search(songName) != -1)  //if the current song text is similar to fileNames[0] then call the toggleSong fxn
  {
    //console.log(audio.paused)
    // audio.play();
    //console.log('If statement executing');
    toggleSong();    // calling toggleSong() fxn
  }
  else    //else audio ke source main fileNmaes[0] dal dena then apply toggleSong fxn
  {
   //console.log('Else statement executing');
   audio.src= songName;
   toggleSong();
   changeCurrentSongDetails(songObj);    //calling changeCurrentSongDetails() fxn and passing songObj as parameter which consist 0f complete song details
  }
  });
}

/*addSongNameClickEvent(fileNames[0],1);   //call our function 4 times to add all the four events
addSongNameClickEvent(fileNames[1],2);   //The first parameter is the songName, that we are getting from the fileNames array
addSongNameClickEvent(fileNames[2],3);   //second parameter is the position
addSongNameClickEvent(fileNames[3],4);
*/
//******************************************************************
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
//******************************************************************

// ********play icon or pause icon is clicked then play/pause the song **********
    $('.play-icon').on('click', function() 
    {
        toggleSong();
    });
//*******************************************************************************

// ******** if space bar is clicked then play/pause the song  *************
    $('body').on('keypress', function(event) 
    {
      var target = event.target;       //1. Save the target of the event in a variable
                                       //The target is the place where the event took place
        if (event.keyCode == 32 && target.tagName !='INPUT')  //This condition first checks if the spacebar key is pressed
                                                                //Then it checks if the place where the event occurred had an input tag or not        
        {

            toggleSong();
        }
    });
//*************************************************************************

//************converting time from seconds to Hr:min:sec ******************
function fancyTimeFormat(time)  //getting currentTime and duration values from updateCurrentTime() fxn
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);          // 1 hr=3600 sec
    var mins = ~~((time % 3600) / 60); //  1 min= 60 sec
    var secs = time % 60;              

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
//***************************************************************************

//***************updateCurrentTime() function*******************************************************************************
function updateCurrentTime() {
var song = document.querySelector('audio');
//console.log(song.currentTime);
//console.log(song.duration);
var currentTime = Math.floor(song.currentTime);  //current Time of song is stored in variable
currentTime = fancyTimeFormat(currentTime);  //passing and getting currentTime in fancyTimeFormat
var duration = Math.floor(song.duration);  // Total duration of song is stored in variable
duration = fancyTimeFormat(duration);//passing and getting duration in fancyTimeFormat
$('.time-elapsed').text(currentTime); 
$('.song-duration').text(duration);
}   
//***************************************************************************************************************************

//***********window.onload fxn to call updateCurrentTime() fxn***************************************************************
/*
//ARRAY variable to store names of song
var songList = ['Badri Ki Dulhania (Title Track)',
'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
//ARRAY variable to store name of albums
var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
//Array variable to store duration of songs
var durationList = ['2:56','3:15','2:34','2:29'];
//Array variable to store artists of songs
var artistList = ['Artist #1', 'Artist #2', 'Artist #3', 'Artist #4'];
*/
window.onload = function()   
{ 
/*setTimeout(function()   //code sirf aik bar run hoga
{
updateCurrentTime();
{
},1000);
*/
/*
$('#song1 ').text(songList[0]);    //displaying song name list
$('#song2 ').text(songList[1]);   //1. Use jQuery to find an element with id of song
$('#song3').text(songList[2]);  //2. Change the text of that element to the value that is stored in the element of the array songList
$('#song4').text(songList[3]);
*/
/*
for(var i =0; i < songList.length;i++)   //for loop for displaying song name ,artist, album and duration
{
  var name = '#song' + (i+1);      //name variable stores song id
  var song = $(name);             //putting values which are in song id or name variable in song variable 
  song.find('.song-name').text(songList[i]);  //
  song.find('.song-artist').text(artistList[i]);
  song.find('.song-album').text(albumList[i]); // Added
  song.find('.song-length').text(durationList[i]); // Added
} 
*/
updateCurrentTime();  //Now as soon as our website is loaded, updateCurrentTime runs and then after every 1 second, setInterval makes it run again
changeCurrentSongDetails(songs[0]);
setInterval(function()    // code bar-bar run hoga after 1 second 
{
updateCurrentTime();    //Here only the updateCurrentTime() fxn is called
},1000);

for(var i =0; i < songs.length;i++) //songs.length=length of the OBJECT 'songs'
  {
    var obj = songs[i];            //storing i value in 'obj' variable
    var name = '#song' + (i+1);   //storing id of <div class="song" id="song1" >
    var song = $(name);             //storing values that comes under name=id '#song_X'
    song.find('.song-name').text(obj.name);    //finding song name under class .song-name and getting key value of object 'songs' 
    song.find('.song-artist').text(obj.artist);
    song.find('.song-album').text(obj.album);
    song.find('.song-length').text(obj.duration);
    addSongNameClickEvent(obj,i+1);  //calling addSongNameClickEvent() fxn and passing parameter song and its position
    }

}
//***********************************************************************************************

//***************window.onload function to display details of songs******************************   
/*window.onload = function() 
{
  changeCurrentSongDetails(songs[0]);    //1. we are showing the song details of the first song by default.
                                          //2. songs[0] gives us the song object for the first song!
  for(var i =0; i < songs.length;i++) //songs.length=length of the OBJECT 'songs'
  {
    var obj = songs[i];            //storing i value in 'obj' variable
    var name = '#song' + (i+1);   //storing id of <div class="song" id="song1" >
    var song = $(name);             //storing values that comes under name=id '#song_X'
    song.find('.song-name').text(obj.name);    //finding song name under class .song-name and getting key value of object 'songs' 
    song.find('.song-artist').text(obj.artist);
    song.find('.song-album').text(obj.album);
    song.find('.song-length').text(obj.duration);
    addSongNameClickEvent(obj,i+1);  //calling addSongNameClickEvent() fxn and passing parameter song and its position
    }
}
*///***********************************************************************************************

$('#songs').DataTable(
  {
        paging: false
    }
);

var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon

$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;           //It changes the value of the variable willLoop
});

$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});

/*function timeJump()             //jumps to the first end of the song 
{
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}
*/
$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})