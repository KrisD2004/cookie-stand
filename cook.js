//stats for cookies sold 
let seattle = {
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
    
    //caculate: function () {
       // for(let i = 0; i < this.hoursofOperation.length; i++){
            //console.log(this.getCookies())
            //console.log(this.hoursofOperation[i])
       // }
   // }
    

//}
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
        //console.log(this.getCustomers())
        
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
    //variable.innerHTML = `${seattle.hoursofOperation[i]}: ${seattle.cookiesperhour[i]} cookies | ${tokyo.hoursofOperation[i]}: ${tokyo.cookiesperhour[i]} | } `
    variable.innerHTML = `${seattle.hoursofOperation[i]}: ${seattle.cookiesperhour[i]} cookies | ${tokyo.hoursofOperation[i]}: ${tokyo.cookiesperhour[i]} cookies | ${Dubai.hoursofOperation[i]}: ${Dubai.cookiesperhour[i]} cookies | ${Paris.hoursofOperation[i]}: ${Paris.cookiesperhour[i]} cookies | ${Lima.hoursofOperation[i]}: ${Lima.cookiesperhour[i]} cookies`;
    hoursArray.append(variable);
}

