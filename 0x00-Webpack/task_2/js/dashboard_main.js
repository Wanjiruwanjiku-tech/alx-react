import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';

document.addEventListener('DOMContentLoaded', function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;

    function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }
    $('#clickButton').on('click', debounce(updateCounter, 300));

});