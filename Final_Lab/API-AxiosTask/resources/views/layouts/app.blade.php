<!DOCTYPE html>
<html lang="en">

<head>
</head>

<body>
    <div id="navbar"></div>
    @yield('content')
    @viteReactRefresh
    @vite(['resources/js/app.js', 'resources/css/app.css'])
</body>

</html>
