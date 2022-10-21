export default {
	install(Vue) {
		Vue.directive('table-resize', {
			bind(table, binding, vnode) {
				let thEl;
				let startX;

				table.style.userSelect = 'none';

				table.querySelectorAll('table th').forEach((th) => {
					th.style.position = 'relative';

					let grip = document.createElement('div');
					grip.innerHTML = '&nbsp;';
					grip.style.top = 0;
					grip.style.right = 0;
					grip.style.bottom = 0;
					grip.style.width = '5px';
					grip.style.position = 'absolute';
					grip.style.cursor = 'col-resize';

					grip.addEventListener('mousedown', (e) => {
						thEl = th;
						startX = e.pageX - th.offsetWidth;
					});

					th.appendChild(grip);
				});

				let emit = (name, data = {}) => {
					let handlers = (vnode.data && vnode.data.on) || (vnode.componentOptions && vnode.componentOptions.listeners);

					if (handlers && handlers[name]) {
						handlers[name](data);
					}
				}

				document.addEventListener('mousemove', (e) => {
					if (thEl) {
						thEl.style.width = e.pageX - startX + 'px';
					}
				});

				document.addEventListener('mouseup', () => {
					if (thEl) {
						emit('onAfterResize');
					}

					thEl = null;
				});
			}
		});
	}
}