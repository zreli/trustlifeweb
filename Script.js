const navE1 = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { 
        navE1.classList.add('navpear');
    }
    else if(window.scrollY < 100) { 
        navE1.classList.remove('navpear');
    }

});

function DisplayImg (imgnum) {
  
}

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks, imgcont;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
   
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
 
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
 

function OpenBurger() {
const sidebar = document.querySelector('.sidebar');
sidebar.style.width = '50%';

  }

  function CloseBurger() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '0%';
  
    
      }

    


 



      var myIndex = 0;
      carousel();
      
      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "flex";  
        setTimeout(carousel, 8000);    
      
      }


////////////////////////////////////////////////////

     
              function flip(village) {
                var inner = document.getElementsByClassName("inner") [village];
                inner.classList.toggle("innerflip");
             
                
                  }
        


     
                  function qualification(certi) {
                    var certificate = document.getElementsByClassName("modal") [certi];
                    certificate.style.transform = "scale(1)";
                    certificate.style. borderRadius = "0%";
                 var stops = document.getElementsByTagName("body")[0];
                 stops.style.overflowY = "hidden";
                      }
            
                      function qualificationClose(ccerti) {
                        var certificate = document.getElementsByClassName("modal") [ccerti];
                        certificate.style.transform = "scale(0)";
                        var stops = document.getElementsByTagName("body")[0];
                        stops.style.overflowY = "";
                        
                          }