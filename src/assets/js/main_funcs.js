var news_elem = new News({
	elem: document.getElementById('close_news_btn'),
	news_window: document.getElementsByClassName('news_window')[0],
	reload_btn: document.getElementById('news_reload'),
	news_box: document.getElementsByClassName('news_box')[0],
	news_desc: document.getElementsByClassName('news_desc')[0],
	publish: document.getElementById('publish'),
	news_read:document.getElementById('news_read')
});

function News(options){
	var elem = options.elem;
	var news_window = options.news_window;
	var reload_btn = options.reload_btn;
	var news_box = options.news_box;
	var news_desc = options.news_desc;
	var publish = options.publish;
	var news_read = options.news_read;

	news_reload.onclick = function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "/file", true);
		xhr.send("");

		xhr.onreadystatechange = function () {
			if (xhr.status != 200) {
				console.log("status " + xhr.status);
				return;
			}
			if (xhr.readyState != 4) {
				console.log("state " + xhr.readyState);
				return;
			}
			
			var allText = xhr.responseText;
			var objArray = [];
			var arrOfItems = allText.split("{");

			for (var i = 0; i < arrOfItems.length; i++) {
				arrOfItems[i] = arrOfItems[i].replace('}','');
				var supArr = arrOfItems[i].split('","');
				var link, name, obj;
				link = supArr[0];
				name = supArr[1];
				obj = {link: link,
						name: name};
				objArray.push(obj);
			}

			var ul = document.createElement('ul');
			ul.className = 'news_reload_ul';
			news_desc.innerHTML = '';
			news_desc.appendChild(ul);

			for (var i = 1; i < objArray.length; i++) {
				var li = document.createElement('li');
				var a = document.createElement('a');
				li.className = 'news_reload_li';
				a.className = 'news_reload_link';
				a.setAttribute('href', objArray[i]['link'].replace('"link":"',''));
				a.innerHTML = objArray[i]['name'].replace('name":"', '').replace('"','');
				ul.appendChild(li);
				li.appendChild(a);
			}
		}
	}

	news_read.onclick = function () {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/scrape", true);
		xhr.send("");
	}
}
