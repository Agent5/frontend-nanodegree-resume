    var work = {
        "jobs": [{
            "employer": "ClearSlide",
            "title": "Marketing Development Representative",
            "location": "San Francisco 1",
            "datesWorked": "November 2013 - April 2015",
            "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla odio sed porta feugiat. Curabitur sed rutrum massa. Ut in convallis diam, non pharetra velit. Curabitur sit amet condimentum orci. Cras vitae venenatis eros. Proin posuere, tellus vitae interdum mattis, ex justo malesuada velit, et ultrices ligula velit tincidunt mauris. Vestibulum maximus felis vel felis volutpat viverra quis sit amet justo. Aliquam libero eros, dignissim et facilisis quis, suscipit et massa. Donec pretium ante ac ultrices luctus. Morbi eu elit lobortis, gravida sem in, pharetra lectus. Suspendisse condimentum malesuada neque, sed condimentum diam tristique sit amet. Proin at urna sed orci vestibulum ultrices vel sit amet mi. Maecenas dignissim augue porta, condimentum nibh ut, dictum velit. Donec id eleifend tortor, vitae malesuada leo."
        }, {
            "employer": "Administrative Office of the Courts",
            "title": "Don't remember title",
            "location": "San Francisco 2",
            "datesWorked": "July 2011 - June 2013",
            "description": "A crap job that I needed at the time."
        }],
    };

    var projects = [{
        "title": "",
        "datesWorked": "",
        "description": "",
        "images": [
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200"
        ]
    }, {
        "title": "",
        "datesWorked": "",
        "description": "",
        "images": [
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200"
        ]
    }, {
        "title": "",
        "datesWorked": "",
        "description": "",
        "images": [
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200",
            "http://www.placehold.it/125X200"
        ]
    }];

    var bio = {
        "name": "Eddie Naff",
        "role": "Web Developer",
        "contacts": {
            "mobile": "415-200-7004",
            "email": "john@example.com",
            "github": "johndoe",
            "twitter": "@johndoe",
            "location": "San Francisco"
        },
        "bioPic": "http://www.placehold.it/150x150",
        "welcomeMessage": "Hey there sexy",
        "skills": ['Pizza eating', 'fornicating', 'general trouble-making']
    };

    var education = {
        "schools": [{
            "name": "San Francisco State University",
            "location": "San Francisco",
            "degree": "BA",
            "majors": ["Cinema"],
            "datesAttended": "",
            "Uri": ""
        }, {
            "name": "University of California, Irvine",
            "location": "Irvine",
            "degree": "N/A",
            "majors": ["Urban and Regional Planning"],
            "datesAttended": "",
            "Uri": ""
        }],
        "onlineCourses": [{
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "datesAttended": "2015",
            "url": "http://www.udacity.com/course/ud804"
        }]
    };

    function displayBio() {

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedContactinfo = HTMLcontactGeneric.replace('%data%', bio.contact);
        var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPic);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            var countSkills = bio.skills.length;

            for (i = 0; i < countSkills; i++) {
                $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
            }
        }
    }

    function displayWork() {
        for (var job in work.jobs) {
            // create new div for work experience
            $('#workExperience').append(HTMLworkStart.replace('%data%', work.jobs[job].datesWorked));
            // concat employer and title
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);

            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].datesWorked);

            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formmattedDateLocation = formattedDates + ', ' + formattedLocation;

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedDescription);
            console.log('Index pos. ' + job + ': ' + work.jobs[job].employer);
        }
    }

    function locationizer(work_obj) {
        var workLocations = [];
        for (var i in work_obj.jobs) {
            workLocations.push(work.jobs[i].location);
        }
        return workLocations;
    }

    $('#main').append(internationalizeButton);


    function inName(name) {
        var namesArray = bio.name.split(' ');
        var newFirst = namesArray[0].slice(0, 1) + namesArray[0].slice(1);
        var newLast = namesArray[1].toUpperCase();
        var internationalizedName = newFirst + ' ' + newLast;

        return internationalizedName;
    }

    console.log(inName('Eddie', 'Naff'));

    console.log(locationizer(work));
    displayBio();
    displayWork();
