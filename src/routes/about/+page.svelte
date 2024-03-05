<div class="flex flex-col overflow-y-auto h-3/4">
	<h1 class="text-center text-3xl font-bold break-words w-full">About</h1>
	<p class="text-left pl-5 pr-5 pt-3">
		This web application was created for an AP Research Project. The goal of the application was to
		test the correlation between web application performance and students' previous performance. <br
		/>
		Essentailly, would students with lower GPAs be more affected than those with higher GPAs by web
		application performance or vice versa. <br /> Using SvelteKit, Drizzle ORM, Lucia and Turso, this
		application creates database OAuth Sessions, and uses middleware to control which version of the
		test the user took the test on (randomly generated).
	</p>
	<p class="pl-5 pr-5 pt-3">
		After the experiment concluded, the web application was altered to be more suitable to the
		public as a demo of sorts. Now there is the ability to switch between which version of the test,
		and the existance of this about page.
	</p>
	<h2 class="text-center text-2xl font-semibold">List of Features</h2>
	<ul class="pl-5">
		<li>SvelteKit, Turso, Drizzle, Lucia, Tailwind, Cloudflare Pages/Workers</li>
		<li>Google OAuth 2.0 with Database Sessions</li>
		<li>Persistent 15 minute timer</li>
		<li>Regex form validation</li>
		<li>100 Lighthouse Score on optimized test and 40 Lighthouse Score on Bottlenecked Test</li>
	</ul>
	<a class="text-center font-semibold" href="/">Return Home or to the Test</a>
	<a class="text-center font-semibold" href="https://github.com/WittySmirk/slugsalt"
		>Github Repository</a
	>
	<h2 class="text-center text-2xl font-semibold pt-3">
		Score / 14 vs Student Group and Version of Test
	</h2>
	<img
		class="pl-5 pr-5 text-center w-full h-full"
		src="/chart.png"
		alt="Graph of Student's Score vs Their Group (Bottled High GPA, Bottled Low GPA, Non Bottled High GPA and Non Bottle Low GPA)"
	/>
</div>
