
/*show the menu in small devices when the user clicks on the hamburger*/
let mainNav = document.getElementById('js-nav-menu');
let navBarToggle = document.getElementById('js-nav-hamburger');

navBarToggle.addEventListener('click', () => {
    
    mainNav.classList.toggle('active-link');
});

/*puts the figures in the home*/
let addPictures = () => {
    const img_address = ["croche_jar_one.JPG", 
                    "cushion.JPG", "flour.JPG", 
                    "mandala_1.JPG", "name_one.JPG",
                    "name_two.JPG", "rug_five.JPG",
                    "rug_four.JPG", "rug_one.JPG",
                    "rug_six.JPG", "rug_three.JPG" , 
                    "rug_two.JPG"];

    for (let i = 0; i < img_address.length; i++){
    
        const container = document.getElementById('js-container-img-home'); 
    
        //creates the div element
        let div = document.createElement("div");
        //adds a css class
        let att_div = document.createAttribute("class");       
        att_div.value = "pictures-work";                           
        div.setAttributeNode(att_div);  
    
        //creates a link element
        let a = document.createElement("a");
        //adds a link
        a.href = "#";
        //adds a css class
        let att_a = document.createAttribute("class");       
        att_a.value = "links-pictures";                           
        a.setAttributeNode(att_a);  

        //cretes an img element
        let img = new Image ();
        //adds source
        img.src = "img/" + img_address[i];
        //adds a class
        let att_img = document.createAttribute("class");       
        att_img.value = "img-home";                           
        img.setAttributeNode(att_img);
    
        //conects all the elements
        a.appendChild(img);
        div.appendChild(a);
        container.appendChild(div); 
    }
}

addPictures();