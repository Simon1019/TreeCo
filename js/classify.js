var controls = document.getElementById("segmentedControls");
var contents = document.getElementById("segmentedControlContents");
var html = [];
var i = 0,
	j = 0,
	m = ["Price", "Height", "Type", "..."],
	n = [{
			"list": "Price",
			"content": [{
					"title": '$1 - $100',
					"wareList": [{
						"image": "images/t1.jpg",
						"name": "T1"
					}]
				},
				{
					"title": '$101 - $200',
					"wareList": [{
						"image": "images/t2.jpg",
						"name": "T2"
					}]
				},
				{
					"title": '>$300',
					"wareList": [{
							"image": "images/t3.jpg",
							"name": "T3"
						},
						{
							"image": "images/t4.jpg",
							"name": "T4"
						}
					]
				}
			]
		},
		{
			"list": "Height",
			"content": [{
					"title": '1m - 10m',
					"wareList": [{
							"image": "images/t2.jpg",
							"name": "T2"
						},
						{
							"image": "images/t3.jpg",
							"name": "T3"
						}
					]
				},
				{
					"title": '10m - 15m',
					"wareList": [{
						"image": "images/t4.jpg",
						"name": "T4"
					}]
				},
				{
					"title": '>15m',
					"wareList": [{
						"image": "images/t1.jpg",
						"name": "T1"
					}]
				}
			]
		},
		{
			"list": "Type",
			"content": [{
					"title": 'Type 1',
					"wareList": [{
							"image": "images/t1.jpg",
							"name": "T1"
						},
						{
							"image": "images/t2.jpg",
							"name": "T2"
						}, 
						{
							"image": "images/t3.jpg",
							"name": "T3"
						}
					]
				},
				{
					"title": 'Type 2',
					"wareList": [{
						"image": "images/t4.jpg",
						"name": "T4"
					}]
				}
			]
		}	
	];
for(; i < n.length; i++) {
	html.push('<a class="mui-control-item" href="#content' + i + '">' + n[i].list + '</a>');
}
controls.innerHTML = html.join('');
var htmlContent = '';

for(i = 0; i < n.length; i++) {
	htmlContent += '<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">';
	for(j = 0; j < n[i].content.length; j++) {
		htmlContent += '<li class="mui-table-view-cell"><div class="title-show">' + n[i].content[j].title + '<div class="lookAll"></div></div><ul class="ul-show">'
		for(var q = 0; q < n[i].content[j].wareList.length; q++) {
			htmlContent += '<li class="li-show"><div class="wareImg"><img src="' + n[i].content[j].wareList[q].image + '" /></div><div class="wareName">' + n[i].content[j].wareList[q].name + '</div></li>'
		}

		htmlContent += '</ul></li>'
	}
	htmlContent += '</ul></div>';
}
contents.innerHTML = htmlContent;
//默认选中第一个
controls.querySelector('.mui-control-item').classList.add('mui-active');
contents.querySelector('.mui-control-content').classList.add('mui-active');

$("body").on("tap", ".li-show", function() {
	mui.openWindow({
		url: '../shopdetail/shopdetail.html',
		id: 'shopdetail.html',
		styles: {
			top: '0px',
			bottom: '0px',
		},
		extras: {
			name: 'aries',
			age: '18',

		},
		show: {
			autoShow: true,

			aniShow: 'zoom-fade-out',
			duration: '500'
		},
		waiting: {
			autoShow: true,
			title: '',
			options: {
				width: '50px',
				height: '50px',
			}
		}
	});
})

function plusReady() {

	var ws = plus.webview.currentWebview();
	var h = plus.webview.getWebviewById(plus.runtime.appid);
	mui.fire(h, 'shopping');
}

$("body").on("touchstart", "#shopCart", function() {
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener('plusready', plusReady, false);
	}
})