// ১ *** Callback function কি   ***
// callback function হল একটি ফাংশনকে অন্য একটা ফাংশনের আর্গুমেন্ট হিসাবে পাস করলে যাতে অপর কোন  ফাংশনে কার্যকর করা যায় তাকে  callback function বলে ।। অর্থাৎ আর্গুমেন্ট হচ্ছে এখানে callback function
 
// ২ ***   Higer order function কি ****
// আর যে ফাংশনটা আর্গুমেন্টকে রিসিভ করল তাকে Higer order function বলে ।।

// উদাহরন-১
// function print( ans ){
//     console.log(ans) ; // 7
// }
// function add(a, b){
//     print(a + b);
// }

// add(2,5);  

// function print( ans ){
//     console.log(ans) ; // 7
// }
// function add(a, b, callback){ // here callback = print
//     callback(a+b) ;
// }
// add(2,5,print); 


// উদাহরন-২

// function add(a, b, callback ){
//     console.log(`The sum of ${a} and ${b} is ${a + b }`);
//     callback()
// }


// function message(){
// console.log("Addition done ")
// }

// add(5, 6, message)
   
// Or

// function add(a, b, callback ){
//     console.log(`The sum of ${a} and ${b} is ${a + b }`);
//     callback()
// }

// add(5, 6, function message(){
//     console.log("Addition done ")
//     })

// 

// উদাহরন-৩

// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// এখানে callMe() ফাংশন হচ্চে callback() ফাংশন ।।
// এখানে greet() ফাংশন হচ্চে higerOrderFunction() ফাংশন ।।



// *****   Promise কি ????

// promise টা মূলত ব্যবহার করা হয় callback function এ চেইনএর ক্ষেত্রে যে জটিলতা সৃষ্টি হয় সেটা দূর করার জন্য ।।
// Promise হল একটা Object ।
// asynchornous way অর্থাৎ মেশিনে রান করতে কোন জটিলতা সৃষ্টি করে না ।।

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

// learn with sumit 

// const processOrder = () => {
//     console.log(`processing order for customer 1`);

//     var currentTime = new Date().getTime();
//     while(currentTime + 3000 >= new Date().getTime());

//     console.log(`order processed for customer 1 `)
// };


// console.log(`take order for customer 1`);
// processOrder();
// console.log(`complete order for customer 1 `)


// solve the blocking behavour


// const processOrder = () => {
//         console.log(`processing order for customer 1`);
    
//       setTimeout( () => {
//         console.log(`cooking complete`)
//       }, 3000);
    
//         console.log(`order processed for customer 1 `);
//     };
    
    
//     console.log(`take order for customer 1`);
//     processOrder();
//     console.log(`complete order for customer 1 `);


    // solve the flow controll problem

    // const takeOrder = (customer, callback) => {
    //   console.log(`take order for ${customer}`);
    //   callback(customer);
    // };

    // const processOrder = () => {
    //     console.log(`processing order for customer 1`);
    
    //   setTimeout( () => {
    //     console.log(`cooking complete`)
    //     console.log(`order processed for ${customer}`);
    //   }, 3000);
    
    // };

    // const completeOrder= (customer) => {
    //     console.log(`completed order for ${customer}`)
    // }
    
    
    // takeOrder('customer 1', (customer) => {
    //     processOrder(customer, (customer) => {
    //         completeOrder(customer);
    //     });
    // });

    
    // solve the callbak chaining problem by promise 


    // promise ব্যবহার করা হয় মূলত asynchrouns javascript কে কন্ট্রোল করার জন্য ।।

    // const promise = new promise((reslove, reject) => {
    // //   do something
    // });

    // Example - 1


    //  const hasMeeting = false ;

    //  const meeting = new Promise ((resolve, reject) => {
    //     if(!hasMeeting) {
    //         const meetingDetails = {
    //             name :'Technical Meeting',
    //             location : 'Google meet ', 
    //             time : '10:00 PM'

    //         };
    //         resolve(meetingDetails);
    //     }
    //     else{
    //         reject(new Error('meeting already scheduled!'));
    //     }
    //  });

    //  const addToCalendar = (meetingDetails) => {
    //   return new Promise ((reslove, reject) => {
    //     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    //     reslove(calendar)
    //   });
    //  };

    //  meeting
    //  .then (addToCalendar)
    //  .then((res) => {
    //   console.log(JSON.stringify(res));
    //  })
    //  .catch((err) => {
    //   console.log(err.message);
    //  });


//  Example - 2

//  function getUser (userId) {
//     return new Promise ((resolve, reject) => {
//         console.log('Get user from the database ');
         
//         setTimeout(() => {
//             resolve({
//                 userId : userId , 
//                 userName : "john"
//             });
//         }, 1000);
//     })
//  }

//  function getServices (user) {
//     return new Promise((resolve, reject) =>{
//         console.log(`Get service of ${user.userName} from the API`);
//         setTimeout(() =>{
//             resolve(['email', 'vpn', 'cdn']);
//         }, 2 * 1000)
//     });
//  }


//  function getServiceCost(services){
//     return new Promise((resolve, reject) => {
//         console.log(`calculate service costs of ${services}.`);
//         setTimeout(() => {
//             resolve(services.length * 100);
//         }, 3 * 1000);
//     });
//  }



// ice cream project freecodecamp from youtube 


// let stocks = {
//         Fruits : ['strabary', 'grapes', 'banana', 'apple'],
//         liquid : ['water', 'ice'], 
//         holder : [ 'cone', 'cup', 'stick'], 
//         toppings : ['choclate ', 'penuts']
//     };
    
//     let isShopOpen = true;

//     let order = (time, work) => {
       
//     return new Promise((resolve, reject) => {
      
//         if(isShopOpen){

//             setTimeout(() => {
//                 resolve(work())
//             }, time);
            
//         }
//         else{
//             reject(console.log("our shop is closed "))
//         }
//     });
//   }; 

//   order(2000, () =>{
//     console.log(`${stocks.Fruits[0]}  was selected `)
//   })


//   .then(() => {
//     return order(000, () => {
//         console.log('production has started ')
//     })
//   })


//   .then(() => {
//     return order(2000, () => {
//         console.log('The first was choped  ')
//     })
//   })


//   .then(() => {
//     return order(1000, () => {
//         console.log(`${stocks.liquid[0]}  and ${stocks.liquid[1]} was selectd`)
//     })
//   })



//   .then( () => {
//     return order(1000, ( ) => {
//         console.log(`ice cream placed on ${stocks.holder[0]}`)
//     })
//   })


//   .then(() => {
//     return order(3000, () => {
// console.log(`${stocks.toppings[0]}  was selected `)
//     })
//   })


//   .then(() => {
//     return order(1000, () => {
// console.log(`start the machine  `)
//     })
//   })


//   .then(() => {
//     return order(3000, () => {
// console.log(` ice creem placed on ${stocks.holder[0]} `)
//     })
//   })


//   .then(() => {
//     return order(3000, () => {
// console.log(`${stocks.toppings[0]} was selected`)
//     })
//   })



//   .then( () => {
//     return order(1000,( ) => {
// console.log('ice cream was served ')
//     })
//   })

//   .catch(() => {
//     console.log('customer left ')
//   })

//   .finally(() => {
// console.log('day ended, shop is closed')
//   })

// async and await keyword 

// let stocks = {
//             Fruits : ['strabary', 'grapes', 'banana', 'apple'],
//             liquid : ['water', 'ice'], 
//             holder : [ 'cone', 'cup', 'stick'], 
//             toppings : ['choclate ', 'penuts']
//         };
        
// let isShopOpen = true;

// let toppingsChoice  = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which topping would you love ??"))
//         }, 3000);
//     });
// };

// async function kitchen () {
//     console.log('A');
//     console.log('B');
//     console.log('C');

//     await toppingsChoice();

//     console.log('D');
//     console.log('E');
// }

// kitchen()

// console.log("doing the dishes ")
// console.log("cleaning the table  ")
// console.log("taking others order  ")


//async and  await keyword


// let stocks = {
//     Fruits : ['strabary', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'], 
//     holder : [ 'cone', 'cup', 'stick'], 
//     toppings : ['choclate ', 'penuts']
// };

// let isShopOpen = true;


// function time(ms){
//     return new Promise((resolve, reject) => {
//         if(isShopOpen) {
//             setTimeout((reslove, ms) => {
                
//             }, timeout);
//         }
//         else{
//             reject(console.log('shop is closed'))
//         }
//     })
// }


// async function kitchen() {
//     try{

//         await time(2000)
// console.log(`${stocks.Fruits[0]}`)
//     }
//     catch(error) {
// console.log("customer left ", error)
//     }
//     finally{
// console.log("day ended, shop is closed ")
//     }
// }

// kitchen();


// hablu programmear 

// function getUser(userId) {
//     return new Promise((resolve, reject) => {
//         console.log('Get user from the database.');
//         setTimeout(() => {
//             resolve({
//                 userId: userId,
//                 username: 'john'
//             });
//         }, 1000);
//     })
// }

// function getServices(user) {
//     return new Promise((resolve, reject) => {
//         console.log(`Get services of  ${user.username} from the API.`);
//         setTimeout(() => {
//             resolve(['Email', 'VPN', 'CDN']);
//         }, 2 * 1000);
//     });
// }

// function getServiceCost(services) {
//     return new Promise((resolve, reject) => {
//         console.log(`Calculate service costs of ${services}.`);
//         setTimeout(() => {
//             resolve(services.length * 100);
//         }, 3 * 1000);
//     });
// }

// async function loadData(){
//     let user = await getUser(100);
//     let service = await getServices(user);
//     let cost = await getServiceCost(service);
//     console.log(`The service cost is ${cost}`)
// }

// loadData();


// Event loop and function closure 



