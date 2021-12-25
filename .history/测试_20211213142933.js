let ul = document.querySelector('ul');
				let li = document.querySelectorAll('li');

        // 2、复制 ul 第一个子节点
        let lili = ul.children[0].cloneNode(true);
				// 或者用这个：let lili = li[0].cloneNode(true);

				// 3、把刚刚复制的子节点添加到 ul 的最后面
				ul.appendChild(lili);