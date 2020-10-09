import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-p-a-edit-course',
  templateUrl: './p-a-edit-course.component.html',
  styleUrls: ['./p-a-edit-course.component.css']
})
export class PAEditCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#info').click(function () {
      $('#info').addClass("text-red-600 bg-white border-b-4 border-blue-300 ");
      $('#pic').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#video').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#des').removeClass("text-red-600 bg-white border-b-4 border-blue-300");

      $('.information-tab').removeClass(" hidden");
      $('.picture-tab').addClass(" hidden");
      $('.video-tab').addClass("  hidden");
      $('.description-tab').addClass("hidden");
    });

    $('#pic').click(function () {
      $('#info').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#pic').addClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#video').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#des').removeClass("text-red-600 bg-white border-b-4 border-blue-300");

      $('.information-tab').addClass("hidden");
      $('.picture-tab').removeClass("hidden");
      $('.video-tab').addClass("hidden");
      $('.description-tab').addClass("hidden");
    });

    $('#video').click(function () {
      $('#info').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#pic').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#video').addClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#des').removeClass("text-red-600 bg-white border-b-4 border-blue-300");

      $('.information-tab').addClass("hidden");
      $('.picture-tab').addClass("hidden");
      $('.video-tab').removeClass("hidden");
      $('.description-tab').addClass("hidden");
    });

    $('#des').click(function () {
      $('#info').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#pic').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#video').removeClass("text-red-600 bg-white border-b-4 border-blue-300");
      $('#des').addClass("text-red-600 bg-white border-b-4 border-blue-300");

      $('.information-tab').addClass("hidden");
      $('.picture-tab').addClass("hidden");
      $('.video-tab').addClass("hidden");
      $('.description-tab').removeClass("hidden");
    });
  }

}
