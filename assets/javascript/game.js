$(document).ready(function () {

    var targetNumber = Math.floor((Math.random() * 101) + 19);

    $("#number-to-guess").text(targetNumber);

    var counter = 0;

    var wins = 0;
    var losses = 0;

    // Now for the hard part. Creating multiple crystals each with their own unique number value.

    // We begin by expanding our array to include four options.

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Used like so
    var arr = [];
    arr = shuffle(arr);
    console.log(arr);

    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < 4; i++) {

        // Create random value between 1-12 to assign to crystal
        var randCrystal = Math.floor((Math.random() * 12) + 1);
        if (arr.length < 4 && arr.includes(randCrystal) == true) {
            newRandCrystal = Math.floor((Math.random() * 12) + 1);
            arr.push(newRandCrystal);
            console.log("This number replaced a duplicate " + newRandCrystal);
        } else {
            arr.push(randCrystal);  
        }



        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

        // Each imageCrystal will be given a data attribute called data-crystalValue.

        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", arr[i]);
        console.log("Original numbers " + arr[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);

    }

    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        alert("New score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
            targetNumber = Math.floor((Math.random() * 53) + 1);
            $("#number-to-guess").text(targetNumber);
            counter = 0;
            wins++;
            $("#wins").text(" " + wins)
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
            targetNumber = Math.floor((Math.random() * 53) + 1);
            $("#number-to-guess").text(targetNumber);
            counter = 0;
            losses++;
            $("#losses").text(" " + losses);
        }


    });



})

