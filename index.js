(function(){
    var morseCodes =[
        {
            'morse':'.-',
            'txt':'a'
        },
        {
            'morse':'-...',
            'txt':'b'
        },
        {
            'morse':'-.-.',
            'txt':'c'
        },
        {
            'morse':'-..',
            'txt':'d'
        },
        {
            'morse':'.',
            'txt':'e'
        },
        {
            'morse':'..-.',
            'txt':'f'
        },
        {
            'morse':'--.',
            'txt':'g'
        },
        {
            'morse':'....',
            'txt':'h'
        },
        {
            'morse':'..',
            'txt':'i'
        },
        {
            'morse':'.----',
            'txt':'j'
        },
        {
            'morse':'-.-',
            'txt':'k'
        },
        {
            'morse':'.-..',
            'txt':'l'
        },
        {
            'morse':'--',
            'txt':'m'
        },
        {
            'morse':'-.',
            'txt':'n'
        },
        {
            'morse':'---',
            'txt':'o'
        },
        {
            'morse':'.--.',
            'txt':'p'
        },
        {
            'morse':'--.-',
            'txt':'q'
        },
        {
            'morse':'.-.',
            'txt':'r'
        },
        {
            'morse':'...',
            'txt':'s'
        },
        {
            'morse':'-',
            'txt':'t'
        },
        {
            'morse':'..-',
            'txt':'u'
        },
        {
            'morse':'...-',
            'txt':'v'
        },
        {
            'morse':'.--',
            'txt':'w'
        },
        {
            'morse':'-..-',
            'txt':'x'
        },
        {
            'morse':'-.--',
            'txt':'y'
        },
        {
            'morse':'--..',
            'txt':'z'
        },
        {
            'morse':'-----',
            'txt':'0'
        },
        {
            'morse':'.----',
            'txt':'1'
        },
        {
            'morse':'..---',
            'txt':'2'
        },
        {
            'morse':'...--',
            'txt':'3'
        },
        {
            'morse':'....-',
            'txt':'4'
        },
        {
            'morse':'.....',
            'txt':'5'
        },
        {
            'morse':'-....',
            'txt':'6'
        },
        {
            'morse':'--...',
            'txt':'7'
        },
        {
            'morse':'---..',
            'txt':'8'
        },
        {
            'morse':'----.',
            'txt':'9'
        },
        {
            'morse':'.-.-.-',
            'txt':'.'
        },
        {
            'morse':'--..--',
            'txt':','
        },
        {
            'morse':'..--..',
            'txt':'?'
        },
        {
            'morse':'-.-.--',
            'txt':'!'
        },
        {
            'morse':'.−.−.−',
            'txt':'.'
        },
        {
            'morse':'---...',
            'txt':':'
        },
        {
            'morse':'−.−.−.',
            'txt':';'
        },
        {
            'morse':'−.−−.−',
            'txt':')'
        },
        {
            'morse':'−.−−.',
            'txt':'('
        },
        {
            'morse':'.----.',
            'txt':'\''
        },
        {
            'morse':'-..-.',
            'txt':'/'
        },
        {
            'morse':'-.--.',
            'txt':'{'
        },
        {
            'morse':'-.--.-',
            'txt':'}'
        }
    ]
    function morseToTxt(mCode){ 
        var ary=   morseCodes.filter(function(element){
            if(element.morse==mCode)
            return true;
            else
            return false;
        })
        if(ary.length<1)
        return "UNDEF"
        
        return ary[0].txt
    }
    function txtToMorse(txtCode){
        var ary=   morseCodes.filter(function(element){
            if(element.txt==txtCode)
            return true;
            else
            return false;
        })
        if(ary.length<1)
        return "|UNDEF|"
        
        return ary[0].morse
    }
    function convMorse(){
        var morseWords = $("#MORSE").val().split("   ")//Triple space between words
        var txtWords = morseWords.map(function(word){
            return word.split(" ").map(function(letter){//single space between letters
                return morseToTxt(letter)
            }).join('')
        })
        $("#TXT").val(txtWords.join(' '))
    }
    function convTxt(){
        var txtWords = $("#TXT").val().toLowerCase().split(" ")//Triple space between words
        var morseWords = txtWords.map(function(word){
            return word.split("").map(function(letter){//single space between letters
                return txtToMorse(letter)
            }).join(' ')
        })
        $("#MORSE").val(morseWords.join('   '))
    }
    $(document).ready(function(){
        $("#M2T").click(convMorse)
        $("#T2M").click(convTxt)
        $("#MORSE").on("input", function(data){
            convMorse()
        })
        $("#TXT").on("input", function(data){
            convTxt()
        })
    })
})()