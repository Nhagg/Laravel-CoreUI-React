<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="/img/title.ico">
    <link rel="shortcut icon" href="/img/title.ico">

    <link href="/css/app.css?v=1.0" rel="stylesheet">
    <link href="/css/top-themes.css?v=1.0" rel="stylesheet">

    {{--font-awesome css--}}
    {{--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">--}}
    {{--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/v4-shims.css">--}}
    {{--<script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"></script>--}}
    {{--<script defer src="https://use.fontawesome.com/releases/v5.7.2/js/v4-shims.js"></script>--}}
    <link href="/css/font-awesome-v51.css" rel="stylesheet">
    <script defer src="/js/font-awesome-v51.js"></script>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Topica Themes</title>

    <!-- Styles -->

</head>
<body class="header-fixed sidebar-fixed top-themes">
    <!-- Application -->
    <div id="root"></div>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
