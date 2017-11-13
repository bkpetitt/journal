console.log('journal - routes/journals.js');
var express = require('express');
var router = express.Router();


let
    refperiodlist = [
        { "refcode": "0000", "refperiod": "All Day", "refname": "0000-All Day" },
        { "refcode": "0030", "refperiod": "Early AM", "refname": "0030-Early AM" },
        { "refcode": "0100", "refperiod": "Early AM", "refname": "0100-Early AM" },
        { "refcode": "0130", "refperiod": "Early AM", "refname": "0130-Early AM" },
        { "refcode": "0200", "refperiod": "Early AM", "refname": "0200-Early AM" },
        { "refcode": "0230", "refperiod": "Early AM", "refname": "0230-Early AM" },
        { "refcode": "0300", "refperiod": "Early AM", "refname": "0300-Early AM" },
        { "refcode": "0330", "refperiod": "Early AM", "refname": "0330-Early AM" },
        { "refcode": "0400", "refperiod": "Early AM", "refname": "0400-Early AM" },
        { "refcode": "0430", "refperiod": "Early AM", "refname": "0430-Early AM" },
        { "refcode": "0500", "refperiod": "Early AM", "refname": "0500-Early AM" },
        { "refcode": "0530", "refperiod": "Early AM", "refname": "0530-Early AM" },
        { "refcode": "0600", "refperiod": "Morning", "refname": "0600-Morning" },
        { "refcode": "0630", "refperiod": "Morning", "refname": "0630-Morning" },
        { "refcode": "0700", "refperiod": "Morning", "refname": "0700-Morning" },
        { "refcode": "0701", "refperiod": "Breakfast", "refname": "0701-Breakfast" },
        { "refcode": "0730", "refperiod": "Morning", "refname": "0730-Morning" },
        { "refcode": "0800", "refperiod": "Morning", "refname": "0800-Morning" },
        { "refcode": "0830", "refperiod": "Morning", "refname": "0830-Morning" },
        { "refcode": "0900", "refperiod": "Morning", "refname": "0900-Morning" },
        { "refcode": "0930", "refperiod": "Morning", "refname": "0930-Morning" },
        { "refcode": "1000", "refperiod": "Morning", "refname": "1000-Morning" },
        { "refcode": "1030", "refperiod": "Morning", "refname": "1030-Morning" },
        { "refcode": "1100", "refperiod": "Midday", "refname": "1100-Midday" },
        { "refcode": "1130", "refperiod": "Midday", "refname": "1130-Midday" },
        { "refcode": "1200", "refperiod": "Noon", "refname": "1200-Noon" },
        { "refcode": "1201", "refperiod": "Lunch", "refname": "1201-Lunch" },
        { "refcode": "1230", "refperiod": "Midday", "refname": "1230-Midday" },
        { "refcode": "1300", "refperiod": "Midday", "refname": "1300-Midday" },
        { "refcode": "1330", "refperiod": "Afternoon", "refname": "1330-Afternoon" },
        { "refcode": "1400", "refperiod": "Afternoon", "refname": "1400-Afternoon" },
        { "refcode": "1430", "refperiod": "Afternoon", "refname": "1430-Afternoon" },
        { "refcode": "1500", "refperiod": "Afternoon", "refname": "1500-Afternoon" },
        { "refcode": "1530", "refperiod": "Afternoon", "refname": "1530-Afternoon" },
        { "refcode": "1600", "refperiod": "Afternoon", "refname": "1600-Afternoon" },
        { "refcode": "1630", "refperiod": "Afternoon", "refname": "1630-Afternoon" },
        { "refcode": "1700", "refperiod": "Afternoon", "refname": "1700-Afternoon" },
        { "refcode": "1730", "refperiod": "Afternoon", "refname": "1730-Afternoon" },
        { "refcode": "1800", "refperiod": "Evening", "refname": "1800-Evening" },
        { "refcode": "1801", "refperiod": "Dinner", "refname": "1801-Dinner" },
        { "refcode": "1830", "refperiod": "Evening", "refname": "1830-Evening" },
        { "refcode": "1900", "refperiod": "Evening", "refname": "1900-Evening" },
        { "refcode": "1930", "refperiod": "Evening", "refname": "1930-Evening" },
        { "refcode": "2000", "refperiod": "Evening", "refname": "2000-Evening" },
        { "refcode": "2030", "refperiod": "Evening", "refname": "2030-Evening" },
        { "refcode": "2100", "refperiod": "Evening", "refname": "2100-Evening" },
        { "refcode": "2130", "refperiod": "Evening", "refname": "2130-Evening" },
        { "refcode": "2200", "refperiod": "Evening", "refname": "2200-Evening" },
        { "refcode": "2230", "refperiod": "Evening", "refname": "2230-Evening" },
        { "refcode": "2300", "refperiod": "Evening", "refname": "2300-Evening" },
        { "refcode": "2330", "refperiod": "Evening", "refname": "2330-Evening" },
        { "refcode": "2400", "refperiod": "Midnight", "refname": "2400-Midnight" }
    ];

console.log(refperiodlist);

for (i = 0; i < refperiodlist.length; i++) {
    var pname = refperiodlist[i].refname;
    var listhld = '<option value="' + pname + '"> </option>  '
    var listitem = listitem + listhld
}

console.log(listitem);