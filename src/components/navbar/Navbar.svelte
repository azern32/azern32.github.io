<div class="navbar bg-base-100 rounded-md">
	<div class="flex-none lg:hidden">
		<label for="my-drawer-3" class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</label>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="text-2xl font-extrabold">
			<span class="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 to-violet-500">
				WeebSlime
			</span>
		</div>
	</div>
	<div class="flex-none hidden lg:block">
		<ul class="menu menu-horizontal">
			<slot />
		</ul>
	</div>
</div>
