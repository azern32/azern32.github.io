<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col p-3">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<div class="p-4 w-60 h-full bg-base-200">
			<slot name="sidebar" />
		</div>
	</div>
</div>
