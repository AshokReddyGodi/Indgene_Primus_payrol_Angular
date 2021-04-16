import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.myFunction();
  }
  myFunction() {
    var tabs = $('.tabs');
    var selector = $('.tabs').find('a').length;
    //var selector = $(".tabs").find(".selector");
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();
    $('.selector').css({
      left: activeItem.position.length + 'px',
      width: activeWidth + 'px',
    });

    $('.tabs').on('click', 'a', function (e) {
      e.preventDefault();
      $('.tabs a').removeClass('active');
      $(this).addClass('active');
      var activeWidth = $(this).innerWidth();
      var itemPos = $(this).position();
      $('.selector').css({
        left: itemPos.left + 'px',
        width: activeWidth + 'px',
      });
    });
  }

  reset() {
    var tabs = $('.tabs');
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();

    $('.selector').css({
      left: activeItem.position.length + 'px',
      width: activeWidth + 'px',
    });

    $('.tabs a').removeClass('active');
    $('.firstElement').addClass('active');
    var activeWidth1 = $('.firstElement').innerWidth();
    var itemPos1 = 1;
    console.log($('.firstElement').position());
    $('.selector').css({
      left: itemPos1 + 'px',
      width: activeWidth1 + 'px',
    });
  }
}
