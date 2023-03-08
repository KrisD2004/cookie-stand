//stats for cookies sold 
/*let seattle = {
  min: 23, 
  max: 65,
  Avg: 6.5,
  hoursofOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  cookiesperhour: [],
    getCustomers: function () {//customers per hour
        
     return Math.ceil(Math.random() * (this.max - this.min) + this.min);
     
    },
    getCookies: function() {
        
            //console.log(this.getCustomers())
            for (i = 0; i < this.hoursofOperation.length; i++) {
                let cookies = Math.ceil(this.Avg * this.getCustomers())
                this.cookiesperhour.push(cookies)
            }
            return Math.ceil(this.Avg * this.getCustomers()) 
    
        },
        //console.log(this.getcustomers())
        //return Math.ceil(this.Avg * this.getCustomers())
    }
    //caculate: function () {
        //for(let i = 0; i < this.hoursofOperation.length; i++){
           // console.log(this.getCookies())
            //console.log(this.hoursofOperation[i])
       // }
   // }
    
//}
seattle.getCustomers()
seattle.getCookies()

let tokyo = {
    min: 3, 
    max: 24,
    Avg: 1.2,
    hoursofOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    cookiesperhour:[],
    getCustomers: function () {//customers per hour 
       
        return Math.ceil(Math.random() * (this.max - this.min) + this.min);
    },
    getCookies: function() {
        
            //console.log(this.getCustomers())
            for (i = 0; i < this.hoursofOperation.length; i++) {
                let cookies = Math.ceil(this.Avg * this.getCustomers())
                this.cookiesperhour.push(cookies)
            }
            return Math.ceil(this.Avg * this.getCustomers()) 
    
        },
        //console.log(this.getcustomers())
        //return Math.ceil(this.Avg * this.getCustomers())
    }
    //caculate: function () {
      //  for(let i = 0; i < this.hoursofOperation.length; i++){
       ////     console.log(this.getCookies())
       //     console.log(this.hoursofOperation[i])
       // }
   // }
//}
tokyo.getCustomers()
tokyo.getCookies()


let Dubai = {
    min: 3,
    max: 24,
    Avg: 3.7,
    hoursofOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    cookiesperhour:[],
    getCustomers: function () {//customers per hour
        
        return Math.ceil(Math.random() * (this.max - this.min) + this.min);
    },
    getCookies: function() {
        
            for (i = 0; i < this.hoursofOperation.length; i++) {
                let cookies = Math.ceil(this.Avg * this.getCustomers())
                this.cookiesperhour.push(cookies)
            }
            return Math.ceil(this.Avg * this.getCustomers()) 
    
        },
        //console.log(this.getcustomers())
        //return Math.ceil(this.Avg * this.getCustomers())
    }
   // caculate: function () {
      //  for(let i = 0; i < this.hoursofOperation.length; i++){
      //      console.log(this.getCookies())
       //     console.log(this.hoursofOperation[i])
       // }
   // }
//}
Dubai.getCustomers()
Dubai.getCookies()

let Paris = {
    min: 20,
    max: 38,
    Avg: 2.3,
    hoursofOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    cookiesperhour:[],
    getCustomers: function () {//customers per hour
        
        return Math.ceil(Math.random() * (this.max - this.min) + this.min);
    },
    getCookies: function () {
            //console.log(this.getCustomers())
            for (i = 0; i < this.hoursofOperation.length; i++) {
                let cookies = Math.ceil(this.Avg * this.getCustomers())
                this.cookiesperhour.push(cookies)
            }
            return Math.ceil(this.Avg * this.getCustomers()) 
    
        },
        //console.log(this.getCustomers())
        //return Math.ceil(this.Avg * this.getCustomers())
        
    }
Paris.getCustomers()
Paris.getCookies()



let Lima = {
    min: 2,
    max: 16,
    Avg: 4.6, //average amount of cookies sold per customer
    hoursofOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    cookiesperhour:[],
    getCustomers: function () {//customers per hour
        
        return Math.ceil(Math.random() * (this.max - this.min) + this.min);
    },
    getCookies: function () {
        
        for (i = 0; i < this.hoursofOperation.length; i++) {
            let cookies = Math.ceil(this.Avg * this.getCustomers())
            this.cookiesperhour.push(cookies)
        }
        return Math.ceil(this.Avg * this.getCustomers()) 

    },
    //caculate: function () {
       // for(let i = 0; i < this.hoursofOperation.length; i++){
           // console.log(this.getCookies())
           // console.log(this.hoursofOperation[i])
       // }
        
   // }
    
    
}
Lima.getCustomers()
Lima.getCookies()
//seattle-38, tokyo-20, dubai-7, paris-37, Lima-10 is customers per hour

let hoursArray = document.querySelector('.output')
for (let i = 0; i < seattle.hoursofOperation.length; i++){
    let variable = document.createElement("li");
    
    variable.innerHTML = `${seattle.hoursofOperation[i]}: ${seattle.cookiesperhour[i]} cookies | ${tokyo.hoursofOperation[i]}: ${tokyo.cookiesperhour[i]} cookies | ${Dubai.hoursofOperation[i]}: ${Dubai.cookiesperhour[i]} cookies | ${Paris.hoursofOperation[i]}: ${Paris.cookiesperhour[i]} cookies | ${Lima.hoursofOperation[i]}: ${Lima.cookiesperhour[i]} cookies`;
    hoursArray.append(variable);
}

*/


let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", ] 

function cookieStandLocation (location, min, max, avg) {
    stand = {};
    stand.location = location;
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.cookiesperhour = [];
    stand.hoursofOperation = hours;


    stand.getCustomers = function() {

        return Math.ceil(Math.random() * (this.max - this.min) + this.min);
    };

    stand.getCookies = function() {
        //loop for getCookies
        for (i = 0; i < this.hoursofOperation.length; i++) {
            //console.log(this.getCustomers())
            let cookies = Math.ceil(this.avg * this.getCustomers())
            //console.log(this.hoursofOperation[i], cookies)
            this.cookiesperhour.push(cookies)
        }
        
        return this.cookiesperhour;

       // return Math.ceil(this.Avg * this.getCustomers()) 

    }
    //total function
    stand.total = function total() {
        let total=0
        for (let i = 0; i < this.cookiesperhour.length; i++) {
            total += this.cookiesperhour[i];
        }
        return total
    }
    
    stand.render =  function() {
        
        
        let trCook = document.createElement('tr');
        let locateTD = document.createElement('td');
        trCook.append(locateTD);
        locateTD.innerHTML = this.location;
        
        let tr = document.createElement("tr");
        tr.innerHTML = ' '
        document.getElementById('jstbl').append(tr);
        
        trCook.append(locateTD);
        let thCook = document.createElement('th')
        thCook.innerHTML = ' '
        
        //document.getElementById('jstbl').append(thCook)
        
        // for (let i = 0; i < this.hoursofOperation.length; i ++) {
            //     let thCook = document.createElement('th');
            //     thCook.innerHTML = hours[i];
            //     document.getElementById('jstbl').append(thCook)
            // }
            // document.getElementById('jstbl').append('dailytotal');
            
            for (let i = 0; i < this.hoursofOperation.length; i++) {
                let tdCook = document.createElement('td');
            tdCook.innerHTML = this.cookiesperhour[i];
            document.getElementById('jstbl').append(trCook);
           // trCook.append(locateTD);
           trCook.append(tdCook);
           
        } 
        
        
        //total += this.cookiesperhour[i];
        //return total
        
        //let dailytotal = document.createElement('th');
        
        let temptd = document.createElement('td');
        let dailytotal = document.createElement('th');
        dailytotal.innerHTML = 'dailytotal'
        temptd.innerHTML=this.total()
        //let dailytotal = document.createElement('th');
        //trCook.append(dailytotal);
        trCook.append(temptd);
        //document.getElementById('jstbl').append(temptd);
        


        


        //trCook.append(locateTD);
        // document.getElementById('jstbl').append(trCook);
        //trCook.append(tdCook);
        
        
    } 
    return stand;    
}
let table = document.getElementById('jstbl');
let tablerow = document.createElement('tr');
let tablehead = document.createElement('th');
table.append(tablerow);
tablerow.append(tablehead);

for (let i = 0; i < hours.length; i ++) {
    let thCook = document.createElement('th');
    thCook.innerHTML = hours[i];
    tablerow.append(thCook)
}

let totalhead = document.createElement('th');
totalhead.innerHTML = 'dailytotal';
tablerow.append(totalhead);



const seattle =  new cookieStandLocation('Seattle', 23, 65, 6.3);
seattle.getCustomers();
seattle.getCookies();
seattle.render();
seattle.total();


const Tokyo = new cookieStandLocation('tokyo', 3, 24, 1.2);
Tokyo.getCustomers();
Tokyo.getCookies();
Tokyo.render();
Tokyo.total();


const Dubai = new cookieStandLocation('Dubai', 3, 24, 3.7);
Dubai.getCustomers();
Dubai.getCookies();
Dubai.render();
Dubai.total();

const Paris = new cookieStandLocation('Paris', 20, 38, 2.3);
Paris.getCustomers();
Paris.getCookies();
Paris.render();
Paris.total();


const Lima = new cookieStandLocation('Lima', 2, 16, 4.6);
Lima.getCustomers();
Lima.getCookies();
//Lima.total();
Lima.render();
Lima.total();







//seattle.render();