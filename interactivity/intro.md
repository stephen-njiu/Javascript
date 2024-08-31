## Using Plugins and Essential Steps
Adding plugins to your project, configuring them, and learning how to use them still takes some work and effort.

But not nearly as much as writing all the code yourself!

Many of the larger, sophisticated plugins require five steps to get them to work.
<b>Step 1</b> Use markup indicated by the plugin documentation.
<b>Step 2 </b> Make sure jQuery is linked. Decide ifyou are goint to put your scripts at the top or bottom of the page
<b>Step 3</b> Link the plugin file. There may be a compressed and uncompressed version. Use the compressed one.
<b>Step 4</b> Link the plugin's CSS file. This is usually included to provide syles for the elements the plugin uses to make the interface look right and work properly.
<b>Step 5</b> Initialize the setup of the plugin in your own script tag, or on your own linked JS file. Often you can set additionaly options when the function is initialized. Make sure this script loads last.

# Gotchas and Rookie Mistakes

1. `Multiple copies of jQuery!` Only load the jQuery library once. You may have multiple plugins, but you should only load one copy of the jQuery library, which is used by all plugins.
2. `File management`. Be sure all files are saved in teh project in a place that makes sense and they are properly linked.
3. `Top of the page v.s. bottom of the page`. Make user you are placing the plugin scripts in the correct place. Soome may require you to load them at the top of your page.
4. `Document.ready(), window.load() or window.on('load',function(){})`: Be sure to use these function properly.
5. `Override CSS on your stylesheet`. If you want to customize the look of the plugin (and you should), put rules that override the styles they have set on their CSS file on your CSS file and make sure your CSS file loads last.

# Beware the plugin

1. Plugins can bloat your projects with lots of additional code that you maight not need.
2. Without modification, plugins can make your site look generic.
3. Plugins can turn us into lazy designers, looking for a quick fix, rather than the right one.
4. Plugins can be poorly written and have all sorts of bugs built into them.
5. Plugins take time to research and test.