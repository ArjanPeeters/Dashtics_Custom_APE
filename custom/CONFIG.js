var config = {};
config['domoticz_ip'] = 'http://192.168.2.3:8080';
config['app_title'] = 'PeeterSmit';
config['domoticz_refresh'] = '60';
config['dashticz_refresh'] = '360';
config['default_news_url'] = 'http://www.nu.nl/rss/algemeen';
config['news_scroll_after'] = '7';
config['standby_after'] = 0;
config['auto_swipe_back_to'] = 1;
config['auto_swipe_back_after'] = '30';
config['auto_slide_pages'] = 0;
config['slide_effect'] = 'slide';
config['language'] = 'nl_NL';
config['timeformat'] = 'DD-MM-YY HH:mm';
config['calendarformat'] = 'dd DD.MM HH:mm';
config['calendarlanguage'] = 'en_US';
config['calendarurl'] = 0;
config['boss_stationclock'] = 'RedBoss';
config['gm_api'] = 0;
config['gm_zoomlevel'] = 0;
config['gm_latitude'] = 0;
config['gm_longitude'] = 0;
config['wu_api'] = 'af52b020647c1bc1';
config['wu_city'] = 'Haarlem';
config['wu_name'] = 0;
config['wu_country'] = 'NL';
config['idx_moonpicture'] = 0;
config['switch_horizon'] = 0;
config['host_nzbget'] = 0;
config['spot_clientid'] = '387aa87485614002b831c95578969df2';
config['selector_instead_of_buttons'] = 0;
config['auto_positioning'] = 0;
config['use_favorites'] = 1;
config['last_update'] = 0;
config['hide_topbar'] = 1;
config['hide_seconds'] = 1;
config['hide_seconds_stationclock'] = 0;
config['use_fahrenheit'] = 0;
config['use_beaufort'] = 0;
config['translate_windspeed'] = 1;
config['static_weathericons'] = 1;
config['hide_mediaplayer'] = 0;
config['slider_timeout'] = 1000; // 1 sec.

var buttons = {};
buttons.buienradar = {
  key: 'buienradar',
  width:12,
  isimage:true,
  refreshimage:30000,
  image: 'http://api.buienradar.nl/image/1.0/RadarMapNL?w=300&h=300',
  url: 'http://www.buienalarm.nl/widget/graphic?lat=52.38084&lon=4.63683&title=Haarlem&color=4395c7'
};

/*buttons.webcam = {
  width: 12,
  isimage: true,
  refresh: 2000,
  image: 'http://192.168.2.7:8081/Cam/cam_pic.php'
}
*/
// Scenes
var blocks = {};

blocks['s2'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-power-off'
}; // Alles uit

blocks['s3'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-television'
}; // TV kijken

blocks['s4'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-cutlery'
}; // Aan tafel

blocks['s5'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-toggle-on'
}; // Alles Aan

blocks['s6'] = {
  width: 12,
  hide_data: true,
  icon: 'fa-fire'
}; // Koken

// Schakelaars

blocks[17] = {
  width: 12,
  hide_data: true
}; // Lichtkoof RGBW

blocks[51] = {
  width: 12,
  hide_data: true
}; // tafel

blocks[65] = {
  width: 12,
  hide_data: true
}; // Wand lampen

blocks[81] = {
  width: 12,
  hide_data: true
}; // schemer lampen

blocks[102] = {
  width: 12,
  hide_data: true
}; // Eiland

// sensoren
blocks[125] = {
  width: 12,
  hide_data: true
};

blocks[130] = {
  width: 12,
  hide_data: true
};

blocks[135] = {
  width: 12,
  hide_data: true
};

blocks[140] = {
  width: 12,
  hide_data: true
};

blocks[145] = {
  width: 12,
  hide_data: true
};

blocks[150] = {
  width: 12,
  title: '',
  icon: 'fa-music fa-x2'
}; //radio

blocks[154] = {
  width: 12,
  title: '',
  icon: 'fa-sign-out'
} //aanwezig



// titels
blocks['blocktitle_1'] = {
  type: 'blocktitle',
  title: 'Scenes'
};

blocks['blocktitle_2'] = {
  type: 'blocktitle',
  title: 'Schakelaars'
};

blocks['blocktitle_3'] = {
  type: 'blocktitle',
  title: 'Sensors'
};

// kalenders
var calendars = {};
calendars.business = { maxitems: 5, url: 'https://calendar.google.com/calendar/', icalurl: 'https://calendar.google.com/calendar/' };
calendars.private = { maxitems: 5, icalurl: 'https://cors-anywhere.herokuapp.com/https://calendar.google.com/calendar/' };

// Camera



//kolommen
var columns = {};
columns[1] = {
  width: 3,
  blocks: [
    'blocktitle_1',
    's5',
    's3',
    's4',
    's6',
    's2',
    150
  ]
};

columns[2] = {
  width: 6,
  blocks: [
    'blocktitle_2',
    81,
    51,
    65,
    102,
    17
  ]
};

columns[3] = {
  width: 3,
  blocks: [
    'blocktitle_3',
    125,
    130,
    135,
    140,
    145,
    154
  ]
};

columns[4] = {
  width: 4,
  blocks: [
    'clock',
    'sunrise',
    buttons.buienradar
  ]
};

columns[5] = {
  width: 8,
  blocks: [
    'currentweather_big',
    'weather',
    buttons.webcam
  ]
};

columns[6] = {
  Width: 4,
  blocks: [
    'stationsclock',
    buttons.buienradar
  ]
};

columns[7] = {
  width: 8,
  blocks: [
    's2',
    'blocktitle_3',
    125,
    130,
    135,
    140,
    145
  ]
};


var screens = {}

//screens['slaapkamer'] = {}
//screens['slaapkamer']['maxwidth'] = 1280;
//screens['slaapkamer']['maxheight'] = 800;
//screens['slaapkamer'][1] = {}
//screens['slaapkamer'][1]['columns'] = [6,7]

screens['default'] = {}
screens['default']['maxwidth'] = 1920;
screens['default']['maxheight'] = 1200;
screens['default'][1] = {}
screens['default'][1]['columns'] = [1,2,3]
screens['default'][2] = {}
screens['default'][2]['columns'] = [4,5]
