import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as $ from 'jquery';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stardew-valley';
  pageTitle : String = 'aaa';
  villagerIndex : any[];

  constructor(private router: Router, private dataService : DataService) {
  }

  ngOnInit() {
    this.dataService.getIndex().subscribe(v => {
      this.villagerIndex = v;
      this.autocomplete(document.getElementById("searchbox"), this.villagerIndex, this.router);
    });
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe((navEnd: NavigationEnd) => {
        this.changeTitle(navEnd.urlAfterRedirects);
        // console.log(navEnd.urlAfterRedirects);
      });
      
      $('#sidebar-nav').on('click', 'li', function(event: any) {
        console.log(event.target.text);
        if($(window).width() <= 768){
          $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
        }
    });

    $('.overlay').on('click', function(event: any) {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    })
    
  }

  @ViewChild(RouterLinkActive)
  set stuff(rla : RouterLinkActive) {
    // this.test = rla;
    // console.log(this.test);
  }
  

  changeTitle(title : String) {
    title = title.toLowerCase();
    if (title === '/' ) {
      this.pageTitle = 'Home';
    } else if (title.includes('villagers')) {
      this.pageTitle = 'Villagers';
    } else if (title.includes('shops')) {
      this.pageTitle = 'Shops';
    } else if (title.includes('fish')) {
      this.pageTitle = 'Fish';
    }
  }

  onClickMe() {
    $('#sidebar').toggleClass('active');
    $('.overlay').toggleClass('active');
  };



  // autocomplete function
  autocomplete(inp, arr, router) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists(null);
      if (!val) { return false; }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("a");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].name.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].name + "' data-path='" + arr[i].path + "'>" ;
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = '';
            (<any>document).activeElement.blur();
            // inp.value = this.getElementsByTagName("input")[0].value;
            router.navigate([$(this.getElementsByTagName("input")[0]).data('path')]);
            // window.location.href = $(this.getElementsByTagName("input")[0]).data('path');
            // alert($(this.getElementsByTagName("input")[0]).data('path'));
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists(null);
          });
          a.appendChild(b);
        }
      }
    })
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
      var x : any = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

}
