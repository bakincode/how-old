function howOld() {  
    var userinput = document.getElementById("dob").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput==''){  
      document.getElementById("result").innerHTML = "Choose a date please!";    
      return false;   
    } else {  
        var dobYear = dob.getYear();  
        var dobMonth = dob.getMonth();  
        var dobDate = dob.getDate();  
        var now = new Date();  
        var currentYear = now.getYear();  
        var currentMonth = now.getMonth();  
        var currentDate = now.getDate();  
        var age = {};  
        var ageString = "";  
        yearAge = currentYear - dobYear;

        console.log(currentDate)

        if(currentYear < dobYear 
            || (currentYear == dobYear && currentMonth < dobMonth) 
            || (currentYear == dobYear && currentMonth == dobMonth && currentDate < dobDate)) {
                document.getElementById("result").innerHTML = "Enter a date earlier than the current one.";
                return false;
            }

        if(currentYear == dobYear && currentMonth < dobMonth) return false;

        if (currentMonth >= dobMonth)  
            var monthAge = currentMonth - dobMonth;  
        else {  
            yearAge--;  
            var monthAge = 12 + currentMonth - dobMonth;  
        }
        if (currentDate >= dobDate)  
            var dateAge = currentDate - dobDate;  
        else {  
            monthAge--;  
            var dateAge = 31 + currentDate - dobDate;  
        
            if (monthAge < 0) {  
                monthAge = 11;  
                yearAge--;  
            }  
        }  
        age = {  
        years: yearAge,  
        months: monthAge,  
        days: dateAge  
        };
        //document.getElementById("result").innerHTML = "Results: years: " + age.years + ", months: " + age.months + ", days: " + age.days + ";";
        document.getElementById("years").innerHTML = age.years;
        document.getElementById("months").innerHTML = age.months;
        document.getElementById("days").innerHTML = age.days;
  }  
}  