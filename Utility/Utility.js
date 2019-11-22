
var read = require('readline-sync');

module.exports=
{
    readLine(){
        return read;
    },

    inputInteger(){
        let input = read.questionInt('Enter the input : ');         // accepting input
        return input;
    },

    inputString(){
        let string = read.question('Enter the String : ');         // accepting input
        return string;
    },

    inputWord(){
        let word = read.question('Enter the Word to Search : ');         // accepting input
        return word;
    },

    inputNumberOf(){
        let numberOfElement = read.question('How many element you want to enter : ');
        return numberOfElement
    },

    inputElementInArray(numberOfElement)
    {
        let elementArray = new Array(numberOfElement)
        for( let i=0; i<numberOfElement; i++){
            elementArray[i] = read.question(`Enter the Element number. ${i+1} : `);
        }
        return elementArray;
    },

//################################# Basic Programs #############################################

//--------------------------------- FilpCoin ---------------------------------------------------

    tossCoin(number)
    {
        let headCounter=0,tailCounter=0;
        for(let i=0;i<number;i++){
            toss=Math.random();                                     // generating random number
    
            if(toss>0.5){                                           // deciding head or tail
                //console.log('Head');
                headCounter++;
            }
            else{
                //console.log('Tail');
                tailCounter++;
            }
            
        }
        console.log('Head count : '+headCounter+' Percentage of Head : ' + (headCounter*100)/number);
        console.log('Tail count : '+tailCounter+' Percentage of Tail : ' + (tailCounter*100)/number);

        
        
    },

//-------------------------------- Harmonic Number---------------------------------------------

    /**
     * 
     * @param {*} number accepting from user
     * returning sum of harmonic number
     */
    harmonicNumberCalculator(number)
    {
        let sum=1;
        for(let i=2;i<=number;i++){
             sum=(sum+1)/i;                           // calculating the harmonic numberber
        }
        return sum;
            
    },

    checkYear(year){
        try{
            
            if(year>1000 && year<=9999)                              // year between 1000 and 9999
            {
                if(year%4==0 )         // checking for leap year
                    console.log('It is a Leap Year');
            
                else
                    console.log('It is not a Leap Year');
                
            }
            else{
                throw 'Invalid Year';
            }
        }

        catch(error){               
            console.log(error)
        }
    },

    checkPrime(number)
    {
        var i, temp=0, flag=0;      
        temp = ( number / 2 | 0);      
        if( number==0 || number==1 )
        {  
            return false    
        }
        else
        {  
            for(i=2;i<=temp;i++)
            {      
                if(number%i==0)
                {      
                    return false;     
                    flag=1;      
                    break;      
                }      
            }      
            if(flag==0)  
            { 
                return true;
            }  
        }  
    },

    readFromFile(fileName){

        var fs = require("fs");
        var word =fs.readFileSync(fileName).split('\\s');
        return word;
    },

    CalculateWindChill(temperature,windSpeed)
    {
        try{
            if( temperature<50 && windSpeed<120 && windSpeed>3 ){
                
                let windChill = 35.74 + 0.6215*temperature + (0.4275*temperature - 35.75) * Math.pow(windSpeed,0.6);
        
                console.log(`The Effective Temperature (The wind chill) : ${windChill}`);
            }
            else
            {
                throw 'The temperature muse less than 50 and wind speed must between 120 and 3';
                
            }
        }
        
        catch(e)
        {
            console.log(e);
        }
    },

    addToZero(tripletArray)
    {
        let count = 0;
        for(let i=0;i<tripletArray.length;i++)
        {
            for(let j=i+1;j<tripletArray.length;j++)
            {
                for(let k=j+1;k<tripletArray.length;k++)
                {
                    let sum = tripletArray[i]+tripletArray[j]+tripletArray[k];
                    if( sum == 0)
                    {
                        console.log('The Distinct Triplets '+ tripletArray[i]+' '+ tripletArray[j]+ ' ' + tripletArray[k]);
                        count++;
                    }
                }
            }
        }
    
        console.log('Number of Trplets : '+count);
    
    },


    bubbleSort( elementArray )
    {
        let temp;
		let n=elementArray.length;
		for(let i=0;i<n-1;i++) {
			for(let j=0;j<n-i-1;j++) {
				if(elementArray[j]>elementArray[j+1]){
					temp=elementArray[j];
					elementArray[j]=elementArray[j+1];
					elementArray[j+1]=temp;
				}
			}
        }
        
    },

    binarySearch(elementArray, l ,h, word)
    {
    
        if(h>=l){
            let mid = l + (h-1) / 2;
            
		
            if(elementArray[mid] === word)
            {
                return mid;
            }
		
            if(elementArray[mid] > word)
            {
                return this.binarySearch(elementArray, l, mid+1, word);
            }
            if(elementArray[mid] < word)
            {
               
		 return this.binarySearch(elementArray, mid-1, h, word);
            }
        }
        return -1;
    },

    insertionSort(elementArray)
    {     
        let j;
        for( let i=0; i<elementArray.length; i++ ){
            let hold = elementArray[i];
            j = i-1;
            while( j>=0 && elementArray[j] > hold )
            {
                elementArray[j+1] = elementArray[j];
                j = j-1;
            }
            elementArray[j+1] = hold; 
        }
    },

    print(item) {
        process.stdout.write(item + ' ');
        
    },

    arrayCompare( array1 , array2 )
    {
        for (let i = 0; i < array1.length; i++) 
            if (array1[i] != array2[i]) 
                return false; 
  
        return true; 
    },

    checkAnagram(string1, string2)
    {
        var stringArray1 = string1.split('');
        var stringArray2 = string2.split('');

        this.bubbleSort(stringArray1);
        this.bubbleSort(stringArray2);

        if(stringArray1.length == stringArray2.length)
        {
            if( this.arrayCompare(stringArray1, stringArray2) )
            {
                return true;
            }
        }
        return false
        
    },

    checkAnagramForInteger(number1, number2)
    {
        var numberArray1 = this.separateNumber(number1);
        var numberArray2 = this.separateNumber(number2);

        this.bubbleSort(numberArray1);
        this.bubbleSort(numberArray2);

        if(numberArray1.length == numberArray2.length)
        {
            if( this.arrayCompare(numberArray1, numberArray2) )
            {
                return true;
            }
        }
        return false
        
    },

    separateNumber(number)
    {
        var i=0;
        var tempArray = [];
        while (number > 0) {

            tempArray[i++] = number % 10 ;
        
            number = ( number / 10 | 0 );
        
        }
        return tempArray;
    },

    reverseInteger( number )
    {

        var reverse = 0;
        while(number != 0) {
            var digit = number % 10;
            reverse = reverse * 10 + digit;
            number = ( number / 10 | 0 );
        }
        return reverse;

    },

    checkPalindrom( value, reverseValue )
    {
        if( value === reverseValue )
            return true;
        return false;
    },

    printAnagram(){
        var k = 0;
        var primeAnagramArray = new Array();
        let arr = new Array(1000);
        for(let i=0 ;i<=1000;i++){
            arr[i]=false;
        }
        for( i=0; i<=1000; i++ )
        {
            if( this.checkPrime(i))
            {
                for( j=i+1; j<=1000; j++)
                {
                    if( this.checkPrime(j) )
                    {
                        if( this.checkAnagramForInteger( i, j ) )
                        {
                            if(!arr[j]){
                                arr[j]=true;
                                //process.stdout.write( i+' ' +j + ' ' );
                                primeAnagramArray[k++] = i;
                                primeAnagramArray[k++] = j;
                            }
                        }   
                    }
                }
            }
        }
        return primeAnagramArray;
    }
}
