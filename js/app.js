//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

function findId(str) {
    let idElem = document.getElementById(str);
    console.log(idElem)
    return idElem;
}

function findClass(str,num) {
    let classElem = document.getElementsByClassName(str)[num];
    console.log(classElem)
    return classElem;
}

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

let changeDisclaimer = document.getElementById("disclaimer");
console.log(changeDisclaimer)
changeDisclaimer.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

let brand = document.getElementById("brand1");
console.log(brand)
brand.innerHTML = "Nabisco";

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

let item1 = document.getElementById("item1");
console.log(item1)
item1.innerHTML = "Cheeseburger Oreos";

//4. Target the div element with the id of 'price1' and update the content to $8.99.


let price1 = document.getElementById("price1")
console.log(price1)
price1.innerHTML = "$8.99"

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

let discount1 = document.getElementById("discount1");
console.log(discount1)
discount1.innerHTML = "Free fries with purchase!"

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

let itemDiv2 = document.createElement('div');
itemDiv2.id = "item2";
let findWilGrand = findId("brand2")
findWilGrand.appendChild(itemDiv2)
itemDiv2.innerHTML = "Hendrick's Gin"


//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

let priceDiv2 = document.createElement('div');
priceDiv2.id = "price2";
let findItem2 = findId("item2")
findItem2.appendChild(priceDiv2);
priceDiv2.innerHTML = "$34.99"

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

let buttonElem = document.createElement('button');
buttonElem.id = "discount3"
buttonElem.innerHTML = "50% OFF Axe body soap!";
let findBlock3 = document.getElementsByClassName("block3")[0];
console.log(findBlock3)
findClass("block3")
// console.log(findBlock3)
findBlock3.appendChild(buttonElem)

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

let get1stClassInItem = findClass("item",0);
get1stClassInItem.innerHTML = "Orange Chicken"

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

let buttonElem2 = document.createElement("button");
buttonElem2.className = "discount";
buttonElem2.innerHTML = "Free T-Shirt and fortune cookie with purchase!"
let get2ndClassInItem = findClass("price", 0);
get2ndClassInItem.appendChild(buttonElem2)

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

let getBrand = findClass("brand", 1);
getBrand.innerHTML = "Uniqlo"

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

//Final Boss 
//Create your own product for the last three sections.
