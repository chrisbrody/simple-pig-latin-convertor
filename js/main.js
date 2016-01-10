function convertToPigLatin(form) {
    // get user id on submit
    var latin = this.form.piglatin.value
    // change to lowercase
    var latinLower = latin.toLowerCase()
    // store the first character of the input
    var latinChar = latinLower.charAt(0)
    // store the result element to display
    var resultDiv = document.getElementById('result')
    // store vowels
    var vowels = ['a', 'e', 'i', 'o', 'u']

    // check if 1st letter is a, e, i, o, u
    if(latin == '') {
    	alert('please add a word')
    } else if( latinChar === vowels[0] || latinChar === vowels[1] || latinChar === vowels[2] || latinChar === vowels[3] || latinChar === vowels[4] ) {   	
    	// if the first character is a vowel add -yay to the word and display to the screen
    	resultDiv.textContent = latin + '-yay'
    } else  {
        // otherwise loop through the word
    	for (var i = 0; i < latin.length; i++) {
    		// find the first vowel
    		if( latin.charAt(i) === vowels[0] || latin.charAt(i) === vowels[1] || latin.charAt(i) === vowels[2] || latin.charAt(i) === vowels[3] || latin.charAt(i) === vowels[4] ) {
    			// create before var to store letters till the 1st vowel
				var before = latin.substring(0, i)
				// create after var to store letters after the 1st vowel
				var after = latin.substring(i, latin.length)
                // add result to the page
				resultDiv.textContent = after + '-' + before + 'ay'
                // stop after result is found
    			break
    		}
    	}
    }
    

} 

// add event listener to submit id button
document.getElementById('submit').addEventListener('click', convertToPigLatin, false)