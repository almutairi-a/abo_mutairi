$(document).ready(function () {

    $('.menu').click(function() {
        $('.overlay').toggleClass('anim');
        $(this).addClass('open')
    });

    $('.open').click(function(){
        $('.overlay').toggleClass('reverse-animation');
    })
});

function checkWords() {
    var inputText = document.getElementById('inputText').value;
    var words = inputText.split(/\s+/);
    var customExcludedWords = ['مشرف', '(', ')', 'دعم', 'تم'];
    var validationResult = validateWordsAndSpaces(words, customExcludedWords);

    var resultElement = document.getElementById('result');
    if (validationResult.repeatedWords.length > 0) {
        resultElement.textContent = 'الاشياء المتكررة: ' + validationResult.repeatedWords.join(', ');
        if (validationResult.extraSpaces.length > 0) {
            resultElement.textContent += '\nيوجد مسافات زائدة بعد: ' + validationResult.extraSpaces.join(', ');
        }
    } else if (validationResult.extraSpaces.length > 0) {
        resultElement.textContent = 'يوجد مسافات زائدة بعد: ' + validationResult.extraSpaces.join(', ');
    } else {
        resultElement.textContent = 'لا توجد اشياء متكررة أو مسافات زائدة.';
    }
}

function validateWordsAndSpaces(words, customExcludedWords) {
    var validationResults = {
        repeatedWords: [],
        extraSpaces: []
    };

    var wordCount = {};
    var spaceAfterWord = {};

    words.forEach(function (word, index) {
        if (!customExcludedWords.includes(word)) {
            wordCount[word] = (wordCount[word] || 0) + 1;

            if (index < words.length - 1 && words[index + 1].trim() === '') {
                spaceAfterWord[word] = true;
            }
        }
    });

    for (var word in wordCount) {
        if (wordCount.hasOwnProperty(word) && wordCount[word] > 1) {
            validationResults.repeatedWords.push(word);
        }
    }

    for (var word in spaceAfterWord) {
        if (spaceAfterWord.hasOwnProperty(word)) {
            validationResults.extraSpaces.push(word);
        }
    }

    return validationResults;
}

$(document).ready(function () {

    $('.menu').click(function() {
        $('.overlay').toggleClass('anim');
        $(this).addClass('open')
    });

    $('.open').click(function(){
        $('.overlay').toggleClass('reverse-animation');
    })
});