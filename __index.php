<?php
// список языков
$sites = array(
    "en" => "http://eiffels.ai/en/",
    "fi" => "http://eiffels.ai/fi/",
    "ru" => "http://eiffels.ai/ru/",
);

// список локальных языков (например, локальный сервер доступен по адресу "localhost")
$localSites = array(
    "en" => "http://localhost/en/",
    "fi" => "http://localhost/fi/",
    "ru" => "http://localhost/ru/",
);

// определяем текущий хост
$host = $_SERVER['HTTP_HOST'];

// определяем язык браузера
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

// проверяем, является ли текущий хост локальным
$isLocal = $host === 'localhost';

// выбираем правильный массив ссылок в зависимости от среды
$targetSites = $isLocal ? $localSites : $sites;

// проверяем, существует ли язык в массиве
if (!array_key_exists($lang, $targetSites)) {
    $lang = 'en';
}

// перенаправление на соответствующий URL
header('Location: ' . $targetSites[$lang]);
exit;
?>
